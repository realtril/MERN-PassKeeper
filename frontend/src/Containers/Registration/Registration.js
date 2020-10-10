import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';
import { navigation } from '../../constants/navigation';
import { ReactComponent as RegPic } from '../../icons/register.svg';
import { withStyles } from '@material-ui/core/styles';
import { registerOperation } from '../../Redux/operations/auth';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Components/Loader/Loader';
import bgWave from '../../icons/wave.png';
import css from './Registration.module.css';
import 'normalize.css';

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

const initialState = { name: '', email: '', password: '' };

const Registration = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setForm(state => ({ ...state, [name]: value }));
  };
  const onSubmit = e => {
    e.preventDefault();
    dispatch(registerOperation(form));
  };

  return (
    <>
      <section className={css.registration}>
        {false && <Loader />}
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
          <form className={css.register__form} onSubmit={onSubmit}>
            <h2 className={css.register__form_header}>Registration</h2>
            <CssTextField
              type="text"
              label="Username"
              name="name"
              required={true}
              value={form.name}
              onChange={inputHandler}
            />
            <CssTextField
              type="email"
              label="E-mail"
              name="email"
              required={true}
              value={form.email}
              onChange={inputHandler}
            />
            <CssTextField
              type="password"
              label="Password"
              name="password"
              required={true}
              value={form.password}
              onChange={inputHandler}
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
