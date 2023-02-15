import React, { useState } from "react";
import "./style.css";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Titlemainallpages from "../../Components/Titlemainallpages";
import firebase from "../../services/firebaseconnection";
import { toast } from "react-toastify";

export default function Mudasenha() {
  const [email, setEmail] = useState("");

  async function alterarsenha() {
    await firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        toast.success("Verifique sua caixa de email!");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      })
      .catch((error) => {
        toast.error(error);
      });
  }

  return (
    <div className="container-mudasenha">
      <Header back="#e06f84"></Header>
      <Titlemainallpages name="RECUPERAR SENHA"></Titlemainallpages>
      <div className="box-muda-senha">
        <span>Digite seu E-mail cadastrado</span>
        <input onChange={(e) => setEmail(e.target.value)} type="text"></input>
        <button onClick={alterarsenha}>ENVIAR</button>
      </div>
      <Footer></Footer>
    </div>
  );
}
