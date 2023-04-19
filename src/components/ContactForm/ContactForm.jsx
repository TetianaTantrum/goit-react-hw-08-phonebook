import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import {
  Form,
  FormField,
  ErrorMessage,
  Button,
  Title,
} from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(13, 'Too Short!')
    .max(14, 'Too Long!')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        dispatch(addContact({ ...values, id: nanoid() }));
        actions.resetForm();
      }}
    >
      <Form>
        <Title>Add another contact to your phonebook</Title>
        <FormField>
          Name
          <Field name="name" placeholder="Name" />
          <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField>
          Number
          <Field name="number" placeholder="+380671234567" />
          <ErrorMessage name="number" component="div" />
        </FormField>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
