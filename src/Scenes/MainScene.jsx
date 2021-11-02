import React, { useContext } from 'react';
import styled from 'styled-components';
import DreamLogo from 'Assets/Images/DreamLogo.png';
import FormMainScene from '../Components/ModalContent/FormMainScene';
import { useSelector } from 'react-redux';
import { usersSelector } from '../store/selectors/users';
import { Link } from 'react-router-dom';

const StyledMainScene = styled.div`
  .card-row-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media (max-width: 1018px) {
    .card-row-wrapper {
      justify-content: center;
      margin: 0 auto;
    }
  }

  .content-row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 60px 20px 5px;
  }

  .title-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;
    margin: 0 10px;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 35px;
    color: #3f3d56;
    text-shadow: 1px 1px 2px #ffff, 0 0 1em #ffff, 0 0 0.2em #ffff;
    margin-bottom: 40px;
  }

  .title-item_description {
    width: 600px;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: #ffffff;
  }

  p {
    margin-bottom: 30px;
  }

  .create-button {
    height: 64px;
    width: 280px;
    background: #bf7de2;
    border-radius: 38px;
  }

  .create-link{
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: #ffffff;
  }
  
`;

const MainScene = () => {
  const users = useSelector(usersSelector);
  console.log(users);

  return (
    <StyledMainScene>
      <div className={'content-row'}>
        <div className={'title-item'}>
          <h3>Visualization is an exercise for the brain</h3>
          <div className={'title-item_description'}>
            <p>
              You can visualize before going to bed, while brushing your teeth,
              before practice, while walking, etc.
            </p>
            <p>
              The more you visualize, the more successful you will be in
              training your brain to believe in your desired outcome.
            </p>
            <p>
              Try to practice visualizing every day. Make it a habit in your day
              and decide on the number of times you will repeat this
              visualization.{' '}
            </p>
            <p>
              The more you repeat the scenario in your head, the easier it will
              be for you to picture it and to believe it.
            </p>
            {users.find(item => item.isUserLoggedIn === true) && (
              <button className={'create-button'}>
                <Link to={'/wish-board'} className={'create-link'}>Let's start to create</Link>
              </button>
            )}
          </div>
        </div>
        {users === null || users.length === 0 && (
          <FormMainScene />
        )}
      </div>
    </StyledMainScene>
  );
};

export default MainScene;
