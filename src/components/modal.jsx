/* eslint-disable react/prop-types */
import './styles/modal.css';

const Modal = ( {selectedCard, onClose} ) => {
  if (!selectedCard) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={onClose}>Back to List</button>
        <img alt={selectedCard.name} src={selectedCard.image_uris.normal}/>
        <h2>{selectedCard.name}</h2>
      </div>
    </div>
  )
}

export default Modal;