import { useAuth } from 'hooks/useAuth';
import { ContactsNavLink, StyledNavLink } from './Navigation.styled';
import { BsJournalBookmarkFill } from 'react-icons/bs';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledNavLink to="/">
        Phonebook <BsJournalBookmarkFill />
      </StyledNavLink>

      {isLoggedIn && (
        <ContactsNavLink to="/contacts"> Contacts </ContactsNavLink>
      )}
    </nav>
  );
};
