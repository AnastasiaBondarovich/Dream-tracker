import React, { useContext } from 'react';
import styled from 'styled-components';
import build_your__home from 'Assets/Images/build_your__home.png';
import DreamLogo from 'Assets/Images/DreamLogo.png';
import { ModalContext } from 'HOC/GlobalModalProvider';
import RegistrationWindow from 'Components/ModalContent/RegistrationWindow';
import SignInWindow from 'Components/ModalContent/SignInWindow';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from '../../store/selectors/users';
import { newUser } from '../../store/actions/newUsers';

const StyledFormMainScene = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 550px;
    width: 372px;
    padding: 10px 0 10px;
    background-color: #ffff;
    border: 1px solid #666666;
    box-shadow: 10px 10px 20px rgba(49, 75, 105, 0.3),
      0 10px 10px rgba(49, 75, 105, 0.3);
    border-radius: 10px;
  

  .register-item_title {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: #0023c4;
    margin: 0 10px;
    text-align: center;
  }

  .register-item_picture {
    height: 147.01px;
    width: 281.2px;
  }

  .register-button,
  .sign-button {
    height: 64px;
    width: 280px;
    background: #bf7de2;
    border-radius: 38px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: #ffffff;
  }
`;

const FormMainScene = (props) => {
  const setModalContent = useContext(ModalContext);
  const users = useSelector(usersSelector);
  const dispatch = useDispatch();

  const addUser = (login, email, password) => {
    console.log('addUsers', login, email, password);
    dispatch(newUser(login, email, password));
  };

  return (
    <StyledFormMainScene>
        <h4 className={'register-item_title'}>
          Create the reality you truly desire!
        </h4>
        <img
          className={'register-item_picture'}
          src={build_your__home}
          alt={'Home'}
        />
        <button
          onClick={() => {
            setModalContent(<RegistrationWindow addUser={addUser}/>);
          }}
          className={'register-button'}
        >
          Register
        </button>
        <button
          onClick={() => {
            setModalContent(<SignInWindow />);
          }}
          className={'sign-button'}
        >
          Sign in
        </button>
        <img src={DreamLogo} alt={'DreamLogo'} />
    </StyledFormMainScene>
  )
}

export default FormMainScene;