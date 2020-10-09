import React from 'react';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';
import { navigation } from '../../constants/navigation';
import { ReactComponent as RegPic } from '../../icons/register.svg';
import bgWave from '../../icons/wave.png';
import { withStyles } from '@material-ui/core/styles';
import 'normalize.css';
import css from './Registration.module.css';

const CssTextField = withStyles(() => ({
  root: {
    width: '250px',
    margin: '0 auto 40px',
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

const Registration = () => {
  return (
    <>
      <section className={css.registration}>
        <div className={css.register_wrapper}>
          <div className={css.register_headers}>
            <h2 className={css.register__main_title}>
              Keep struggling with handling so many passwords in mind?
            </h2>
            <h5 className={css.register__title}>
              Join to PassKeeper. It's free and easy to use.
            </h5>
          </div>
          <img className={css.bg_wave} src={bgWave} alt="bg-wave" />
        </div>
        <div className={css.register__container}>
          <div className={css.register__illustration}>
            <RegPic className={css.register__illustration_pic} />
          </div>
          <form className={css.register__form}>
            <h2 className={css.register__form_header}>Registration</h2>
            <CssTextField
              type="text"
              label="Username"
              name="username"
              required={true}
            />
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
            <button type="submit" className={css.register__form_btn}>
              Register
            </button>
            <p className={css.register__form_have_account}>
              Already a member?&#8192;
              <NavLink
                className={css.register__form_login_transfer}
                to={navigation.login}
              >
                Login here
              </NavLink>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Registration;
