import React,{useState} from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PasswordCreationForm from '../PasswordCreationForm/PasswordCreationFrom'
import Modal from '../Modal/Modal'

const Button = () => {
    const [toggleModal,setToggleModal] = useState(false);
    const handleToggleModal = () => {
    setToggleModal(state => !state);
  };
    return (
        <>
        <button className="fixed-button wobble"  type="button" onClick={handleToggleModal}>
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