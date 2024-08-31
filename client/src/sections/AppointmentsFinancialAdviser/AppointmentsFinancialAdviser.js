import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Iconify from '../../components/iconify';
import { fetchAppointments } from '../../redux/Appointments/actions';
import DataGridBasic from '../mui/data-grid/DataGridBasic';
import AppointmentForm from './AppointmentForm';
import Calendar from '../Fullcalendar/Calendar';

const initialValues = {
  _id: '',
  user_id: '',
  categories_title: '',
  product_id: '',
  product_title: '',
  financialAdvisor_id: '',
  financialAdvisor_title: '',
  date: '',
  startTime: '',
  endTime: '',
  status: '',
  createdAt: '',
  updatedAt: '',
};

const AppointmentsFinancialAdviser = () => {
  const [currentRow, setCurrentRow] = useState(initialValues);
  const [appointmentData, setAppointmentData] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [eventsData, setEventsData] = useState([]);

  const dispatch = useDispatch();

  const appointments = useSelector((state) => state.Appointments.appointments);
  const FinancialAdviserid = useSelector((state) => state.Auth.FinancialAdvisorid);

  console.log('FinancialAdviserid', FinancialAdviserid);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  useEffect(() => {
    if (appointments && appointments.length > 0) {
      const filteredAppointments = appointments.filter(item =>
        item.financialAdvisorId?._id === FinancialAdviserid
      );

      const formattedData = filteredAppointments.map(item => ({
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

      const events = filteredAppointments?.map((item) => ({
        id: item.id,
        title: `${item?.financialAdvisorId?.firstName} ${item?.productId?.name}`,
        start: `${item.date}T${item.startTime}:00`,
        end: `${item.date}T${item.endTime}:00`,
        color: "#1452",  
        textColor: 'white'        
  }));
    
    setEventsData(events)

      setAppointmentData(formattedData);
    }
  }, [appointments, FinancialAdviserid]);

  
  const handleClose = () => {
    setIsModelOpen(false);
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
        </strong>
      ),
    },
  ];

  const handleEditClick = (row) => (event) => {
    event.stopPropagation();
    setCurrentRow(row);
    setIsModelOpen(true);
  };

  return (
      <div>
        <div className="main-table">
            <DataGridBasic
              data={appointmentData}
              columns={AppointmentColumn}
              getRowId={(row) => row.id}
            />
        </div>
        {isModelOpen && <AppointmentForm handleClose={handleClose} currentRow={currentRow} />}
        <Calendar events={eventsData}/>
      </div>
   );
};

export default AppointmentsFinancialAdviser;
