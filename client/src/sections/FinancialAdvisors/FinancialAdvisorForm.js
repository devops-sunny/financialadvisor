import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { DialogAnimate } from '../../components/animate';
import { RHFTextField, RHFSelect } from '../../components/hook-form';
import FormProvider from '../../components/hook-form/FormProvider';
import { updateFinancialAdvisor, addFinancialAdvisor } from '../../redux/FinancialAdvisors/actions';

const Schema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  address: Yup.string().required('Address is required'),
  specialization: Yup.string().required('Specialization is required'),
  experience: Yup.string().required('Experience is required'),
  feePerConsultation: Yup.number().required('Fee Per Consultation is required').positive('Must be a positive number'),
  status: Yup.string().required('Status is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const statuses = [
  { id: 'Active', title: 'Active' },
  { id: 'Inactive', title: 'Inactive' },
];

const FinancialAdvisorForm = ({ handleClose, currentRow }) => {
  const defaultValues = currentRow;
  const dispatch = useDispatch();
  const userid = useSelector((state) => state.Auth);


  const methods = useForm({
    resolver: yupResolver(Schema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  console.log(userid.id)

  const onSubmit = (data) => {
    const advisorData = {
      ...data,
      userId: userid.id
    };
    if (data._id) {
      dispatch(updateFinancialAdvisor(data._id, advisorData));
    } else {
        delete  advisorData._id
      dispatch(addFinancialAdvisor(advisorData));
    }
    handleClose();
  };

  return (
    <>
      <DialogAnimate
        onClose={handleClose}
        title={currentRow._id ? 'Update Financial Advisor' : 'Add Financial Advisor'}
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <RHFTextField name="firstName" label="First Name *" autoFocus />
            <RHFTextField name="lastName" label="Last Name *" />
            <RHFTextField name="phoneNumber" label="Phone Number *" />
            <RHFTextField name="address" label="Address *" />
            <RHFTextField name="specialization" label="Specialization *" />
            <RHFTextField name="experience" label="Experience *" />
            <RHFTextField name="feePerConsultation" label="Fee Per Consultation *" type="number" />
            <RHFSelect name="status" label="Status *" options={statuses} />
            <RHFTextField name="email" label="Email *" />
          </Stack>
          <Stack direction="row" spacing={1} justifyContent="flex-end" p={3}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </Stack>
        </FormProvider>
      </DialogAnimate>
    </>
  );
};

FinancialAdvisorForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  currentRow: PropTypes.shape({
    _id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    phoneNumber: PropTypes.string,
    address: PropTypes.string,
    specialization: PropTypes.string,
    experience: PropTypes.string,
    feePerConsultation: PropTypes.number,
    status: PropTypes.string,
    email: PropTypes.string,
  }),
};

export default FinancialAdvisorForm;
