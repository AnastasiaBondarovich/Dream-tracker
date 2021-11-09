import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ModalContext } from 'HOC/GlobalModalProvider';
import { Form, Formik } from 'formik';
import FormikInput from '../FormikInputs/FormikInput';
import Powerful from 'Assets/Images/ModalWindow/Powerful.png';
import { logInUser } from 'api/apiUsers';
import { PATHS } from '../../constants/paths';
import { useHistory } from 'react-router';

const StyledSignInWindow = styled.div`
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

  .sign-window_picture {
    height: 145px;
    width: 236.8px;
    margin-bottom: 16px;
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

const SignInWindow = (props) => {
  const setModalContent = useContext(ModalContext);
  const history = useHistory();
  const signIn = (userID) => {
    history.push(PATHS.Account(userID));
  };

  const signInUser = (email, password, userID) => {
    logInUser(email, password).then(({ data }) =>
    {signIn(data), console.log('addUser2', data)}
    )};

  return (
    <StyledSignInWindow>
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

        <img className={'sign-window_picture'} src={Powerful} alt={'Welcome'} />

        <Formik
          initialValues={{}}
          onSubmit={(formData) => {
            console.log('form submitted', formData);
            signInUser(formData.email, formData.password);
            setModalContent(false);
          }}
          validate={(formData) => {
            console.log('formdataSign', formData);
            const errorObj = {};
            let isFormValid = true;

            if (!formData.email) {
              errorObj.email = 'Please input your email';
              isFormValid = false;
            }
            if (!formData.password) {
              errorObj.password = 'Please input your password';
              isFormValid = false;
            }
            return isFormValid ? null : errorObj;
          }}
        >
          <Form>
            <p className={'login-text'}>Your login</p>
            <FormikInput
              placeholder={'Enter your email'}
              name={'email'}
              size="40"
            />
            <p className={'password-text'}>Your password</p>
            <FormikInput
              placeholder={'Enter your password'}
              name={'password'}
              size="40"
            />
            <button className={'registration-button'} type="submit">
              Sign in
            </button>
          </Form>
        </Formik>
      </React.Fragment>
    </StyledSignInWindow>
  );
};

export default React.memo(SignInWindow);
