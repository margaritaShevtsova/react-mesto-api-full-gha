import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputAvatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputAvatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      btnText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <>
        <input
          className="popup__input popup__input_content_avatar-src"
          ref={inputAvatarRef}
          id="input_content_avatar-src"
          type="url"
          name="profileAvatar"
          placeholder="Ссылка на картинку"
          required
        />
        <span
          className="popup__error"
          id="input_content_avatar-src-error"
        ></span>
      </>
    </PopupWithForm>
  );
}
