import { WISHBOARD_ACTIONS } from '../actoinTypes';

const wishBoardReducer = (state, action) => {
  let newWishBoard = [];
  switch (action.type) {
    case WISHBOARD_ACTIONS.add:
      newWishBoard = [...state.wishBoard];

      if (newWishBoard === []) {
        newWishBoard.push({
          table: action.payload.table,
        });
      } else {
        newWishBoard[0] = {
          table: action.payload.table,
        };
      }
      return { ...state, wishBoard: newWishBoard };

    case WISHBOARD_ACTIONS.remove:
      newWishBoard = [...state.wishBoard];
      newWishBoard.splice(action.payload, 1);
      return { ...state, wishBoard: newWishBoard };

    default:
      return { ...state };
  }
};

export default wishBoardReducer;
