import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from '../../../store/selectors/users';
import { PATHS } from '../../../constants/paths';
import { wishBoardSelector } from '../../../store/selectors/wishBoard';
import { Link } from 'react-router-dom';
import { removeWishBoard } from '../../../store/actions/whishBoard';

const StyledFinishedBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-height: 80%;
  width: 90%;
  padding: 5% 5%;
  margin: 1% 5%;
  background-color: #ffff;
  border: 2px solid #666666;
  box-shadow: 10px 10px 20px rgba(49, 75, 105, 0.3),
    0 10px 10px rgba(49, 75, 105, 0.3);
  border-radius: 10px;

  h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 35px;
    color: #3f3d56;
    text-shadow: 1px 1px 2px #ffff, 0 0 1em #ffff, 0 0 0.2em #ffff;
    margin-bottom: 40px;
  }

  table {
    border: 30px solid rgba(191, 125, 226, 0.2);
    border-radius: 10px;
  }

  td {
    height: 300px;
    width: 450px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #3a436f;
  }

  .button-clear {
    height: 30px;
    width: 150px;
    background: #bf7de2;
    border-radius: 25px;
    border: 1px solid #0023c4;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: #ffffff;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FinishedBoard = () => {
  const wishList = useSelector(wishBoardSelector);
  const users = useSelector(usersSelector);
  const userID = users.map((user) => user.userID);
  const dispatch = useDispatch();

  useEffect(() => {
    addTable();
  }, []);

  const addTable = () => {
    wishList.map((table) => {
      console.log('finishBoard', table.table);
      document.querySelector('.result').appendChild(table.table);
      let tableButtons = document.querySelector('table');
      tableButtons
        .querySelectorAll('button')
        .forEach((e) => e.parentNode.removeChild(e));
    });
  };

  return (
    <StyledFinishedBoard>
      <h3 className={'wishboard_title'}>Your wish board</h3>
      <div className={'result'}></div>
      <Link to={PATHS.Board(userID)}>
        <button
          className={'button-clear'}
          onClick={() => {
            console.log('clear'),
              window.localStorage.clear(),
              dispatch(removeWishBoard(0));
          }}
        >
          Create new wish board
        </button>
      </Link>
    </StyledFinishedBoard>
  );
};

export default FinishedBoard;
