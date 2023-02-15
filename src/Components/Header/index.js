import React, { useEffect, useState } from "react";
import BoxHeaderMarca from "../boxHeaderMarca";
import BoxSearch from "../boxSearch";
import cupom1 from "../Header/1.png";
import cupom2 from "../Header/2.png";
import cupom3 from "../Header/3.png";
import { FiTruck } from 'react-icons/fi'

import "./Styles.css";
import api2 from "../../services/api2";
import api from "../../services/api";
import axios from "axios";

const Header = (props) => {
  const [dadosedicao, setDatdosedicao] = useState([]);
  const [datacategorias, setDatacategorias] = useState([]);
  const [dataprodutos, setDataprodutos] = useState([]);

  useEffect(() => {
    api2.get("/edicao").then((data) => {
      setDatdosedicao(data.data);
    });
    api2.get("/produtos").then((data) => {
      setDataprodutos(data.data);
    });

   

    api.get('/produtos')
      .then((data) => {
        setDatacategorias(data.data.slice(0, 4))
      })

    if (dataprodutos.some(item => item.desconto == '10') == false &&
      dataprodutos.some(item => item.desconto == '30') == false &&
      dataprodutos.some(item => item.desconto == '50') == false) {
      document.querySelector('.header-one-main').setAttribute('style', 'display:none;')
      document.querySelector('.title-fretegratis').setAttribute('style', 'height:99px; font-size:20px')
    }

  }, [dataprodutos]);

  return (
    <div className="header">
      <div className={props.color ? "header-main-none" : "header-one"}>
        <div className="title-fretegratis">
          <p>
            <FiTruck color='#fff'></FiTruck>  FRETE GRÁTIS ACIMA DE R$
            {dadosedicao.map((item) => item.componentetexto1)[0]}
          </p>
        </div>
        <div className="header-one-main">
          <div className="header-one-main-box">
            {
              <>
                {dataprodutos.some(item => item.desconto == '10' && item.promocao2 == true) == true ? < BoxHeaderMarca link="/loja3/10" image={cupom1} /> : ''}
                {dataprodutos.some(item => item.desconto == '30' && item.promocao2 == true) == true ? < BoxHeaderMarca link="/loja3/30" image={cupom2} /> : ''}
                {dataprodutos.some(item => item.desconto == '50' && item.promocao2 == true) == true ? < BoxHeaderMarca link="/loja3/50" image={cupom3} /> : ''}
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
          {datacategorias.map(item => {
            return (
              <button key={item.id} onClick={() => window.location.href = `/loja4/${item.categoria}`} >{item.categoria}</button>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
