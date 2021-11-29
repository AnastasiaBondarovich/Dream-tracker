import React, { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from 'HOC/GlobalModalProvider';
import frog from '../../../assets/images/InspirationScene/frog.png';

const StyleFrogs = styled.div`
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
    font-size: 1rem;
    font-weight: 500;
    color: #3a436f;
    margin: 30px 50px;
  }

  img  {
    width: 112px;
    height: 100px;
    background-color: #fff;
  }
`;

const Frogs = () => {
  const setModalContent = useContext(ModalContext);

  return (
    <StyleFrogs>
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
          <h5>The Group of Frogs (Encouragement)</h5>
          <div className={'title-item_description'}>
            <p>
            As a group of frogs was traveling through the woods, two of them fell into a deep pit. When the other frogs crowded around the pit and saw how deep it was, they told the two frogs that there was no hope left for them.
            </p>
            <p>
            However, the two frogs decided to ignore what the others were saying and they proceeded to try and jump out of the pit.
            </p>
            <p>
            Despite their efforts, the group of frogs at the top of the pit were still saying that they should just give up. That they would never make it out.
            </p>
            <p>
            Eventually, one of the frogs took heed to what the others were saying and he gave up, falling down to his death. The other frog continued to jump as hard as he could. Again, the crowd of frogs yelled at him to stop the pain and just die.
            </p>
            <p>
            He jumped even harder and finally made it out. When he got out, the other frogs said, “Did you not hear us?”
            </p>
            <p>
            The frog explained to them that he was deaf. He thought they were encouraging him the entire time.
            </p>
            <span>Moral of the story:</span>
            <img src={frog} alt={'frog'}/>
            <p>
            People’s words can have a big effect on other’s lives. Think about what you say before it comes out of your mouth. It might just be the difference between life and death.
            </p>

          </div>
        
      </div>
    </StyleFrogs>
  );
};

export default Frogs;
