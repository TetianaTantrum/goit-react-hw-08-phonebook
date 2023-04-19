import React from 'react';
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
import { Link, NavLink } from 'react-router-dom';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <TableRow>
      <TableCell>{contact.name}:</TableCell>
      <TableCell>{contact.number}</TableCell>
      <TableCell>
        <Cover>
          <IconWrapperEdit>
            {/* <Link to={`/contacts/${contact.id}`} contact={contact} key={contact.id}>
              <ButtonEdit type="submit">
                <FiEdit2 size={20} />
              </ButtonEdit>
            </Link> */}
            <NavLink to={`${contact.id}`} contact={contact} key={contact.id}>
              <ButtonEdit type="submit">
                <FiEdit2 size={20} />
              </ButtonEdit>
            </NavLink>
          </IconWrapperEdit>
          <IconWrapperCross>
            <ButtonClose
              type="submit"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              <RxCross1 size={20} />
            </ButtonClose>
          </IconWrapperCross>
        </Cover>
      </TableCell>
    </TableRow>
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
