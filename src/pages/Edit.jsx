import EditForm from 'components/EditForm/EditForm';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

export default function Edit({ contact, handleCloseEdit }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <EditForm contact={contact} handleCloseEdit={handleCloseEdit} />
      {isLoading && <div>Loading...</div>}
    </div>
  );
}

// import EditForm from 'components/EditForm/EditForm';
// import React from 'react';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/operations';
// import { selectIsLoading } from 'redux/contacts/selectors';

// export default function Edit({ contact }) {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <title>Edit</title>
//       <div>{isLoading && 'Request in progress...'}</div>
//       <EditForm contact={contact} key={contact.id} />
//     </div>
//   );
// }
