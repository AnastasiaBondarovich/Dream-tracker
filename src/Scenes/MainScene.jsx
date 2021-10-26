import React from 'react';
import styled from 'styled-components';
import build_your__home from '../Assets/Images/build_your__home.png';
import DreamLogo from '../Assets/Images/DreamLogo.png';

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
    margin: 60px auto 5px;
  }

  .title-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 35px;
    color: #3F3D56;
    text-shadow: 1px 1px 2px #ffff, 0 0 1em #ffff, 0 0 0.2em #ffff;
    margin-bottom: 40px;
  }

  .title-item_description{
    width: 600px;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: #FFFFFF;
  }

  .register-item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 550px;
    width: 372px;
    padding: 10px 0 10px;
    background-color: #ffff;
    border: 1px solid #666666;
    box-shadow: 10px 10px 20px rgba(49, 75, 105, 0.3),
      0 10px 10px rgba(49, 75, 105, 0.3);
    border-radius: 10px;
  }

  .register-item_title {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: #0023C4;
  }

  .register-item_picture {
    height: 147.01px;
    width: 281.2px;
  }

  .register-button, .sign-button {
    height: 64px;
    width: 280px;
    background: #BF7DE2;
    border-radius: 38px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: #FFFFFF;
  }

`

const MainScene = (props) => {
  return (
    <StyledMainScene>
      <div className={'content-row'}>
        <div className={'title-item'}>
          <h3>Visualization is an exercise for the brain</h3>
          <div className={'title-item_description'}>
            <p>You can visualize before going to bed, while brushing your teeth, before practice, while walking, etc.</p><br/>
            <p>The more you visualize, the more successful you will be in training your brain to believe in your desired outcome.</p><br/>
            <p>Try to practice visualizing every day. Make it a habit in your day and decide on the number of times you will repeat this visualization. </p><br/>
            <p>The more you repeat the scenario in your head, the easier it will be for you to picture it and to believe it.</p>
          </div>
        </div>
        <div className={'register-item'}>
          <h4 className={'register-item_title'}>Create the reality you truly desire!</h4>
          <img className={'register-item_picture'} src={build_your__home} alt={"Home"}/>
          <button className={'register-button'}>Register</button>
          <button className={'sign-button'}>Sign in</button>
          <img src={DreamLogo} alt={"DreamLogo"}/>
        </div>
      </div>

    </StyledMainScene>
  )
}

export default MainScene;