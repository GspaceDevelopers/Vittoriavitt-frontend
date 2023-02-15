import React, { useContext, useEffect, useState } from "react";
import Logo from "../../Assets/logo viit 1 copy.png";
import iconSearch from "../../Assets/Image/searchnormal1.png";
import Heart from "../../Assets/Image/heart.png";
import Perfil from "../../Assets/Image/profilecircle.png";
import Shop from "../../Assets/Image/shoppingbag.png";
import "./Styles.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/auth";
import firebase from "../../services/firebaseconnection";
import { toast } from "react-toastify";
import { FiMenu, FiUser } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import api from "../../services/api";

const BoxSearch = () => {
  const { usercliente, setUsercliente } = useContext(AuthContext);

  const [menuperfil, setMenuperfil] = useState(false);
  const [datacarrinho, setDatacarrinho] = useState([]);
  const [datacategorias, setDatacategorias] = useState([]);
  const [datacategorias2, setDatacategorias2] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [showmenu, setShowmenu] = useState(false);

  useEffect(() => {
    setUsercliente(JSON.parse(localStorage.getItem("sessaocliente")));
  }, []);

  useEffect(() => {
    setDatacarrinho(JSON.parse(localStorage.getItem("carrinhorr11") || "[]"));
  }, []);

  useEffect(() => {
    api.get("/categorias").then((data) => {
      setDatacategorias(
        data.data
          .slice(0, 100)
          .filter(
            (item) =>
              item.categoria != "lingeries" ||
              "lingerie" ||
              "roupas intimas" ||
              "Lingeries" ||
              "Lingerie" ||
              "sutiã" ||
              "body" ||
              "calcinhas" ||
              "calcinha" ||
              "sutiã" ||
              "body" ||
              "calcinhas" ||
              ("calcinha" && item.sub1 != "ligeries") ||
              "lingerie" ||
              "sutiã" ||
              "body" ||
              "calcinhas" ||
              "calcinha" ||
              "roupas intimas" ||
              "Lingeries" ||
              "Lingerie" ||
              "sutiã" ||
              "body" ||
              "calcinhas" ||
              ("calcinha" && item.sub2 != "ligeries") ||
              "lingerie" ||
              "sutiã" ||
              "body" ||
              "calcinhas" ||
              "calcinha" ||
              "roupas intimas" ||
              "Lingeries" ||
              "Lingerie" ||
              "sutiã" ||
              "body" ||
              "calcinhas" ||
              ("calcinha" && item.sub3 != "ligeries") ||
              "lingerie" ||
              "roupas intimas" ||
              "Lingeries" ||
              "Lingerie" ||
              "sutiã" ||
              "body" ||
              "calcinhas" ||
              ("calcinha" && item.sub4)
          )
      );
    });

    console.log(datacategorias);
  }, []);

  async function logout() {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        setUsercliente(null);
        localStorage.setItem("sessaocliente", JSON.stringify(null));
        toast.success("Saindo...");

        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      });
  }

  function pesquisar() {
    window.location.href = `/loja4/${pesquisa.toLowerCase()}`;
  }

  function vermenu() {
    setShowmenu(true);
  }

  return (
    <div className="conatiner-search-icons">
      {showmenu != false ? (
        <div className="container-modal-menucomponent">
          <div className="modal-menu-component">
            <div className="box-btns-menu-component">
              {usercliente != null ? (
                <h2
                  style={{
                    fontSize: "17px",
                    textDecoration: "none",
                    position: "absolute",
                    top: "20px",
                  }}
                >
                  <FiUser></FiUser> Olá{" "}
                  {usercliente != null ? usercliente.nome : ""}
                </h2>
              ) : (
                <a style={{ color: "#e06f84" }} href="/login">
                  Login ou{" "}
                  <a style={{ color: "#e06f84" }} href="/cadastro">
                    Cadastre-se
                  </a>
                </a>
              )}
              <button
                style={{
                  border: "0",
                  position: "absolute",
                  right: "20px",
                  top: "20px",
                  width: "auto",
                  fontSize: "20px",
                  color: "#e06f84",
                  background: "transparent",
                }}
                onClick={() => setShowmenu(false)}
              >
                X
              </button>
              <div className="btn-grup-menu">
                {datacategorias.map((item) => {
                  return (
                    <div key={item._id} className="box-item-categoria-btn">
                      <details>
                        <summary>
                          <button
                            id="details-menu-boxsearch-clicando-produto"
                            onClick={() =>
                              (window.location.href = `/loja4/${item.categoria}`)
                            }
                          >
                            {" "}
                            {item.categoria}
                          </button>{" "}
                          <IoIosArrowDown></IoIosArrowDown>
                        </summary>

                        {item.sub1 == "" ? (
                          ""
                        ) : (
                          <button
                            onClick={() =>
                              (window.location.href = `/loja4/${item.sub1}`)
                            }
                          >
                            {item.sub1}
                          </button>
                        )}
                        {item.sub2 == "" ? (
                          ""
                        ) : (
                          <button
                            onClick={() =>
                              (window.location.href = `/loja4/${item.sub2}`)
                            }
                          >
                            {item.sub2}
                          </button>
                        )}
                        {item.sub3 == "" ? (
                          ""
                        ) : (
                          <button
                            onClick={() =>
                              (window.location.href = `/loja4/${item.sub3}`)
                            }
                          >
                            {item.sub3}
                          </button>
                        )}
                        {item.sub4 == "" ? (
                          ""
                        ) : (
                          <button
                            onClick={() =>
                              (window.location.href = `/loja4/${item.sub4}`)
                            }
                          >
                            {item.sub4}
                          </button>
                        )}
                      </details>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="box-btns-menu-component">
              <div className="btn-grup-menu">
                <label>VittoriaVittStore</label>
                <button onClick={() => (window.location.href = "/sobrenos")}>
                  Sobre nós
                </button>
                {usercliente != null ? (
                  <button
                    onClick={() => (window.location.href = "/minhaconta")}
                  >
                    Minha conta
                  </button>
                ) : (
                  ""
                )}
                <button onClick={() => (window.location.href = "/favoritos")}>
                  Favoritos
                </button>
                <button onClick={() => (window.location.href = "/contato")}>
                  Fale conosco
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="search-icons">
        <div className="menu-home">
          {showmenu != true ? (
            <button onClick={vermenu}>
              <FiMenu color="#fff" size={30}></FiMenu>
            </button>
          ) : (
            <button onClick={vermenu}>
              <FiMenu color="#fff" size={30}></FiMenu>
            </button>
          )}
        </div>
        <div className="itens-search-icons">
          <div className="search-container">
            <input
              onChange={(e) => setPesquisa(e.target.value)}
              list="produtos"
              type="text"
              placeholder="O QUE VOÇÊ PROCURA HOJE?"
            />

            <datalist id="produtos">
              <option value="calcinha">Calcinhas</option>
              <option value="lingerie">Lingeries</option>
              <option value="cueca">Cuecas</option>
              <option value="sutiã">Sutiãs</option>
              <option value="fitness feminino">Fitness Feminino</option>
              <option value="fitness masculino">Fitness Masculino</option>
            </datalist>
            <img onClick={() => pesquisar()} src={iconSearch} />
          </div>

          <div className="icons-image-diver">
            <img
              onClick={() => (window.location.href = "/favoritos")}
              src={Heart}
            />
          </div>
          <div className="icons-image-diver">
            <img onClick={() => setMenuperfil(true)} src={Perfil} />
          </div>
          {menuperfil != false ? (
            <div className="menuperfilheader">
              <button onClick={() => setMenuperfil(false)} id="close-btn">
                X
              </button>
              <img src={Logo}></img>
              {usercliente == null ? (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Link className="linkbtnmenu" to="/login">
                    Login
                  </Link>
                  <Link className="linkbtnmenu" to="/cadastro">
                    Cadastre-se
                  </Link>
                </div>
              ) : (
                <div className="container-menu-user-perfil">
                  <h2>Olá {usercliente.nome}</h2>
                  <button
                    onClick={() => (window.location.href = "/Minhaconta")}
                  >
                    Minha Conta
                  </button>
                  <button onClick={() => (window.location.href = "/Favoritos")}>
                    Favoritos
                  </button>
                  <button onClick={logout}>Sair</button>
                </div>
              )}
            </div>
          ) : (
            ""
          )}
          <div className="icons-image-diver">
            <img
              src={Shop}
              onClick={() => {
                datacarrinho.length != 0
                  ? (window.location.href = "/Carrinho")
                  : toast.info("Carrinho vazio!");
              }}
            />
            <span style={{ color: "white" }}>{datacarrinho.length}</span>
          </div>
        </div>
      </div>
      <div className="logo-icons">
        <img
          onClick={() => (window.location.href = "/")}
          src={Logo}
          alt="LOGO"
        />
      </div>
    </div>
  );
};

export default BoxSearch;
