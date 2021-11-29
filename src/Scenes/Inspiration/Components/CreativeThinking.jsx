import React, { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from 'HOC/GlobalModalProvider';
import stone from '../../../assets/images/InspirationScene/stone.png';

const StyleCreativeThinking = styled.div`
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

  img {
    width: 112px;
    height: 100px;
  }
`;

const CreativeThinking = () => {
  const setModalContent = useContext(ModalContext);

  return (
    <StyleCreativeThinking>
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
        <h5>Thinking Out of the Box (Creative Thinking)</h5>
        <div className={'title-item_description'}>
          <p>
            In a small Italian town, hundreds of years ago, a small business
            owner owed a large sum of money to a loan-shark. The loan-shark was
            a very old, unattractive looking guy that just so happened to fancy
            the business owner’s daughter. He decided to offer the businessman a
            deal that would completely wipe out the debt he owed him. However,
            the catch was that we would only wipe out the debt if he could marry
            the businessman’s daughter. Needless to say, this proposal was met
            with a look of disgust.
          </p>
          <span>
            The loan-shark said that he would place two pebbles into a bag, one
            white and one black.
          </span>
          <p>
            The daughter would then have to reach into the bag and pick out a
            pebble. If it was black, the debt would be wiped, but the loan-shark
            would then marry her. If it was white, the debt would also be wiped,
            but the daughter wouldn’t have to marry the loan-shark. Standing on
            a pebble-strewn path in the businessman’s garden, the loan-shark
            bent over and picked up two pebbles. Whilst he was picking them up,
            the daughter noticed that he’d picked up two black pebbles and
            placed them both into the bag. He then asked the daughter to reach
            into the bag and pick one. The daughter naturally had three choices
            as to what she could have done:
          </p>
          <p>1. Refuse to pick a pebble from the bag.</p>
          <p>
            2. Take both pebbles out of the bag and expose the loan-shark for
            cheating.
          </p>
          <p>
            3. Pick a pebble from the bag fully well knowing it was black and
            sacrifice herself for her father’s freedom.
          </p>
          <p>
            She drew out a pebble from the bag, and before looking at it
            ‘accidentally’ dropped it into the midst of the other pebbles. She
            said to the loan-shark; “Oh, how clumsy of me. Never mind, if you
            look into the bag for the one that is left, you will be able to tell
            which pebble I picked.” The pebble left in the bag is obviously
            black, and seeing as the loan-shark didn’t want to be exposed, he
            had to play along as if the pebble the daughter dropped was white,
            and clear her father’s debt.
          </p>
          <span>Moral of the story:</span>
          <img src={stone} alt={'stone'} />
          <p>
            It’s always possible to overcome a tough situation through out of
            the box thinking, and not give in to the only options you think you
            have to pick from.
          </p>
        </div>
      </div>
    </StyleCreativeThinking>
  );
};

export default CreativeThinking;
