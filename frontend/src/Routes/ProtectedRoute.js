import React, { Component } from 'react';
import {Route} from "react-router-dom";
import { Redirect } from 'react-router'
import Dashboard from '../Containers/Dashboard/Dashboard'
import Login from '../Containers/Login/Login';
import {useSelector} from 'react-redux'



export const PrivateRoute=({component:Component,...routeProps})=>{
    const isAuth = useSelector(state=>state.auth.token)
    return(
    <Route
    {...routeProps}
    render={props =>
      isAuth ? <Component {...props} /> : <Redirect to="/login" />
    }
  />)
}
;

