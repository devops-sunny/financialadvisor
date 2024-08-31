import {
    addFinancialAdvisorData,
    deleteFinancialAdvisorData,
    fetchFinancialAdvisorsData,
    updateFinancialAdvisorData,
  } from '../../services/FinancialAdvisorsService';
  import {
    addFinancialAdvisorSuccess,
    deleteFinancialAdvisorSuccess,
    fetchFinancialAdvisorsError,
    fetchFinancialAdvisorsSuccess,
    operationError,
    setLoading,
    updateFinancialAdvisorSuccess,
  } from './FinancialAdvisors';
  
  export const fetchFinancialAdvisors = () => (dispatch) => {
    dispatch(setLoading());
    fetchFinancialAdvisorsData()
      .then((res) => {
        dispatch(fetchFinancialAdvisorsSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchFinancialAdvisorsError(error.message));
      });
  };
  
  export const addFinancialAdvisor = (data) => (dispatch) => {
    dispatch(setLoading());
    addFinancialAdvisorData(data)
      .then((res) => {
        dispatch(addFinancialAdvisorSuccess(res.data));
        dispatch(fetchFinancialAdvisors());
      })
      .catch((error) => {
        dispatch(operationError(error.message));
      });
  };
  
  export const updateFinancialAdvisor = (id, data) => (dispatch) => {
    dispatch(setLoading());
    updateFinancialAdvisorData(id, data)
      .then((res) => {
        dispatch(updateFinancialAdvisorSuccess(res.data));
        dispatch(fetchFinancialAdvisors());
      })
      .catch((error) => {
        dispatch(operationError(error.message));
      });
  };
  
  export const deleteFinancialAdvisor = (id) => (dispatch) => {
    dispatch(setLoading());
    deleteFinancialAdvisorData(id)
      .then(() => {
        dispatch(deleteFinancialAdvisorSuccess(id));
        dispatch(fetchFinancialAdvisors());
      })
      .catch((error) => {
        dispatch(operationError(error.message));
      });
  };
  