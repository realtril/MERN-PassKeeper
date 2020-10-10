import { createAction } from '@reduxjs/toolkit';

const registerSuccess = createAction('@auth/registerSuccess');
const registerError = createAction('@auth/registerError');

const loginSuccess = createAction('@auth/loginSuccess');
const loginError = createAction('@auth/loginError');

const logoutSuccess = createAction('@auth/logoutSuccess');
const logoutError = createAction('@auth/logoutError');

const getCurrentUserSuccess = createAction('@auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('@auth/getCurrentUserError');

export default {
  registerError,
  loginError,
  logoutError,
  getCurrentUserError,
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  getCurrentUserSuccess,
};
