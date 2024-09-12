'use client';
import React, { useEffect, useState } from 'react';
import axiosIns from '../../../store/api/axiosIns';

import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import { FormControl } from '@mui/material';
import axios from 'axios';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  padding: 4,
};

interface Image {
  url: string;
}

interface Area {
  id: number;
  Name: string;
  Address: string;
  Image: Image;
  description: string;
  Area_type: number;
}

interface EditAreaFormProps {
  area: Area;
  open: boolean;
  onClose: () => void;
  onUpdateSuccess: () => void;
}

interface Location {
  Id: string;
  Name: string;
  Districts: District[];
}

interface District {
  Id: string;
  Name: string;
  Wards: Ward[];
}

interface Ward {
  Id: string;
  Name: string;
}

const EditAreaForm: React.FC<EditAreaFormProps> = ({
  area,
  open,
  onClose,
  onUpdateSuccess,
}) => {
  const [imagePreview, setImagePreview] = useState<any>(area.Image?.url || '');
  const [name, setName] = useState(area.Name);
  const [fullAddress, setFullAddress] = useState(area.Address);
  const [image, setImage] = useState<File | any>(area.Image.url);
  const [description, setDescription] = useState(area.description);
  const [areaType, setAreaType] = useState(area.Area_type);
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState<Location[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [selectedWard, setSelectedWard] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem('accessToken');
    if (!token) {
      toast.error('No access token found. Please log in again.');
      return;
    }

    const headers = {
      Authorization: token,
    };

    const formData = new FormData();
    formData.append('Name', name);
    formData.append('Address', fullAddress);
    if (image) {
      formData.append('Image', image);
    }
    formData.append('description', description);
    formData.append('Area_type', areaType.toString());

    try {
      setLoading(true);
      const response = await axiosIns.put(
        `/area/edit/${area.id}`,
        formData,
        {
          headers,
        }
      );
      if (response.status === 200) {
        toast.success('Cập nhật thành công');
        onUpdateSuccess(); // Notify parent of success
        onClose(); // Close the modal
      } else {
        toast.error('Failed to update area');
      }
    } catch (error) {
      toast.error('Failed to update area');
      console.error('Failed to update area:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Location[]>(
          'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json'
        );
        setCities(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const cityName =
      cities.find((city) => city.Id === selectedCity)?.Name ||
      `${area.Address}`;
    const districtName =
      districts.find((district) => district.Id === selectedDistrict)?.Name ||
      '';
    const wardName = wards.find((ward) => ward.Id === selectedWard)?.Name || '';
    setFullAddress(`${cityName} ${districtName} ${wardName} ${address}`);
  }, [
    cities,
    selectedCity,
    districts,
    selectedDistrict,
    wards,
    selectedWard,
    address,
  ]);

  const handleCityChange = (
    event: any | React.ChangeEvent<{ value: unknown }>
  ) => {
    const cityId = event.target.value as string;
    setSelectedCity(cityId);
    setDistricts(cities.find((city) => city.Id === cityId)?.Districts || []);
    setSelectedDistrict('');
    setSelectedWard('');
    setWards([]);
  };

  const handleDistrictChange = (
    event: any | React.ChangeEvent<{ value: unknown }>
  ) => {
    const districtId = event.target.value as string;
    setSelectedDistrict(districtId);
    const selectedCityObj = cities.find((city) => city.Id === selectedCity);
    setWards(
      selectedCityObj?.Districts.find((district) => district.Id === districtId)
        ?.Wards || []
    );
    setSelectedWard('');
  };

  const handleWardChange = (
    event: any | React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedWard(event.target.value as string);
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-title"
          variant="h4"
          component="h1"
          className="pt-10"
        >
          Edit Danh Sách {area.Name}
        </Typography>
        <form onSubmit={handleUpdate}>
          <TextField
            fullWidth
            label="Name"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Địa chỉ "
              value={fullAddress}
              variant="outlined"
              fullWidth
              id="address"
              name="address"
              onChange={(e) => setFullAddress(e.target.value)}
              margin="normal"
              required
              InputProps={{ readOnly: true }}
            />
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormControl sx={{ flex: 1 }}>
                <Select
                  labelId="city-label"
                  value={selectedCity}
                  onChange={handleCityChange}
                  displayEmpty
                >
                  <MenuItem value="">Chọn tỉnh thành</MenuItem>
                  {cities.map((city) => (
                    <MenuItem key={city.Id} value={city.Id}>
                      {city.Name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ flex: 1 }} disabled={!selectedCity}>
                <Select
                  labelId="district-label"
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
                  displayEmpty
                >
                  <MenuItem value="">Chọn quận huyện</MenuItem>
                  {districts.map((district) => (
                    <MenuItem key={district.Id} value={district.Id}>
                      {district.Name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ flex: 1 }} disabled={!selectedDistrict}>
                <Select
                  labelId="ward-label"
                  value={selectedWard}
                  onChange={handleWardChange}
                  displayEmpty
                >
                  <MenuItem value="">Chọn phường xã</MenuItem>
                  {wards.map((ward) => (
                    <MenuItem key={ward.Id} value={ward.Id}>
                      {ward.Name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <TextField
              label="Nhập địa chỉ cụ thể"
              value={address}
              onChange={handleAddressChange}
              variant="outlined"
              fullWidth
            />
          </Box>

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 2 }}>
            <TextField
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              fullWidth
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{ maxWidth: '100px', maxHeight: '100px' }}
              />
            )}
          </Box>

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
            required
          />

          <FormControl fullWidth sx={{ mt: 2 }}>
            <Select
              value={areaType}
              onChange={(e) => setAreaType(Number(e.target.value))}
              displayEmpty
            >
              <MenuItem value={0}>Chọn loại </MenuItem>
              <MenuItem value={1}>rau củ</MenuItem>
              <MenuItem value={2}>hoa quả</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button onClick={onClose} variant="contained" color="primary">
              Đóng
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              endIcon={loading ? <CircularProgress size={20} /> : null}
            >
              Cập Nhật
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default EditAreaForm;
