import { WISHBOARD_ACTIONS } from "../actoinTypes";

export const createWishBoard = (table) => {return ({type: WISHBOARD_ACTIONS.create,
  payload: {
      table: table
  }})}

export const newWishBoard = (table, td, category) => {return ({type: WISHBOARD_ACTIONS.add,
  payload: {
      table: table,
      // td: td,
      // category: category
  }})}


