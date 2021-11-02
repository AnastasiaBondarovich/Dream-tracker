import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import hero_bg from 'Assets/Images/hero_bg.jpg';
import DreamLogo from 'Assets/Images/DreamLogo.png';
import { useSelector } from 'react-redux';
import { usersSelector } from '../store/selectors/users';

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
  z-index: 1;

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
  

  .header {
    height: 6.3125rem;
    padding: 0 40px 0 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    margin: auto;
    border-bottom: 1px solid rgba(108, 99, 255, 0.2);
    z-index: 1;
  }

  .logo-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .logo-menu_user {
    margin-left: 10px;
  }

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
      border-bottom: 2px solid rgba(58, 67, 111, 0.85);
      transform: scale(1.15);
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
`

const MainLayout = (props) => {
  const users = useSelector(usersSelector);
  const userLogin = users.map(item => item.login);

  return (
    <StyledMainLayout>
      <div className={'container'}>
        <div className={'header'}>
          <div className={'logo-menu'}>
            <Link to={'/dream-tracker'}>
              <img src={DreamLogo} alt={'DreamLogo'} />
            </Link>
            <Link to={'/settings'} className={'logo-menu_user'}>User login: {userLogin} </Link>
          </div>
          <nav className={'navigation-menu'}>
            <ul className={'point-navigation-menu'}>
              <li>
                <Link to={'/wish-board'} className={'point-menu-item'}>
                  <h4>Wish board</h4>
                </Link>
              </li>
              <li>
                <Link className={'point-menu-item'} to={'/my-goals'}>
                  <h4>My goals</h4>
                </Link>
              </li>
              <li>
                <Link className={'point-menu-item'} to={'/inspiration'}>
                  <h4>Inspiration</h4>
                </Link>
              </li>
              <li>
                <Link className={'point-menu-item'} to={'/settings'}>
                  <h4>Settings</h4>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={'content'}>
          {props.children}
        </div>

        {/* <div className={'footer'}>Footer</div> */}
      </div>
    </StyledMainLayout>
  )
};

export default MainLayout;
