import { Link } from "react-router-dom";
import Header from "./Header";
import AuthForm from "./AuthForm";

export default function Register({ handleRegister }) {

  return (
    <>
      <Header>
        <Link className="header__link" to="/sign-in" replace>
          Войти
        </Link>
      </Header>
      <AuthForm
        handleFormSubmit={handleRegister}
        btnName="Зарегистрироваться"
        title="Регистрация"
      >
        <span className="register__descr">
          Уже зарегистрированы?
          <Link to="login" className="register__link">
            {" "}
            Войти
          </Link>
        </span>
      </AuthForm>
    </>
  );
}
