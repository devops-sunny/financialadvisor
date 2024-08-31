import {
    fetchFaqsData,
    addFaqData,
    updateFaqData,
    deleteFaqData,
  } from '../../services/FaqService';
  
  import {
    fetchFaqsSuccess,
    fetchFaqsError,
    setLoading,
    addFaqSuccess,
    updateFaqSuccess,
    deleteFaqSuccess,
    operationError,
  } from './Faq';
  
  export const fetchFaqs = () => (dispatch) => {
    dispatch(setLoading());
    fetchFaqsData()
      .then((res) => {
        dispatch(fetchFaqsSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchFaqsError(error.message));
      });
  };
  
  export const addFaq = (data) => (dispatch) => {
    dispatch(setLoading());
    addFaqData(data)
      .then((res) => {
        dispatch(addFaqSuccess(res.data));
        dispatch(fetchFaqs());
      })
      .catch((error) => {
        dispatch(operationError(error.message));
      });
  };
  
  export const updateFaq = (id, data) => (dispatch) => {
    dispatch(setLoading());
    updateFaqData(id, data)
      .then((res) => {
        dispatch(updateFaqSuccess(res.data));
        dispatch(fetchFaqs());
      })
      .catch((error) => {
        dispatch(operationError(error.message));
      });
  };
  
  export const deleteFaq = (id) => (dispatch) => {
    dispatch(setLoading());
    deleteFaqData(id)
      .then(() => {
        dispatch(deleteFaqSuccess(id));
        dispatch(fetchFaqs());
      })
      .catch((error) => {
        dispatch(operationError(error.message));
      });
    };
  