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
import Edit from 'pages/Edit';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleOpenEdit = () => {
    setIsEditOpen(true);
  };

  const handleCloseEdit = () => {
    setIsEditOpen(false);
  };

  return (
    <>
      <TableRow>
        <TableCell>{contact.name}:</TableCell>
        <TableCell>{contact.number}</TableCell>
        <TableCell>
          <Cover>
            <IconWrapperEdit>
              <ButtonEdit type="button" onClick={handleOpenEdit}>
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
          {isEditOpen && (
            <Edit contact={contact} handleCloseEdit={handleCloseEdit} />
          )}
        </TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
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
