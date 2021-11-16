import React, { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from 'HOC/GlobalModalProvider';
import { chooseLayout } from 'api/apiBoards';
import vertical from 'assets/images/WishBoardScene/vertical.png';
import gorizontal from 'assets/images/WishBoardScene/gorizontal.png';

const StyledChooseLayoutModal = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  min-height: 500px;
  width: 80%;
  background-color: #fff;
  position: relative;

  h3 {
    margin: 50px auto 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 30px;
    color: #0023c4;
    margin-bottom: 40px;
  }

  h5 {
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 20px;
    color: #3a436f;
    margin-bottom: 40px;
  }

  .popup-close {
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
    font-size: 18px;
    color: #666666;
    text-decoration: none;
    border: none;
    transition-duration: 0.3s;
    background-color: #ffffff;
  }

  .popup-close i:hover {
    transform: scale(1.2);
    color: #bf7de2;
  }

  .buttons-layout {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
    margin-bottom: 20px;
  }

  .buttons-layout_gorizontal,
  .buttons-layout_vertical {
    border: none;
    border-color: #ffff;
    background-color: #ffff;
    margin-right: 40px;
  }
`;

const ChooseLayoutModal = () => {
  const setModalContent = useContext(ModalContext);

  return (
    <StyledChooseLayoutModal>
      <button
        onClick={() => {
          setModalContent(false);
        }}
        type="button"
        className={'popup-close'}
      >
        <i className={'far fa-window-close'}></i>
      </button>

      <h3>My Wish board</h3>

      <h5>Choose layoyt for your board</h5>

      <div className={'buttons-layout'}>
        <button
          className={'buttons-layout_gorizontal'}
          onClick={() => {
            chooseLayout('gorizontal').then(({ data }) => {
              console.log('addLayout', data);
            });
            setModalContent(false);
          }}
          type="button"
        >
          <img src={gorizontal} alt={'Gorizontal'} />
        </button>
        <button
          className={'buttons-layout_vertical'}
          onClick={() => {
            chooseLayout('vertical').then(({ data }) => {
              console.log('addLayout', data);
            });
            setModalContent(false);
          }}
          type="button"
        >
          <img src={vertical} alt={'Vertical'} />
        </button>
      </div>
    </StyledChooseLayoutModal>
  );
};

export default ChooseLayoutModal;
