import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';
import PrivacyForm from './PrivacyForm';
import DataGridBasic from '../mui/data-grid/DataGridBasic';
import Iconify from '../../components/iconify';
import { fetchPrivacyPolicies, deletePrivacyPolicy } from '../../redux/Privacy/actions';
import ConfirmDialog from '../../components/animate/ConFirmDialog';

const initialValues = {
  _id: '',
  title: '',
  content: '',
  createdAt: "",
  updatedAt: ""
};

const Privacy = () => {
  const [currentRow, setCurrentRow] = useState(initialValues);
  const [privacyData, setPrivacyData] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch();
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
  });

  const privacyPolicies = useSelector((state) => state.privacy.privacyPolicies);

  useEffect(() => {
    dispatch(fetchPrivacyPolicies());
  }, [dispatch]);

  useEffect(() => {
    if (privacyPolicies && privacyPolicies.length > 0) {
      const formattedData = privacyPolicies.map((item, index) => ({
        id: item._id,
        _id: item._id,
        title: item.title,
        content: item.content,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
      }));
      setPrivacyData(formattedData);
    }
  }, [privacyPolicies]);

  const handleClose = () => {
    setIsModelOpen(false);
  };

  const handleClickOpen = () => {
    setIsModelOpen(true);
    setCurrentRow(initialValues);
  };

  const privacyColumns = [
    { field: 'title', headerName: 'Title', width: 350 },
    { field: 'content', headerName: 'Content', width: 350 },
    { field: 'createdAt', headerName: 'Created At', width: 200 },
    { field: 'updatedAt', headerName: 'Updated At', width: 200 },
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
    dispatch(deletePrivacyPolicy(row._id));
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
        <Button type="button" onClick={handleClickOpen} className="add-btn">
          Add Privacy Policy
        </Button>
      </Box>
      <div className="main-table">
        {privacyData.length > 0 && (
          <DataGridBasic data={privacyData} columns={privacyColumns} getRowId={(row) => row.id} />
        )}
      </div>
      {isModelOpen && <PrivacyForm handleClose={handleClose} currentRow={currentRow} />}
      {confirmDialog && (
        <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
      )}
    </>
  );
};

export default Privacy;
