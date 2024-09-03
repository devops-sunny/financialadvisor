import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';
import UserForm from './UserForm';
import DataGridBasic from '../mui/data-grid/DataGridBasic';
import Iconify from '../../components/iconify';
import { fetchUsers, deleteUser } from '../../redux/Users/actions';
import ConfirmDialog from '../../components/animate/ConFirmDialog';

const initialValues = {
  _id: '',
  name: '',
  email: '',
  role: '',
};

const User = () => {
  const [currentRow, setCurrentRow] = useState(initialValues);
  const [userData, setUserData] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch();
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
  });

  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (users && users.length > 0) {
      const formattedData = users.map((item) => ({
        id: item._id,
        _id: item._id,
        name: item.name,
        email: item.email,
        role: item.role,
      }));
      setUserData(formattedData);
    }
  }, [users]);

  const handleClose = () => {
    setIsModelOpen(false);
  };

//   const handleClickOpen = () => {
//     setIsModelOpen(true);
//     setCurrentRow(initialValues);
//   };

  const UserColumn = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'role', headerName: 'Role', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
      width: 100,
      renderCell: ({ row }) => (
        <strong>
          {row.role !== "FinancialAdviser" && <Iconify icon="akar-icons:edit" onClick={handleEditClick(row)} /> }
          <Iconify icon="ant-design:delete-outlined" onClick={handleDeleteClick(row)} />
        </strong>
      ),
    },
  ];

  const onDelete = (row) => {
    setConfirmDialog({ ...confirmDialog, isOpen: false });
    dispatch(deleteUser(row._id));
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
      <Box display="flex" justifyContent="flex-end" p={1}>
        {/* <Button type="button" onClick={handleClickOpen} className="add-btn">
          Add User
        </Button> */}
      </Box>
      <div className="main-table">
        {userData.length > 0 && (
          <DataGridBasic data={userData} columns={UserColumn} getRowId={(row) => row.id} />
        )}
      </div>
      {isModelOpen && <UserForm handleClose={handleClose} currentRow={currentRow} />}
      {confirmDialog.isOpen && (
        <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
      )}
    </>
  );
};

export default User;

