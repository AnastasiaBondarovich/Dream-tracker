import { USERS_ACTIONS } from "../actoinTypes";

export const newUser = (login, email, password, userID) => {return ({type: USERS_ACTIONS.add,
  payload: {
      login: login,
      email: email,
      password: password,
      userID: userID
  }})}

export const removeUser = (index) => {return ({type: USERS_ACTIONS.remove,
    payload: index
  })}
