import React, { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from 'HOC/GlobalModalProvider';
import woman_vector from '../../assets/images/InspirationScene/woman_vector.png';
import idea from '../../assets/images/InspirationScene/idea.png';
import Elephant from './Components/Elephant';
import CreativeThinking from './Components/CreativeThinking';
import Frogs from './Components/Frogs';

const StyleInspirationScene = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 70%;
  min-height: 100%;
  background-color: #fff;
  border-radius: 25px;
  margin: 1% auto;


  .inspiration-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .inspiration-item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
  }

  h3 {
    margin: 40px auto 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 30px;
    color: #0023c4;
    margin-bottom: 10px;
  }

  .inspiration-img_woman {
    width: 312px;
    height: 260px;
    margin-right: 80px;
  }

  .inspiration-img_idea {
    width: 196px;
    height: 207px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.8;
    color: #3a436f;
    margin: 20px 0;
  }

  .button-inspiration {
    border: none;
    background-color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: #873caf;
    text-shadow: 10px 10px 20px rgba(49, 75, 105, 0.3),
    0 10px 10px rgba(49, 75, 105, 0.3);
    cursor: pointer;
    margin-bottom: 20px;
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
            <p>Get inspired by numerous success stories from this section.</p>
            <p>If you can change your thoughts, you can change anything!</p>
          </div>
          <button
            onClick={() => {
              setModalContent(<Elephant />);
            }}
            type="button"
            className={'button-inspiration'}
          >
            ??? The Elephant Rope (Belief)
          </button>
          <button
            onClick={() => {
              setModalContent(<CreativeThinking />);
            }}
            type="button"
            className={'button-inspiration'}
          >
            ??? Thinking Out of the Box (Creative Thinking)
          </button>
          <button
            onClick={() => {
              setModalContent(<Frogs />);
            }}
            type="button"
            className={'button-inspiration'}
          >
            ??? The Group of Frogs (Encouragement)
          </button>
          <img className={'inspiration-img_idea'} src={idea} alt={'idea'} />
        </div>
      </div>
    </StyleInspirationScene>
  );
};

export default InspirationScene;
