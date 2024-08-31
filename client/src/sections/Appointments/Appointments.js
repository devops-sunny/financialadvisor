import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';
import AppointmentForm from './AppointmentForm';
import DataGridBasic from '../mui/data-grid/DataGridBasic';
import Iconify from '../../components/iconify';
import { fetchAppointments, deleteAppointment } from '../../redux/Appointments/actions';
import ConfirmDialog from '../../components/animate/ConFirmDialog';
import Calendar from '../Fullcalendar/Calendar';



const initialValues = {
  _id: '',
  user_id: '',
  categories_title:"",
  product_id: '',
  product_title:"",
  financialAdvisor_id: '',
  financialAdvisor_title:"",
  date: '',
  startTime: '',
  endTime: '',
  status: '',
  createdAt: '',
  updatedAt: ''
};

const Appointments = () => {
  const [currentRow, setCurrentRow] = useState(initialValues);
  const [appointmentData, setAppointmentData] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [eventsData, setEventsData] = useState([]);

  const dispatch = useDispatch();
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
  });

  const appointments = useSelector((state) => state.Appointments.appointments);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  useEffect(() => {
    if (appointments && appointments.length > 0) {
      const formattedData = appointments.map((item, index) => ({
         id: item._id,
        _id: item._id,

        categories_title: item?.userId?.name,
        product_title: item?.productId?.name,
        financialAdvisor_title: item?.financialAdvisorId?.firstName,

        user_id: item?.userId?._id,
        product_id: item?.productId?._id,
        financialAdvisor_id: item?.financialAdvisorId?._id,

        date: item.date,
        startTime: item.startTime,
        endTime: item.endTime,
        status: item.status,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
      }));

      
    const events = appointments?.map((item) => ({
          id: item.id,
          title: `${item?.financialAdvisorId?.firstName} ${item?.productId?.name}`,
          start: `${item.date}T${item.startTime}:00`,
          end: `${item.date}T${item.endTime}:00`,
          color: "#1452",  
          textColor: 'white'        
    }));
      
      setEventsData(events)

    console.log(formattedData)
      setAppointmentData(formattedData);
    }
  }, [appointments]);

  const handleClose = () => {
    setIsModelOpen(false);
  };

  const handleClickOpen = () => {
    setIsModelOpen(true);
    setCurrentRow(initialValues);
  };

  const AppointmentColumn = [
    { field: 'categories_title', headerName: 'User Name', width: 200 },
    { field: 'product_title', headerName: 'Product Name', width: 200 },
    { field: 'financialAdvisor_title', headerName: 'Financial Advisor', width: 200 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'startTime', headerName: 'Start Time', width: 150 },
    { field: 'endTime', headerName: 'End Time', width: 150 },
    { field: 'status', headerName: 'Status', width: 100 },
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
    dispatch(deleteAppointment(row._id));
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
          Add Appointment
        </Button>
      </Box>
      <div className="main-table">
        {appointmentData.length > 0 && (
          <DataGridBasic data={appointmentData} columns={AppointmentColumn} getRowId={(row) => row.id} />
        )}
      </div>
      {isModelOpen && <AppointmentForm handleClose={handleClose} currentRow={currentRow} />}
      {confirmDialog && (
        <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
      )}
     <Calendar events={eventsData}/>
    </>
  );
};

export default Appointments;
