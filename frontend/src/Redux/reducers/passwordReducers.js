import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import passActions from '../actions/passwordActions';

const passwords = createReducer([], {
  [passActions.passwordSetSuccess]: (state, { payload }) => [...state, payload],
  [passActions.passwordDeleteSuccess]: (state, { payload }) =>
    state.filter(password => password._id !== payload),
  [passActions.passwordsGetSuccess]: (_, { payload }) => {
    return payload;
  },
  [passActions.passwordChangeSuccess]: (state, { payload }) =>
    state.map(password => {
      return password._id === payload.passwordId
        ? { ...password, ...payload.updatedPassword }
        : password;
    }),
});

const error = createReducer(null, {
  [passActions.passwordChangeError]: (_, { payload }) => payload,
  [passActions.passwordDeleteError]: (_, { payload }) => payload,
  [passActions.passwordSetError]: (_, { payload }) => payload,
  [passActions.passwordsGetError]: (_, { payload }) => payload,
});

const passwordId = createReducer('', {
  [passActions.passwordCurrentId]: (state, action) => {
    console.log('vnutri reducer');
    return action.payload;
  },
});

export default combineReducers({
  passwords,
  error,
  passwordId,
});
