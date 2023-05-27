import { createPortal } from 'react-dom';
import css from './ModalDelete.module.css'
import { useEffect } from 'react';
import { useNavigate   } from 'react-router-dom';
import {useDeleteHeroMutation} from '../../redux/heroAPI'
const modalRoot = document.querySelector('#modal-logout-root');

const ModalDelete = ({ toggleModal ,heroId }) => {
  const navigate = useNavigate();
  const [deleteHero] = useDeleteHeroMutation();
  const handelDeleteHero=()=>{
    navigate('/')
    deleteHero(heroId);
  }
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });


  return createPortal(
    <div className={css.deleteModal} onClick={handleBackdropClick}>
      <div div className={css.deleteModalContent}>
        <h2 className={css.title}>
          Do you realy want to delete hero?
        </h2>
        <button className={css.btnYes}
          type="button"
          onClick={handelDeleteHero}
        >
          Yes
        </button>
        <button className={css.btnNo} type="button" onClick={toggleModal}>
          {' '}
          No
        </button>
      </div>
    </div>,
    modalRoot
  );
};
export default ModalDelete