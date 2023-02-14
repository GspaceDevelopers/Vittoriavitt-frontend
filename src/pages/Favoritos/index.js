import React, { useLayoutEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./style.css";
import { BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";
import Titlemainallpages from "../../Components/Titlemainallpages";

export default function Favoritos() {
  const [fav, setFav] = useState([]);
  const [datafavoritos, setDatafavoritos] = useState([]);

  useLayoutEffect(() => {
    setFav(() => JSON.parse(localStorage.getItem("favoritos") || "[]"));
  }, []);

  function delfav(item) {
    const fav = JSON.parse(localStorage.getItem("favoritos") || "[]");
    setFav(fav);

    let filtro = fav.filter((data) => data._id != item._id);

    localStorage.setItem("favoritos", JSON.stringify(filtro));

    toast.success("Item removido com sucesso!");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  return (
    <div className="container-favoritos">
      <Header back="#DE4563" />
      <div className="container-Favoritos">
        <Titlemainallpages name="MEUS FAVORITOS"></Titlemainallpages>
        {fav.length != 0 ? (
          <div className="content-favoritos-item" key={fav._id}>
            {fav.map((item) => {
              return (
                <div className="box-item-favoritos">
                  <img
                    onClick={() =>
                      (window.location.href = `/PaginaProduto/${item._id}`)
                    }
                    src={item.imgurl}
                  ></img>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "10px",
                    }}
                  >
                    <span style={{ height: "45px" }}>{item.modelo}</span>
                    <span>R${item.preco}</span>
                  </div>
                  <button onClick={() => delfav(item)} className="btn-del-fav">
                    <BiTrash color="#fff" size={25}></BiTrash>
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="box-lista-vazia-favoritos">
            <span>Lista de favoritos vazia!</span>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}
