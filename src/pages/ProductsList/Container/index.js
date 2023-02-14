import React, { useState, useEffect } from "react";
import "./Styles.css";
import Modal from "./Modal/modal";
import api from "../../../services/api";
import { toast } from "react-toastify";

const Container = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [produtosFilter, setProdutosFilter] = useState([]);
  useEffect(() => {
    fetch("https://apigspace.herokuapp.com/produtos")
      .then((response) => response.json())
      .then((data) => {
        setProdutosFilter(data);
      });
  }, []);
  let config = {
    headers: {
      Authorization: "Access-Control-Allow-Origin",
    },
  };
  async function delItem(id) {
    await api
      .delete(`/produtos/${id}`, config)
      .then(() => {
        toast.success("Excluido com sucesso");
        // window.location.reload();
      })
      .catch((error) => {
        toast.error(error);
      });
  }

  async function openModal(props) {
    console.log(props);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="produto-center">
      <div className="produto-list">
        <img src={props.image1} alt="produto" />{" "}
        <div className="product-ajust">
          <div className="produto-info">
            <h2>{props.tittle}</h2> <h2>Quantidade: {props.estoque}</h2>{" "}
            <h2>R${props.preco}</h2>
          </div>
          <div className="ajust-button-list">
            <div className="modal-ajust">
              <Modal
                modalOpen={modalIsOpen}
                modalClose={closeModal}
                testando={props.modelo}
                products={produtosFilter}
                testId={props.id}
                cor={props.cor}
                cor2={props.cor2}
                cor3={props.cor3}
                cor4={props.cor4}
                produtos={props.tittle}
                image1={props.image1}
                image2={props.image2}
                image3={props.image3}
                image4={props.image4}
                image5={props.image5}
                image6={props.image6}
                image7={props.image7}
                image8={props.image8}
                tittle={props.tittle}
                produto={props.produto}
                preco={props.preco}
                tamanho={props.tamanho}
                tamanho2={props.tamanho2}
                tamanho3={props.tamanho3}
                tamanho4={props.tamanho4}
                estoque={props.estoque}
                category={props.category}
                marca={props.marca}
                descricao={props.descricao}
                id={props.id}
              />
            </div>
            <div className="ajust-btn-list">
              <button id="modalOpen" onClick={() => openModal(props)}>
                Editar item
              </button>
              <button id="delete-product" onClick={() => delItem(props.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
