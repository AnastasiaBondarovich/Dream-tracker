import React, { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from 'HOC/GlobalModalProvider';
import { chooseColor } from '../../../api/apiBoards';

const StyledChooseColorModal = styled.div`
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

  .buttons-color {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0 40px;
    max-width: 700px;
    margin-bottom: 50px;
    
  }

  .buttons-color_red {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #FF7575;
    margin-right: 50px;
    margin-bottom: 40px;
  } 

  .buttons-color_orange {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #FFBA69;
    margin-right: 50px;
    margin-bottom: 40px;
  } 

  .buttons-color_yellow {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #FFF492;
    margin-right: 50px;
    margin-bottom: 40px;
  }

  .buttons-color_green {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #58D639;
    margin-right: 50px;
    margin-bottom: 40px;
  }

  .buttons-color_skyblue {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #7EF7FF;
    margin-right: 50px;
    margin-bottom: 40px;
  }

  .buttons-color_blue {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #618DFF;
    margin-right: 50px;
    margin-bottom: 40px;
  }

  .buttons-color_violet {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #A19BFF;
    margin-right: 50px;
    margin-bottom: 40px;
  }

  .buttons-color_pink {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #FF73D8;
    margin-right: 50px;
    margin-bottom: 40px;
  }
`;

const ChooseColorModal = () => {
  const setModalContent = useContext(ModalContext);

  const addColor = (color) => {
    chooseColor(color).then(({ data }) =>
    {console.log('addColor', data)})
  }

  return (
    <StyledChooseColorModal>
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
      <h5>Choose color for your board</h5>
      <div className={'buttons-color'}>
        <button className={'buttons-color_red'}
          onClick={() => {
            addColor('#FF7575');
            setModalContent(false);
          }}
          type="button"
        />
        <button className={'buttons-color_orange'}
          onClick={() => {
            addColor('#FFBA69');
            setModalContent(false);
          }}
          type="button"
        />
        <button className={'buttons-color_yellow'}
          onClick={() => {
            addColor('#FFF492');
            setModalContent(false);
          }}
          type="button"
        />
        <button className={'buttons-color_green'}
          onClick={() => {
            addColor('#58D639');
            setModalContent(false);
          }}
          type="button"
        />
        <button className={'buttons-color_skyblue'}
          onClick={() => {
            addColor('#7EF7FF');
            setModalContent(false);
          }}
          type="button"
        />
        <button className={'buttons-color_blue'}
          onClick={() => {
            addColor('#618DFF');
            setModalContent(false);
          }}
          type="button"
        />
        <button className={'buttons-color_violet'}
          onClick={() => {
            addColor('#A19BFF');
            setModalContent(false);
          }}
          type="button"
        />
        <button className={'buttons-color_pink'}
          onClick={() => {
            addColor('#FF73D8');
            setModalContent(false);
          }}
          type="button"
        />
      </div>
    </StyledChooseColorModal>
  );
};

export default ChooseColorModal;
