import React, { useEffect, useState } from "react";
import BoxData from "./BoxData";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ImGooglePlus } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import TabelaProdutos from "../Tabela/index";
import firebase from "../../services/firebaseconnection";
import "./Styles.css";
import { areArraysEqual } from "@mui/base";

const Index = (props) => {
  const [estoqueItem, setEstoqueItem] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [estoque, setEstoque] = useState([]);
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    fetch("https://apigspace.herokuapp.com/produtos")
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data);
        console.log(produtos);
      })
      .catch((error) => {
        console.log(error);
      });
    async function firebaseDataClients() {
      const cliente = await firebase
        .firestore()
        .collection("clientes")
        .get()
        .then((value) => {
          let arrayClients = [];
          value.docs.map((doc) => {
            return arrayClients.push(doc.data());
          });
          setClientes(arrayClients.length);
        });
    }

    firebaseDataClients();
  }, []);
  // soma do estoque total
  let soma = 0;
  produtos.map((e) => {
    // estoqueItem.push(Number(e.estoque));
    soma += Number(e.estoque);
  });
  //soma da quantidade de produtos
  let quantDeProdutosCadastrados = produtos.length;

  return (
    <>
      <div className="admin-dash">
        <h1>Admin Dashboard</h1>
        <div id="box-data-ajust">
          <BoxData
            back="green"
            image={<AiOutlineShoppingCart size={50} color="white" />}
          />

          <BoxData
            back="red"
            image={<ImGooglePlus size={50} color="white" />}
          />
          <BoxData
            text={clientes}
            back="blue"
            image={<FaUsers size={50} color="white" />}
          />
          <BoxData
            back="grey"
            text={quantDeProdutosCadastrados}
            image={<BsPlusLg size={50} color="white" />}
          />
        </div>
        <div id="box-home">
          <TabelaProdutos />
        </div>
      </div>
    </>
  );
};

export default Index;
