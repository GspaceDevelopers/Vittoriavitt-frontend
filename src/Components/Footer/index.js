import React, { useEffect, useState } from "react";
import "./footer.css";
import { FaHeart } from "react-icons/fa";
import api2 from "../../services/api2";

import profile from "./profilecircle.png";
import sms from "./sms.png";
import logo from "../../Assets/logo Vittoria Vitt simbolo copiar.png";
import google from "./google.png";
import ssl from "./ssl.png";
import abcomm from "./abcomm.png";
import visa from "../../Assets/formas de pagamento branco/2.png";
import master from "../../Assets/formas de pagamento branco/3.png";
import hiper from "../../Assets/formas de pagamento branco/5.png";
import amex from "../../Assets/formas de pagamento branco/1.png";
import pix from "../../Assets/formas de pagamento branco/7.png";
import boleto from "../../Assets/formas de pagamento branco/6.png";
import diners from "../../Assets/formas de pagamento branco/4.png";
import face from "./face.png";
import insta from "./Component 4.png";
import whats from "./whats.png";
import whats2 from "./whatsgrey.png";
import { toast } from "react-toastify";
import api from "../../services/api2";

export default function Footer() {
  const [nomecliente, setNomecliente] = useState("");
  const [telefone, setTelefone] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/edicao')
      .then((value) => {
        setData(value?.data)
      })
  }, [data])

  async function cadastrodeemail() {
    if (checkbox == false) {
      document.querySelectorAll(".check")[0].setAttribute("style", "color:red");
      document.querySelectorAll(".check")[1].setAttribute("style", "color:red");
      return;
    }

    if (nomecliente == "" && telefone == "") {
      toast.error("Campos vazios!");
      return;
    }
    await api2
      .post("/emailsclientes", {
        nome: nomecliente,
        telefone: telefone,
      })
      .then(() => {
        toast.success("Cadastro realizado com sucesso!");
        setTelefone("");
        setNomecliente("");
        document
          .querySelectorAll(".check")[0]
          .setAttribute("style", "color:white");
        document
          .querySelectorAll(".check")[1]
          .setAttribute("style", "color:white");
        setCheckbox(false);
      });
  }

  return (
    <footer>
      <div className="title-category-footer">
        <h2>RECEBA NOVIDADES FRESQUINHAS EM SEU WHATSAPP!</h2>
      </div>
      <div className="input-email-promocao">
        <div className="input-promo">
          <img src={profile}></img>
          <div className="linha-vertical-promo"></div>
          <input
            value={nomecliente}
            placeholder="Digite seu Nome"
            onChange={(e) => setNomecliente(e.target.value)}
            type="text"
            required
          ></input>
        </div>
        <div className="input-promo">
          <img style={{ width: "35px" }} src={whats2}></img>
          <div className="linha-vertical-promo"></div>
          <input
            value={telefone}
            placeholder="Digite seu Telefone"
            onChange={(e) => setTelefone(e.target.value)}
            type="text"
            required
          ></input>
        </div>
        {window.screen.width < 500 ? (
          <div className="input-email-promocao-checkbox">
            <input
              onChange={() => setCheckbox(true)}
              type="checkbox"
              required
            ></input>
            <span
              className="check"
              style={
                window.screen.width > 500
                  ? {
                    fontSize: "17px",
                    color: "white",
                    fontFamily: "Montserrat",
                  }
                  : {
                    fontSize: "9px",
                    color: "white",
                    fontFamily: "Montserrat",
                  }
              }
            >
              Gostaria de ser avisado com prioridade das promoções e lançamentos
              da loja.
            </span>
          </div>
        ) : (
          ""
        )}

        <button className="input-promo-btn" onClick={cadastrodeemail}>
          CADASTRAR
        </button>
      </div>
      {window.screen.width > 500 ? (
        <div className="input-email-promocao-checkbox">
          <input onChange={() => setCheckbox(true)} type="checkbox"></input>
          <span
            className="check"
            style={
              window.screen.width > 500
                ? { fontSize: "17px", color: "white", fontFamily: "Montserrat" }
                : { fontSize: "9px", color: "white", fontFamily: "Montserrat" }
            }
          >
            Gostaria de ser Avisada(o) com prioridade das promoções e lançamentos
            da loja.
          </span>
        </div>
      ) : (
        ""
      )}
      <div className="btns-footer">
        <div className="box-btns-footer">
          <span>CONTA</span>
          <a href="/login">LOGIN</a>
          <a href="/minhaconta">MINHA CONTA</a>
          <a href="/minhaconta">MEUS PEDIDOS</a>
          <a href="/favoritos">FAVORITOS</a>
        </div>
        <div className="box-btns-footer">
          <span>SOBRE NÓS</span>
          <a href="/sobrenos">CONHEÇA NOSSA HISTÓRIA</a>
          <a href="/contato">FALE CONOSCO</a>
          <a href="/politicadeprivacidade">POLITICA DE PRIVACIDADE</a>
          {/* <a href="/franqueados">SEJA UM FRANQUEADO</a> */}
        </div>
        <div className="box-btns-footer">
          <span>ATENDIMENTO</span>
          <a href="/contato">FALE CONOSCO</a>
          <a href="/politicadeprivacidade/comprasegura">COMPRA SEGURA</a>
          <a href="/politicadeprivacidade/formasdepagamento">FORMAS DE PAGAMENTO</a>
          <a href="/politicadeprivacidade/entregaefrete">ENTREGA E FRETE</a>
          <a href="/politicadeprivacidade">POLITICA DE PRIVACIDADE</a>
          <a href="/politicadeprivacidade/arrependimento">DIREITOS DE ARREPENDIMENTO</a>
          <a href="/politicadeprivacidade/trocas">TROCAS E DEVOLUÇÕES</a>
          <a href="/comocomprar">COMO COMPRAR</a>
          <a href="/perguntasfrequentes">PERGUNTAS FREQUENTES</a>
          <a href="https://contate.me/outletdaslingeries">COMPRE PELO WHATSAPP</a>
        </div>

        <div className="logo-footer">
          <img src={logo}></img>
          <div className="redes-text-flex-direction">
            <span>Nossas Redes</span>
            {<div className="redes-sociais-footer">
              <a href={data.map(item => item?.linkredes?.link1)[0]}>
                <img src={data.map(item => item?.icon1)[0] == ''? face : data.map(item => item?.icon1)[0] }></img>
              </a>
              <a href={data.map(item => item?.linkredes?.link2)[0]}>
                <img src={data.map(item => item?.icon2)[0] == ''? insta : data.map(item => item?.icon2)[0]}></img>
              </a>
              <a href={data.map(item => item?.linkredes?.link3)[0]}>
                <img src={data.map(item => item?.icon3)[0] == ''? whats : data.map(item => item?.icon3)[0]}></img>
              </a>
      </div>}
            <div className="info-empresa-footer">
              <p>{data.map(item => item?.telefoneloja)[0]}</p>
              <p>{data.map(item => item?.emailloja)[0]}</p>
              <p>{data.map(item => item?.cnpjloja)[0]}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="brends-aceitas">
        <div>
          <p style={{ color: "#fff" }}>FORMAS DE PAGAMENTO</p>
        </div>
        <div>
          <img src={visa}></img>
          <img src={master}></img>
          <img src={amex}></img>
          <img src={diners}></img>
          <img src={hiper}></img>
          <img src={pix}></img>
          <img src={boleto}></img>
        </div>
      </div>
      <div className="certificados">
        <img src={abcomm}></img>
        <img src={google}></img>
        <img src={ssl}></img>
      </div>
      <div
        onClick={() => (window.location.href = "https://gspace.com.br")}
        className="title-gspace"
      >
        Desenvolvido com <FaHeart color="red"></FaHeart> por Gspace
      </div>
    </footer>
  );
}
