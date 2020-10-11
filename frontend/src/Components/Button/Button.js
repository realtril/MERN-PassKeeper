import React,{useState} from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PasswordCreationForm from '../PasswordCreationForm/PasswordCreationFrom'
import Modal from '../Modal/Modal';
import css from './Button.module.css'


      // <div className={`${style['wave']} ${style['-two']}`}></div>
const Button = () => {
    const [toggleModal,setToggleModal] = useState(false);
    const handleToggleModal = () => {
    setToggleModal(state => !state);
  };
    return (
        <>
        <button className={`${css["fixed-button"]} ${css["wobble"]}`}  type="button" onClick={handleToggleModal}>
          <AddCircleIcon
           fontSize="large"
           style={{ color: 'white' }}/>
        </button>
        <Modal
        isOpenModal={toggleModal}
        onToggleModal={handleToggleModal}
        >
          <PasswordCreationForm handleToggleModal={handleToggleModal}/>
        </Modal>
        </>
    );
};

export default Button;