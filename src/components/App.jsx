import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'components/App.styled';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { useAuth } from 'hooks/useAuth';
import { lazy } from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from 'redux/auth/operations';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));
const EditPage = lazy(() => import('pages/Edit'));
const UploadPage = lazy(() => import('pages/Upload'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route
            path="/contacts/:contactId"
            element={
              <PrivateRoute redirectTo="/login" component={<EditPage />} />
            }
          />
          <Route
            path="/upload"
            element={
              <PrivateRoute redirectTo="/login" component={<UploadPage />} />
            }
          />
        </Route>
      </Routes>
    </Container>
  );
};
// {/* <Section>
//   <h1>Phonebook</h1>
//   <ContactForm />
//   <Filter />
//   <h2>Contacts</h2>
//   <ContactList />
//   {isLoading && !error && <p> Request in progress...</p>}
// </Section> */}
