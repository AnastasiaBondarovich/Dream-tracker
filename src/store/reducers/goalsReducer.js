import { GOALS_ACTIONS } from "../actoinTypes";

const goalsReducer = (state, action) => {
  let newGoalsList = [];
  switch (action.type) {
    case (GOALS_ACTIONS.add):
      newGoalsList = [...state.goals];
      newGoalsList.push(
            {
                taskName: action.payload.taskName,
                index: action.payload.index,
            }
        ); 
        console.log('new goals', newGoalsList);
        return { ...state, goals: newGoalsList};
    
    case (GOALS_ACTIONS.remove) : 
      newGoalsList = [...state.goals];
      newGoalsList.splice(action.payload, 1);
      return {...state, goals: newGoalsList};

    default: return {...state}
    
}
}

export default goalsReducer;