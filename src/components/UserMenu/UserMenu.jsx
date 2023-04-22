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
// import { useState } from 'react';
// import FormPhoto from 'components/FormPhoto/FormPhoto';

export const UserMenu = () => {
  // const [isFormPhotoOpen, setIsFormPhotoOpen] = useState(false);
  // const handleOpenFormPhoto = () => {
  //   setIsFormPhotoOpen(true);
  // };

  // const handleCloseFormPhoto = () => {
  //   setIsFormPhotoOpen(false);
  // };

  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <p>You're logged in as {user.email}</p>
      <Wrapper>
        <IconWrapperUser>
          {/* <Button type="button" onClick={handleOpenFormPhoto}> */}
          <IoPersonOutline size={28} />
          <WelcomeMessage>Welcome, {user.name}</WelcomeMessage>
          {/* </Button> */}
        </IconWrapperUser>
        {/* {isFormPhotoOpen && (
          <FormPhoto handleCloseFormPhoto={handleCloseFormPhoto} />
        )} */}
        <Button type="button" onClick={() => dispatch(logout())}>
          <IconWrapperLogout>
            <IoLogOutOutline size={32} />
          </IconWrapperLogout>
        </Button>
      </Wrapper>
    </Container>
  );
};
