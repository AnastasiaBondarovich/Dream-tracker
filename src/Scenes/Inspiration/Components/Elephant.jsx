import React, { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from 'HOC/GlobalModalProvider';
import Elephant_Rope from 'assets/images/InspirationScene/Elephant_Rope.png';

const StyleElephant = styled.div`
  max-height: 100%;
  max-width: 80%;
  background-color: #fff;
  overflow: scroll;
  position: relative;
  padding: 0 40px;

  .title-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }

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
    margin-bottom: 5px;
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

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: #3a436f;
    margin: 30px 0;
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    color: #3a436f;
    margin: 30px 50px;
  }
`;

const Elephant = () => {
  const setModalContent = useContext(ModalContext);

  return (
    <StyleElephant>
      <button
        onClick={() => {
          setModalContent(false);
        }}
        type="button"
        className={'popup-close'}
      >
        <i className={'far fa-window-close'}></i>
      </button>

      
        <div className={'title-item'}>
          <h3>Inspiration</h3>
          <h5>The Elephant Rope (Belief)</h5>
          <div className={'title-item_description'}>
            <p>
              A gentleman was walking through an elephant camp, and he spotted
              that the elephants weren’t being kept in cages or held by the use
              of chains.
            </p>
            <p>
              All that was holding them back from escaping the camp, was a small
              piece of rope tied to one of their legs.
            </p>
            <p>
              As the man gazed upon the elephants, he was completely confused as
              to why the elephants didn’t just use their strength to break the
              rope and escape the camp. They could easily have done so, but
              instead, they didn’t try to at all. Curious and wanting to know
              the answer, he asked a trainer nearby why the elephants were just
              standing there and never tried to escape. The trainer replied;
              “when they are very young and much smaller we use the same size
              rope to tie them and, at that age, it’s enough to hold them. As
              they grow up, they are conditioned to believe they cannot break
              away. They believe the rope can still hold them, so they never try
              to break free.” The only reason that the elephants weren’t
              breaking free and escaping from the camp was that over time they
              adopted the belief that it just wasn’t possible.
            </p>
            <span>Moral of the story:</span>
            <img src={Elephant_Rope} alt={'Elephant'}/>
            <p>
              No matter how much the world tries to hold you back, always
              continue with the belief that what you want to achieve is
              possible. Believing you can become successful is the most
              important step in actually achieving it.
            </p>

          </div>
        
      </div>
    </StyleElephant>
  );
};

export default Elephant;
