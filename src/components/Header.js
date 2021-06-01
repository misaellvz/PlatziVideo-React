import React from "react";
import "../assets/styles/components/Header.scss";
import logo from "../../images/logo-platzi-video-BW2.png";
import  userIcon  from  "../assets/static/user-icon.png"

const Header = () => {
  return (
    <header className="header">
      <img className="header__img" src={logo} alt="Platzi-video-logo"></img>
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={userIcon} alt="user-icon" />
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