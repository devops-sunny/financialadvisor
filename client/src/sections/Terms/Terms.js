import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';
import TermsForm from './TermsForm';
import DataGridBasic from '../mui/data-grid/DataGridBasic';
import Iconify from '../../components/iconify';
import { fetchTerms, deleteTerms } from '../../redux/Terms/actions';
import ConfirmDialog from '../../components/animate/ConFirmDialog';

const initialValues = {
  _id: '',
  title: '',
  content: '',
  createdAt: "",
  updatedAt: ""
};

const Terms = () => {
  const [currentRow, setCurrentRow] = useState(initialValues);
  const [termsData, setTermsData] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch();
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
  });

  const terms = useSelector((state) => state.terms.terms);

  useEffect(() => {
    dispatch(fetchTerms());
  }, [dispatch]);

  useEffect(() => {
    if (terms && terms.length > 0) {
      const formattedData = terms.map((item) => ({
        id: item._id,
        _id:item._id,
        title: item.title,
        content: item.content,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
      }));
      setTermsData(formattedData);
    }
  }, [terms]);

  const handleClose = () => {
    setIsModelOpen(false);
  };

  const handleClickOpen = () => {
    setIsModelOpen(true);
    setCurrentRow(initialValues);
  };

  const TermsColumn = [
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
    dispatch(deleteTerms(row._id));
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
          Add Terms
        </Button>
      </Box>
      <div className="main-table">
        {termsData.length > 0 && (
          <DataGridBasic data={termsData} columns={TermsColumn} getRowId={(row) => row.id} />
        )}
      </div>
      {isModelOpen && <TermsForm handleClose={handleClose} currentRow={currentRow} />}
      {confirmDialog && (
        <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
      )}
    </>
  );
};

export default Terms;
