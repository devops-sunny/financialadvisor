import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { DialogAnimate } from '../../components/animate';
import { RHFSelect, RHFTextField } from '../../components/hook-form';
import FormProvider from '../../components/hook-form/FormProvider';
import { updateCategory, addCategory  } from '../../redux/Category/actions';

const Schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  status: Yup.string().required('Status is required'),
});

const statuses = [
  { id: "Active", title: "Active" },
  { id: "Draft", title: "Draft" },
  { id: "Inactive", title: "Inactive" } 
];


const CategoryForm = ({ handleClose, currentRow }) => {
  const defaultValues = currentRow;
  const dispatch = useDispatch();

  const methods = useForm({
    resolver: yupResolver(Schema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = (data) => {
    const categoryData = {
      name: data.name,
      description: data.description,
      status: data.status,
    };
    if (data._id) {
      categoryData._id = data._id;
      dispatch(updateCategory(data._id, categoryData));
    } else {
      dispatch(addCategory(categoryData));
    }
    handleClose();
  };

  return (
    <>
      <DialogAnimate
        onClose={handleClose}
        title={currentRow._id ? 'Update Product' : 'Add Product'}
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3} className="css-1lwbda4-MuiStack-root">
            <Stack direction="row" spacing={0.5} />
            <RHFTextField name="name" label="Name *" autoFocus />
            <Stack direction="row" spacing={0.5} />
            <RHFTextField name="description" label="Description *" />
            <Stack direction="row" spacing={0.5} />
            <RHFSelect name="status" label="Status *"  options={statuses} />
            <Stack direction="row" spacing={0.5} />
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" type="button" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit">{currentRow._id ? 'Update' : 'Save'}</Button>
          </Stack>
        </FormProvider>
      </DialogAnimate>
    </>
  );
};

CategoryForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  currentRow: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
  }),
};

export default CategoryForm;
