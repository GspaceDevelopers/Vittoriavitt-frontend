import React, { useEffect, useState } from "react";
import api2 from "../../services/api2";
import "./Styles.css";



const Carrossel = () => {
  const [dadosedicao, setDadosedicao] = useState([]);

  useEffect(() => {
    api2.get("/edicao").then((data) => {
      setDadosedicao(data.data);
    });

    dadosedicao.map((item) => {
      if (window.screen.width >= 500) {
        document
          .querySelector(".background-image-main-one")
          .setAttribute(
            "style",
            `background-image:url(${item.componentelogos.logo1})`
          );
        document
          .querySelector(".background-image-main-two")
          .setAttribute(
            "style",
            `background-image:url(${item.componentelogos.logo2})`
          );
        document
          .querySelector(".background-image-main-three")
          .setAttribute(
            "style",
            `background-image:url(${item.componentelogos.logo3})`
          );
        document
          .querySelector(".background-image-main-four")
          .setAttribute(
            "style",
            `background-image:url(${item.componentelogos.logo4})`
          );

        document
          .querySelector(".background-image-main-five")
          .setAttribute(
            "style",
            `background-image:url(${item.componentelogos.logo5})`
          );
        document
          .querySelector(".background-image-main-six")
          .setAttribute(
            "style",
            `background-image:url(${item.componentelogos.logo6})`
          );
     
      } else {
        document
          .querySelector(".background-image-main-one")
          .setAttribute(
            "style",
            `background-image:url(${item.banners.banner1})`
          );
        document
          .querySelector(".background-image-main-two")
          .setAttribute(
            "style",
            `background-image:url(${item.banners.banner2})`
          );
        document
          .querySelector(".background-image-main-three")
          .setAttribute(
            "style",
            `background-image:url(${item.banners.banner3})`
          );
        document
          .querySelector(".background-image-main-four")
          .setAttribute(
            "style",
            `background-image:url(${item.banners.banner4})`
          );
        document
          .querySelector(".background-image-main-five")
          .setAttribute(
            "style",
            `background-image:url(${item.banners.banner5})`
          );
        document
          .querySelector(".background-image-main-six")
          .setAttribute(
            "style",
            `background-image:url(${item.banners.banner6})`
          );
      
      }
    });
  }, [dadosedicao]);

  return (
    <>
      {" "}
      <main className="main-background">
        <ul>
          <li onClick={()=>window.location.href=`${dadosedicao.map(item => item.url1)[0] == '' ? '/':dadosedicao.map(item => item.url1)}`}>
            <div className="background-image-main-one"></div>
          </li>
          <li onClick={()=>window.location.href=`${dadosedicao.map(item => item.url2)[0] == '' ? '/':dadosedicao.map(item => item.url2)}`}>
            <div className="background-image-main-two"></div>
          </li>
          <li onClick={()=>window.location.href=`${dadosedicao.map(item => item.url3)[0] == '' ? '/':dadosedicao.map(item => item.url3)}`}>
            <div className="background-image-main-three"></div>
          </li>
          <li onClick={()=>window.location.href=`${dadosedicao.map(item => item.url4)[0] == '' ? '/':dadosedicao.map(item => item.url4)}`}>
            <div className="background-image-main-four"></div>
          </li>
          <li onClick={()=>window.location.href=`${dadosedicao.map(item => item.url5)[0] == '' ? '/':dadosedicao.map(item => item.url5)}`}>
            <div className="background-image-main-five"></div>
          </li>
          <li onClick={()=>window.location.href=`${dadosedicao.map(item => item.url6)[0] == '' ? '/':dadosedicao.map(item => item.url6)}`}>
            <div className="background-image-main-six"></div>
          </li>
       
        </ul>
      </main>
    </>
  );
};

export default Carrossel;
