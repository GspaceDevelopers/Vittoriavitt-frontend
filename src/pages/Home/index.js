import React, { useState, useEffect, useContext } from "react";
import Header from "../../Components/Header";
import Carrossel from "../../Components/Carrossel";
import Footer from "../../Components/Footer";
import api from "../../services/api";
import { HiHeart } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./home.css";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/auth";
import api2 from "../../services/api2";
import ModalPromocao from "../../Components/ModalPromocao";

//icons cupoms
import cupom1 from "../../Assets/cupoms/1.png";
import cupom2 from "../../Assets/cupoms/2.png";
import cupom3 from "../../Assets/cupoms/3.png";
import cupom4 from "../../Assets/cupoms/20.png";
import cupom5 from "../../Assets/cupoms/40.png";
import cupom6 from "../../Assets/cupoms/60.png";
import cupom7 from "../../Assets/cupoms/70.png";
import cupom8 from "../../Assets/cupoms/80.png";
import cupom9 from "../../Assets/cupoms/90.png";

const Home = () => {
  const { usercliente } = useContext(AuthContext);

  const [colorChange, setColorchange] = useState(false);
  const [datafavoritos, setDatafavoritos] = useState([]);
  const [datacarrinho, setDatacarrinho] = useState([]);

  const [dataprodutos, setDataprodutos] = useState([]);
  const [dataprodutos2, setDataprodutos2] = useState([]);
  const [dataprodutos3, setDataprodutos3] = useState([]);
  const [dataprodutos4, setDataprodutos4] = useState([]);
  const [dataprodutos5, setDataprodutos5] = useState([]);
  const [dataprodutos6, setDataprodutos6] = useState([]);
  const [clientescadastradoswhatsapp, setClientescadastradoswhatsappodutos] =
    useState([]);
  const [verificatelefoneuser, setVerificatelefoneuser] = useState([]);

  const [dadosedicao, setDadosedicao] = useState([]);
  const [fotocorselecionada, setFotocorselecionada] = useState(null);

  useEffect(()=>{

    async function loadLayout(){

     await api.get("/edicao").then((data) => {
        setDadosedicao(data.data);
      });
  
      document
        .getElementById("section3-home")
        .setAttribute(
          "style",
          `background-image:url(${dadosedicao.map((item) => item?.bannercentralhome)[0]
          })`
        );
      document
        .getElementById("category-btn1")
        .setAttribute(
          "style",
          `background-image:url(${dadosedicao.map((item) => item.categoriabtnhome1?.img1)[0]
          })`
        );
      document
        .getElementById("category-btn2")
        .setAttribute(
          "style",
          `background-image:url(${dadosedicao.map((item) => item.categoriabtnhome2?.img2)[0]
          })`
        );
      document
        .getElementById("category-btn2-1")
        .setAttribute(
          "style",
          `background-image:url(${dadosedicao.map((item) => item.categoriabtnhome3?.img3)[0]
          })`
        );
      document
        .getElementById("category-btn3")
        .setAttribute(
          "style",
          `background-image:url(${dadosedicao.map((item) => item.categoriabtnhome4?.img4)[0]
          })`
        );
      document
        .getElementById("category-btn4")
        .setAttribute(
          "style",
          `background-image:url(${dadosedicao.map((item) => item.categoriabtnhome5?.img5)[0]
          })`
        );
      document
        .getElementById("category-btn5")
        .setAttribute(
          "style",
          `background-image:url(${dadosedicao.map((item) => item.categoriabtnhome6?.img6)[0]
          })`
        );
    }
    loadLayout()

  },[dadosedicao])

  useEffect(() => {
    async function loaditens() {

      await api.get("/emailsclientes").then((data) => {
        setClientescadastradoswhatsappodutos(data.data);
      });

      if (usercliente == null) {
        setVerificatelefoneuser(false);
      } else {
        setVerificatelefoneuser(
          clientescadastradoswhatsapp.some(
            (user) => user.telefone == usercliente.telefone
          )
        );
      }
      await api.get(`/promocao?promocao=true`).then((data) => {
        setDataprodutos(data.data.slice(0, 3));
        setDataprodutos2(data.data.slice(3, 6));
        setDataprodutos3(data.data.slice(6, 10));
      });

      await api.get("/produtos").then((data) => {
        setDataprodutos4(data.data.slice(0, 3));
        setDataprodutos5(data.data.slice(3, 6));
        setDataprodutos6(data.data.slice(6, 10));
      });


      setDatacarrinho(JSON.parse(localStorage.getItem("carrinhorr11") || "[]"));
      ///console.log(verificatelefoneuser)
    }
    loaditens();
  }, []);

  function addfavoritos(item) {

    const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");
    const sessaocliente = JSON.parse(localStorage.getItem("sessaocliente") || "[]");

    if(sessaocliente == null){
      toast.error('Faça login para adicionar aos favoritos!')
    }
    
    let arrayfavoritos = {
      _id: item._id,
      cpf: usercliente.cpf,
      imgurl: item.cores.corPrimary.imgurl,
      marca: item.marca,
      modelo: item.modelo,
      preco: item.preco,
    };

    favoritos.push(arrayfavoritos);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    toast.success("Item adicionado aos favoritos");
  }

  function right() {
    let rigthcontent = document.querySelectorAll(".box-itens-area-home")[0];
    rigthcontent.scrollBy(-350, 0);
  }
  function left() {
    let leftcontent = document.querySelectorAll(".box-itens-area-home")[0];
    leftcontent.scrollBy(350, 0);
  }

  function right2() {
    let rigthcontent = document.querySelectorAll(".box-itens-area-home")[1];
    rigthcontent.scrollBy(-350, 0);
  }
  function left2() {
    let leftcontent = document.querySelectorAll(".box-itens-area-home")[1];
    leftcontent.scrollBy(350, 0);
  }
  function right3() {
    let rigthcontent = document.querySelectorAll(".box-itens-area-home")[2];
    rigthcontent.scrollBy(-350, 0);
  }
  function left3() {
    let leftcontent = document.querySelectorAll(".box-itens-area-home")[2];
    leftcontent.scrollBy(350, 0);
  }
  function right4() {
    let rigthcontent = document.querySelectorAll(".box-itens-area-home")[3];
    rigthcontent.scrollBy(-350, 0);
  }
  function left4() {
    let leftcontent = document.querySelectorAll(".box-itens-area-home")[3];
    leftcontent.scrollBy(350, 0);
  }
  function right5() {
    let rigthcontent = document.querySelectorAll(".box-itens-area-home")[4];
    rigthcontent.scrollBy(-350, 0);
  }
  function left5() {
    let leftcontent = document.querySelectorAll(".box-itens-area-home")[4];
    leftcontent.scrollBy(350, 0);
  }
  function right6() {
    let rigthcontent = document.querySelectorAll(".box-itens-area-home")[5];
    rigthcontent.scrollBy(-350, 0);
  }
  function left6() {
    let leftcontent = document.querySelectorAll(".box-itens-area-home")[5];
    leftcontent.scrollBy(350, 0);
  }

  function hoverimg1(item) {
    const index = dataprodutos.findIndex((ind) => ind._id == item._id);
    document
      .querySelectorAll(".imgitem")
    [index].setAttribute(
      "src",
      `${item.cores.corPrimary.imgurl2 == ""
        ? item.cores.corPrimary.imgurl
        : item.cores.corPrimary.imgurl2
      }`
    );
  }
  function hoverimg2(item) {
    const index = dataprodutos.findIndex((ind) => ind._id == item._id);
    document
      .querySelectorAll(".imgitem")
    [index].setAttribute("src", `${item.cores.corPrimary.imgurl}`);
  }

  function hoverimg3(item) {
    const index = dataprodutos2.findIndex((ind) => ind._id == item._id);
    document
      .querySelectorAll(".imgitem2")
    [index].setAttribute(
      "src",
      `${item.cores.corPrimary.imgurl2 == ""
        ? item.cores.corPrimary.imgurl
        : item.cores.corPrimary.imgurl2
      }`
    );
  }
  function hoverimg4(item) {
    const index = dataprodutos2.findIndex((ind) => ind._id == item._id);
    document
      .querySelectorAll(".imgitem2")
    [index].setAttribute("src", `${item.cores.corPrimary.imgurl}`);
  }

  function hoverimg5(item) {
    const index = dataprodutos3.findIndex((ind) => ind._id == item._id);
    document
      .querySelectorAll(".imgitem3")
    [index].setAttribute(
      "src",
      `${item.cores.corPrimary.imgurl2 == ""
        ? item.cores.corPrimary.imgurl
        : item.cores.corPrimary.imgurl2
      }`
    );
  }
  function hoverimg6(item) {
    const index = dataprodutos3.findIndex((ind) => ind._id == item._id);
    document
      .querySelectorAll(".imgitem3")
    [index].setAttribute("src", `${item.cores.corPrimary.imgurl}`);
  }

  function hoverimg7(item) {
    const index = dataprodutos4.findIndex((ind) => ind._id == item._id);
    document
      .querySelectorAll(".imgitem4")
    [index].setAttribute(
      "src",
      `${item.cores.corPrimary.imgurl2 == ""
        ? item.cores.corPrimary.imgurl
        : item.cores.corPrimary.imgurl2
      }`
    );
  }
  function hoverimg8(item) {
    const index = dataprodutos4.findIndex((ind) => ind._id == item._id);
    document
      .querySelectorAll(".imgitem4")
    [index].setAttribute("src", `${item.cores.corPrimary.imgurl}`);
  }

  function hoverimg9(item) {
    const index = dataprodutos5.findIndex((ind) => ind._id == item._id);
    document
      .querySelectorAll(".imgitem5")
    [index].setAttribute(
      "src",
      `${item.cores.corPrimary.imgurl2 == ""
        ? item.cores.corPrimary.imgurl
        : item.cores.corPrimary.imgurl2
      }`
    );
  }
  function hoverimg10(item) {
    const index = dataprodutos5.findIndex((ind) => ind._id == item._id);
    document
      .querySelectorAll(".imgitem5")
    [index].setAttribute("src", `${item.cores.corPrimary.imgurl}`);
  }

  function hoverimg11(item) {
    const index = dataprodutos6.findIndex((ind) => ind._id == item._id);
    document
      .querySelectorAll(".imgitem6")
    [index].setAttribute(
      "src",
      `${item.cores.corPrimary.imgurl2 == ""
        ? item.cores.corPrimary.imgurl
        : item.cores.corPrimary.imgurl2
      }`
    );
  }
  function hoverimg12(item) {
    const index = dataprodutos6.findIndex((ind) => ind._id == item._id);
    document
      .querySelectorAll(".imgitem6")
    [index].setAttribute("src", `${item.cores.corPrimary.imgurl}`);
  }

  return (
    <div>
      <Header back="trasnsparent" />
      {verificatelefoneuser == true ? "" : <ModalPromocao></ModalPromocao>}
      <div className="container-home">
        <section className="section1-home">
          <Carrossel></Carrossel>
        </section>
        <section id="section2-home">
          <div className="title-category">
            <h2>FAÇA SUA COMPRA POR CATEGORIA</h2>
          </div>
          <div className="category-options">
            <div className="box-category-btns">
              <span>{dadosedicao.map(item => item.categoriabtnhome1?.title1)}</span>
              <button
                onClick={() => (window.location.href = `/loja4/${dadosedicao.map(item => item.categoriabtnhome1?.title1)}`)}
                id="category-btn1"
                className="category1homebtn"
              ></button>
            </div>
            <div className="box-category-btns">
              <span>{dadosedicao.map(item => item.categoriabtnhome2?.title2)}</span>
              <button
                onClick={() => (window.location.href = `/loja4/${dadosedicao.map(item => item.categoriabtnhome2?.title2)}`)}
                id="category-btn2"
                className="category1homebtn"
              ></button>
            </div>
            <div className="box-category-btns">
              <span>{dadosedicao.map(item => item.categoriabtnhome3?.title3)}</span>
              <button
                onClick={() => (window.location.href = `/loja4/${dadosedicao.map(item => item.categoriabtnhome3?.title3)}`)}
                id="category-btn2-1"
                className="category1homebtn"
              ></button>
            </div>
            <div className="box-category-btns">
              <span>{dadosedicao.map(item => item.categoriabtnhome4?.title4)}</span>
              <button
                onClick={() => (window.location.href = `/loja4/${dadosedicao.map(item => item.categoriabtnhome4?.title4)}`)}
                id="category-btn3"
                className="category1homebtn"
              ></button>
            </div>
            <div className="box-category-btns">
              <span>{dadosedicao.map(item => item.categoriabtnhome5?.title5)}</span>
              <button
                onClick={() => (window.location.href =`/loja4/${dadosedicao.map(item => item.categoriabtnhome5?.title5)}`)}
                id="category-btn4"
                className="category1homebtn"
              ></button>
            </div>
            <div className="box-category-btns">
              <span>{dadosedicao.map(item => item.categoriabtnhome6?.title6)}</span>
              <button
                onClick={() => (window.location.href = `/loja4/${dadosedicao.map(item => item.categoriabtnhome6?.title6)}`)}
                id="category-btn5"
                className="category1homebtn"
              ></button>
            </div>
          </div>
          <div className="title-category">
            <h2>PROMOÇÕES</h2>
          </div>
          <article className="box-itens-area-home">
            <button onClick={right} id="btn-arrow-left">
              <IoIosArrowBack size={30}></IoIosArrowBack>
            </button>
            <button onClick={left} id="btn-arrow-right">
              <IoIosArrowForward size={30}></IoIosArrowForward>
            </button>
            {dataprodutos.map((item) => {
              return (
                <div key={item._id} className="item-home">
                  {item.promocao2 == true && item.desconto == 10 ? (
                    <img id="icon-cupom" src={cupom1}></img>
                  ) : item.desconto == 30 ? (
                    <img id="icon-cupom" src={cupom2}></img>
                  ) : item.desconto == 50 ? (
                    <img id="icon-cupom" src={cupom3}></img>
                  ) : item.desconto == 20 ? (
                    <img id="icon-cupom" src={cupom4}></img>
                  ) : item.desconto == 40 ? (
                    <img id="icon-cupom" src={cupom5}></img>
                  ) : item.desconto == 60 ? (
                    <img id="icon-cupom" src={cupom6}></img>
                  ) : item.desconto == 70 ? (
                    <img id="icon-cupom" src={cupom7}></img>
                  ) : item.desconto == 80 ? (
                    <img id="icon-cupom" src={cupom8}></img>
                  ) : item.desconto == 90 ? (
                    <img id="icon-cupom" src={cupom9}></img>
                  ) : (
                    ""
                  )}
                  {fotocorselecionada == null ? (
                    <img
                      onMouseEnter={() => hoverimg1(item)}
                      onMouseOut={() => hoverimg2(item)}
                      className="imgitem"
                      onClick={() =>
                        (window.location.href = `/PaginaProduto/${item._id}`)
                      }
                      src={item.cores.corPrimary.imgurl}
                    ></img>
                  ) : (
                    <img
                      onMouseEnter={() => hoverimg1(item)}
                      onMouseOut={() => hoverimg2(item)}
                      className="imgitem"
                      onClick={() =>
                        (window.location.href = `/PaginaProduto/${item._id}`)
                      }
                      src={fotocorselecionada}
                    ></img>
                  )}
                  <button id="btn-fav-home">
                    <HiHeart
                      className="incon-btn-fav"
                      size={20}
                      onClick={() => addfavoritos(item)}
                    ></HiHeart>
                  </button>
                  <h3>{item.modelo}</h3>
                  {item.promocao2 == true ? (
                    <p
                      style={
                        window.screen.width > 500
                          ? {
                            color: "darkgreen",
                            fontWeight: "600",
                            background: "rgb(149, 255, 149)",
                            padding: "5px",
                            borderRadius: "5px",
                            height: "60px",
                          }
                          : {
                            color: "darkgreen",
                            fontWeight: "600",
                            background: "rgb(149, 255, 149)",
                            padding: "5px",
                            borderRadius: "5px",
                            fontSize: "10px",
                          }
                      }
                    >
                      Comprando {item.qtdpromocao2} produto(s) ou mais voçê
                      ganha {item.desconto}% de desconto!
                    </p>
                  ) : (
                    <div style={{ height: "60px" }}></div>
                  )}

                  <h4>R${item.preco}</h4>
                  <p
                    style={
                      window.screen.width < 450
                        ? {
                          color: "#666666",
                          marginBottom: "25px",
                          fontSize: "11px",
                          width: "max-content",
                        }
                        : { color: "#666666", marginBottom: "15px" }
                    }
                  >
                    Em até {dadosedicao.map(data => data.parcelas)[0]}x de{" "}
                    {Number(parseFloat(item.preco) / Number(dadosedicao.map(data => data.parcelas)[0])).toLocaleString(
                      "pt-br",
                      { style: "currency", currency: "BRL" }
                    )}
                  </p>
                  <div style={{ display: "flex" }} id="label-div-ajus-absolute">
                    {item.cores.corPrimary.cor1 != "" ? (
                      <div>
                        <input
                          value={item.cores.corPrimary.cor1}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem")
                            [
                              dataprodutos.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corPrimary.imgurl}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corPrimary.cor1 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corSecondary.cor2 != "" ? (
                      <div>
                        <input
                          value={item.cores.corSecondary.cor2}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem")
                            [
                              dataprodutos.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corSecondary.imgurl4}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corSecondary.cor2 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corTertiary.cor3 != "" ? (
                      <div>
                        <input
                          value={item.cores.corTertiary.cor3}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem")
                            [
                              dataprodutos.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corTertiary.imgurl7}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corTertiary.cor3 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corQuaternary.cor4 != "" ? (
                      <div>
                        <input
                          value={item.cores.corQuaternary.cor4}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem")
                            [
                              dataprodutos.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corQuaternary.imgurl10}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corQuaternary.cor4 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corFive.cor5 != "" ? (
                      <div>
                        <input
                          value={item.cores.corFive.cor5}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem")
                            [
                              dataprodutos.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corFive.imgurl13}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corFive.cor5 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corSix.cor6 != "" ? (
                      <div>
                        <input
                          value={item.cores.corSix.cor6}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem")
                            [
                              dataprodutos.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corSix.imgurl16}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corSix.cor6 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })}
          </article>
          <article className="box-itens-area-home">
            <button onClick={right2} id="btn-arrow-left">
              <IoIosArrowBack size={30}></IoIosArrowBack>
            </button>
            <button onClick={left2} id="btn-arrow-right">
              <IoIosArrowForward size={30}></IoIosArrowForward>
            </button>
            {dataprodutos2.map((item) => {
              return (
                <div key={item._id} className="item-home">
                  {item.promocao2 == true && item.desconto == 10 ? (
                    <img id="icon-cupom" src={cupom1}></img>
                  ) : item.desconto == 30 ? (
                    <img id="icon-cupom" src={cupom2}></img>
                  ) : item.desconto == 50 ? (
                    <img id="icon-cupom" src={cupom3}></img>
                  ) : item.desconto == 20 ? (
                    <img id="icon-cupom" src={cupom4}></img>
                  ) : item.desconto == 40 ? (
                    <img id="icon-cupom" src={cupom5}></img>
                  ) : item.desconto == 60 ? (
                    <img id="icon-cupom" src={cupom6}></img>
                  ) : item.desconto == 70 ? (
                    <img id="icon-cupom" src={cupom7}></img>
                  ) : item.desconto == 80 ? (
                    <img id="icon-cupom" src={cupom8}></img>
                  ) : item.desconto == 90 ? (
                    <img id="icon-cupom" src={cupom9}></img>
                  ) : (
                    ""
                  )}
                  {fotocorselecionada == null ? (
                    <img
                      onMouseEnter={() => hoverimg3(item)}
                      onMouseOut={() => hoverimg4(item)}
                      className="imgitem2"
                      onClick={() =>
                        (window.location.href = `/PaginaProduto/${item._id}`)
                      }
                      src={item.cores.corPrimary.imgurl}
                    ></img>
                  ) : (
                    <img
                      onMouseEnter={() => hoverimg1(item)}
                      onMouseOut={() => hoverimg2(item)}
                      className="imgitem2"
                      onClick={() =>
                        (window.location.href = `/PaginaProduto/${item._id}`)
                      }
                      src={fotocorselecionada}
                    ></img>
                  )}
                  <button id="btn-fav-home">
                    <HiHeart
                      className="incon-btn-fav"
                      size={20}
                      onClick={() => addfavoritos(item)}
                    ></HiHeart>
                  </button>
                  <h3>{item.modelo}</h3>
                  {item.promocao2 == true ? (
                    <p
                      style={
                        window.screen.width > 500
                          ? {
                            color: "darkgreen",
                            fontWeight: "600",
                            background: "rgb(149, 255, 149)",
                            padding: "5px",
                            borderRadius: "5px",
                            height: "60px",
                          }
                          : {
                            color: "darkgreen",
                            fontWeight: "600",
                            background: "rgb(149, 255, 149)",
                            padding: "5px",
                            borderRadius: "5px",
                            fontSize: "10px",
                          }
                      }
                    >
                      Comprando {item.qtdpromocao2} produto(s) ou mais voçê
                      ganha {item.desconto}% de desconto!
                    </p>
                  ) : (
                    <div style={{ height: "60px" }}></div>
                  )}

                  <h4>R${item.preco}</h4>
                  <p
                    style={
                      window.screen.width < 450
                        ? {
                          color: "#666666",
                          marginBottom: "25px",
                          fontSize: "11px",
                          width: "max-content",
                        }
                        : { color: "#666666", marginBottom: "15px" }
                    }
                  >
                     Em até {dadosedicao.map(data => data.parcelas)[0]}x de{" "}
                    {Number(parseFloat(item.preco) / Number(dadosedicao.map(data => data.parcelas)[0])).toLocaleString(
                      "pt-br",
                      { style: "currency", currency: "BRL" }
                    )}
                  </p>

                  <div style={{ display: "flex" }} id="label-div-ajus-absolute">
                    {item.cores.corPrimary.cor1 != "" ? (
                      <div>
                        <input
                          value={item.cores.corPrimary.cor1}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem2")
                            [
                              dataprodutos2.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corPrimary.imgurl}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corPrimary.cor1 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corSecondary.cor2 != "" ? (
                      <div>
                        <input
                          value={item.cores.corSecondary.cor2}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem2")
                            [
                              dataprodutos2.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corSecondary.imgurl4}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corSecondary.cor2 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corTertiary.cor3 != "" ? (
                      <div>
                        <input
                          value={item.cores.corTertiary.cor3}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem2")
                            [
                              dataprodutos2.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corTertiary.imgurl7}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corTertiary.cor3 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corQuaternary.cor4 != "" ? (
                      <div>
                        <input
                          value={item.cores.corQuaternary.cor4}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem2")
                            [
                              dataprodutos2.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corQuaternary.imgurl10}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corQuaternary.cor4 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corFive.cor5 != "" ? (
                      <div>
                        <input
                          value={item.cores.corFive.cor5}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem2")
                            [
                              dataprodutos2.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corFive.imgurl13}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corFive.cor5 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corSix.cor6 != "" ? (
                      <div>
                        <input
                          value={item.cores.corSix.cor6}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem2")
                            [
                              dataprodutos2.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corSix.imgurl16}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corSix.cor6 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })}
          </article>
          <article className="box-itens-area-home">
            <button onClick={right3} id="btn-arrow-left">
              <IoIosArrowBack size={30}></IoIosArrowBack>
            </button>
            <button onClick={left3} id="btn-arrow-right">
              <IoIosArrowForward size={30}></IoIosArrowForward>
            </button>
            {dataprodutos3.map((item) => {
              return (
                <div key={item._id} className="item-home">
                  {item.promocao2 == true && item.desconto == 10 ? (
                    <img id="icon-cupom" src={cupom1}></img>
                  ) : item.desconto == 30 ? (
                    <img id="icon-cupom" src={cupom2}></img>
                  ) : item.desconto == 50 ? (
                    <img id="icon-cupom" src={cupom3}></img>
                  ) : (
                    ""
                  )}
                  {fotocorselecionada == null ? (
                    <img
                      onMouseEnter={() => hoverimg5(item)}
                      onMouseOut={() => hoverimg6(item)}
                      className="imgitem3"
                      onClick={() =>
                        (window.location.href = `/PaginaProduto/${item._id}`)
                      }
                      src={item.cores.corPrimary.imgurl}
                    ></img>
                  ) : (
                    <img
                      onMouseEnter={() => hoverimg1(item)}
                      onMouseOut={() => hoverimg2(item)}
                      className="imgitem3"
                      onClick={() =>
                        (window.location.href = `/PaginaProduto/${item._id}`)
                      }
                      src={fotocorselecionada}
                    ></img>
                  )}
                  <button id="btn-fav-home">
                    <HiHeart
                      className="incon-btn-fav"
                      size={20}
                      onClick={() => addfavoritos(item)}
                    ></HiHeart>
                  </button>
                  <h3>{item.modelo}</h3>
                  {item.promocao2 == true ? (
                    <p
                      style={
                        window.screen.width > 500
                          ? {
                            color: "darkgreen",
                            fontWeight: "600",
                            background: "rgb(149, 255, 149)",
                            padding: "5px",
                            borderRadius: "5px",
                            height: "60px",
                          }
                          : {
                            color: "darkgreen",
                            fontWeight: "600",
                            background: "rgb(149, 255, 149)",
                            padding: "5px",
                            borderRadius: "5px",
                            fontSize: "10px",
                          }
                      }
                    >
                      Comprando {item.qtdpromocao2} produto(s) ou mais voçê
                      ganha {item.desconto}% de desconto!
                    </p>
                  ) : (
                    <div style={{ height: "60px" }}></div>
                  )}

                  <h4>R${item.preco}</h4>
                  <p
                    style={
                      window.screen.width < 450
                        ? {
                          color: "#666666",
                          marginBottom: "25px",
                          fontSize: "11px",
                          width: "max-content",
                        }
                        : { color: "#666666", marginBottom: "15px" }
                    }
                  >
                      Em até {dadosedicao.map(data => data.parcelas)[0]}x de{" "}
                    {Number(parseFloat(item.preco) / Number(dadosedicao.map(data => data.parcelas)[0])).toLocaleString(
                      "pt-br",
                      { style: "currency", currency: "BRL" }
                    )}
                  </p>

                  <div style={{ display: "flex" }} id="label-div-ajus-absolute">
                    {item.cores.corPrimary.cor1 != "" ? (
                      <div>
                        <input
                          value={item.cores.corPrimary.cor1}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem3")
                            [
                              dataprodutos3.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corPrimary.imgurl}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corPrimary.cor1 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corSecondary.cor2 != "" ? (
                      <div>
                        <input
                          value={item.cores.corSecondary.cor2}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem3")
                            [
                              dataprodutos3.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corSecondary.imgurl4}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corSecondary.cor2 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corTertiary.cor3 != "" ? (
                      <div>
                        <input
                          value={item.cores.corTertiary.cor3}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem3")
                            [
                              dataprodutos3.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corTertiary.imgurl7}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corTertiary.cor3 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corQuaternary.cor4 != "" ? (
                      <div>
                        <input
                          value={item.cores.corQuaternary.cor4}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem3")
                            [
                              dataprodutos3.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corQuaternary.imgurl10}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corQuaternary.cor4 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corFive.cor5 != "" ? (
                      <div>
                        <input
                          value={item.cores.corFive.cor5}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem3")
                            [
                              dataprodutos3.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corFive.imgurl13}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corFive.cor5 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corSix.cor6 != "" ? (
                      <div>
                        <input
                          value={item.cores.corSix.cor6}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem3")
                            [
                              dataprodutos3.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corSix.imgurl16}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corSix.cor6 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })}
          </article>
        </section>
        <section id="section3-home"></section>
        <section id="section4-home">
          <div className="title-category">
            <h2>NOVIDADES</h2>
          </div>
          <article className="box-itens-area-home">
            <button onClick={right4} id="btn-arrow-left">
              <IoIosArrowBack size={30}></IoIosArrowBack>
            </button>
            <button onClick={left4} id="btn-arrow-right">
              <IoIosArrowForward size={30}></IoIosArrowForward>
            </button>

            {dataprodutos4.map((item) => {
              return (
                <div key={item._id} className="item-home">
                  {item.promocao2 == true && item.desconto == 10 ? (
                    <img id="icon-cupom" src={cupom1}></img>
                  ) : item.desconto == 30 ? (
                    <img id="icon-cupom" src={cupom2}></img>
                  ) : item.desconto == 50 ? (
                    <img id="icon-cupom" src={cupom3}></img>
                  ) : (
                    ""
                  )}
                  {fotocorselecionada == null ? (
                    <img
                      onMouseEnter={() => hoverimg7(item)}
                      onMouseOut={() => hoverimg8(item)}
                      className="imgitem4"
                      onClick={() =>
                        (window.location.href = `/PaginaProduto/${item._id}`)
                      }
                      src={item.cores.corPrimary.imgurl}
                    ></img>
                  ) : (
                    <img
                      onMouseEnter={() => hoverimg1(item)}
                      onMouseOut={() => hoverimg2(item)}
                      className="imgitem4"
                      onClick={() =>
                        (window.location.href = `/PaginaProduto/${item._id}`)
                      }
                      src={fotocorselecionada}
                    ></img>
                  )}
                  <button id="btn-fav-home">
                    <HiHeart
                      className="incon-btn-fav"
                      size={20}
                      onClick={() => addfavoritos(item)}
                    ></HiHeart>
                  </button>
                  <h3>{item.modelo}</h3>
                  {item.promocao2 == true ? (
                    <p
                      style={
                        window.screen.width > 500
                          ? {
                            color: "darkgreen",
                            fontWeight: "600",
                            background: "rgb(149, 255, 149)",
                            padding: "5px",
                            borderRadius: "5px",
                            height: "60px",
                          }
                          : {
                            color: "darkgreen",
                            fontWeight: "600",
                            background: "rgb(149, 255, 149)",
                            padding: "5px",
                            borderRadius: "5px",
                            fontSize: "10px",
                          }
                      }
                    >
                      Comprando {item.qtdpromocao2} produto(s) ou mais voçê
                      ganha {item.desconto}% de desconto!
                    </p>
                  ) : (
                    <div style={{ height: "60px" }}></div>
                  )}

                  <h4>R${item.preco}</h4>
                  <p
                    style={
                      window.screen.width < 450
                        ? {
                          color: "#666666",
                          marginBottom: "25px",
                          fontSize: "11px",
                          width: "max-content",
                        }
                        : { color: "#666666", marginBottom: "15px" }
                    }
                  >
                     Em até {dadosedicao.map(data => data.parcelas)[0]}x de{" "}
                    {Number(parseFloat(item.preco) / Number(dadosedicao.map(data => data.parcelas)[0])).toLocaleString(
                      "pt-br",
                      { style: "currency", currency: "BRL" }
                    )}
                  </p>

                  <div style={{ display: "flex" }} id="label-div-ajus-absolute">
                    {item.cores.corPrimary.cor1 != "" ? (
                      <div>
                        <input
                          value={item.cores.corPrimary.cor1}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem4")
                            [
                              dataprodutos4.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corPrimary.imgurl}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corPrimary.cor1 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corSecondary.cor2 != "" ? (
                      <div>
                        <input
                          value={item.cores.corSecondary.cor2}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem4")
                            [
                              dataprodutos4.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corSecondary.imgurl4}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corSecondary.cor2 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corTertiary.cor3 != "" ? (
                      <div>
                        <input
                          value={item.cores.corTertiary.cor3}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem4")
                            [
                              dataprodutos4.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corTertiary.imgurl7}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corTertiary.cor3 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corQuaternary.cor4 != "" ? (
                      <div>
                        <input
                          value={item.cores.corQuaternary.cor4}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem4")
                            [
                              dataprodutos4.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corQuaternary.imgurl10}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corQuaternary.cor4 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corFive.cor5 != "" ? (
                      <div>
                        <input
                          value={item.cores.corFive.cor5}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem4")
                            [
                              dataprodutos4.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corFive.imgurl13}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corFive.cor5 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corSix.cor6 != "" ? (
                      <div>
                        <input
                          value={item.cores.corSix.cor6}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem4")
                            [
                              dataprodutos4.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corSix.imgurl16}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corSix.cor6 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })}
          </article>
          <article className="box-itens-area-home">
            <button onClick={right5} id="btn-arrow-left">
              <IoIosArrowBack size={30}></IoIosArrowBack>
            </button>
            <button onClick={left5} id="btn-arrow-right">
              <IoIosArrowForward size={30}></IoIosArrowForward>
            </button>
            {dataprodutos5.map((item) => {
              return (
                <div key={item._id} className="item-home">
                  {item.promocao2 == true && item.desconto == 10 ? (
                    <img id="icon-cupom" src={cupom1}></img>
                  ) : item.desconto == 30 ? (
                    <img id="icon-cupom" src={cupom2}></img>
                  ) : item.desconto == 50 ? (
                    <img id="icon-cupom" src={cupom3}></img>
                  ) : (
                    ""
                  )}
                  {fotocorselecionada == null ? (
                    <img
                      onMouseEnter={() => hoverimg9(item)}
                      onMouseOut={() => hoverimg10(item)}
                      className="imgitem5"
                      onClick={() =>
                        (window.location.href = `/PaginaProduto/${item._id}`)
                      }
                      src={item.cores.corPrimary.imgurl}
                    ></img>
                  ) : (
                    <img
                      onMouseEnter={() => hoverimg9(item)}
                      onMouseOut={() => hoverimg10(item)}
                      className="imgitem5"
                      onClick={() =>
                        (window.location.href = `/PaginaProduto/${item._id}`)
                      }
                      src={fotocorselecionada}
                    ></img>
                  )}
                  <button id="btn-fav-home">
                    <HiHeart
                      className="incon-btn-fav"
                      size={20}
                      onClick={() => addfavoritos(item)}
                    ></HiHeart>
                  </button>
                  <h3>{item.modelo}</h3>
                  {item.promocao2 == true ? (
                    <p
                      style={
                        window.screen.width > 500
                          ? {
                            color: "darkgreen",
                            fontWeight: "600",
                            background: "rgb(149, 255, 149)",
                            padding: "5px",
                            borderRadius: "5px",
                            height: "60px",
                          }
                          : {
                            color: "darkgreen",
                            fontWeight: "600",
                            background: "rgb(149, 255, 149)",
                            padding: "5px",
                            borderRadius: "5px",
                            fontSize: "10px",
                          }
                      }
                    >
                      Comprando {item.qtdpromocao2} produto(s) ou mais voçê
                      ganha {item.desconto}% de desconto!
                    </p>
                  ) : (
                    <div style={{ height: "60px" }}></div>
                  )}

                  <h4>R${item.preco}</h4>
                  <p
                    style={
                      window.screen.width < 450
                        ? {
                          color: "#666666",
                          marginBottom: "25px",
                          fontSize: "11px",
                          width: "max-content",
                        }
                        : { color: "#666666", marginBottom: "15px" }
                    }
                  >
                     Em até {dadosedicao.map(data => data.parcelas)[0]}x de{" "}
                    {Number(parseFloat(item.preco) / Number(dadosedicao.map(data => data.parcelas)[0])).toLocaleString(
                      "pt-br",
                      { style: "currency", currency: "BRL" }
                    )}
                  </p>

                  <div style={{ display: "flex" }} id="label-div-ajus-absolute">
                    {item.cores.corPrimary.cor1 != "" ? (
                      <div>
                        <input
                          value={item.cores.corPrimary.cor1}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem5")
                            [
                              dataprodutos5.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corPrimary.imgurl}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corPrimary.cor1 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corSecondary.cor2 != "" ? (
                      <div>
                        <input
                          value={item.cores.corSecondary.cor2}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem5")
                            [
                              dataprodutos5.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corSecondary.imgurl4}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corSecondary.cor2 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corTertiary.cor3 != "" ? (
                      <div>
                        <input
                          value={item.cores.corTertiary.cor3}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem5")
                            [
                              dataprodutos5.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corTertiary.imgurl7}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corTertiary.cor3 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corQuaternary.cor4 != "" ? (
                      <div>
                        <input
                          value={item.cores.corQuaternary.cor4}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem5")
                            [
                              dataprodutos5.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corQuaternary.imgurl10}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corQuaternary.cor4 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corFive.cor5 != "" ? (
                      <div>
                        <input
                          value={item.cores.corFive.cor5}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem5")
                            [
                              dataprodutos5.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corFive.imgurl13}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corFive.cor5 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corSix.cor6 != "" ? (
                      <div>
                        <input
                          value={item.cores.corSix.cor6}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem5")
                            [
                              dataprodutos5.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corSix.imgurl16}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corSix.cor6 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })}
          </article>

          <article className="box-itens-area-home">
            <button onClick={right6} id="btn-arrow-left">
              <IoIosArrowBack size={30}></IoIosArrowBack>
            </button>
            <button onClick={left6} id="btn-arrow-right">
              <IoIosArrowForward size={30}></IoIosArrowForward>
            </button>
            {dataprodutos6.map((item) => {
              return (
                <div key={item._id} className="item-home">
                  {item.promocao2 == true && item.desconto == 10 ? (
                    <img id="icon-cupom" src={cupom1}></img>
                  ) : item.desconto == 30 ? (
                    <img id="icon-cupom" src={cupom2}></img>
                  ) : item.desconto == 50 ? (
                    <img id="icon-cupom" src={cupom3}></img>
                  ) : (
                    ""
                  )}

                  {fotocorselecionada == null ? (
                    <img
                      onMouseEnter={() => hoverimg11(item)}
                      onMouseOut={() => hoverimg12(item)}
                      className="imgitem6"
                      onClick={() =>
                        (window.location.href = `/PaginaProduto/${item._id}`)
                      }
                      src={item.cores.corPrimary.imgurl}
                    ></img>
                  ) : (
                    <img
                      onMouseEnter={() => hoverimg11(item)}
                      onMouseOut={() => hoverimg12(item)}
                      className="imgitem6"
                      onClick={() =>
                        (window.location.href = `/PaginaProduto/${item._id}`)
                      }
                      src={fotocorselecionada}
                    ></img>
                  )}
                  <button id="btn-fav-home">
                    <HiHeart
                      className="incon-btn-fav"
                      size={20}
                      onClick={() => addfavoritos(item)}
                    ></HiHeart>
                  </button>
                  <h3>{item.modelo}</h3>
                  {item.promocao2 == true ? (
                    <p
                      style={
                        window.screen.width > 500
                          ? {
                            color: "darkgreen",
                            fontWeight: "600",
                            background: "rgb(149, 255, 149)",
                            padding: "5px",
                            borderRadius: "5px",
                            height: "60px",
                          }
                          : {
                            color: "darkgreen",
                            fontWeight: "600",
                            background: "rgb(149, 255, 149)",
                            padding: "5px",
                            borderRadius: "5px",
                            fontSize: "10px",
                          }
                      }
                    >
                      Comprando {item.qtdpromocao2} produto(s) ou mais voçê
                      ganha {item.desconto}% de desconto!
                    </p>
                  ) : (
                    <div style={{ height: "60px" }}></div>
                  )}

                  <h4>R${item.preco}</h4>
                  <p
                    style={
                      window.screen.width < 450
                        ? {
                          color: "#666666",
                          marginBottom: "25px",
                          fontSize: "11px",
                          width: "max-content",
                        }
                        : { color: "#666666", marginBottom: "15px" }
                    }
                  >
                      Em até {dadosedicao.map(data => data.parcelas)[0]}x de{" "}
                    {Number(parseFloat(item.preco) / Number(dadosedicao.map(data => data.parcelas)[0])).toLocaleString(
                      "pt-br",
                      { style: "currency", currency: "BRL" }
                    )}
                  </p>

                  <div style={{ display: "flex" }} id="label-div-ajus-absolute">
                    {item.cores.corPrimary.cor1 != "" ? (
                      <div>
                        <input
                          value={item.cores.corPrimary.cor1}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem6")
                            [
                              dataprodutos6.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corPrimary.imgurl}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corPrimary.cor1 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corSecondary.cor2 != "" ? (
                      <div>
                        <input
                          value={item.cores.corSecondary.cor2}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem6")
                            [
                              dataprodutos6.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corSecondary.imgurl4}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corSecondary.cor2 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corTertiary.cor3 != "" ? (
                      <div>
                        <input
                          value={item.cores.corTertiary.cor3}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem6")
                            [
                              dataprodutos6.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corTertiary.imgurl7}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corTertiary.cor3 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corQuaternary.cor4 != "" ? (
                      <div>
                        <input
                          value={item.cores.corQuaternary.cor4}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem6")
                            [
                              dataprodutos6.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corQuaternary.imgurl10}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corQuaternary.cor4 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corFive.cor5 != "" ? (
                      <div>
                        <input
                          value={item.cores.corFive.cor5}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem6")
                            [
                              dataprodutos6.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corFive.imgurl13}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corFive.cor5 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.cores.corSix.cor6 != "" ? (
                      <div>
                        <input
                          value={item.cores.corSix.cor6}
                          name="cores3"
                          type="radio"
                          onChange={() =>
                            document
                              .querySelectorAll(".imgitem6")
                            [
                              dataprodutos6.findIndex(
                                (index) => index._id === item._id
                              )
                            ].setAttribute(
                              "src",
                              `${item.cores.corSix.imgurl16}`
                            )
                          }
                        ></input>
                        <label
                          style={{ background: item.cores.corSix.cor6 }}
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })}
          </article>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
