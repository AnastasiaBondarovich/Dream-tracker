import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WishBoardScene from 'Scenes/WishBoardScene';
import MainScene from 'Scenes/MainScene';


const RootRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path={"/dream-tracker"}>
          <MainScene/>
        </Route>
        <Route path={"/wish-board"}>
          <WishBoardScene/>
        </Route>
        <Route exact path={"/"}>
          <Redirect to={"/dream-tracker"}/>
        </Route>
      </Switch>
    </React.Fragment>
  )
}

export default RootRouter;