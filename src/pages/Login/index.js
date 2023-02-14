import "./Styles.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/auth";
import { toast } from "react-toastify";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Titlemainallpages from "../../Components/Titlemainallpages";
import { HiEye, HiEyeOff } from "react-icons/hi";

export default function Login() {
  const { userclientes, loginclientes } = useContext(AuthContext);
  const [emailcliente, setEmailcliente] = useState("");
  const [senhacliente, setSenhacliente] = useState("");
  const [passwordview, setPasswordview] = useState(false);

  function logincliente(e) {
    if (emailcliente == "" && senhacliente == "") {
      toast.error("campos vazios");
    }
    e.preventDefault();
    loginclientes(emailcliente, senhacliente);
  }

  function passwordhiden() {
    setPasswordview(true);
    document.getElementById("inputsenha").setAttribute("type", "text");
  }
  function passwordshow() {
    setPasswordview(false);
    document.getElementById("inputsenha").setAttribute("type", "password");
  }
  return (
    <div className="login">
      <Header back="#e06f84"></Header>
      <div className="login-form">
        <Titlemainallpages name="LOGIN"></Titlemainallpages>
        <form onSubmit={logincliente}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <div className="box-input-login">
              <span>E-mail:</span>
              <input
                type="text"
                required
                onChange={(e) => {
                  setEmailcliente(e.target.value);
                }}
              />
            </div>
            <div className="box-input-login">
              <span>Senha:</span>
              <div style={{ display: "flex" }}>
                <input
                  id="inputsenha"
                  type="password"
                  required
                  onChange={(e) => {
                    setSenhacliente(e.target.value);
                  }}
                />
                {passwordview == false ? (
                  <button
                    type="button"
                    id="muda-password"
                    onClick={passwordhiden}
                  >
                    <HiEye size={20}></HiEye>
                  </button>
                ) : (
                  <button
                    type="button"
                    id="muda-password"
                    onClick={passwordshow}
                  >
                    <HiEyeOff size={20}></HiEyeOff>
                  </button>
                )}
              </div>
            </div>
          </div>
          <a href="/esqueciasenha">Esqueceu a sua senha?</a>
          <button type="submit" className="submit-login">
            ENTRAR
          </button>
          <span>ou</span>
          <button
            type="button"
            className="submit-login2"
            onClick={() => (window.location.href = "/cadastro")}
          >
            CRIAR CONTA
          </button>
          <br />
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
}
