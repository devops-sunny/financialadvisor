/* eslint-disable */

import { useEffect, useState } from 'react';
import { fetchfeedbacksData } from '../../services/Feedback';
import DataGridBasic from '../mui/data-grid/DataGridBasic';


const FeedBack = () => {
  const [financialAdvisorsData, setFinancialAdvisorsData] = useState([]);


  useEffect(() => {
    fetchfeedbacksData().then((res)=>{
      if (res && res.length > 0) {
        const formattedData = res.map((item) => ({
          id: item._id,
          _id: item._id,
          fullname: item.fullname,
          email: item.email,
          phoneNumber: item.phone,
          description: item.description,
          createdAt:item.createdAt
        }));
        setFinancialAdvisorsData(formattedData);
      }
    })
  }, []);




  const FinancialAdvisorColumns = [
    { field: 'fullname', headerName: 'First Name', width: 150 },
    { field: 'email', headerName: 'Last Name', width: 150 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 180 },
    { field: 'description', headerName: 'Address', width: 180 },
    { field: 'createdAt', headerName: 'Date', width: 180 }
  ];

  return (
    <>

      <div className="main-table">
        {financialAdvisorsData.length > 0 && (
          <DataGridBasic data={financialAdvisorsData} columns={FinancialAdvisorColumns} getRowId={(row) => row.id} />
        )}
      </div>
    </>
  );
};

export default FeedBack;
