import React from 'react';
import style from './PasswordItem.module.css';
import {useDispatch} from 'react-redux';
import {passwordDeleteOperation} from '../../Redux/operations/passwordsOperation'
const PasswordItem = ({
  name,
  onToggleModal,
  _id
}) => {

  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(passwordDeleteOperation(_id));
  };
  const handleOpenModal = (e) => {
    onToggleModal(e,_id);
  };

  return (
    <li className={style['password__item']}>
      <div className={style['wave']}></div>
      <div className={`${style['wave']} ${style['-two']}`}></div>
      <div className={`${style['wave']} ${style['-three']}`}></div>
      <p className={style['password__item-title']}>{name}</p>
      <button
        className={`${style['password__item-btn']} ${style['password__item-btn--lock']}`}
        onClick={handleOpenModal}
      ></button>
      <button
        onClick={handleDeleteItem}
        className={style.password__delete}
      ></button>
    </li>
  );
};

export default PasswordItem;
