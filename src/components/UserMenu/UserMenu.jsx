import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logout } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Log out
      </button>
    </div>
  );
};
