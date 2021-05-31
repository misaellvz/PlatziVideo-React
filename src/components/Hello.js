import React from "react";
import "../assets/styles/App.scss";

const Header = () => {
  return (
    <header className="header">
      <img className="header__img" src="../../images/logo-platzi-video-BW2.png" alt="Platzi-video-logo"></img>
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src="../../images/user-icon.png" alt="user-icon" />
          <p>Perfil</p>
        </div>
        <ul>
          <li><a href="/">Cuenta</a></li>
          <li><a href="/">Cerrar Sesión</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;