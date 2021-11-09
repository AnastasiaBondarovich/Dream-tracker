import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainScene from '../Scenes/MainScene/MainScene';
import { useSelector } from 'react-redux';
import { usersSelector } from '../store/selectors/users';
import { useParams } from 'react-router-dom';
import FormMainScene from '../Scenes/MainScene/Components/FormMainScene';
import RootRouter from './RootRouter';

const LoginRouter = () => {
  const users = useSelector(usersSelector);
  const urlParam = useParams();
  const userID = users.find(user => user.userID);
  const renderForLoggedUser = (Scene) => {
    if (!userID) {
      return <Redirect to={'/'}/>
    }
    return <Scene/>
  }

  return (
    <React.Fragment>
      <Switch>
        {/* <Route path={'/dream-tracker/registration'}>
          <FormMainScene />
        </Route> */}
        <Route exact path={'/dream-tracker'}>
          <MainScene />
        </Route>
        <Route exact path={'/'}>
          <Redirect to={'/dream-tracker'} />
        </Route>
        <Route path={'/dream-tracker/account'}>
          {renderForLoggedUser(RootRouter)}
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default LoginRouter;
