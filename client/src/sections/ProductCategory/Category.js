import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';
import CategoryForm from './CategoryForm';
import DataGridBasic from '../mui/data-grid/DataGridBasic';
import Iconify from '../../components/iconify';
import { fetchCategories, deleteCategory } from '../../redux/Category/actions';
import ConfirmDialog from '../../components/animate/ConFirmDialog';

const initialValues = {
  _id: '',
  name: '',
  description: '',
  status: '',
};

const Category = () => {
  const [currentRow, setCurrentRow] = useState(initialValues);
  const [categoryData, setCategoryData] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch();
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
  });

  const categories = useSelector((state) => state.Category.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categories && categories.length > 0) {
      const formattedData = categories.map((item, index) => ({
        id: item._id,
        _id: item._id,
        name: item.name,
        description: item.description,
        status: item.status,
      }));
      setCategoryData(formattedData);
    }
  }, [categories]);

  const handleClose = () => {
    setIsModelOpen(false);
  };

  const handleClickOpen = () => {
    setIsModelOpen(true);
    setCurrentRow(initialValues);
  };

  const CategoryColumn = [
    { field: 'name', headerName: 'Name', width: 450 },
    { field: 'description', headerName: 'Description', width: 450 },
    { field: 'status', headerName: 'Status', width: 100 },
    {
      field: 'action',
      headerName: 'Action',
      width: 100,
      renderCell: ({ row }) => (
        <strong>
          <Iconify icon="akar-icons:edit" onClick={handleEditClick(row)} />
          <Iconify icon="ant-design:delete-outlined" onClick={handleDeleteClick(row)} />
        </strong>
      ),
    },
  ];

  const onDelete = (row) => {
    setConfirmDialog({ ...confirmDialog, isOpen: false });
    dispatch(deleteCategory(row._id));
    setIsModelOpen(false);
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

  const handleEditClick = (row) => (event) => {
    event.stopPropagation();
    setCurrentRow(row);
    setIsModelOpen(true);
  };

  return (
    <>
      <Box display="flex" justifyContent="flex-end"  p={1}>
        <Button type="button" onClick={handleClickOpen} className="add-btn">
          Add Category
        </Button>
      </Box>
      <div className="main-table">
        {categoryData.length > 0 && (
          <DataGridBasic data={categoryData} columns={CategoryColumn} getRowId={(row) => row.id} />
        )}
      </div>
      {isModelOpen && <CategoryForm handleClose={handleClose} currentRow={currentRow} />}
      {confirmDialog && (
        <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
      )}
    </>
  );
};

export default Category;
