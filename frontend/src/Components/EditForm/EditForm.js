import React, { useState, useEffect } from 'react';
import TitleField from './styleForInput';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import style from './EditForm.module.css';

const initState = {
  title: '',
  password: '',
};
const EditForm = ({ onChangeItem, currentItemId, passwords }) => {
  const [valueInput, setInputValue] = useState(initState);
  const [showPassword, setShowPassword] = useState(false);
  const handleChangeValue = e => {
    const { name, value } = e.target;
    setInputValue(state => {
      return {
        ...state,
        [name]: value,
      };
    });
  };
  const handleShowPassword = () => {
    setShowPassword(state => !state);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onChangeItem(valueInput);
    // setInputValue(initState);
  };
  useEffect(() => {
    if (currentItemId) {
      const currentItem = passwords.find(item => item._id === currentItemId);
      if (!currentItem) {
        return;
      }
      setInputValue({
        title: currentItem.title,
        password: currentItem.password,
      });
    }
  }, [currentItemId]);
  return (
    <form className={style['password-form']} onSubmit={handleSubmit}>
      <TitleField
        id="input-with-icon-textfield"
        label="Name"
        value={valueInput.title}
        name="title"
        onChange={handleChangeValue}
        type="text"
      />

      <TitleField
        label="Password"
        onChange={handleChangeValue}
        type={`${showPassword ? 'text' : 'password'}`}
        value={valueInput.password}
        name="password"
        autoComplete="on"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <span
                className={style['password-form--visible-password']}
                onClick={handleShowPassword}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </span>
            </InputAdornment>
          ),
        }}
      />

      <button className={style['password-form-btn']}>save</button>
    </form>
  );
};

export default EditForm;
