import ModalForm from 'components/ModalForm/ModalForm';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

export default function Modal({ contact, handleCloseModal }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ModalForm contact={contact} handleCloseModal={handleCloseModal} />
      {isLoading && <div>Loading...</div>}
    </div>
  );
}

// import ModalForm from 'components/ModalForm/ModalForm';
// import React from 'react';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/operations';
// import { selectIsLoading } from 'redux/contacts/selectors';

// export default function Modal({ contact }) {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <title>Modal</title>
//       <div>{isLoading && 'Request in progress...'}</div>
//       <ModalForm contact={contact} key={contact.id} />
//     </div>
//   );
// }
