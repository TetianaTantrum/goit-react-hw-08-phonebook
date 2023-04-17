import { Navigation } from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
