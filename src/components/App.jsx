import { useEffect } from 'react';
import {
  useDispatch,
  // useSelector
} from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
// import { selectError, selectIsLoading } from 'redux/contacts/selectors';
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import ContactList from './ContactList/ContactList';
import { Container, Section } from 'components/App.styled';
import { Route, Routes } from 'react-router-dom';
import Register from 'pages/Register';
import Home from 'pages/Home';
import { Layout } from './Layout';
import LogIn from 'pages/LogIn';
import Contacts from 'pages/Contacts';
import LogInForm from './LogInForm/LogInForm';

export const App = () => {
  const dispatch = useDispatch();

  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/contacts" component={<Contacts />} />
          <Route path="/register" component={<Register />} />
          <Route path="/login" component={<LogIn />} />
        </Routes>
        <LogInForm />
      </Section>

      {/* <Section>
        <h1>Phonebook</h1>
        <ContactForm />
        <Filter />
        <h2>Contacts</h2>
        <ContactList />
        {isLoading && !error && <p> Request in progress...</p>}
      </Section> */}
    </Container>
  );
};
