import {
    addTermsData,
    deleteTermsData,
    fetchTermsData,
    updateTermsData,
  } from '../../services/TermsService';
  import {
    addTermsSuccess,
    deleteTermsSuccess,
    fetchTermsError,
    fetchTermsSuccess,
    operationError,
    setLoading,
    updateTermsSuccess,
  } from './Terms';
  
  export const fetchTerms = () => (dispatch) => {
    dispatch(setLoading());
    fetchTermsData()
      .then((res) => {
        dispatch(fetchTermsSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchTermsError(error.message));
      });
  };
  
  export const addTerms = (data) => (dispatch) => {
    dispatch(setLoading());
    addTermsData(data)
      .then((res) => {
        dispatch(addTermsSuccess(res.data));
        dispatch(fetchTerms());
      })
      .catch((error) => {
        dispatch(operationError(error.message));
      });
  };
  
  export const updateTerms = (id, data) => (dispatch) => {
    dispatch(setLoading());
    updateTermsData(id, data)
      .then((res) => {
        dispatch(updateTermsSuccess(res.data));
        dispatch(fetchTerms());
      })
      .catch((error) => {
        dispatch(operationError(error.message));
      });
  };
  
  export const deleteTerms = (id) => (dispatch) => {
    dispatch(setLoading());
    deleteTermsData(id)
      .then(() => {
        dispatch(deleteTermsSuccess(id));
        dispatch(fetchTerms());
      })
      .catch((error) => {
        dispatch(operationError(error.message));
      });
  };
  