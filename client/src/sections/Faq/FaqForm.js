import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { DialogAnimate } from '../../components/animate';
import { RHFSelect, RHFTextField } from '../../components/hook-form';
import FormProvider from '../../components/hook-form/FormProvider';
import { updateFaq, addFaq } from '../../redux/Faq/actions';

const Schema = Yup.object().shape({
  question: Yup.string().required('Question is required'),
  answer: Yup.string().required('Answer is required'),
  status: Yup.string().required('Status is required'),
});

const statuses = [
    { id: "Active", title: "Active" },
    { id: "Draft", title: "Draft" },
    { id: "Inactive", title: "Inactive" } 
  ];
  
const FaqForm = ({ handleClose, currentRow }) => {
  const dispatch = useDispatch();

  const defaultValues = {
    question: currentRow?.question || '',
    answer: currentRow?.answer || '',
    status: currentRow?.status || '',
  };

  const methods = useForm({
    resolver: yupResolver(Schema),
    defaultValues,
  });

  const { handleSubmit, reset, formState: { isSubmitting } } = methods;

  const onSubmit = async (values) => {
    if (currentRow._id) {
      dispatch(updateFaq(currentRow._id, values));
    } else {
      dispatch(addFaq(values));
    }
    handleClose();
  };

  return (
    <DialogAnimate open onClose={handleClose} title="FAQ Form">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} p={3}>
          <RHFTextField name="question" label="Question" fullWidth />
          <RHFTextField name="answer" label="Answer" fullWidth multiline rows={4} />
          <RHFSelect name="status" label="Status" fullWidth options={statuses} />
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

FaqForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  currentRow: PropTypes.object.isRequired,
};

export default FaqForm;
