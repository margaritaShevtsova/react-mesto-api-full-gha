import PopupWithForm from "./PopupWithForm";
import { useState } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useEffect } from "react";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

  const [values, setValues] = useState({});
  

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setValues({profileName: currentUser.name, profileDescription: currentUser.about})
  }, [currentUser, isOpen]);

  function handleInputChange(e) { 
    const { name, value } = e.target
      setValues((prev) => ({ 
      ...prev, 
      [name]: value
    })) 
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(values.profileName);

    onUpdateUser({
      name: values.profileName,
      about: values.profileDescription,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      btnText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <>
          <input
            className="popup__input popup__input_content_name"
            value={values.profileName || ""}
            onChange={handleInputChange}
            id="input_content_name"
            name="profileName"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__error" id="input_content_name-error"></span>
          <input
            className="popup__input popup__input_content_job"
            value={values.profileDescription || ""}
            onChange={handleInputChange}
            id="input_content_job"
            name="profileDescription"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__error" id="input_content_job-error"></span>
        </>
    </PopupWithForm>
  );
}
