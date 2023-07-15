/* eslint-disable jsx-a11y/anchor-is-valid */

import logo from "../images/header-logo.svg";

function Header({ children }) {
  return (
    <header className="header">
        <img className="header__logo" src={logo} alt="Логотип сайта" />
      {children}
    </header>
  );
}

export default Header;
