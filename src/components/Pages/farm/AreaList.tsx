'use client';
import React, { useState, useEffect, useMemo } from 'react';
import axiosIns from '../../../store/api/axiosIns';
import Image from 'next/image'

import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import EditAreaForm from './EditAreaForm';
import SearchArea from '../seacharea/searcharea';
import Createfram from './createfram';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import AreaStatusToggle from './changeStatus';
import { styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import { AppDispatch, useAppDispatch } from '@/store/store';
import { useDispatch } from 'react-redux';
import { actionListArea } from '@/store/features/todos/ListAreaSlice';
import isAuth from '@/middleware/isAuth';

interface Image {
  url: string;
}

interface Area {
  id: number;
  User_id: number;
  Area_type: number;
  Name: string;
  Address: string;
  Image: Image;
  description: string;
  Area_status: number;
}
const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));


const AreaList: React.FC = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [areas, setAreas] = useState<Area[]>([]);
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);
  const [open, setOpen] = useState(false);
  const [filteredAreas, setFilteredAreas] = useState<Area[]>([]);
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    fetchAreas();
  }, [isUpdate]);

  const fetchAreas = async () => {
    try {
 dispatch(actionListArea()).then((res)=>{
      if (res.payload ) {
      }
    })

    } catch (error) {
      toast.error('chưa đăng nhập');
      console.error('Error fetching areas:', error);
    }
  };

  const handleOpen = (area: Area) => {
    setSelectedArea(area);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedArea(null);
  };

  const handleUpdateSuccess = () => {
    fetchAreas();
    setIsUpdate((prev) => !prev);
  };
  const t = useTranslations('a');

  const columns: GridColDef[] = [

    // {
    //   field: 'ID',
    //   headerName: `${t('id')}`,
    //   flex: 0.5,
    //   minWidth: 50,
    // },

    {
      field: 'name',
      headerName: `${t('Tên vùng')}`,
      flex: 1,
      minWidth: 200,
      renderCell: (params) => {
        return (
          <div className="flex w-full">
              <LightTooltip  title={params.row.Name} placement="top" followCursor>
            <div className="w-4/12">{params.row.Name}</div>
            </LightTooltip>
            <div className="text-green-500 w-8/12 flex items-center justify-end pr-3">
              <img
                className="rounded-2xl"
                src={params.row.Image}
                alt={params.row.Image}
                width={40}
                height={20}
              />
            </div>
          </div>
        );
      },
    },
    {
      field: 'Area_type',
      headerName: `${t('Loại')}`,
      flex: 1,
      minWidth: 150,
      renderCell: (params) =>
        params.row.Area_type === 1 ? (
          <div className="text-green-500">{t('Vùng nuôi trồng')}</div>
        ) : (
          <div className="text-green-600">{t('Vùng chế biến')}</div>
        ),
    },
    {
      field: 'Area_status',
      headerName: `${t('Trạng Thái')}`,
      flex: 1,
      minWidth: 150,
      renderCell: (params) =>
        params.row.Area_status === 'In production' ? (
          <div className="text-green-500">{t('Hoạt động')}</div>
        ) : (
          <div className="text-red-500">{t('Ngừng hoạt động')}</div>
        ),
    },
    {
      field: 'Address',
      headerName: `${t('Địa chỉ')}`,
      flex: 2,
      minWidth: 300,
      renderCell: (params) =>

      (<div>
         <LightTooltip  title={params.row.Address} placement="top" followCursor>
        {params.row.Address}
</LightTooltip>
      </div>

        ),
    },
    {
      field: 'sum',
      headerName: `${t('Sản phẩm')}`,
      flex: 1,
      minWidth: 150,
      renderCell: () => (
        <div className="flex  items-center  ">
          <Link href="/listproduct">{t('Xem sản phẩm')}</Link>
        </div>
      ),
    },
    {
      field: 'action',
      headerName: `${t('Hành Động')}`,
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <div className="pt-3">
          <div className="flex space-x-2 ">
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOpen(params.row)}
            >
              Edit
            </Button>
            <AreaStatusToggle
              setIsUpdate={setIsUpdate}
              areaId={params.row.id}
              initialStatus={params.row.Area_status === 1}
            />
          </div>
        </div>
      ),
    },
  ];

  const rows = useMemo(
    () =>
      filteredAreas.map((area,index) => ({
        id: area.id,
        Name: area.Name,
        Area_type: area.Area_type,
        Area_status: area.Area_status,
        Address: area.Address,
        Image: area?.Image?.url,
        description: area.description,
      })),
    [filteredAreas]
  );

  const handleSearchResults = (results: Area[]) => {
    setFilteredAreas(results);
  };

  return (
    <div className="relative"

      >
       <div>
         <Image
        src="/img/home/Group48096598.png"
        alt="err"
       layout="fill"
      />
       </div>
      <div className="mx-auto w-11/12 md:w-10/12">
        <div className="flex flex-col md:flex-row justify-between py-10">
          <h1 className="text-2xl md:text-4xl text-green-500">
            {t('Vùng sản xuất')}
          </h1>
          <div className="mt-4 md:mt-0 flex gap-4 md:gap-10">
            <Createfram />
          </div>
        </div>
        <div className="pb-10">
          <SearchArea onSearchResults={handleSearchResults} />
        </div>
      </div>
      <div className="w-11/12 md:w-10/12 mx-auto">
        <DataGrid
          sx={{
//             backgroundColor: '#08344f',
//             height: '100%',
//  '& .MuiDataGrid-cell': {
//             color: 'red',

//           },
            '& .MuiDataGrid-columnHeaders': {
              color: '#000',
            backgroundColor: '#fff',

              fontSize: '16px',
              lg: { fontSize: '20px' },
            },
            '& .MuiDataGrid-root': {
              fontSize: '14px',
            },

          }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                page: 0,
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5, 20]}
        />
      </div>

      {selectedArea && (
        <EditAreaForm
          area={selectedArea}
          open={open}
          onClose={handleClose}
          onUpdateSuccess={handleUpdateSuccess}
        />
      )}
    </div>
  );
};

export default AreaList;
