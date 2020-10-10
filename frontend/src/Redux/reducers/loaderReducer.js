import { createReducer } from '@reduxjs/toolkit';
import { loaderOn, loaderOff } from '../actions/loaderActions';

export default createReducer(false, {
  [loaderOn]: (state, { payload }) => payload,
  [loaderOff]: (state, { payload }) => payload,
});
