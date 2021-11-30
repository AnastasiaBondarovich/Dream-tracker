export const goalsSelector = store => {
  return (store.goalsReducer.goals);
} 

export const archiveGoalsSelector = store => {
  return (store.goalsReducer.archiveGoals);
} 
