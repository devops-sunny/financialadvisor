import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { DialogAnimate } from '../../components/animate';
import {  RHFTextField } from '../../components/hook-form';
import FormProvider from '../../components/hook-form/FormProvider';
import { updateTerms, addTerms } from '../../redux/Terms/actions';

const Schema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  content: Yup.string().required('Content is required'),
});

const TermsForm = ({ handleClose, currentRow }) => {
  const dispatch = useDispatch();

  const defaultValues = {
    title: currentRow?.title || '',
    content: currentRow?.content || '',
  };

  const methods = useForm({
    resolver: yupResolver(Schema),
    defaultValues,
  });

  const { handleSubmit, reset, formState: { isSubmitting } } = methods;

  const onSubmit = async (values) => {
    console.log(currentRow._id)
    if (currentRow._id) {
      dispatch(updateTerms(currentRow._id, values));
    } else {
      dispatch(addTerms(values));
    }
    handleClose();
  };

  return (
    <DialogAnimate open onClose={handleClose} title="Terms Form">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} p={3}>
          <RHFTextField name="title" label="Title" fullWidth />
          <RHFTextField name="content" label="Content" fullWidth multiline rows={4} />
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="flex-end" p={3}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained" loading={isSubmitting}>
            Save
          </Button>
        </Stack>
      </FormProvider>
    </DialogAnimate>
  );
};

TermsForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  currentRow: PropTypes.object.isRequired,
};

export default TermsForm;
