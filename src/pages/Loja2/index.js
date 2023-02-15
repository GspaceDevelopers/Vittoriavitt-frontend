import React, { useEffect, useState, useContext } from "react";
import "../Loja/loja.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { HiHeart } from "react-icons/hi";
import { AuthContext } from "../../Contexts/auth";
import { toast } from "react-toastify";
import { TbLayoutGrid, TbLayoutCards } from "react-icons/tb";
//icons cupoms
import cupom1 from "../../Assets/cupoms/1.png";
import cupom2 from "../../Assets/cupoms/2.png";
import cupom3 from "../../Assets/cupoms/3.png";

export default function Loja2() {
  const { usercliente } = useContext(AuthContext);

  const { categoria } = useParams();
  const [dataprodutos, setDataprodutos] = useState([]);
  const [fotocorselecionada, setFotocorselecionada] = useState();
  const [idstyle, setIdStyle] = useState();
  const [alfabetico, setalfabetico] = useState([]);
  const [precoordem, setPrecoordem] = useState([]);
  const [arrayAlfabetico, setArrayAlfabetico] = useState();
  const [corfiltro, setCorfiltro] = useState([]);
  const [arraydeCores, setArraydeCores] = useState([]);

  useEffect(() => {
    document.title = `${categoria} 👙 |  Outlet das Lingeries`;

    const categoriatext = `${categoria.toLowerCase()}`;
    console.log(categoriatext);

    api.get(`/produtos`).then((data) => {
      setDataprodutos(
        data.data.filter(
          (item) =>
            item.categoria == categoriatext ||
            item.subcategoria1 == categoriatext ||
            item.subcategoria2 == categoriatext ||
            item.subcategoria3 == categoriatext ||
            item.subcategoria4 == categoriatext
        )
      );
    });

    api.get(`/produtos`).then((data) => {
      setalfabetico();
    });

    setPrecoordem(
      dataprodutos.sort((a, b) => {
        if (a.preco < b.preco) {
          return -1;
        } else {
          return true;
        }
      })
    );

    api.get("/cores").then((data) => {
      setArraydeCores(data.data);
    });
  }, []);

  function addfavoritos(item) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");

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

  async function filterpreco() {
    const filtro = dataprodutos.filter(
      (item) =>
        parseFloat(item.preco.replace(",", ".")) >= 0.0 &&
        parseFloat(item.preco.replace(",", ".")) < 50.0
    );
    setDataprodutos(filtro);
  }
  async function filterpreco1() {
    const filtro = dataprodutos.filter(
      (item) =>
        parseFloat(item.preco.replace(",", ".")) >= 50.0 &&
        parseFloat(item.preco.replace(",", ".")) < 500.0
    );
    setDataprodutos(filtro);
  }

  function ordernarmaisrecente() {
    api.get(`/categoria?categoria=${categoria}`).then((data) => {
      setDataprodutos(dataprodutos.reverse());
    });
  }

  function ChangePositionProduct() {
    const value = document.getElementById("select-ordenar-produtos-loja").value;
    if (value == "recente") {
      setDataprodutos(dataprodutos.reverse());
    }
    if (value == "") {
      setDataprodutos(dataprodutos);
    }
    if (value == "aaz") {
      setDataprodutos(
        dataprodutos.sort((a, b) => {
          if (a.modelo < b.modelo) {
            return -1;
          } else {
            return true;
          }
        })
      );
    }
    if (value == "zaa") {
      setDataprodutos(
        dataprodutos
          .sort((a, b) => {
            if (a.modelo < b.modelo) {
              return -1;
            } else {
              return true;
            }
          })
          .reverse()
      );
    }
    if (value == "barato") {
      setDataprodutos(
        dataprodutos.sort((a, b) => {
          if (a.preco < b.preco) {
            return -1;
          } else {
            return true;
          }
        })
      );
    }
    if (value == "caro") {
      setDataprodutos(
        dataprodutos
          .sort((a, b) => {
            if (a.preco < b.preco) {
              return -1;
            } else {
              return true;
            }
          })
          .reverse()
      );
    }
  }
  function mudalayout() {
    const array = document.querySelectorAll(".item-home");

    for (let i = 0; i < array.length; i++) {
      if (window.screen.width < 999) {
        document
          .querySelectorAll(".item-home")
          [i].setAttribute("style", "width:200px");
        document
          .querySelectorAll(".imgitem-pag-loja")
          [i].setAttribute("style", "width:150px");
      }
      if (window.screen.width > 999) {
        document
          .querySelectorAll(".item-home")
          [i].setAttribute("style", "width:250px");
        document
          .querySelectorAll(".imgitem-pag-loja")
          [i].setAttribute("style", "width:200px");
      }
    }
  }
  function mudalayout2() {
    const array = document.querySelectorAll(".item-home");

    for (let i = 0; i < array.length; i++) {
      if (window.screen.width < 999) {
        document
          .querySelectorAll(".item-home")
          [i].setAttribute("style", "width:350px");
        document
          .querySelectorAll(".imgitem-pag-loja")
          [i].setAttribute("style", "width:280px");
      }
      if (window.screen.width > 999) {
        document
          .querySelectorAll(".item-home")
          [i].setAttribute("style", "width:300px");
        document
          .querySelectorAll(".imgitem-pag-loja")
          [i].setAttribute("style", "width:200px");
      }
    }
  }

  async function filtercores(item) {
    await api.get(`/produtos`).then((data) => {
      const array = data.data;
      setCorfiltro(
        array.filter(
          //cor.categoria == search || cor.subcategoria1 == search || cor.subcategoria2 == search || cor.subcategoria3 == search || cor.subcategoria4 == search &&
          (cor) =>
            cor.cores.corPrimary.cor1 == item.cor ||
            cor.cores.corSecondary.cor2 == item.cor ||
            cor.cores.corTertiary.cor3 == item.cor ||
            cor.cores.corQuaternary.cor4 == item.cor ||
            cor.cores.corFive.cor5 == item.cor ||
            cor.cores.corSix.cor6 == item.cor
        )
      );
      console.log(corfiltro);
    });
  }
  useEffect(() => {
    setDataprodutos(corfiltro);
  }, [corfiltro]);

  function cleanfiltrocor() {
    api.get(`/produtos`).then((data) => {
      setDataprodutos(
        data.data.filter(
          (item) =>
            item.categoria == categoria ||
            item.subcategoria1 == categoria ||
            item.subcategoria2 == categoria ||
            item.subcategoria3 == categoria ||
            item.subcategoria4 == categoria
        )
      );
    });
  }

  return (
    <div className="container-Loja">
      <Header back="#de4563"></Header>
      <div className="content-loja">
        <div className="banner-loja"></div>
        <div className="title-produto-loja">
          <h2>{categoria}</h2>
        </div>
      </div>
      <div className="container-produtos-loja">
        <div className="header-filtro-titulos">
          <div className="title-filtros-loja">
            <h3>FILTROS</h3>
            <div className="title-qtd-produtos-loja">
              <h4>{dataprodutos.length}</h4>
              <span>PRODUTOS</span>
            </div>
          </div>
          <div className="box-btns-vizualiar">
            {/* <button onClick={ordernarmaisrecente} className="btn-maisrecente">
              ORDENAR POR MAIS RECENTE
            </button> */}
            <select
              name="select-order"
              id="select-ordenar-produtos-loja"
              onChange={ChangePositionProduct}
            >
              <option selected value="">
                ...
              </option>
              <option value="recente">Ordenar por mais recente</option>
              <option value="aaz">A a z</option>
              <option value="zaa">Z a A</option>
              <option value="barato">Mais barato</option>
              <option value="caro">Mais caro</option>
            </select>
            <div className="box-btnsview">
              <h3>VISUALIZAÇÃO</h3>
              <button onClick={mudalayout} className="modo-view-btn">
                <TbLayoutGrid size={20}></TbLayoutGrid>
              </button>
              <button onClick={mudalayout2} className="modo-view-btn">
                <TbLayoutCards size={20}></TbLayoutCards>
              </button>
            </div>
          </div>
        </div>
        <div className="box-filtro-e-box-produtos">
          <div className="box-filtro">
            <span>PREÇO</span>
            <div className="btns-tamanho-loja">
              <button onClick={filterpreco} className="btn-tamanho-filtro">
                R$0 a R$50
              </button>
              <button onClick={filterpreco1} className="btn-tamanho-filtro">
                R$50 a R$500
              </button>
            </div>
            <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              Cores{" "}
              {corfiltro != "" ? (
                <button
                  onClick={cleanfiltrocor}
                  style={{
                    color: "red",
                    padding: "4px",
                    borderRadius: "5px",
                    border: "1px solid red",
                  }}
                >
                  Limpar
                </button>
              ) : (
                ""
              )}
            </p>
            <div className="filtro-cores">
              {arraydeCores.map((item) => {
                return (
                  <button
                    onClick={() => filtercores(item)}
                    className="btn-filtro-cores"
                    style={{
                      width: "25px",
                      height: "25px",
                      border: "1px solid black",
                      background: item.cor,
                    }}
                  ></button>
                );
              })}
            </div>
          </div>
          <div className="box-produtos">
            {dataprodutos.length == 0 ? (
              <h3>Não há produtos com o filtro selecionado!</h3>
            ) : (
              ""
            )}
            {dataprodutos.map((item) => {
              return (
                <div key={item._id} className="item-home" id="item-pag-loja">
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
                      className="imgitem imgitem-pag-loja"
                      id="imgitem-pag-loja"
                      onClick={() =>
                        (window.location.href = `/PaginaProduto/${item._id}`)
                      }
                      src={item.cores.corPrimary.imgurl}
                    ></img>
                  ) : (
                    <img
                      className="imgitem imgitem-pag-loja"
                      id="imgitem-pag-loja"
                      onClick={() =>
                        (window.location.href = `/PaginaProduto/${item._id}`)
                      }
                      src={fotocorselecionada}
                    ></img>
                  )}
                  <div className="div-ajust-flex-start">
                    <button id="btn-fav-home">
                      <HiHeart
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
                      <div style={{ width: "100%", height: "48.4px" }}></div>
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
                      Em até 7x de{" "}
                      {Number(parseFloat(item.preco) / 7).toLocaleString(
                        "pt-br",
                        { style: "currency", currency: "BRL" }
                      )}
                    </p>

                    <div
                      style={{ display: "flex" }}
                      id="label-div-ajus-absolute"
                    >
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
                            style={{
                              background: item.cores.corQuaternary.cor4,
                            }}
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
