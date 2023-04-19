import React from 'react';
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
export default ContactList;
