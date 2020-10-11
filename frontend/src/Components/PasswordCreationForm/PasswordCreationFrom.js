import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import CssTextField from './styleForInputs';
import style from './PasswordForm.module.css';
import axios from 'axios';


const initialState = { 
    username: "",
    password: "",
    website: "",
    name:"",
 };
    
const PasswordCreationFrom = () => {
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
  axios
    .post("https://pm-mern.herokuapp.com/api/passwords", valueInput)
    .then(res => {
      console.log(res.data);
    });
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
              />
            <button type="submit" className={style['password-form-btn']}>
              Save
            </button>
          </form>
    );
};

export default PasswordCreationFrom;