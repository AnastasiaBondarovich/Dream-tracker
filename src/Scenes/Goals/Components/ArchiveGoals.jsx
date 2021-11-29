import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ModalContext } from 'HOC/GlobalModalProvider';
import { archiveGoalsSelector } from '../../../store/selectors/goals';
import Goal from './Goal';

const StyleArchiveGoals = styled.div`
  max-height: 90%;
  width: 80%;
  background-color: #fff;
  position: relative;
  overflow: scroll;

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

  .goals-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
  }

  h3 {
    padding-top: 40px;
    padding-bottom: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 30px;
    color: #0023c4;
  }

  .goals-row {
    display: flex;
    flex-direction: column;
    width: 95%;
    border: 1px solid #666666;
    box-shadow: 10px 10px 20px rgba(49, 75, 105, 0.3),
      0 10px 10px rgba(49, 75, 105, 0.3);
    border-radius: 4px;
  }

  .goals-row_title {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
  }

  .goals-title {
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 24px;
    color: #3a436f;
  }

  .goals-item {
    min-width: 100%;
    align-items: start;
    flex-wrap: wrap;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 40px;
  }
`;

const ArchiveGoals = (props) => {
  const goalsList = useSelector(archiveGoalsSelector);
  const dispatch = useDispatch();
  const setModalContent = useContext(ModalContext);
  const [newTaskName, setNewTaskName] = useState('');
  const [searchGoal, setSearchGoal] = useState('');

  useEffect(() => {
    deleteButtons();
  }, []);

  const deleteButtons = () => {
    const buttons = document.getElementsByClassName('goal-item_icons');
    while (buttons.length > 0) {
      buttons[0].remove();
    }
  };

  return (
    <StyleArchiveGoals>
       <button
        onClick={() => {
          setModalContent(false);
        }}
        type="button"
        className={'popup-close'}
      >
        <i className={'far fa-window-close'}></i>
      </button>
      <div className={'goals-wrapper'}>
        <h3>My Goals</h3>
        <ul className={'goals-row'}>
          <div className={'goals-row_title'}>
            <p className={'goals-title'}>Archive goals</p>
          </div>
          <li className={'goals-item'}>
            {goalsList.map((task, index) => {
              return (
                <div key={task.taskName}>
                  <Goal taskName={task.taskName} index={index} />
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    </StyleArchiveGoals>
  );
};

export default ArchiveGoals;
