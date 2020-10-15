import { AlertTitle } from '@material-ui/lab';
import { useDispatch } from 'react-redux';
import authActions from '../../Redux/actions/authActions';
import AlertCustom from './styles';
import React, { useEffect } from 'react';

const AlertMessage = ({ error }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(authActions.loginError(false));
      dispatch(authActions.logoutError(false));
      dispatch(authActions.registerError(false));
    }, 3000);
  }, []);
  return (
    <div className="AlertWrapper" style={{ width: '500px' }}>
      {error && (
        <AlertCustom severity="error">
          <AlertTitle>Error</AlertTitle>
          Ooops, seems like an error has been occured: &#8192;
          <strong>{error.message}</strong>
        </AlertCustom>
      )}
    </div>
  );
};

export default AlertMessage;
