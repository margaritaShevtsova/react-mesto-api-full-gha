import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";
import { useEffect } from "react";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const inputImageName = useRef();
  const inputImageLink = useRef();

  useEffect(() => {
    inputImageName.current.value = '';
    inputImageLink.current.value = '';
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: inputImageName.current.value,
      link: inputImageLink.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="card"
      btnText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
<>
          <input
            className="popup__input popup__input_content_image-name"
            ref={inputImageName}
            id="input_content_image-name"
            type="text"
            name="name"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
          />
          <span
            className="popup__error"
            id="input_content_image-name-error"
          ></span>
          <input
            className="popup__input popup__input_content_image-src"
            ref={inputImageLink}
            id="input_content_image-src"
            type="url"
            name="cardLink"
            placeholder="Ссылка на картинку"
            required
          />
          <span
            className="popup__error"
            id="input_content_image-src-error"
          ></span>
        </>
    </PopupWithForm>
  );
}
