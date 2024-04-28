import css from "./ImageModal.module.css";
import Modal from "react-modal";

const ImageModal = ({ onShow, onClose, alt, url }) => {
  return (
    <div>
      <Modal
        isOpen={onShow}
        contentLabel="Modal"
        onRequestClose={onClose}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        overlayClassName={css.overlay}
        className={css.modal}
        ariaHideApp={false}
      >
        <img className={css.image} src={url} alt={alt} width={500} />
      </Modal>
    </div>
  );
};

export default ImageModal;
