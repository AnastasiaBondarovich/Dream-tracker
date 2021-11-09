import { GOALS_ACTIONS } from "../actoinTypes";


export const newGoalsList = (newTaskName, index) => {return ({type: GOALS_ACTIONS.add,
  payload: {
      taskName: newTaskName,
      index: index
  }})}

export const removeGoal = (index) => {return ({type: GOALS_ACTIONS.remove,
  payload: index
})}

