import successImage from "../images/Success.svg";
import faleImage from "../images/Fale.svg";
import Popup from "./Popup";

export default function InfoTooltip({ onClose, isOpen, isSuccess, name }) {
  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
        <img
          className="popup__image_type_tooltip"
          src={isSuccess ? successImage : faleImage}
          alt={isSuccess ? "Знак галочки" : "Знак крестика"}
        />
        <p className="popup__descr">
          {isSuccess
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </p>
    </Popup>
  );
}
