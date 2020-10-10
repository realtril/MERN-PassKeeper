import axios from 'axios';
import { loaderOff, loaderOn } from '../actions/loaderActions';
import authActions from '../actions/authActions';
import { setError, resetError } from '../actions/errorActions';

axios.defaults.baseURL = 'https://pm-mern.herokuapp.com/api/user';

export const registerOperation = userData => async dispatch => {
  try {
    dispatch(loaderOn());
    const result = await axios.post('/register', userData);
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
    const result = await axios.post('/login', userData);
    dispatch(authActions.loginSuccess(result.data));
  } catch (error) {
    dispatch(authActions.loginError(error));
  } finally {
    dispatch(loaderOff());
  }
};
