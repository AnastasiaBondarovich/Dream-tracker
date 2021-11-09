export const goalsSelector = store => {
  console.log('store', store)
  return (store.goalsReducer.goals);
  
} 