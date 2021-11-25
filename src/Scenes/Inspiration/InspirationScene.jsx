import React, { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from 'HOC/GlobalModalProvider';
import woman_vector from 'assets/images/InspirationScene/woman_vector.png';
import idea from 'assets/images/InspirationScene/idea.png';
import Elephant from './Components/Elephant';

const StyleInspirationScene = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  min-height: 100%;
  background-color: #fff;

  .inspiration-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .inspiration-item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  h3 {
    margin: 50px auto 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 30px;
    color: #0023c4;
    margin-bottom: 40px;
  }

  /* .inspiration-img_woman {
    width: 312px;
    height: 260px;
    background-color: #fff;
  } */

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: #3a436f;
    margin: 30px 0;
  }
`;

const InspirationScene = () => {
  const setModalContent = useContext(ModalContext);

  return (
    <StyleInspirationScene>
      <h3>Inspiration</h3>
      <div className={'inspiration-wrapper'}>
        <img
          className={'inspiration-img_woman'}
          src={woman_vector}
          alt={'woman'}
          
        />
        <div className={'inspiration-item'}>
          <div className={'item_description'}>
            <p>Get inspired by numerous success stories from this section</p>
            <p>If you can change your thoughts, you can change anything!</p>
          </div>
          <button
            onClick={() => {
              setModalContent(<Elephant />);
            }}
            type="button"
            className={'button-inspiration'}
          >
            The Elephant Rope (Belief)
          </button>
          <img className={'inspiration-img_idea'} src={idea} alt={'idea'} />
        </div>
      </div>
    </StyleInspirationScene>
  );
};

export default InspirationScene;
