import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import { IconWrapperEdit } from 'components/ContactList/ContactListItem.styled';
import { ButtonAdd, ErrorMessage, Form, FormField } from './EditForm.styled';

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

const EditForm = ({ contact, handleCloseEdit }) => {
  const dispatch = useDispatch();

  const contactName = contact.name;
  const contactNumber = contact.number;
  return (
    <div>
      <Formik
        initialValues={{ name: `${contact.name}`, number: `${contact.number}` }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          dispatch(
            editContact({
              name: values.name,
              number: values.number,
              id: contact.id,
            }),
            handleCloseEdit()
          );
          actions.resetForm();
        }}
      >
        <Form>
          <p>Edit this contact</p>
          <FormField>
            Name
            <Field name="name" placeholder={contactName} />
            <ErrorMessage name="name" component="div" />
          </FormField>
          <FormField>
            Number
            <Field name="number" placeholder={contactNumber} />
            <ErrorMessage name="number" component="div" />
          </FormField>
          <IconWrapperEdit>
            <ButtonAdd type="submit">
              <FcCheckmark size={20} />
            </ButtonAdd>
          </IconWrapperEdit>
        </Form>
      </Formik>
    </div>
  );
};
export default EditForm;
