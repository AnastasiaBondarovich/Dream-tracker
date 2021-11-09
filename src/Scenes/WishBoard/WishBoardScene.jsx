import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import color_picker from 'Assets/Images/WishBoardScene/color_picker.png';
import zoom from 'Assets/Images/WishBoardScene/zoom.png';
import layers from 'Assets/Images/WishBoardScene/layers.png';
import library from 'Assets/Images/WishBoardScene/library.png';
import { PATHS } from '../../constants/paths';
import { useSelector } from 'react-redux';
import { usersSelector } from '../../store/selectors/users';

const StyledWishBoardScene = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 500px;
  width: 80%;
  background-color: #fff;
  margin: 1% auto 0;

  h3 {
    margin: 60px auto 80px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 30px;
    color: #0023C4;
  }

  .wish-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 800px;
    margin: 0 auto 0;
  }

  img{
    margin: 20px auto 20px;
  }
`;

const WishBoardScene = () => {
  const users = useSelector(usersSelector);
  const userID = users.map(user => user.userID);

  return (
    <StyledWishBoardScene>
      <h3>My Wish board</h3>
      <div className={'wish-wrapper'}>
        <Link to={`${PATHS.Board(userID)}/colors`}>
          <img src={color_picker} alt={'Color'} />
          <p>Colors</p>
        </Link>
        <Link to={'/wish-board/categories'}>
          <img src={zoom} alt={'Categories'} />
          <p>Categories</p>
        </Link>
        <Link to={'/wish-board/layouts'}>
          <img src={layers} alt={'Layouts'} />
          <p>Layouts</p>
        </Link>
        <Link to={'/wish-board/library'}>
          <img src={library} alt={'Library'} />
          <p>Library</p>
        </Link>
      </div>
    </StyledWishBoardScene>
  );
};

export default WishBoardScene;
