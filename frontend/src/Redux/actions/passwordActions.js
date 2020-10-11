import { createAction } from '@reduxjs/toolkit';

const passwordSetSuccess = createAction('@passwords/passwordSetSuccess');
const passwordSetError = createAction('@passwords/passwordSetError');

const passwordChangeSuccess = createAction('@passwords/passwordChangeSuccess');
const passwordChangeError = createAction('@passwords/passwordChangeError');

const passwordDeleteSuccess = createAction('@passwords/passwordDeleteSuccess');
const passwordDeleteError = createAction('@passwords/passwordDeleteError');

const passwordsGetSuccess = createAction('@passwords/passwordsGetSuccess');
const passwordsGetError = createAction('@passwords/passwordsGetError');

export default {
  passwordSetSuccess,
  passwordSetError,
  passwordChangeSuccess,
  passwordChangeError,
  passwordDeleteSuccess,
  passwordDeleteError,
  passwordsGetSuccess,
  passwordsGetError,
};
