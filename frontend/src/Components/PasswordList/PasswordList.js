import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PasswordItem from '../PasswordItem/PasswordItem';
import Modal from '../Modal/Modal';
import EditForm from '../EditForm/EditForm';
import passActions from "../../Redux/actions/passwordActions";
import {useDispatch, useSelector} from 'react-redux';
import style from './PasswordList.module.css';
import animate from './PasswordAnimateItem.module.css';
import {passwordDeleteOperation, passwordUpdateOperation,passwordGetOperation} from '../../Redux/operations/passwordsOperation'


const PasswordList = () => {
  const [toggleLock, setToggleLock] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [currentItemId, setCurrentItemId] = useState(null);

  const dispatch = useDispatch();
  const passwords = useSelector(state => state.passwords.passwords)
  

  const handleToggleModal = (e, currentOpenItemId) => {
    if(currentOpenItemId){
    dispatch(passActions.passwordCurrentId(currentOpenItemId))
    }
    setToggleModal(state => !state);
  };
  const handleToggleLock = () => {
    setToggleLock(state => !state);
  };
  const deletePassword = idPassword => {
    dispatch(passwordDeleteOperation(idPassword));
  };
  const changeItem = changedItem => {
    dispatch(passwordUpdateOperation(changedItem))
  };
  useEffect(() => {
    dispatch(passwordGetOperation())
  }, [])



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
              key={el._id}
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
