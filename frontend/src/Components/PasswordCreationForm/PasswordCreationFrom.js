import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import CssTextField from './styleForInputs';
import style from './PasswordForm.module.css';
import {passwordSetOperation} from '../../Redux/operations/passwordsOperation';


const initialState = { 
    username: "",
    password: "",
    website: "",
    name:"",
 };
    
const PasswordCreationFrom = ({handleToggleModal}) => {
const dispatch = useDispatch()
 const [valueInput, setInputValue] = useState(initialState);
    const handleChangeValue = ({target}) => {
    const { name, value } = target;
    setInputValue(state => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

const submitHandler = e => {
  e.preventDefault();
  dispatch(passwordSetOperation(valueInput))
  handleToggleModal();
}

    return (
         <form  className={style['password-form']} onSubmit={submitHandler}>
              <CssTextField
                type="text"
                label="Username"
                name="username"
                onChange={handleChangeValue}
                value={valueInput.username}
                required={true}
              />
              <CssTextField
                type="password"
                label="Password"
                name="password"
                onChange={handleChangeValue}
                value={valueInput.password}
                required={true}
              />
                <CssTextField
                type="text"
                label="Website"
                name="website"
                onChange={handleChangeValue}
                value={valueInput.website}
                required={true}
              />
                <CssTextField
                type="text"
                label="Name"
                value={valueInput.name}
                name="name"
                onChange={handleChangeValue}
                required={true}
                inputProps={{ maxLength: 11 }}
              />
            <button type="submit" className={style['password-form-btn']}>
              Save
            </button>
          </form>
    );
};

export default PasswordCreationFrom;