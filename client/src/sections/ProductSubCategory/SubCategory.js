import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';
import CategorySubForm from './SubCategoryForm';
import DataGridBasic from '../mui/data-grid/DataGridBasic';
import Iconify from '../../components/iconify';
import { fetchSubCategories, deleteSubCategory } from '../../redux/SubCategory/actions';
import ConfirmDialog from '../../components/animate/ConFirmDialog';
import { fetchCategories } from '../../redux/Category/actions';

const initialValues = {
  _id: '',
  name: '',
  description: '',
  status: '',
  categories_id: "",
  categories_title: "",
  createdAt:"",
  updatedAt:""
};

const SubCategory = () => {
  const [currentRow, setCurrentRow] = useState(initialValues);
  const [categoryData, setCategoryData] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch();
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
  });

  const categories = useSelector((state) => state.SubCategory.categories);

  useEffect(() => {
    dispatch(fetchSubCategories());
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
        categories_id:item?.parentCategory?._id,
        categories_title:item?.parentCategory?.name,
        createdAt:item.createdAt,
        updatedAt:item.updatedAt,
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
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'description', headerName: 'Description', width: 250 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'categories_title', headerName: 'categories name', width: 200 },
    { field: 'createdAt', headerName: 'createdAt', width: 200 },
    { field: 'updatedAt', headerName: 'updatedAt', width: 200 },
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
    dispatch(deleteSubCategory(row._id));
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
    console.log(row)
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
      {isModelOpen && <CategorySubForm handleClose={handleClose} currentRow={currentRow} />}
      {confirmDialog && (
        <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
      )}
    </>
  );
};

export default SubCategory;
