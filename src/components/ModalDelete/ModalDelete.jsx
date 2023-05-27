import { createPortal } from 'react-dom';
import css from './ModalDelete.module.css'

const modalRoot = document.querySelector('#modal-logout-root');

const ModalDelete = ({ closeModal }) => {
  

  return createPortal(
    <div className={css.deleteModal} onClick={()=>{}}>
      <div div className={css.deleteModalContent}>
        <h2 className={css.title}>
          Do you realy want to delete hero?
        </h2>
        <button className={css.btnYes}
          type="button"
          onClick={() => {
            
          }}
        >
          Yes
        </button>
        <button className={css.btnNo} type="button" onClick={closeModal}>
          {' '}
          No
        </button>
      </div>
    </div>,
    modalRoot
  );
};
export default ModalDelete