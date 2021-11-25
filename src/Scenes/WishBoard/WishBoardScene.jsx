import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import color_picker from 'Assets/Images/WishBoardScene/color_picker.png';
import zoom from 'Assets/Images/WishBoardScene/zoom.png';
import layers from 'Assets/Images/WishBoardScene/layers.png';
import library from 'Assets/Images/WishBoardScene/library.png';
import { useSelector } from 'react-redux';
import { usersSelector } from '../../store/selectors/users';
import { ModalContext } from 'HOC/GlobalModalProvider';
import ChooseColorModal from './Components/ChooseColorModal';
import ChooseCategoryModal from './Components/CooseCategoryModal';
import ChooseLayoutModal from './Components/ChooseLayoutModal';
import LibraryModal from './Components/LibraryModal/LibraryModal';


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
    color: #0023c4;
  }

  .wish-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 80%;
    margin: 0 auto 0;
  }

  button {
    border: none;
    border-color: #ffff;
    background-color: #ffff;
    cursor: pointer;
  }

  img {
    margin: 20px auto 20px;
  }
`;

const WishBoardScene = () => {
  const setModalContent = useContext(ModalContext);
  const users = useSelector(usersSelector);
  const userID = users.map((user) => user.userID);

  return (
    <StyledWishBoardScene>
      <h3>My Wish board</h3>
      <div className={'wish-wrapper'}>
        <button className={'button-color'}
          onClick={() => {
            setModalContent(<ChooseColorModal />);
          }}>
          <img src={color_picker} alt={'Color'} />
          <p>Colors</p>
        </button>

        <button className={'button-category'}
          onClick={() => {
            setModalContent(<ChooseCategoryModal />);
          }}>
          <img src={zoom} alt={'Categories'} />
          <p>Categories</p>
        </button>

        <button className={'button-layouts'}
          onClick={() => {
            setModalContent(<ChooseLayoutModal />);
          }}>
          <img src={layers} alt={'Layouts'} />
          <p>Layouts</p>
        </button>

        <button className={'button-library'}
          onClick={() => {
            setModalContent(<LibraryModal />);
          }}>
          <img src={library} alt={'library'} />
          <p>Library</p>
        </button>
      </div>
    </StyledWishBoardScene>
  );
};

export default WishBoardScene;
