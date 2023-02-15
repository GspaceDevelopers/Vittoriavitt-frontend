import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Titlemainallpages from "../../Components/Titlemainallpages";
import api from "../../services/api";

export default function PerguntasFrequentes() {
  const [dataperguntas, setDataperguntas] = useState([]);

  useEffect(() => {
    api.get("/perguntas").then((item) => {
      setDataperguntas(item.data);
      //console.log(datacores);
    });
  }, []);
  return (
    <div className="container-perguntas">
      <Header back="#de4563"></Header>
      <Titlemainallpages name={"Perguntas Frequentes"}></Titlemainallpages>
      <div className="content-perguntas">
        {dataperguntas.map((item) => {
          return (
            <details key={item._id}>
              <summary>{item.sumary}</summary>
              <p>{item.resposta}</p>
            </details>
          );
        })}
      </div>
      <div className="box-ir-contato">
        <h2>SUA PERGUNTA NÃO ESTÁ AQUI?</h2>
        <a href="/contato" target={"_blank"}>
          FALE COM NOSSA EQUIPE
        </a>
      </div>
      <Footer></Footer>
    </div>
  );
}
