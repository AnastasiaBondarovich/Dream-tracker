import { GOALS_ACTIONS } from '../actoinTypes';

const goalsReducer = (state, action) => {
  let newGoalsList = [];
  let archiveGoalsList = [];
  switch (action.type) {
    case GOALS_ACTIONS.add:
      newGoalsList = [...state.goals];
      newGoalsList.push({
        taskName: action.payload.taskName,
        index: action.payload.index,
      });
      return { ...state, goals: newGoalsList };

    case GOALS_ACTIONS.change:
      newGoalsList = [...state.goals];
      newGoalsList[action.payload.index].taskName = action.payload.taskName;
      return { ...state, goals: newGoalsList };

    case GOALS_ACTIONS.transfer:
      newGoalsList = [...state.goals];
      archiveGoalsList = [...state.archiveGoals];
      newGoalsList.splice(action.payload.index, 1);
      archiveGoalsList.push({
        taskName: action.payload.taskName,
        index: action.payload.index,
      });
      return { ...state, goals: newGoalsList, archiveGoals: archiveGoalsList};
      

    default:
      return { ...state };
  }
};

export default goalsReducer;
