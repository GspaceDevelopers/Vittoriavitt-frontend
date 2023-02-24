import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Banner from "../../Assets/giffranquiado/Outlet franqueado.gif";
import Logo from "../../Assets/logooutlet.png";
import "./Styles.css";
import api2 from "../../services/api2";
import { toast } from "react-toastify";

const Afiliados = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [modalmsg, setModalmsg] = useState(false);

  async function cadastro() {
    if (nome == "" || email == "" || cpf == "" || telefone == "") {
      toast.error("Preencha todos os campos!");

      if (nome == "") {
        document
          .querySelectorAll(".errorborder")[0]
          .setAttribute("style", "border-color:red");
      } else {
        document
          .querySelectorAll(".errorborder")[0]
          .setAttribute("style", "border-color:black");
      }
      if (email == "") {
        document
          .querySelectorAll(".errorborder")[1]
          .setAttribute("style", "border-color:red");
      } else {
        document
          .querySelectorAll(".errorborder")[1]
          .setAttribute("style", "border-color:black");
      }
      if (telefone == "") {
        document
          .querySelectorAll(".errorborder")[2]
          .setAttribute("style", "border-color:red");
      } else {
        document
          .querySelectorAll(".errorborder")[2]
          .setAttribute("style", "border-color:black");
      }
      if (cpf == "") {
        document
          .querySelectorAll(".errorborder")[3]
          .setAttribute("style", "border-color:red");
      } else {
        document
          .querySelectorAll(".errorborder")[3]
          .setAttribute("style", "border-color:black");
      }

      return;
    }
    await api2
      .post("/franquias", {
        nome: nome,
        email: email,
        cpf: cpf,
        telefone: telefone,
      })
      .then(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setModalmsg(true);
        setTimeout(() => {
          setModalmsg(false);
          window.location.href = "/";
        }, 5000);
      });
  }

  return (
    <div>
      <Header back="#DE4563" />
      {modalmsg != false ? (
        <div className="modalmsg">
          <h2>Cadastro Realizado com sucesso!</h2>
          <span>Nosso time entrará em contato com voçê!</span>
          <img src={Logo}></img>
        </div>
      ) : (
        ""
      )}
      <div className="form-afiliados-container">
        <div className="form-afiliados-img">
          <img src={Banner} alt="" srcset="" />
        </div>
        <div className="form-enviar">
          <div className="form-container-afiliados-enviar">
            <h2>Inicie seu Cadastro</h2>
            <div className="style-input-label">
              <label>*Nome Completo:</label>
              <input
                className="errorborder"
                type="text"
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="style-input-label">
              <label>*Email:</label>
              <input
                className="errorborder"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="style-input-label">
              <label>*Celular:</label>
              <input
                className="errorborder"
                type="text"
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>
            <div className="style-input-label">
              <label>*CPF:</label>
              <input
                className="errorborder"
                type="text"
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>
          </div>
          <p>
            Ao continuar, confirmo que li e aceito os termos de uso. Os dados
            pessoais serão tratados nos termos de nossa{" "}
            <a href="politicadeprivacidade">Política de privacidade</a>.
          </p>
          <button onClick={cadastro} id="enviar-afiliados">
            ENVIAR
          </button>
        </div>
      </div>
      <div className="comece-sua-jornada-nova">
        <div className="texto-sua-jornada">
          <div className="text-prime-jornada">
            <h2>Comece uma nova jornada de sucesso na sua vida!</h2>
            <p>Saiba o passo a passo para começar vender as peças RR11.</p>
          </div>
        </div>
        <div className="texto-sua-jornada">
          <div className="container-text-jornada">
            <div className="number-jornada">1</div>
            <p>Preencha o formulário e comece seu cadastro.</p>
          </div>
          <div className="container-text-jornada">
            <div className="number-jornada">2</div>
            <p>Nossa equipe vai entrar em contato com você.</p>
          </div>
          <div className="container-text-jornada">
            <div className="number-jornada">3</div>
            <p>Cadastro feito! Agora só espalhar estilo e beleza pelo mundo!</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Afiliados;
