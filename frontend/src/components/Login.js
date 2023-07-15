import { Link } from "react-router-dom";
import Header from "./Header";
import AuthForm from "./AuthForm";

export default function Login({ handleLogin }) {

  return (
    <>
      <Header>
        <Link className="header__link" to="/sign-up" replace>
          Регистрация
        </Link>
      </Header>
      <AuthForm handleFormSubmit={handleLogin} btnName="Войти" title="Вход" />
    </>
  );
}
