import React from "react";
import Logo from "../../img/dashboard/iconDash/7 1 (1).png";
import "./Styles.css";

const Login = () => {
  return (
    <>
      <div className="form-box">
        <img src={Logo} alt="" srcset="" />g
        <div className="form">
          <h2 id="titulo-admin">Admin controller</h2>
          <input type="text" placeholder="Digite seu email" />
          <input type="text" placeholder="Digite sua senha" />
          <button id="form-submit-box">Entrar</button>
        </div>
      </div>
    </>
  );
};

export default Login;
