import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Suporte from "../../Assets/Support_service_RR11.svg";
import "./Styles.css";
import api from "../../services/api2";
import api2 from "../../services/api";
import { toast } from "react-toastify";
import { borderColor } from "@mui/system";
import imgBanner from "./Rectangle 61.png";
import Iframe from "react-iframe";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [assunto, setAssunto] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [numeropedido, setNumeropedido] = useState("");
  const [valuecontato, setValuecontato] = useState([]);
  const [valuecontatomap, setValuecontatomap] = useState();
  const [valuecontatotexto, setValuecontatotexto] = useState();
  const [valuecontatonumero, setValuecontatonumero] = useState();
  useEffect(() => {
    api2
      .get("/contatoedit")
      .then((item) => {
        const array = item.data;
        console.log(array);
        setValuecontatomap(array[array.length - 1].mapa);
        setValuecontatonumero(array[array.length - 1].numero);
        setValuecontatotexto(array[array.length - 1].texto);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  async function sendmsg() {
    if (nome == "" || email == "" || mensagem == "") {
      if (nome == "") {
        document
          .querySelectorAll(".sac")[0]
          .setAttribute("style", "border-color:red");
      } else {
        document
          .querySelectorAll(".sac")[0]
          .setAttribute("style", "border-color:black");
      }

      if (email == "") {
        document
          .querySelectorAll(".sac")[1]
          .setAttribute("style", "border-color:red");
      } else {
        document
          .querySelectorAll(".sac")[1]
          .setAttribute("style", "border-color:black");
      }

      if (mensagem == "") {
        document
          .querySelectorAll(".sac")[2]
          .setAttribute("style", "border-color:red");
      } else {
        document
          .querySelectorAll(".sac")[2]
          .setAttribute("style", "border-color:black");
      }
      if (telefone == "") {
        document
          .querySelectorAll(".sac")[3]
          .setAttribute("style", "border-color:red");
      } else {
        document
          .querySelectorAll(".sac")[3]
          .setAttribute("style", "border-color:black");
      }
      if (cpf == "") {
        document
          .querySelectorAll(".sac")[5]
          .setAttribute("style", "border-color:red");
      } else {
        document
          .querySelectorAll(".sac")[5]
          .setAttribute("style", "border-color:black");
      }

      return;
    }

    const data = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()} as ${new Date().getHours()}:${new Date().getMinutes()}`;
    // console.log(data);
    await api
      .post("/sac", {
        headers: {
          Authorization: "Access-Control-Allow-Origin",
        },
        nome: nome,
        email: email,
        mensagem: mensagem,
        data: data,
        telefone: telefone,
        cpf: cpf,
        assunto: assunto,
        numeropedido: numeropedido,
      })
      .then(() => {
        toast.success("Mensagem enviada com sucesso,  aguarde nosso retorno!");
      });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  return (
    <div>
      <Header back="#DE4563" />
      <div className="banner-div-main-banner">
        <img src={imgBanner} alt="" srcset="" />
      </div>
      <div className="div-form-main-father">
        <div className="div-form-second-son">
          <h3>Fale conosco</h3>
          <p>
            Preencha o formulário e retornaremos seu contato o mais breve
            possível
          </p>
          <span>{valuecontatonumero}</span>
          <p>Atendimento ao cliente: {valuecontatotexto}</p>
        </div>
        <div className="div-form-third-son">
          <div className="div-form-third-son-main-master">
            <div className="div-form-third-son-main">
              {" "}
              <label>Assunto*</label>
              <select
                className="sac"
                onChenge={(e) => setNome(e.target.value)}
                t
                onChange={(e) => setAssunto(e.target.value)}
                name=""
                id=""
              >
                <option>tipo de assunto</option>
                <option value={"Problemas com cadastro"}>
                  Problemas com cadastro
                </option>
                <option value={"Problemas com a conta"}>
                  Problemas com a conta
                </option>
                <option value={"Outros"}>Outros</option>
              </select>
            </div>
            <div className="div-form-third-son-main">
              {" "}
              <label>Nome*</label>
              <input
                className="sac"
                onChenge={(e) => setNome(e.target.value)}
                type="text"
              />
            </div>
          </div>
          <div className="div-form-third-son-main-master">
            <div className="div-form-third-son-main">
              {" "}
              <label>E-mail*</label>
              <input
                className="sac"
                onChenge={(e) => setEmail(e.target.value)}
                type="text"
              />
            </div>
          </div>
          <div className="div-form-third-son-main-master">
            <div className="div-form-third-son-main">
              {" "}
              <label>Celular</label>
              <input
                className="sac"
                onChenge={(e) => setTelefone(e.target.value)}
                type="text"
              />
            </div>
            <div className="div-form-third-son-main">
              {" "}
              <label>Número do Pedido (opicional)</label>
              <input
                className="sac"
                onChenge={(e) => setNumeropedido(e.target.value)}
                type="text"
              />
            </div>
          </div>
          <div className="div-form-third-son-main-master">
            <div className="div-form-third-son-main">
              {" "}
              <label>CPF*</label>
              <input
                className="sac"
                onChenge={(e) => setCpf(e.target.value)}
                type="text"
              />
            </div>
            <div className="div-form-third-son-main"> </div>
          </div>
          <div id="text-area">
            {" "}
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={(e) => setMensagem(e.target.value)}
            ></textarea>
          </div>
          <div id="text-area">
            {" "}
            <button onClick={sendmsg}>ENVIAR</button>
          </div>
        </div>
      </div>
      <div className="div-iframe-maps">
        <Iframe
          src={String(valuecontatomap)}
          width="1300"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></Iframe>
        <br></br>
        <br></br>
      </div>
      <Footer />
    </div>
  );
};

export default Contato;
