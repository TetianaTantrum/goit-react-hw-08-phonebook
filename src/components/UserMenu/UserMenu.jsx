import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logout } from 'redux/auth/operations';
import { IoLogOutOutline, IoPersonOutline } from 'react-icons/io5';
import {
  Button,
  Container,
  IconWrapperLogout,
  IconWrapperUser,
  WelcomeMessage,
  Wrapper,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <p>
        You're logged in as <b>{user.email}</b>
      </p>
      <Wrapper>
        <IconWrapperUser>
          <IoPersonOutline size={28} />
          <WelcomeMessage>Welcome, {user.name}</WelcomeMessage>
        </IconWrapperUser>
        <Button type="button" onClick={() => dispatch(logout())}>
          <IconWrapperLogout>
            <IoLogOutOutline size={32} />
          </IconWrapperLogout>
        </Button>
      </Wrapper>
    </Container>
  );
};
