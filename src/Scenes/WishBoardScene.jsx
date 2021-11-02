import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import color_picker from 'Assets/Images/color_picker.png';
import zoom from 'Assets/Images/zoom.png';
import layers from 'Assets/Images/layers.png';
import library from 'Assets/Images/library.png';

const StyledWishBoardScene = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 1000px;
  background-color: #fff;
  margin: 50px auto 50px;

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
  return (
    <StyledWishBoardScene>
      <h3>My Wish board</h3>
      <div className={'wish-wrapper'}>
        <Link to={'/wish-board/colors'}>
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
