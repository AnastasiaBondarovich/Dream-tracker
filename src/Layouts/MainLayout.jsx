import React from 'react';
import styled from 'styled-components';
import hero_bg from '../Assets/Images/hero_bg.jpg';
import DreamLogo from '../Assets/Images/DreamLogo.png';
import camera from '../Assets/Images/camera.png';
import { Link } from 'react-router-dom';
import line_chart from '../Assets/Images/line_chart.png';
import star from '../Assets/Images/star.png';
import settings from '../Assets/Images/settings.png'


const StyledMainLayout = styled.div`
  min-height: 100vh;
  min-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background-image: url(${hero_bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  z-index: -2;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(2, 2, 2, 0.7);
    // opacity: 0.4;
    position: absolute;
    display: block;
    // left: 0;
    z-index: -1;
  }
}

  .header {
    height: 6.3125rem;
    padding: 0 40px 0 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // background-color: rgba(255, 255, 255, 0.5);
    // justify-content: space-around;
    align-items: center;
    align-content: center;
    margin: auto;
    // position: sticky;
    // z-index: 15;
    border-bottom: 1px solid rgba(108, 99, 255, 0.2);
    z-index: 10;
  }

  // .logo-menu {
  //   max-width: 100vw;
  //   display: flex;
  //   flex-direction: row;
  //   flex-wrap: wrap;
  //   justify-content: space-between;
  //   align-items: baseline;
  //   align-content: center;
  //   margin: auto;
  // }

  .navigation-menu {
    margin-left: auto;
    min-width: 390px;
  }

  .point-navigation-menu {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .point-menu-item {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 0.8125rem;
    color:  #FFFFFF;;
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    transition-duration: 0.4s;
    display: inline-block;

    &:hover {
      border-bottom: 2px solid #eb5e5e;
      transform: scale(1.3);
    }
  }

  .camera {
    align-items: center;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 2px;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
  }

  .content {
    flex: 1 1 auto;
  }

  // .footer {
  //   display: flex;
  //   justify-content: center;
  //   margin-top: 37rem;
  //   padding: 30px 0 15px;
  //   position: relative;
  //   background-color: rgba(26, 10, 56, 0.53);
  //   color: #fff;
  //   z-index: 1000;
  // }
`;

const MainLayout = (props) => {
  return (
    <StyledMainLayout>
      <div className={'container'}>
        <div className={'header'}>
          <div className={'logo-menu'}>
            <img src={DreamLogo} alt={"DreamLogo"}/>
          </div>
          <nav className={'navigation-menu'}>
            <ul className={'point-navigation-menu'}>
              <li><Link className={'point-menu-item'} to={'/wish-board'}> 
                <h4>Wish board</h4>
                {/* <button className={'camera'}>
                  <img src={camera} alt={"Camera"}/>
                </button> */}
              </Link></li>
              <li><Link className={'point-menu-item'} to={'/my-goals'}> 
                <h4>My goals</h4>
                {/* <img src={line_chart} alt={"Goals"}/> */}
              </Link></li>
              <li><Link className={'point-menu-item'} to={'/inspiration'}> 
                <h4>Inspiration</h4>
                {/* <img src={star} alt={"Star"}/> */}
              </Link></li>
              <li><Link className={'point-menu-item'} to={'/settings'}> 
                <h4>Settings</h4>
                {/* <img src={settings} alt={"Settings"}/> */}
              </Link></li>
            </ul>
          </nav>
        </div>
        <div className={'contentWithNavbar'}>
          <div className={'content'}>{props.children}</div>
        </div>
        {/* <div className={'footer'}>Footer</div> */}
      </div>
    </StyledMainLayout>
  );
};

export default MainLayout;
