import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainScene from '../Scenes/MainScene';


const RootRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path={"/dream-tracker"}>
          <MainScene/>
        </Route>
        <Route path={"/"}>
          <Redirect to={"/dream-tracker"}/>
        </Route>
      </Switch>
    </React.Fragment>
  )
}

export default RootRouter;