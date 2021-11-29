import { WISHBOARD_ACTIONS } from "../actoinTypes";

export const newWishBoard = (table) => {return ({type: WISHBOARD_ACTIONS.add,
  payload: {
      table: table,
      // td: td,
      // category: category
  }})}

  export const removeWishBoard = (index) => {
    return { type: WISHBOARD_ACTIONS.remove, payload: index };
  };


