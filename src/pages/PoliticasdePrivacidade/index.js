import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import api from "../../services/api";

export default function PoliticadePrivacidade() {
  const [valuepoliticaedit, setValuepoliticaedit] = useState();
  useEffect(() => {
    setTimeout(() => {
      if (
        document.location.pathname == "/politicadeprivacidade/entregaefrete" &&
        window.screen.width > 500
      ) {
        window.scrollTo({
          top: 2500,
          behavior: "smooth",
        });
      } else if (
        document.location.pathname == "/politicadeprivacidade/entregaefrete" &&
        window.screen.width < 500
      ) {
        window.scrollTo({
          top: 6000,
          behavior: "smooth",
        });
      }
      if (
        document.location.pathname == "/politicadeprivacidade/arrependimento" &&
        window.screen.width > 500
      ) {
        window.scrollTo({
          top: 2400,
          behavior: "smooth",
        });
      } else if (
        document.location.pathname == "/politicadeprivacidade/arrependimento" &&
        window.screen.width < 500
      ) {
        window.scrollTo({
          top: 5500,
          behavior: "smooth",
        });
      }
      if (
        document.location.pathname == "/politicadeprivacidade/trocas" &&
        window.screen.width > 500
      ) {
        window.scrollTo({
          top: 2085,
          behavior: "smooth",
        });
      } else if (
        document.location.pathname == "/politicadeprivacidade/trocas" &&
        window.screen.width < 500
      ) {
        window.scrollTo({
          top: 4870,
          behavior: "smooth",
        });
      }
      if (
        document.location.pathname == "/politicadeprivacidade/comprasegura" &&
        window.screen.width > 500
      ) {
        window.scrollTo({
          top: 2950,
          behavior: "smooth",
        });
      } else if (
        document.location.pathname == "/politicadeprivacidade/comprasegura" &&
        window.screen.width < 500
      ) {
        window.scrollTo({
          top: 7130,
          behavior: "smooth",
        });
      }
      if (
        document.location.pathname ==
          "/politicadeprivacidade/formasdepagamento" &&
        window.screen.width > 500
      ) {
        window.scrollTo({
          top: 3100,
          behavior: "smooth",
        });
      } else if (
        document.location.pathname ==
          "/politicadeprivacidade/formasdepagamento" &&
        window.screen.width < 500
      ) {
        window.scrollTo({
          top: 7490,
          behavior: "smooth",
        });
      }
    }, 1000);

    // console.log(document.location.pathname)
  }, []);
  useEffect(() => {
    api.get("/politicaedit").then((item) => {
      const array = item.data;
      setValuepoliticaedit(array[array.length - 1].politica);
    });
  }, []);
  return (
    <div className="container-politica">
      <Header back="#e06f84" />

      <div className="content-politica">
        <h2>POLÍTICAS DE PRIVACIDADE</h2>

        <p>{valuepoliticaedit}</p>
      </div>
      <Footer />
    </div>
  );
}
