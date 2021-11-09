import React from 'react';
import { Switch, Route, Redirect, useParams, useHistory } from 'react-router-dom';
import WishBoardScene from '../Scenes/WishBoard/WishBoardScene';
import MainScene from '../Scenes/MainScene/MainScene';
import GoalsScene from 'Scenes/Goals/GoalsScene';
import InspirationScene from 'Scenes/InspirationScene';
import SettingsScene from 'Scenes/SettingsScene';
import ChooseColor from '../Scenes/WishBoard/Components/ChooseColor';
import { useSelector } from 'react-redux';
import { usersSelector } from '../store/selectors/users';
import { PATHS } from '../constants/paths';

const RootRouter = (props) => {
  const users = useSelector(usersSelector);
  const history = useHistory();
  const params = useParams();
  const userID = users.map(user => user.userID);
  console.log ('location', history.location)

  return (
    <React.Fragment>
        <Route exact path={PATHS.Account(userID)}>
          <MainScene />
      </Route>
      <Route path={`${PATHS.Board(userID)}/colors`}>
        <ChooseColor />
      </Route>
      <Route path={PATHS.Board(userID)}>
        <WishBoardScene />
      </Route>
      <Route path={PATHS.Goals(userID)}>
        <GoalsScene />
      </Route>
      <Route path={PATHS.Inspiration(userID)}>
        <InspirationScene />
      </Route>
      <Route path={PATHS.Settings(userID)}>
        <SettingsScene />
      </Route>
    </React.Fragment>
  );
};

export default RootRouter;
