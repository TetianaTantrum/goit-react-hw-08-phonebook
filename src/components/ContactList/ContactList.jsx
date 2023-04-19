import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import { Table, Wrapper } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <Wrapper>
      <Table>
        <caption>Contacts found: {visibleContacts.length}</caption>
        <tbody>
          {visibleContacts.map(contact => (
            <ContactListItem key={contact.id} contact={contact} />
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ContactList;
