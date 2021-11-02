import { USERS_ACTIONS } from "../actoinTypes";


const usersReducer = (state, action) => {
  let newUser = [];
  switch (action.type) {
    case (USERS_ACTIONS.add):
        newUser = [...state.users];
        newUser.push(
            {
                login: action.payload.login,
                email: action.payload.email,
                password: action.payload.password,
                isUserLoggedIn: true,
                id: 15
            }
        );
        console.log(newUser)
        return { ...state, users: newUser};

    default: return {...state}
}
}

export default usersReducer;