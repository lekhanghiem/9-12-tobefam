'use client';
import React, { useEffect, useState } from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Box,
  SelectChangeEvent,
} from '@mui/material';
import { useLocationQuery } from '@/store/features/Area/LocationRTK';
import { City, District, Ward } from '@/types/types';

const LocationSelector: React.FC<{ Address: any }> = ({ Address }) => {
  const [fullAddress, setFullAddress] = useState<string|null>(null);
  const [cities, setCities] = useState<City[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [selectedWard, setSelectedWard] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  // Fetch data using RTK query
  const { data } = useLocationQuery('');
  useEffect(() => {
    if (data) {
      setCities(data);
    }
  }, [data]);

  useEffect(() => {
    const cityName =
      cities.find((city) => city.Id === selectedCity)?.Name || '';
    const districtName =
      districts.find((district) => district.Id === selectedDistrict)?.Name ||
      '';
    const wardName = wards.find((ward) => ward.Id === selectedWard)?.Name ||
      '';
    setFullAddress(`${cityName} ${districtName} ${wardName} ${address}`);
  }, [cities, selectedCity, districts, selectedDistrict, wards, selectedWard, address]);

  const handleCityChange = (event:SelectChangeEvent<string>| React.ChangeEvent<{ value: unknown }>) => {
    const cityId = event.target.value as string;
    setSelectedCity(cityId);
    const selectedCityObj = cities.find((city) => city.Id === cityId);
    setDistricts(selectedCityObj?.Districts || []);
    setSelectedDistrict('');
    setSelectedWard('');
    setWards([]);
  };

  const handleDistrictChange = (event:React.ChangeEvent<HTMLInputElement> | SelectChangeEvent) => {
    const districtId = event.target.value as string;
    setSelectedDistrict(districtId);
    const selectedDistrictObj = districts.find((district) => district.Id === districtId);
    setWards(selectedDistrictObj?.Wards || []);
    setSelectedWard('');
  };

  const handleWardChange = (event: React.ChangeEvent<{ value: unknown }>|SelectChangeEvent) => {
    setSelectedWard(event.target.value as string);
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Địa chỉ"
        value={Address}
        variant="outlined"
        fullWidth
        id="address"
        name="address"
        margin="normal"
        required
        InputProps={{ readOnly: true }}
      />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <FormControl sx={{ flex: 1 }}>
          <InputLabel id="city-label">Chọn tỉnh thành</InputLabel>
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
          <InputLabel id="district-label">Chọn quận huyện</InputLabel>
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
          <InputLabel id="ward-label">Chọn phường xã</InputLabel>
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
  );
};

export default LocationSelector;
