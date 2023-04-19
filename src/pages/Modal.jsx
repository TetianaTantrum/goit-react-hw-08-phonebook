import ModalForm from 'components/ModalForm/ModalForm';
import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

export default function Modal({ contact }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Modal</title>
      </Helmet>
      <div>{isLoading && 'Request in progress...'}</div>
      <ModalForm key={contact.id} contact={contact} />
    </div>
  );
}
