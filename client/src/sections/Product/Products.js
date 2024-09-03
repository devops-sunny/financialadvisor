import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';
import ProductForm from './ProductForm';
import DataGridBasic from '../mui/data-grid/DataGridBasic';
import Iconify from '../../components/iconify';
import { fetchProducts, deleteProduct } from '../../redux/Product/actions';
import ConfirmDialog from '../../components/animate/ConFirmDialog';

const initialValues = {
  _id: '',
  name: '',
  description: '',
  status: '',
  image: [],
  categories_id: "",
  categories_title: "",
  details: '',
  keywords: [],
  parentCategory:""
};

const Products = () => {
  const [currentRow, setCurrentRow] = useState(initialValues);
  const [productData, setProductData] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch();
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
    onConfirm: () => {},
  });

  const products = useSelector((state) => state.Product.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  useEffect(() => {
    if (products && products.length > 0) {
      const formattedData = products.map((item) => ({
        id: item?._id,
        _id: item?._id,
        name: item?.name,
        description: item?.description,
        status: item.status,
        image: item?.images,
        categories_id:item?.category?._id,
        categories_title:item?.category?.name,
        details: item?.details,
        keywords: item?.keywords.join(', '), 
        parentCategory: item?.category?.parentCategory?.name
      }));
      setProductData(formattedData);
    }
  }, [products]);


  const handleClose = () => {
    setIsModelOpen(false);
  };

  const handleClickOpen = () => {
    setCurrentRow(initialValues);
    setIsModelOpen(true);
  };

  const handleEditClick = (row) => (event) => {
    event.stopPropagation();
    setCurrentRow(row);
    setIsModelOpen(true);
  };

  const handleDeleteClick = (row) => (event) => {
    event.stopPropagation();
    setConfirmDialog({
      isOpen: true,
      title: 'Are you sure you want to delete this record?',
      subTitle: "You can't undo this operation",
      onConfirm: () => onDelete(row),
    });
  };

  const onDelete = (row) => {
    setConfirmDialog({ ...confirmDialog, isOpen: false });
    dispatch(deleteProduct(row._id));
  };

  const ProductColumns = [
    { field: 'name', headerName: 'Name', width: 250 },
    
    { field: 'description', headerName: 'Description', width: 250 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'categories_title', headerName: 'Category', width: 200 },
    { field: 'parentCategory', headerName: 'parentCategory', width: 250 },
    { field: 'details', headerName: 'Details', width: 250 },
    { field: 'keywords', headerName: 'Keywords', width: 250 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: ({ row }) => (
        <strong>
          <Iconify icon="akar-icons:edit" onClick={handleEditClick(row)} />
          <Iconify icon="ant-design:delete-outlined" onClick={handleDeleteClick(row)} />
        </strong>
      ),
    },
  ];

  return (
    <>
      <Box display="flex" justifyContent="flex-end" p={1}>
        <Button type="button" onClick={handleClickOpen} className="add-btn">
          Add Product
        </Button>
      </Box>
      <div className="main-table">
        {productData.length > 0 && (
          <DataGridBasic data={productData} columns={ProductColumns} getRowId={(row) => row.id} />
        )}
      </div>
      {isModelOpen && <ProductForm handleClose={handleClose} currentRow={currentRow} />}
      {confirmDialog.isOpen && (
        <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
      )}
    </>
  );
};

export default Products;
