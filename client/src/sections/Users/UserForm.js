import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { DialogAnimate } from '../../components/animate';
import { RHFTextField ,RHFSelect} from '../../components/hook-form';
import FormProvider from '../../components/hook-form/FormProvider';
import { updateUser, addUser } from '../../redux/Users/actions';

const Schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  role: Yup.string().required('Role is required'),
});

const statuses = [
    { id: 'Admin', title: 'Admin' },
    { id: 'FinancialAdviser', title: 'FinancialAdviser' },
    { id: 'User', title: 'User' },
  ];

const UserForm = ({ handleClose, currentRow }) => {
  const defaultValues = currentRow;
  const dispatch = useDispatch();

  const methods = useForm({
    resolver: yupResolver(Schema),
    defaultValues,
  });

  const {
    handleSubmit,
  } = methods;

  const onSubmit = (data) => {
    const userData = {
      name: data.name,
      email: data.email,
      role: data.role,
    };
    if (data._id) {
      userData._id = data._id;
      dispatch(updateUser(data._id, userData));
    } else {
      dispatch(addUser(userData));
    }
    handleClose();
  };

  return (
    <>
      <DialogAnimate
        onClose={handleClose}
        title={currentRow._id ? 'Update User' : 'Add User'}
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3} className="css-1lwbda4-MuiStack-root">
            <RHFTextField name="name" label="Name *" autoFocus />
            <RHFTextField name="email" label="Email *" />
            <RHFSelect name="role" label="Role *" options={statuses} />

          </Stack>
          <Stack direction="row" spacing={1} justifyContent="flex-end" p={3}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">
          {currentRow._id ? 'Update' : 'Save'}
          </Button>
          </Stack>
        </FormProvider>
      </DialogAnimate>
    </>
  );
};

UserForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  currentRow: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  }),
};

export default UserForm;
