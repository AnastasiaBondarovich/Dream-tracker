import React, { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from 'HOC/GlobalModalProvider';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from '../store/selectors/users';
import { useHistory } from 'react-router';
import { removeUser } from '../store/actions/users';
import People from '../assets/images/SettingsScene/People.png';
import exit from '../assets/images/SettingsScene/exit.png';
import { removeWishBoard } from '../store/actions/whishBoard';

const StyleSettingsScene = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: #fff;
  border-radius: 25px;
  margin: 1% auto;

  .remove-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 35px;
    width: 290px;
    background: #bf7de2;
    border-radius: 25px;
    margin: 40px 0;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
  }

  .settings-exit {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  .settings-people {
    width: 240px;
    height: 180px;
    margin-bottom: 30px;
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
    dispatch(removeWishBoard(0))
  };

  return (
    <StyleSettingsScene>
      <button
        className={'remove-button'}
        onClick={() => {
          deleteUser(userIndex);
        }}
      >
        <img className={'settings-exit'} src={exit} alt={'exit'} />
        <p>Log out User</p>
      </button>
      <img className={'settings-people'} src={People} alt={'People'} />
    </StyleSettingsScene>
  );
};

export default SettingsScene;
