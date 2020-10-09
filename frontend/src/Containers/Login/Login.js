import React from 'react';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';
import { navigation } from '../../constants/navigation';
import { ReactComponent as RegPic } from '../../icons/login.svg';
import bgWave from '../../icons/wave.png';
import { withStyles } from '@material-ui/core/styles';
import css from './Login.module.css';

const CssTextField = withStyles(() => ({
  root: {
    width: '250px',
    margin: '0 auto 38px',
    '& label.Mui-focused': {
      color: '#00BFA6',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#00BFA6',
    },
    '& .MuiFormLabel-root ': {
      fontFamily: 'Poppins',
    },
    display: 'flex',
  },
}))(TextField);

const Login = () => {
  return (
    <>
      <div className={css.login_wrapper}>
        <div className={css.login_headers}>
          <h2 className={css.login__main_title}>
            WELCOME TO YOUR SIMPLER LIFE ONLINE
          </h2>
          <h5 className={css.login__title}>
            Fill all your passwords, payments, and personal details across the
            web, on any device.
          </h5>
        </div>
      </div>
      <img className={css.bg_wave} src={bgWave} alt="bg-wave" />
      <div className={css.login__container}>
        <div className={css.login__illustration}>
          <RegPic className={css.login__illustration_pic} />
        </div>
        <form className={css.login__form}>
          <h2 className={css.login__form_header}>Login</h2>
          <div className={css.login__form_input_wrapper}>
            <CssTextField
              type="email"
              label="E-mail"
              name="email"
              required={true}
            />
            <CssTextField
              type="password"
              label="Password"
              name="password"
              required={true}
            />
          </div>
          <button type="submit" className={css.login__form_btn}>
            login
          </button>
          <p className={css.login__form_have_account}>
            No account yet?&#8192;
            <NavLink
              className={css.login__form_login_transfer}
              to={navigation.registration}
            >
              Register
            </NavLink>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
