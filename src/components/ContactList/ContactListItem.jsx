import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import {
  IconWrapperCross,
  IconWrapperEdit,
  ButtonClose,
  ButtonEdit,
  TableCell,
  TableRow,
} from './ContactListItem.styled';
import { RxCross1 } from 'react-icons/rx';
import { FiEdit2 } from 'react-icons/fi';
import { Cover } from './ContactList.styled';
import Modal from 'pages/Modal';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <TableRow>
        <TableCell>{contact.name}:</TableCell>
        <TableCell>{contact.number}</TableCell>
        <TableCell>
          <Cover>
            <IconWrapperEdit>
              <ButtonEdit type="button" onClick={handleOpenModal}>
                <FiEdit2 size={20} />
              </ButtonEdit>
            </IconWrapperEdit>
            <IconWrapperCross>
              <ButtonClose
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                <RxCross1 size={20} />
              </ButtonClose>
            </IconWrapperCross>
          </Cover>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colspan="3">
          {isModalOpen && (
            <Modal contact={contact} handleCloseModal={handleCloseModal} />
          )}
        </TableCell>
        <TableCell></TableCell> <TableCell></TableCell>
      </TableRow>
    </>
  );
};
ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
export default ContactListItem;

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contacts/operations';
// import PropTypes from 'prop-types';
// import {
//   IconWrapperCross,
//   IconWrapperEdit,
//   ButtonClose,
//   ButtonEdit,
//   TableCell,
//   TableRow,
// } from './ContactListItem.styled';
// import { RxCross1 } from 'react-icons/rx';
// import { FiEdit2 } from 'react-icons/fi';
// import { Cover } from './ContactList.styled';
// import Modal from 'pages/Modal';

// const ContactListItem = ({ contact }) => {
//   const dispatch = useDispatch();
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleEditClick = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <TableRow>
//         <TableCell>{contact.name}:</TableCell>
//         <TableCell>{contact.number}</TableCell>
//         <TableCell>
//           <Cover>
//             <IconWrapperEdit>
//               <ButtonEdit type="button" onClick={handleEditClick}>
//                 <FiEdit2 size={20} />
//               </ButtonEdit>
//             </IconWrapperEdit>
//             <IconWrapperCross>
//               <ButtonClose
//                 type="button"
//                 onClick={() => dispatch(deleteContact(contact.id))}
//               >
//                 <RxCross1 size={20} />
//               </ButtonClose>
//             </IconWrapperCross>
//           </Cover>
//         </TableCell>
//       </TableRow>
//       {isModalOpen && (
//         <Modal contact={contact} handleCloseModal={handleCloseModal} />
//       )}
//     </>
//   );
// };

// ContactListItem.propTypes = {
//   contact: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default ContactListItem;

// // import React from 'react';
// // import { useDispatch } from 'react-redux';
// // import { deleteContact } from 'redux/contacts/operations';
// // import PropTypes from 'prop-types';
// // import {
// //   IconWrapperCross,
// //   IconWrapperEdit,
// //   ButtonClose,
// //   ButtonEdit,
// //   TableCell,
// //   TableRow,
// // } from './ContactListItem.styled';
// // import { RxCross1 } from 'react-icons/rx';
// // import { FiEdit2 } from 'react-icons/fi';
// // import { Cover } from './ContactList.styled';
// // import { Link } from 'react-router-dom';
// // import Modal from 'pages/Modal';

// // const ContactListItem = ({ contact }) => {
// //   const dispatch = useDispatch();

// //   return (
// //     <>
// //       <TableRow>
// //         <TableCell>{contact.name}:</TableCell>
// //         <TableCell>{contact.number}</TableCell>
// //         <TableCell>
// //           <Cover>
// //             <IconWrapperEdit>
// //               {/* <Link to={`/contacts/${contact.id}`} contact={contact} key={contact.id}>
// //               <ButtonEdit type="submit">
// //                 <FiEdit2 size={20} />
// //               </ButtonEdit>
// //             </Link> */}
// //               <Link to={`${contact.id}`} contact={contact} key={contact.id}>
// //                 <ButtonEdit type="submit">
// //                   <FiEdit2 size={20} />
// //                 </ButtonEdit>
// //               </Link>
// //             </IconWrapperEdit>
// //             <IconWrapperCross>
// //               <ButtonClose
// //                 type="submit"
// //                 onClick={() => dispatch(deleteContact(contact.id))}
// //               >
// //                 <RxCross1 size={20} />
// //               </ButtonClose>
// //             </IconWrapperCross>
// //           </Cover>
// //         </TableCell>
// //       </TableRow>
// //       <Modal contact={contact} key={contact.id} />
// //     </>
// //   );
// // };
// // ContactListItem.propTypes = {
// //   contact: PropTypes.shape({
// //     id: PropTypes.string.isRequired,
// //     name: PropTypes.string.isRequired,
// //     number: PropTypes.string.isRequired,
// //   }).isRequired,
// // };
// // export default ContactListItem;
