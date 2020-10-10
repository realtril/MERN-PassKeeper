import React from 'react';
import {Route} from "react-router-dom";
import { Redirect } from 'react-router'
import Dashboard from '../Containers/Dashboard/Dashboard'
import Login from '../Containers/Login/Login';
import {useSelector} from 'react-redux'
import {isAuthenticated} from '../Redux/selectors/authSelectors'

  export const PublicRouteLog=({component:Component,...routeProps})=>{
    const isAuth = useSelector(state=>state.auth.token)
    return(
    <Route
    {...routeProps}
    render={props =>
      isAuth ? <Redirect to='/'  /> : <Component {...props} />
    }
  />)
}
;

  export const PublicRouteReg=({component:Component,...routeProps})=>{
    const isAuth = useSelector(state=>state.auth.token)
    return(
    <Route
    {...routeProps}
    render={props =>
      isAuth ? <Redirect to='/'/> : <Component {...props} />
    }
  />)
}
;