import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components

import { FormProvider, RHFTextField } from '../../../components/hook-form';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    cell: Yup.string().required('Cell Number is required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    age: Yup.number()
      .typeError('Amount must be a number')
      .required('Please supply your age')
      .min(18, 'You must be at least 18 years')
      .max(60, 'You must be at most 60 years'),
  });

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {};

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="name" label="Full Name" />
        <RHFTextField name="email" label="Email address" />
        <RHFTextField name="role" label="Role" />
        <RHFTextField name="password" label="Password" type="password" />

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Add User
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
