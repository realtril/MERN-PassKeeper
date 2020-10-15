import React from 'react';
import Container from '@material-ui/core/Container';
import { Switch } from 'react-router-dom';
import Registration from './Containers/Registration/Registration';
import { navigation } from './constants/navigation';
import Login from './Containers/Login/Login';
import { PrivateRoute } from './Routes/ProtectedRoute';
import { PublicRouteLog, PublicRouteReg } from './Routes/PublicRoute';
import Dashboard from './Containers/Dashboard/Dashboard';

const App = () => {
  return (
    <Container maxWidth="xl">
      <Switch>
        <PrivateRoute path={navigation.dashboard} exact component={Dashboard} />
        <PublicRouteLog path={navigation.login} component={Login} />
        <PublicRouteReg path={navigation.register} component={Registration} />
      </Switch>
    </Container>
  );
};

export default App;
