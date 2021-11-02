import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WishBoardScene from 'Scenes/WishBoardScene';
import MainScene from 'Scenes/MainScene';
import GoalsScene from 'Scenes/GoalsScene';
import InspirationScene from 'Scenes/InspirationScene';
import ChooseColor from 'Components/WishBoardContent/ChooseColor';
import { useSelector } from 'react-redux';
import { usersSelector } from '../store/selectors/users';

const RootRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path={'/dream-tracker'}>
          <MainScene />
        </Route>
        <Route path={'/wish-board/colors'}>
          <ChooseColor />
        </Route>
        <Route path={'/wish-board'}>
          <WishBoardScene />
        </Route>
        <Route path={'/my-goals'}>
          <GoalsScene />
        </Route>
        <Route path={'/inspiration'}>
          <InspirationScene />
        </Route>
        <Route exact path={'/'}>
          <Redirect to={'/dream-tracker'} />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default RootRouter;
