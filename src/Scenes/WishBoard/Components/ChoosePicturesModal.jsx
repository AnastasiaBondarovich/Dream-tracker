import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ModalContext } from 'HOC/GlobalModalProvider';
import { choosePicture } from '../../../api/apiBoards';
import LibraryModal from './LibraryModal';

const StyledChoosePicturesModal = styled.div`
  max-height: 90%;
  max-width: 80%;
  background-color: #fff;
  overflow: scroll;
  position: relative;
  padding: 5px 15px;

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

  .wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .result {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  img {
    width: 170px;
    height: 130px;
    margin: 5px;
    cursor: pointer;
  }

  .button-save {
    height: 44px;
    width: 150px;
    background: #bf7de2;
    border-radius: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    margin: 10px 0 50px;
  }
`;

const ChoosePicturesModal = (props) => {
  const setModalContent = useContext(ModalContext);

  const [img, setImg] = useState('');

  useEffect(() =>{
    pictureForBoard();
  });

  const pictureForBoard = () =>{
    let allImg = document.querySelector('.result');
    let images = allImg.getElementsByTagName('img');
  
    for (let i = 0; i < images.length; i++) {
      images[i].addEventListener("click", function(event) {
        console.log('e', event.target);
        event.target.style.border = `5px solid red`;
        setImg(event.target.src);
      }); 
    }
  }

  return (
    <StyledChoosePicturesModal>
      <button
        onClick={() => {
          setModalContent(false);
        }}
        type="button"
        className={'popup-close'}
      >
        <i className={'far fa-window-close'}></i>
      </button>

      <div className={'wrapper'}>
        <h3>My Wish board</h3>

        <h5>Choose picture for your board</h5>

        <div className={"result"}>
          {/* {<Skeleton/> || pictureForBoard()} */}
        </div>

        <button onClick={() => {
          setModalContent(<LibraryModal img={img} category={props.category}/>), console.log('category!!!', props.category)}} 
          type="button" className={'button-save'}> Save </button>
      </div>

    </StyledChoosePicturesModal>
  );
};

export default ChoosePicturesModal;
