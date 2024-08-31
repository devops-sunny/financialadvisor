import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';
import FinancialAdvisorForm from './FinancialAdvisorForm';
import DataGridBasic from '../mui/data-grid/DataGridBasic';
import Iconify from '../../components/iconify';
import { fetchFinancialAdvisors, deleteFinancialAdvisor } from '../../redux/FinancialAdvisors/actions';
import ConfirmDialog from '../../components/animate/ConFirmDialog';

const initialValues = {
  _id: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  address: '',
  specialization: '',
  experience: '',
  feePerConsultation: 0,
  status: '',
  email: '',
  timings: [],
};

const FinancialAdvisors = () => {
  const [currentRow, setCurrentRow] = useState(initialValues);
  const [financialAdvisorsData, setFinancialAdvisorsData] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch();
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
    onConfirm: () => {},
  });

  const financialAdvisors = useSelector((state) => state.financialAdvisors.financialAdvisors);

  useEffect(() => {
    dispatch(fetchFinancialAdvisors());
  }, [dispatch]);

  useEffect(() => {
    if (financialAdvisors && financialAdvisors.length > 0) {
      const formattedData = financialAdvisors.map((item) => ({
        id: item._id,
        _id: item._id,
        firstName: item.firstName,
        lastName: item.lastName,
        phoneNumber: item.phoneNumber,
        address: item.address,
        specialization: item.specialization,
        experience: item.experience,
        feePerConsultation: item.feePerConsultation,
        status: item.status,
        email: item.email,
        timings: item.timings.join(', '), // Convert array to string for display
      }));
      setFinancialAdvisorsData(formattedData);
    }
  }, [financialAdvisors]);

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
    dispatch(deleteFinancialAdvisor(row._id));
  };

  const FinancialAdvisorColumns = [
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 180 },
    { field: 'address', headerName: 'Address', width: 180 },
    { field: 'specialization', headerName: 'Specialization', width: 180 },
    { field: 'experience', headerName: 'Experience', width: 180 },
    { field: 'feePerConsultation', headerName: 'Fee Per Consultation', width: 180, type: 'number' },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'timings', headerName: 'Timings', width: 250 },
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
          Add Financial Advisor
        </Button>
      </Box>
      <div className="main-table">
        {financialAdvisorsData.length > 0 && (
          <DataGridBasic data={financialAdvisorsData} columns={FinancialAdvisorColumns} getRowId={(row) => row.id} />
        )}
      </div>
      {isModelOpen && <FinancialAdvisorForm handleClose={handleClose} currentRow={currentRow} />}
      {confirmDialog.isOpen && (
        <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
      )}
    </>
  );
};

export default FinancialAdvisors;
