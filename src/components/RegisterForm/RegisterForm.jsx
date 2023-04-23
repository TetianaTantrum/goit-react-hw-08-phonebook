import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import {
  Form,
  FormField,
  ErrorMessage,
  Button,
} from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={RegisterSchema}
      onSubmit={(values, actions) => {
        dispatch(register({ ...values }));
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" type="name" placeholder="Name" />
          <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField>
          Email
          <Field name="email" type="email" placeholder="email@gmail.com" />
          <ErrorMessage name="email" component="div" />
        </FormField>
        <FormField>
          Password
          <Field name="password" type="password" placeholder="password" />
          <ErrorMessage name="password" component="div" />
        </FormField>
        <Button type="submit">Sign up</Button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
