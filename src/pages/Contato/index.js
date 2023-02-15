import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Suporte from "../../Assets/Support_service_RR11.svg";
import "./Styles.css";
import api from "../../services/api2";
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
          <span>(22) 99968-83262</span>
          <p>Atendimento ao cliente: de segunda a sexta das 09:00 às 18:00h.</p>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.4452445296565!2d-42.404852!3d-22.185179400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97f1cdbddb74dd%3A0xb5a36d7e8cd36194!2sRJ-146%2C%20605%2C%20Bom%20Jardim%20-%20RJ%2C%2028660-000!5e0!3m2!1spt-BR!2sbr!4v1672944370192!5m2!1spt-BR!2sbr"
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
