import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { goalsSelector } from 'store/selectors/goals';
import Goal from './Components/Goal';
import { ModalContext } from 'HOC/GlobalModalProvider';
import { newGoalsList } from 'store/actions/goals';
import { removeGoal } from 'store/actions/goals';
import ArchiveGoals from './Components/ArchiveGoals';

const StyleGoalsScene = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  min-height: 500px;
  width: 80%;
  background-color: #fff;
  margin: 1% auto;

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

  .goals-row_header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
  }

  .goals-row_title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .goals-title {
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 24px;
    color: #3a436f;
    margin-right: 30px;
    border-bottom: 2px solid rgba(191, 125, 226, 0.5);
  }

  .goals-title_button {
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #3a436f;
    border: none;
    cursor: pointer;
    background-color: transparent;
    transition-duration: 0.4s;

    &:hover {
      border-bottom: 2px solid rgba(191, 125, 226, 0.5);
      font-weight: 500;
      font-size: 20px;
      transform: scale(1.05);
    }
  }

  .goals-search {
    width: 180px;
    margin-right: 5px;
  }

  .goals-search_submit {
    margin-right: 20px;
  }

  .goals-item {
    min-width: 100%;
    align-items: start;
    flex-wrap: wrap;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 40px;
  }

  .newgoal-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    background-color: rgba(191, 125, 226, 0.3);
    border-radius: 25px;
    margin: 20px auto;
    padding: 30px 0 0;
  }

  .newgoal-item_input {
    min-height: 35px;
    width: 80%;
    background: #ffffff;
    border: 1px solid #0023c4;
    border-radius: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #0023c4;
    padding: 0 10px;
  }

  .newgoal-item_button {
    height: 35px;
    width: 290px;
    background: #bf7de2;
    border-radius: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    margin: 20px 0 30px;
  }
`;

const GoalsScene = (props) => {
  const goalsList = useSelector(goalsSelector);
  const dispatch = useDispatch();
  const setModalContent = useContext(ModalContext);
  const [newTaskName, setNewTaskName] = useState('');
  const [searchGoal, setSearchGoal] = useState('');

  const addGoal = (newTaskName) => {
    dispatch(newGoalsList(newTaskName));
    setNewTaskName('');
  };

  const filterListGoals = (tasksToFilter) => {
    return tasksToFilter.filter((task) => {
      return task.taskName.toLowerCase().includes(searchGoal.toLowerCase());
    });
  };

  return (
    <StyleGoalsScene>
      <div className={'goals-wrapper'}>
        <h3>My Goals</h3>
        <ul className={'goals-row'}>
          <div className={'goals-row_header'}>
            <div className={'goals-row_title'}>
              <p className={'goals-title'}>Active goals</p>
              <button
                className={'goals-title_button'}
                onClick={() => {
                  setModalContent(<ArchiveGoals />);
                }}
              >
                Archive goals
              </button>
            </div>

            {/* <i class="fas fa-search" /> */}
            <input
              className={'goals-search'}
              type={'text'}
              placeholder={'Start typing a goal to search'}
              onChange={(event) => {
                setSearchGoal(event.target.value);
              }}
            />
          </div>
          <li className={'goals-item'}>
            {filterListGoals(goalsList).map((task, index) => {
              return (
                <div key={task.taskName}>
                  <Goal taskName={task.taskName} index={index} />
                </div>
              );
            })}
          </li>
          <div className={'newgoal-item'}>
            <input
              className={'newgoal-item_input'}
              value={newTaskName}
              onChange={(event) => {
                setNewTaskName(event.target.value);
              }}
              type="text"
              placeholder={'Type a new goal'}
              size="70"
            />
            <button
              className={'newgoal-item_button'}
              onClick={() => {
                addGoal(newTaskName);
              }}
            >
              Add Goal
            </button>
          </div>
        </ul>
      </div>
    </StyleGoalsScene>
  );
};

export default GoalsScene;
