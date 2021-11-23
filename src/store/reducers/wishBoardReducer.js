import { WISHBOARD_ACTIONS } from "../actoinTypes";

const wishBoardReducer = (state, action) => {
  let newWishBoard = [];
  switch (action.type) {
    // case (WISHBOARD_ACTIONS.create):
    //   newWishBoard = [...state.wishBoard];
    //   newWishBoard.push(
    //       {
    //           table: action.payload.table,
    //       }
    //   );
    //   console.log('new table', newWishBoard);
    //   return { ...state, wishBoard: newWishBoard};

    case (WISHBOARD_ACTIONS.add):
      newWishBoard = [...state.wishBoard];
    //   let index = newWishBoard.findIndex(table => table === action.payload.table);
    //   console.log('index', index)
    //   if (index === -1) {
    //     newWishBoard.push(
    //     {
    //         table: action.payload.table,
    //     }
    // ); 
    //   }



      if (newWishBoard === []) {
        newWishBoard.push(
          {
              table: action.payload.table,
          }
      ); 
      } else {
      //   let index = newWishBoard.findIndex(table => table.table === action.payload.table);
      // console.log('index', index)
      // if (index === -1) {
        newWishBoard[0] = 
        {
            table: action.payload.table,
        }
    ; 
      // }
      }

      

      // let index = newWishBoard.findIndex(td => td.category === action.payload.category);
    //   console.log('index', index);
    //   if (index === -1) {
    //     newWishBoard.push(
    //             {
    //                 table: action.payload.table,
    //                 // td: action.payload.td,
    //                 // category: action.payload.category,
    //             }
    //         ); 
    //   } else {
    //   newWishBoard[index] = {
    //     td: action.payload.td,
    //     category: action.payload.category,
    // };
    //   }

      console.log('new wish', newWishBoard);


      // let index = newWishBoard.findIndex(td => td.category == action.payload.category);
      // newWishBoard[index] = action.payload.td;
      // console.log('newWishBoard td', newWishBoard);
      // newWishBoard.push(
      //       {
      //           td: action.payload.td,
      //           category: action.payload.category,
      //       }
      //   ); 
      //   console.log('new wish', newWishBoard);
        return { ...state, wishBoard: newWishBoard};

    default: return {...state}
    
}
}

export default wishBoardReducer;