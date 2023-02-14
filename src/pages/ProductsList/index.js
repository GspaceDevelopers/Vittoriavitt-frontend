import React, { useEffect, useState } from "react";
import "./Styles.css";
import Container from "./Container/index";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar";

const ListProducts = () => {
  const [produtos, setProdutos] = useState([]);
  const [filterValue, SetFilterValue] = useState([]);
  const [produtosFilter, setProdutosFilter] = useState([]);
  useEffect(() => {
    fetch("https://apigspace.herokuapp.com/produtos")
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data);
      })
      .catch((error) => {
        console.log(produtos.categoria);
        console.log(error);
      });
  }, []);

  // FilterApi
  function FilterProducts(filterValue) {
    let ArrayProducts = produtos.filter((item) => {
      return item.categoria == filterValue;
    });

    setProdutos(ArrayProducts);
  }

  return (
    <>
      {" "}
      <Header />
      <div className="side-product">
        <SideBar />
        <div className="list-products">
          {/* <input
            type="text"
            onChange={(e) => SetFilterValue(e.target.value)}
            id=""
          />
          <button onClick={FilterProducts}>teste</button> */}
          {produtos.map((produto) => {
            const quantidadeMap = produto.cores.corPrimary.tamanhos;
            const quantidadeMapSecondary = produto.cores.corSecondary.tamanhos;
            const quantidadeMapTertiary = produto.cores.corTertiary.tamanhos;
            const quantidadeMapQuaternary =
              produto.cores.corQuaternary.tamanhos;
            const quantidade =
              Number(quantidadeMap.tamanhoOne.quantidade) +
              Number(quantidadeMap.tamanhoTwo.quantidade2) +
              Number(quantidadeMap.tamanhoThree.quantidade3) +
              Number(quantidadeMap.tamanhoFour.quantidade4) +
              Number(quantidadeMapSecondary.tamanhoOne.quantidade5) +
              Number(quantidadeMapSecondary.tamanhoTwo.quantidade6) +
              Number(quantidadeMapSecondary.tamanhoThree.quantidade7) +
              Number(quantidadeMapSecondary.tamanhoFour.quantidade8) +
              Number(quantidadeMapTertiary.tamanhoOne.quantidade9) +
              Number(quantidadeMapTertiary.tamanhoTwo.quantidade10) +
              Number(quantidadeMapTertiary.tamanhoThree.quantidade11) +
              Number(quantidadeMapTertiary.tamanhoFour.quantidade12) +
              Number(quantidadeMapQuaternary.tamanhoOne.quantidade13) +
              Number(quantidadeMapQuaternary.tamanhoTwo.quantidade14) +
              Number(quantidadeMapQuaternary.tamanhoThree.quantidade15) +
              Number(quantidadeMapQuaternary.tamanhoFour.quantidade16);
            return (
              <Container
                key={produto._id}
                cor={produto.cor}
                cor2={produto.cor2}
                cor3={produto.cor3}
                cor4={produto.cor4}
                image1={produto.cores.corPrimary.imgurl}
                image2={produto.imgurl2}
                image3={produto.imgurl3}
                image4={produto.imgurl4}
                image5={produto.imgurl5}
                image6={produto.imgurl6}
                image7={produto.imgurl7}
                image8={produto.imgurl8}
                tittle={produto.modelo}
                produto={produto.produto}
                preco={produto.preco}
                tamanho={produto.tamanho}
                tamanho2={produto.tamanho2}
                tamanho3={produto.tamanho3}
                tamanho4={produto.tamanho4}
                estoque={quantidade}
                category={produto.categoria}
                marca={produto.marca}
                descricao={produto.descricao}
                id={produto._id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListProducts;
