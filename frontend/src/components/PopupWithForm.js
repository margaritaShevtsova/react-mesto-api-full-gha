import Popup from "./Popup";

function PopupWithForm({
  title,
  name,
  btnText,
  isOpen,
  onClose,
  children,
  onSubmit,
}) {
  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} onSubmit={onSubmit}>
          {children}
          <button className="popup__submit-btn" type="submit">
            {btnText}
          </button>
        </form>
    </Popup>
  );
}

export default PopupWithForm;
