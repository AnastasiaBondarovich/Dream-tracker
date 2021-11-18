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
                userID: action.payload.userID,
            }
        );
        return { ...state, users: newUser};

        case (USERS_ACTIONS.login):
            newUser = [...state.users];
        newUser.push(
            {
                email: action.payload.email,
                password: action.payload.password,
                isUserLoggedIn: true,
                userID: action.payload.userID,
            }
        );
            return { ...state, users: newUser };

    case (USERS_ACTIONS.remove) : 
        newUser = [...state.users];
        newUser.splice(action.payload, 1);
        return {...state, users: newUser};

    default: return {...state}
}
}

export default usersReducer;