import React, { useEffect, memo, useContext, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ModalContext } from 'HOC/GlobalModalProvider';
import { changeGoal } from '../../../store/actions/goals';

const StyledChangeGoalModal = styled.div`
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
    color: #bf7de2;
  }

  .popup-title {
    min-height: 35px;
    width: 80%;
    background: #ffffff;
    border: 1px solid #0023c4;
    border-radius: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #3a436f;
    padding: 0 10px;
    margin-top: 10px;
  }

  .popup-name {
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #0023c4;
  }

  .save-button-popup {
    height: 35px;
    width: 150px;
    background: #bf7de2;
    border-radius: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    margin: 20px auto 10px;
  }
`;

const ChangeGoalModal = (props) => {
  const dispatch = useDispatch();
  const setModalContent = useContext(ModalContext);
  const [changeTaskName, setChangeTaskName] = useState(props.taskName);

  return (
    <React.Fragment>
      <StyledChangeGoalModal>
        <button
          onClick={() => {
            setModalContent(false);
          }}
          type="button"
          className={'popup-close'}
        >
          <i className={'far fa-window-close'}></i>
        </button>

        <p className={'popup-name'}>
          Goal:
          <br />
          <input
            className={'popup-title'}
            value={changeTaskName}
            onChange={(event) => {
              setChangeTaskName(event.target.value);
            }}
            type="text"
            name="data.title"
            size="40"
          />
        </p>

        <button
          className={'save-button-popup'}
          onClick={() => {
            dispatch(changeGoal(changeTaskName, props.index));
            setModalContent(false);
          }}
          type="button"
        >
          Save goal
        </button>
      </StyledChangeGoalModal>
    </React.Fragment>
  );
};

export default React.memo(ChangeGoalModal);
