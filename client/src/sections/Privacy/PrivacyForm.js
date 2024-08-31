import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Button, Stack } from '@mui/material';
import { DialogAnimate } from '../../components/animate';
import {  RHFTextField } from '../../components/hook-form';
import { updatePrivacyPolicy, addPrivacyPolicy } from '../../redux/Privacy/actions';
import FormProvider from '../../components/hook-form/FormProvider';

const Schema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  content: Yup.string().required('Content is required'),
});

const statuses = [
  { id: "Active", title: "Active" },
  { id: "Draft", title: "Draft" },
  { id: "Inactive", title: "Inactive" }
];

const PrivacyForm = ({ handleClose, currentRow }) => {
  const dispatch = useDispatch();

  const defaultValues = {
    title: currentRow?.title || '',
    content: currentRow?.content || '',
    status: currentRow?.status || '',
  };

  const methods = useForm({
    resolver: yupResolver(Schema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    if (currentRow._id) {
      dispatch(updatePrivacyPolicy(currentRow._id, data));
    } else {
      dispatch(addPrivacyPolicy(data));
    }
    handleClose();
  };

  return (
    <DialogAnimate open onClose={handleClose} title={currentRow._id ? 'Update Privacy Policy' : 'Add Privacy Policy'}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} p={3}>
          <RHFTextField name="title" label="Title" fullWidth />
          <RHFTextField name="content" label="Content" fullWidth multiline rows={4} />
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="flex-end" p={3}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </Stack>
      </FormProvider>
    </DialogAnimate>
  );
};

PrivacyForm.propTypes = {
    handleClose: PropTypes.func.isRequired,
    currentRow: PropTypes.object.isRequired,
};

export default PrivacyForm;
