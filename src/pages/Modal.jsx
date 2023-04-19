import ModalForm from 'components/ModalForm/ModalForm';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function Modal({ contact }) {
  return (
    <div>
      <Helmet>
        <title>Modal</title>
      </Helmet>
      <ModalForm key={contact.id} contact={contact} />
    </div>
  );
}
