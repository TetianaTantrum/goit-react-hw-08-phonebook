import { Navigation } from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import LogInForm from 'components/LogInForm/LogInForm';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      <LogInForm />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
