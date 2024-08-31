import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';
import FaqForm from './FaqForm';
import DataGridBasic from '../mui/data-grid/DataGridBasic';
import Iconify from '../../components/iconify';
import { fetchFaqs, deleteFaq } from '../../redux/Faq/actions';
import ConfirmDialog from '../../components/animate/ConFirmDialog';

const initialValues = {
  _id: '',
  question: '',
  answer: '',
  status: '',
  createdAt:"",
  updatedAt:""
};

const Faq = () => {
  const [currentRow, setCurrentRow] = useState(initialValues);
  const [faqData, setFaqData] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch();
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
  });

  const faqs = useSelector((state) => state.Faq.faqs);

  useEffect(() => {
    dispatch(fetchFaqs());
  }, [dispatch]);

  useEffect(() => {
    if (faqs && faqs.length > 0) {
      const formattedData = faqs.map((item, index) => ({
        id: item._id,
        _id: item._id,
        question: item.question,
        answer: item.answer,
        status: item.status,
        createdAt:item.createdAt,
        updatedAt:item.updatedAt,
      }));
      setFaqData(formattedData);
    }
  }, [faqs]);

  const handleClose = () => {
    setIsModelOpen(false);
  };

  const handleClickOpen = () => {
    setIsModelOpen(true);
    setCurrentRow(initialValues);
  };

  const FaqColumn = [
    { field: 'question', headerName: 'Question', width: 350 },
    { field: 'answer', headerName: 'Answer', width: 350 },
    { field: 'status', headerName: 'Status', width: 100 },
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
    dispatch(deleteFaq(row._id));
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
          Add FAQ
        </Button>
      </Box>
      <div className="main-table">
        {faqData.length > 0 && (
          <DataGridBasic data={faqData} columns={FaqColumn} getRowId={(row) => row.id} />
        )}
      </div>
      {isModelOpen && <FaqForm handleClose={handleClose} currentRow={currentRow} />}
      {confirmDialog && (
        <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
      )}
    </>
  );
};

export default Faq;
