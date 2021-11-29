export const goalsSelector = store => {
  console.log('store', store)
  return (store.goalsReducer.goals);
  
} 

export const archiveGoalsSelector = store => {
  console.log('store', store)
  return (store.goalsReducer.archiveGoals);
} 
