import React, { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from 'HOC/GlobalModalProvider';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from '../store/selectors/users';
import { useHistory } from 'react-router';
import { removeUser } from '../store/actions/users';

const StyleSettingsScene = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;

  .remove-button {
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

const SettingsScene = () => {
  const users = useSelector(usersSelector);
  const userIndex = users.map((user, index) => {
    user.userID;
    return index;
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteUser = (userIndex) => {
    dispatch(removeUser(userIndex));
    history.push('/');
  };

  return (
    <StyleSettingsScene>
      <button
        className={'remove-button'}
        onClick={() => {
          deleteUser(userIndex);
        }}
      >
        Delete User
      </button>
    </StyleSettingsScene>
  );
};

export default SettingsScene;
