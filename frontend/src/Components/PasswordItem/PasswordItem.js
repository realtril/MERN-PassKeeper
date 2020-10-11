import React from 'react';
import style from './PasswordItem.module.css';
const PasswordItem = ({
  name,
  onToggleLock,
  onToggleModal,
  id,
  onDeletePassword,
}) => {
  const hadleDeleteItem = e => {
    onDeletePassword(id);
  };
  const handleOpenModal = e => {
    onToggleModal(e, id);
  };

  return (
    <li className={style['password__item']}>
      <div className={style['wave']}></div>
      <div className={`${style['wave']} ${style['-two']}`}></div>
      <div className={`${style['wave']} ${style['-three']}`}></div>
      <p className={style['password__item-title']}>{name}</p>
      <button
        className={`${style['password__item-btn']} ${style['password__item-btn--lock']}`}
        // onClick={onToggleLock}
        onClick={handleOpenModal}
      ></button>
      <button
        onClick={hadleDeleteItem}
        className={style.password__delete}
      ></button>
    </li>
  );
};

export default PasswordItem;
