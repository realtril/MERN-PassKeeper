import axios from 'axios';
import { loaderOff, loaderOn } from '../actions/loaderActions';
import authActions from '../actions/authActions';

axios.defaults.baseURL = 'https://pm-mern.herokuapp.com/api';

const magicToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    console.log('chimichango');
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerOperation = userData => async dispatch => {
  try {
    dispatch(loaderOn());
    const result = await axios.post('/user/register', userData);
    magicToken.set(result.data.token);
    dispatch(authActions.registerSuccess(result.data));
  } catch (error) {
    dispatch(authActions.registerError(error));
  } finally {
    dispatch(loaderOff());
  }
};

export const logIn = userData => async dispatch => {
  try {
    dispatch(loaderOn());
    const result = await axios.post('/user/login', userData);
    magicToken.set(result.data.token);
    dispatch(authActions.loginSuccess(result.data));
  } catch (error) {
    dispatch(authActions.loginError(error));
  } finally {
    dispatch(loaderOff());
  }
};

export const logOut = () => async dispatch => {
  try {
    dispatch(loaderOn());
    const result = await axios.post('/user/logout');
    magicToken.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  dispatch(loaderOn());
  magicToken.set(persistedToken);
  try {
    const res = await axios.get('/user/current');
    dispatch(authActions.getCurrentUserSuccess(res.data));
  } catch (error) {
    authActions.getCurrentUserError(error);
  } finally {
    dispatch(loaderOff());
  }
};
