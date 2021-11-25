import React from 'react';
import { Switch, Route, Redirect, useParams, useHistory } from 'react-router-dom';
import WishBoardScene from '../Scenes/WishBoard/WishBoardScene';
import MainScene from '../Scenes/MainScene/MainScene';
import GoalsScene from 'Scenes/Goals/GoalsScene';
import InspirationScene from 'Scenes/Inspiration/InspirationScene';
import SettingsScene from 'Scenes/SettingsScene';
import { useSelector } from 'react-redux';
import { usersSelector } from '../store/selectors/users';
import { ROUTE } from './routing';

const RootRouter = (props) => {
  const users = useSelector(usersSelector);
  const history = useHistory();
  const params = useParams();
  const userID = users.map(user => user.userID);
  console.log ('location', history.location, users)

  return (
    <React.Fragment>
        <Route exact path={ROUTE.Account}>
          <MainScene />
      </Route>
      <Route path={ROUTE.Board}>
        <WishBoardScene />
      </Route>
      <Route path={ROUTE.Goals}>
        <GoalsScene />
      </Route>
      <Route path={ROUTE.Inspiration}>
        <InspirationScene />
      </Route>
      <Route path={ROUTE.Settings}>
        <SettingsScene />
      </Route>
    </React.Fragment>
  );
};

export default RootRouter;
