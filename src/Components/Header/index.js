import React, { useEffect, useState } from "react";
import BoxHeaderMarca from "../boxHeaderMarca";
import BoxSearch from "../boxSearch";
import cupom1 from "../Header/1.png";
import cupom2 from "../Header/2.png";
import cupom3 from "../Header/3.png";
import cupom4 from "../Header/20.png";
import cupom5 from "../Header/40.png";
import cupom6 from "../Header/60.png";
import cupom7 from "../Header/70.png";
import cupom8 from "../Header/80.png";
import cupom9 from "../Header/90.png";

import { FiTruck } from "react-icons/fi";

import "./Styles.css";
import api2 from "../../services/api2";
import api from "../../services/api";

const Header = (props) => {
  const [dadosedicao, setDatdosedicao] = useState([]);
  const [datacategorias, setDatacategorias] = useState([]);
  const [dataprodutos, setDataprodutos] = useState([]);
  const [produtosquantidade, setProdutosquantidade] = useState();

  useEffect(() => {
    api2.get("/edicao").then((data) => {
      setDatdosedicao(data.data);
    });
    api2.get("/produtos").then((data) => {
      setDataprodutos(data.data);
      setProdutosquantidade(dataprodutos.length);
    });

    api.get("/categorias").then((data) => {
      setDatacategorias(data.data.slice(0, 4));
    });

    if (dataprodutos.some((item) => item.promocao2 == true)) {
      document
        .querySelector(".header-one-main")
        .setAttribute("style", "display:flex;");
      document
        .querySelector(".title-fretegratis")
        .setAttribute("style", "height:40px; font-size:20px");
    } else {
      document
        .querySelector(".header-one-main")
        .setAttribute("style", "display:none;");
      document
        .querySelector(".title-fretegratis")
        .setAttribute("style", "height:99px; font-size:20px");
    }
  }, [dataprodutos]);

  return (
    <div className="header">
      <div className={props.color ? "header-main-none" : "header-one"}>
        <div className="title-fretegratis">
          <p>
            <FiTruck color="#fff"></FiTruck> FRETE GRÁTIS ACIMA DE R$
            {dadosedicao.map((item) => item.componentetexto1)[0]}
          </p>
        </div>
        <div className="header-one-main">
          <div className="header-one-main-box">
            {
              <>
                {dataprodutos.some(
                  (item) => item.desconto == "10" && item.promocao2 == true
                ) == true ? (
                  <BoxHeaderMarca link="/loja3/10" image={cupom1} />
                ) : (
                  ""
                )}
                {dataprodutos.some(
                  (item) => item.desconto == "20" && item.promocao2 == true
                ) == true ? (
                  <BoxHeaderMarca link="/loja3/20" image={cupom4} />
                ) : (
                  ""
                )}
                {dataprodutos.some(
                  (item) => item.desconto == "30" && item.promocao2 == true
                ) == true ? (
                  <BoxHeaderMarca link="/loja3/30" image={cupom2} />
                ) : (
                  ""
                )}
                {dataprodutos.some(
                  (item) => item.desconto == "40" && item.promocao2 == true
                ) == true ? (
                  <BoxHeaderMarca link="/loja3/40" image={cupom5} />
                ) : (
                  ""
                )}
                {dataprodutos.some(
                  (item) => item.desconto == "50" && item.promocao2 == true
                ) == true ? (
                  <BoxHeaderMarca link="/loja3/50" image={cupom3} />
                ) : (
                  ""
                )}
                {dataprodutos.some(
                  (item) => item.desconto == "60" && item.promocao2 == true
                ) == true ? (
                  <BoxHeaderMarca link="/loja3/60" image={cupom6} />
                ) : (
                  ""
                )}
                {dataprodutos.some(
                  (item) => item.desconto == "70" && item.promocao2 == true
                ) == true ? (
                  <BoxHeaderMarca link="/loja3/70" image={cupom7} />
                ) : (
                  ""
                )}
                {dataprodutos.some(
                  (item) => item.desconto == "80" && item.promocao2 == true
                ) == true ? (
                  <BoxHeaderMarca link="/loja3/80" image={cupom8} />
                ) : (
                  ""
                )}
                {dataprodutos.some(
                  (item) => item.desconto == "90" && item.promocao2 == true
                ) == true ? (
                  <BoxHeaderMarca link="/loja3/90" image={cupom9} />
                ) : (
                  ""
                )}
              </>
            }
          </div>
        </div>
      </div>
      <div
        className={props.color ? "header-two-none" : "header-two"}
        style={{ background: props.back }}
      >
        <BoxSearch />
        <div className="btns-home-header">
          {datacategorias.map((item) => {
            return (
              <button
                key={item.id}
                onClick={() =>
                  (window.location.href = `/loja4/${item.categoria}`)
                }
              >
                {item.categoria}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
