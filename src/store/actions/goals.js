import { GOALS_ACTIONS } from '../actoinTypes';

export const newGoalsList = (newTaskName, index) => {
  return {
    type: GOALS_ACTIONS.add,
    payload: {
      taskName: newTaskName,
      index: index,
    },
  };
};

export const changeGoal = (changeTaskName, index) => {
  return {
    type: GOALS_ACTIONS.change,
    payload: {
      taskName: changeTaskName,
      index: index,
    },
  };
};

export const transferGoal = (taskName, index) => {
  return { type: GOALS_ACTIONS.transfer, 
    payload: {
      taskName: taskName,
      index: index,
    },
  };
};
