import { USERS_ACTIONS } from "../actoinTypes";

export const newUser = (login, email, password) => {return ({type: USERS_ACTIONS.add,
  payload: {
      login: login,
      email: email,
      password: password
  }})}
