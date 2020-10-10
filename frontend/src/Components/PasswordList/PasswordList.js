import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PasswordItem from '../PasswordItem/PasswordItem';
import Modal from '../Modal/Modal';
import EditForm from '../EditForm/EditForm';
import style from './PasswordList.module.css';
import animate from './PasswordAnimateItem.module.css';

const initState = [
  {
    title: 'Facebook',
    password: ' aqweqwe343',
    id: 1,
  },
  {
    title: 'Instagram',
    password: ' aqweqwe343',
    id: 2,
  },
  {
    title: 'Vkontakte',
    password: ' aqweqwe343',
    id: 3,
  },
  {
    title: 'YouTube',
    password: ' aqweqwe343',
    id: 4,
  },
  {
    title: 'Twitter',
    password: ' aqweqwe343',
    id: 5,
  },
  {
    title: 'Linkedin',
    password: ' aqweqwe343',
    id: 6,
  },
  {
    title: 'Tinder',
    password: ' aqweqwe343',
    id: 7,
  },
  { title: 'Test', password: 'qweqwe', id: 8 },
  { title: 'Test2', password: 'qweqwe', id: 9 },
  { title: 'Test3', password: 'qweqwe', id: 10 },
  { title: 'Test4', password: 'qweqwe', id: 11 },
  { title: 'Test5', password: 'qweqwe', id: 12 },
  { title: 'Test6', password: 'qweqwe', id: 13 },
  { title: 'Test', password: 'qweqwe', id: 8 },
  { title: 'Test2', password: 'qweqwe', id: 9 },
  { title: 'Test3', password: 'qweqwe', id: 10 },
  { title: 'Test4', password: 'qweqwe', id: 11 },
  { title: 'Test5', password: 'qweqwe', id: 12 },
  { title: 'Test6', password: 'qweqwe', id: 13 },
  { title: 'Test6', password: 'qweqwe', id: 14 },
  { title: 'Test5', password: 'qweqwe', id: 15 },
  { title: 'Test6', password: 'qweqwe', id: 16 },
  { title: 'Test6', password: 'qweqwe', id: 17 },
  { title: 'Test5', password: 'qweqwe', id: 18 },
  { title: 'Test6', password: 'qweqwe', id: 19 },
  { title: 'Test6', password: 'qweqwe', id: 20 },
];

const PasswordList = () => {
  const [toggleLock, setToggleLock] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [passwords, setPasswords] = useState(initState);
  const [currentItemId, setCurrentItemId] = useState(null);
  const handleToggleModal = (e, currentOpenItemId) => {
    setCurrentItemId(currentOpenItemId);
    setToggleModal(state => !state);
  };
  const handleToggleLock = () => {
    setToggleLock(state => !state);
  };
  const deletePassword = idPassword => {
    setPasswords(state => state.filter(el => el.id !== idPassword));
  };
  const changeItem = changedItem => {
    setPasswords(state =>
      state.map(el =>
        el.id === currentItemId ? { ...el, ...changedItem } : el,
      ),
    );
  };

  return (
    <div className={style['password-wrapper']}>
      <label>
        <input type="text" className={style.password__filter} />
      </label>

      <TransitionGroup component={'ul'} className={style['password__list']}>
        {passwords.map((el, idx) => (
          <CSSTransition key={el.id} timeout={250} classNames={animate}>
            <PasswordItem
              idx={idx}
              onToggleModal={handleToggleModal}
              {...el}
              onToggleLock={handleToggleLock}
              isLock={toggleLock}
              onDeletePassword={deletePassword}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>

      <Modal isOpenModal={toggleModal} onToggleModal={handleToggleModal}>
        <EditForm
          onChangeItem={changeItem}
          passwords={passwords}
          currentItemId={currentItemId}
        />
      </Modal>
    </div>
  );
};

export default PasswordList;
