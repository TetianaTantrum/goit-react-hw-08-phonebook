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
import { logIn } from 'redux/auth/operations';

const LogInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const LogInForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LogInSchema}
      onSubmit={(values, actions) => {
        dispatch(logIn({ ...values }));
        actions.resetForm();
      }}
    >
      <Form>
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
        <Button type="submit">Log in</Button>
      </Form>
    </Formik>
  );
};

export default LogInForm;
