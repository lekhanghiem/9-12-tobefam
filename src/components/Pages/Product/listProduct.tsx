'use client';
import React, { useState, useEffect, useCallback } from 'react';
import axiosIns from '../../../store/api/axiosIns';

import { toast } from 'react-toastify';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, CircularProgress, Snackbar, Alert } from '@mui/material';
import AreaStatusToggle from './changeproductstatus';
import EditProductForm from './productEditForm';
import RegisterProduct from './registerProduct';
import SearchProduct from './searchproduct';
import Image from 'next/image';
interface AreaStatusToggleProps {
  areaId: number;
  initialStatus: boolean;
  // setIsUpdate: any;
}

interface Image {
  url: string;
}

interface Product {
  Name: string;
  Description: string;
  Image: Image;
  product_code: string;
  Expiry_date: string; // Assuming this is a string representing the date
  Unit: string;
  Product_status: string;
  certify: Image;
  Product_date: string; // Assuming this is a string representing the date
  Product_type: number;
  Product_packing: number;
  qr_code: any;
}

type ApiResponse = {
  status: string;
  data:any;
  products: Product[];
};
const ProductList: React.FC<AreaStatusToggleProps> = ({
  areaId,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [editProduct, setEditProduct] = useState<{
    data: Product | null;
    isOpen: boolean;
  }>({
    data: null,
    isOpen: false,
  });
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {

        const token = localStorage.getItem('accessToken') || '';
        const response = await axiosIns.get<ApiResponse>(
          'product/19/list/',
          {
            headers: {
              Authorization: token,
            },
          }
        );

        if (response.data.status === 'success') {
          setProducts(response.data.data.products);
          setFilteredProducts(response.data.data.products);
          console.log(response.data.data.products,'products');
          console.log(filteredProducts,'sdasd');


        } else {
          toast.error('Failed to fetch products');
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to fetch products');
      }
    };

    fetchProducts();
  }, [isUpdate]);

  const handleEdit = useCallback((product: Product) => {
    setEditProduct({ data: product, isOpen: true });
  }, []);

  const handleCloseModal = () => {
    setEditProduct({ data: null, isOpen: false });
  };

  const updateProduct = useCallback((updatedProduct: Product) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.product_code === updatedProduct.product_code
          ? updatedProduct
          : product
      )
    );
    setIsUpdate((prev) => !prev);
  }, []);

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <CircularProgress />
  //     </div>
  //   );
  // }

  const handleSnackbarClose = () => setError(null);

  const columns: GridColDef[] = [
    { field: 'product_code', headerName: 'Product Code', width: 150 },
    { field: 'Name', headerName: 'Tên đối tượng', width: 200 , renderCell: (params) =>
      <div className=' flex justify-between gap-1'>
        <div>{params.row.Name}</div>
        <div>

          <img src={params.row.Image} alt={params.row.Image} width={50} height={50} className='rounded-3xl'/>

        </div>
      </div>
      },
    { field: 'Product_date', headerName: 'Ngày đăng kí', width: 150 },
    {
      field: 'Product_type',
      headerName: 'Loại',
      width: 130,
      renderCell: (params) =>
        params.row.Product_type === 1 ? (
          <div className="text-green-500">Vùng nuôi trồng</div>
        ) : (
          <div className="text-green-600">Vùng chế biến</div>
        ),
    },
    {
      field: 'Product_status',
      headerName: 'Trạng thái',
      width: 130,
      renderCell: (params) =>
        params.row.Product_status === 1 ? (
          <div className="text-green-500">Hoạt động</div>
        ) : (
          <div className="text-red-500">Ngừng hoạt động</div>
        ),
    },
    { field: 'Description', headerName: 'Mô tả', width: 150 },
    {
      field: 'action',
      headerName: 'Hành động',
      width: 200,
      renderCell: (params) => (
        <div className="flex space-x-2 items-center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleEdit(params.row)}
          >
            Edit
          </Button>

          <AreaStatusToggle
            product_code={params.row.product_code}
            initialStatus={params.row.Product_status}
            setIsUpdate={setIsUpdate}
          />
        </div>
      ),
    },
    {
      field: 'qr_code',
      headerName: 'QR sản phẩm',
      width: 200,
      renderCell: (params) => (
        <div className="flex justify-center  pt-2">
          <Image src={params.row?.qr_code} alt="Logo" width={40} height={40} />
        </div>
      ),
    },
  ];
  // console.log('filteredProducts', filteredProducts);
  const rows = filteredProducts?.map((product) => ({
    id: product.product_code,
    Name: product.Name,
    Description: product.Description,
    Image: product.Image.url,
    product_code: product.product_code,
    Expiry_date: product.Expiry_date,
    Unit: product.Unit,
    Product_status: product.Product_status,
    Product_date: product.Product_date,
    Product_type: product.Product_type,
    Product_packing: product.Product_packing,
    qr_code: product.qr_code,
  }));

  return (
    <div>
      <div className="flex justify-between w-10/12 mx-auto py-10">
        <h1 className="text-green-600 text-3xl ">Danh sách sản phẩm </h1>
        <div className="flex gap-5">
          <RegisterProduct />
        </div>
      </div>
      <div className="w-10/12 mx-auto ">
        <SearchProduct setFilteredProducts={setFilteredProducts} />
        <div className='w-full h-full'>
          <DataGrid
          sx={{
            backgroundColor: 'white',
            height: '100%',
            '& .MuiDataGrid-columnHeaders': {
              color: '#030303',
              fontSize: '16px',
              md: { fontSize: '20px' },
            },
            '& .MuiDataGrid-root': {
              fontSize: '14px',
            },
          }}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 20 },
              },
            }}
            pageSizeOptions={[5, 10, 20]}
          />
        </div>
      </div>
      {editProduct.isOpen && (
        <EditProductForm
          product={editProduct.data}
          isOpen={editProduct.isOpen}
          onCancel={handleCloseModal}
          onSave={updateProduct}
        />
      )}
      {error && (
        <Snackbar
          open={true}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
          <Alert onClose={handleSnackbarClose} severity="error">
            {error}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default ProductList;
