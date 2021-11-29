import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { ModalContext } from 'HOC/GlobalModalProvider';
import { Form, Formik } from 'formik';
import FormikInput from '../../FormikInputs/FormikInput';
import welcoming from '../../../assets/images/ModalWindow/welcoming.png';
import { userValidate } from './userValidate';

const StyledRegistrationWindow = styled.div`
  background-color: #ffffff;
  border: 1px solid #666666;
  box-shadow: 10px 10px 20px rgba(49, 75, 105, 0.3),
    0 10px 10px rgba(49, 75, 105, 0.3);
  color: #221c1d;
  width: 400px;
  margin: 20px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  .popup-close {
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
    font-size: 18px;
    color: #666666;
    text-decoration: none;
    border: none;
    transition-duration: 0.3s;
    background-color: #ffffff;
  }

  .popup-close i:hover {
    transform: scale(1.2);
    background-color: rgba(58, 67, 111, 0.3);
  }

  .register-window_picture {
    height: 145px;
    width: 236.8px;
    margin: 16px 0;
  }

  input {
    height: 30px;
    width: 306px;
    background: #ffffff;
    border: 1px solid #0023c4;
    border-radius: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: #0023c4;
    padding: 0 30px 0 30px;
  }

  .login-text,
  .email-text,
  .password-text {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 15px;
    color: #0023c4;
    margin: 16px 0;
    text-align: center;
  }

  .registration-button {
    height: 35px;
    width: 290px;
    background: #bf7de2;
    border-radius: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    margin: 40px 0;
  }
`;

const RegistrationWindow = (props) => {
  const setModalContent = useContext(ModalContext);

  // const userID = users.map(user => user.userID);
  // const history = useHistory();
  // const logIn = (userID) => {
  //   history.push(PATHS.Account(userID));
  // };

  return (
    <StyledRegistrationWindow>
      <React.Fragment>
        <button
          onClick={() => {
            setModalContent(false);
          }}
          type="button"
          className={'popup-close'}
        >
          <i className={'far fa-window-close'}></i>
        </button>

        <img
          className={'register-window_picture'}
          src={welcoming}
          alt={'Welcome'}
        />

        <Formik
          initialValues={{ login: '', email: '', password: '' }}
          onSubmit={(formData) => {
            console.log('form submitted', formData);
            props.addUser(formData.login, formData.email, formData.password);
            setModalContent(false);
          }}
          validate={(formData) => userValidate(formData)}
        >
          <Form>
            <p className={'login-text'}>Create login</p>
            <FormikInput placeholder={'Enter login'} name={'login'} size="40" />
            <p className={'email-text'}>Your e-mail adress</p>
            <FormikInput
              placeholder={'Enter e-mail'}
              name={'email'}
              size="40"
            />
            <p className={'password-text'}>Your password</p>
            <FormikInput
              type="password"
              placeholder={'Enter password'}
              name={'password'}
              size="40"
            />
            <button 
              className={'registration-button'}
              type="submit"
            >
              Register
            </button>
          </Form>
        </Formik>
      </React.Fragment>
    </StyledRegistrationWindow>
  );
};

export default React.memo(RegistrationWindow);
