import React, { useContext } from 'react';
import styled from 'styled-components';
import FormMainScene from './Components/FormMainScene';
import { useSelector } from 'react-redux';
import { usersSelector } from '../../store/selectors/users';
import { Link } from 'react-router-dom';
import { wishBoardSelector } from '../../store/selectors/wishBoard';
import FinishedBoard from './Components/FinishedBoard';
import { PATHS, ROUTE } from '../../Routing/routing';

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
    margin: 5% 5% 0;
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
    width: 350px;
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
  const userID = users.map(user => user.userID);
  console.log(users);
  const wishList = useSelector(wishBoardSelector);

  return (
    <StyledMainScene>
      {wishList.length === 0 && (
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
            {users.find(users => users.isUserLoggedIn === true) && (
              <button className={'create-button'}>
                <Link to={PATHS.Board(userID)} className={'create-link'}>Let's start or continue to create</Link>
              </button>
            )}
          </div>
        </div>
        {users === null || users.length === 0 && (
          <FormMainScene />
        )} 
      </div>
      )}
       {wishList.length != 0 && (
      <FinishedBoard/>)}
    </StyledMainScene>
  );
};

export default MainScene;
