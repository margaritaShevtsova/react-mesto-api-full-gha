function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_background_dark ${card && "popup_opened"}`}
      id="popup_image"
    >
      <div className="popup__wrapper">
        <img
          className="popup__image"
          src={card ? card.link : "#"}
          alt={card ? card.name : ""}
        />
        <p className="popup__image-name"></p>
        <button
          className="popup__close-btn"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
