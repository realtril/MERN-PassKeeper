import React from 'react';
import Container from '@material-ui/core/Container';
import { Switch, Route } from 'react-router-dom';
import Registration from './Containers/Registration/Registration';
import { navigation } from './constants/navigation';
import Login from './Containers/Login/Login';

{
  /* <Switch>
  <Route path="/chat/:person">
    <ChatScreen />
  </Route>
  <Route path="/chat">
    <Chats />
  </Route>
  <Route exact path="/">
    <Header />
    <TinderCards />
    <SwipeButtons />
  </Route>
</Switch> */
}

const App = () => {
  return (
    <Container maxWidth="xl">
      <Switch>
        <Route path={navigation.registration}>
          <Registration />
        </Route>
        <Route path={navigation.login}>
          <Login />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
