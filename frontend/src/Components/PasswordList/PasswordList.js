import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PasswordItem from '../PasswordItem/PasswordItem';
import Modal from '../Modal/Modal';
import EditForm from '../EditForm/EditForm';
import passActions from '../../Redux/actions/passwordActions';
import { useDispatch, useSelector } from 'react-redux';
import style from './PasswordList.module.css';
import animate from './PasswordAnimateItem.module.css';
import { passwordGetOperation } from '../../Redux/operations/passwordsOperation';

const PasswordList = () => {
  const [toggleLock, setToggleLock] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const passwords = useSelector(state => state.passwords.passwords);

  const handleToggleModal = (e, currentOpenItemId) => {
    if (currentOpenItemId) {
      dispatch(passActions.passwordCurrentId(currentOpenItemId));
    }
    setToggleModal(state => !state);
  };

  const handleToggleLock = () => {
    setToggleLock(state => !state);
  };

  useEffect(() => {
    dispatch(passwordGetOperation());
  }, []);

  const handleInput = ({ target }) => {
    const { value } = target;
    setFilter(value);
  };

  const getFilterPasswords = () => {
    return passwords.filter(data =>
      data.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return (
    <div className={style['password-wrapper']}>
      <label>
        <input
          type="text"
          className={style.password__filter}
          value={filter}
          onChange={handleInput}
        />
      </label>

      <TransitionGroup component={'ul'} className={style['password__list']}>
        {getFilterPasswords().map(el => (
          <CSSTransition key={el._id} timeout={250} classNames={animate}>
            <PasswordItem
              onToggleModal={handleToggleModal}
              {...el}
              onToggleLock={handleToggleLock}
              isLock={toggleLock}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>

      <Modal isOpenModal={toggleModal} onToggleModal={handleToggleModal}>
        <EditForm onToggleModal={handleToggleModal} />
      </Modal>
    </div>
  );
};

export default PasswordList;
