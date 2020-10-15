import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TitleField from './styleForInput';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import { passwordUpdateOperation } from '../../Redux/operations/passwordsOperation';
import style from './EditForm.module.css';

const EditForm = ({ onToggleModal }) => {
  const { passwordId } = useSelector(state => state.passwords);
  const { passwords } = useSelector(state => state.passwords);
  const dispatch = useDispatch();

  const [valueInput, setInputValue] = useState({ name: '', password: '' });
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
    dispatch(passwordUpdateOperation({ ...valueInput }));
    onToggleModal();
  };
  useEffect(() => {
    console.log('welcome from useeffect');
    if (passwordId) {
      const currentItem = passwords.find(item => item._id === passwordId);
      if (!currentItem) {
        return;
      }
      setInputValue({
        name: currentItem.name,
        password: currentItem.password,
      });
    }
  }, [passwordId]);
  return (
    <form className={style['password-form']} onSubmit={handleSubmit}>
      <TitleField
        id="input-with-icon-textfield"
        label="Name"
        value={valueInput.name}
        name="name"
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
