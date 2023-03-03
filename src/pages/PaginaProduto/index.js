import React, { useContext } from "react";
import "./style.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Recomendados from "../../Components/Recomendados";
import { useEffect } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { BsWhatsapp } from "react-icons/bs";
import regua from "../../Assets/regua.png";
import cabide from "../../Assets/cabide.png";
import { AuthContext } from "../../Contexts/auth";
import Comentarios from "../../Components/Comentarios";
//icons//

import { AiFillCreditCard } from "react-icons/ai";
import { FaTruck } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { GiPresent } from "react-icons/gi";
import { FiSend } from "react-icons/fi";
import api2 from "../../services/api2";

export default function PaginaProduto() {
  const { _id } = useParams();
  
  const [datacarrinho, setDatacarrinho] = useState([]);
  const [dataproduto, setDataproduto] = useState([]);
  const [pegarbrinde, setPegarbrinde] = useState();
  const [pegarbrindeinfo, setPegarbrindeinfo] = useState();

  const [parcelas, setParcelas] = useState([]);
  const [imgprincipal, setImgprincipal] = useState(null);
  const [cor, setCor] = useState("");
  const [load, setLoad] = useState(false);
  const [tamanho, setTamanho] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [modalshare, setModalshare] = useState(false);
  const [valueFret, setValueFrete] = useState([]);
  const [dadositemCompartilhar, setDadositemCompartilhar] = useState([]);
  const [renderizarPopUp, setRenderizarPopUp] = useState(false);
  const [estoque, setEstoque] = useState("");

  useEffect(()=>{
    api.get(`/produtos/_id?_id=${_id}`).then((data) => {
      setDataproduto([data.data]);
      setPegarbrinde([data.data].brinde);
      setPegarbrindeinfo([data.data].aparecercampobrinde);
    });
  },[])

  useEffect(() => {
    api2.get("/edicao").then((data) => {
      setValueFrete(data.data);
      setParcelas(data.data);
    });
    setDatacarrinho(JSON.parse(localStorage.getItem("carrinhorr11") || "[]"));
    //console.log(datacarrinho)
  }, [dataproduto]);
  
  
  async function additemcarrinho(item) {
    
    const carrinho = await JSON.parse(localStorage.getItem("carrinhorr11") || "[]")


    const filter = carrinho.some(dat => dat.modelo == item.modelo &&  dat.cor == cor && dat.tamanho == tamanho )

    if(filter){
      toast.info(`Item com o tamanho e cor escolhido ja está no carrinho, para adicionar mais vá no carrinho.`)
      return
    }


    if (quantidade == 0) {
      toast.error("Quantidade minima: 1");
      return;
    }
    if (cor == "") {
      toast.error("Escolha uma cor");
      return;
    }
    if (tamanho == "") {
      toast.error("Escolha um tamanho");
      return;
    }
    // if (usercliente == null) {
    //     toast.info('Faça login, ou cadastre-se para adicionar!')
    //     return
    // }
    localStorage.setItem(
      "descontoaplicado",
      JSON.stringify(Number(item.promocao2 === false ? "" : item.desconto))
    );


    let datacarrinho = {
      _id: item._id,
      pid: Math.floor(Math.random() * 1000),
      modelo: item.modelo,
      cor: cor,
      tamanho: tamanho,
      quantidade: quantidade,
      estoque: estoque,
      preco: item.preco.replace(",", "."),
      imgurl: imgprincipal,
      descricao: item.descricao,
      valorTotal:
        Number(item.preco.replace(",", ".")) * Number(quantidade).toFixed(2),
      promocao: item.promocao2,
      desconto: item.promocao2 === false ? "" : item.desconto,
      qtdpromocao: item.promocao2 === false ? 20000 : item.qtdpromocao2,
      peso: item.peso,
      comprimento: item.comprimento,
      altura: item.altura,
      largura: item.largura,
      diametro: item.diametro,
      formato: item.formato,
    };
    carrinho.push(datacarrinho);

    localStorage.setItem("carrinhorr11", JSON.stringify(carrinho));

    toast.success("Item adicionado ao carrinho");
    setTimeout(() => {
      window.location.href = "/carrinho";
    }, 2000);
  }

  function mudacor1(item) {
    setImgprincipal(item.cores.corPrimary.imgurl);
    setCor(item.cores.corPrimary.cor1);

    document
      .querySelectorAll(".btn-cores")[0]
      .setAttribute(
        "style",
        "box-shadow:6px 7px 7px -2px grey; border:2px solid white"
      );
    document
      .querySelectorAll(".btn-cores")[1]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[2]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[3]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[4]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[5]
      .setAttribute("style", "box-shadow:none");
  }

  function mudacor2(item) {
    setImgprincipal(item.cores.corSecondary.imgurl4);
    setCor(item.cores.corSecondary.cor2);

    document
      .querySelectorAll(".btn-cores")[0]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[1]
      .setAttribute(
        "style",
        "box-shadow:6px 7px 7px -2px grey; border:2px solid white"
      );
    document
      .querySelectorAll(".btn-cores")[2]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[3]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[4]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[5]
      .setAttribute("style", "box-shadow:none");
  }

  function mudacor3(item) {
    setImgprincipal(item.cores.corTertiary.imgurl7);
    setCor(item.cores.corTertiary.cor3);
    document
      .querySelectorAll(".btn-cores")[0]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[1]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[2]
      .setAttribute(
        "style",
        "box-shadow:6px 7px 7px -2px grey; border:2px solid white"
      );
    document
      .querySelectorAll(".btn-cores")[3]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[4]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[5]
      .setAttribute("style", "box-shadow:none");
  }

  function mudacor4(item) {
    setImgprincipal(item.cores.corQuaternary.imgurl10);
    setCor(item.cores.corQuaternary.cor4);
    document
      .querySelectorAll(".btn-cores")[0]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[1]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[2]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[3]
      .setAttribute(
        "style",
        "box-shadow:6px 7px 7px -2px grey; border:2px solid white"
      );
    document
      .querySelectorAll(".btn-cores")[4]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[5]
      .setAttribute("style", "box-shadow:none");
  }
  function mudacor5(item) {
    setImgprincipal(item.cores.corFive.imgurl13);
    setCor(item.cores.corFive.cor5);
    document
      .querySelectorAll(".btn-cores")[0]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[1]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[2]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[3]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[4]
      .setAttribute(
        "style",
        "box-shadow:6px 7px 7px -2px grey; border:2px solid white"
      );

    document
      .querySelectorAll(".btn-cores")[5]
      .setAttribute("style", "box-shadow:none");
  }
  function mudacor6(item) {
    setImgprincipal(item.cores.corSix.imgurl16);
    setCor(item.cores.corSix.cor6);
    document
      .querySelectorAll(".btn-cores")[0]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[1]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[2]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[3]
      .setAttribute("style", "box-shadow:none");
    document
      .querySelectorAll(".btn-cores")[4]
      .setAttribute("style", "box-shadow:none");

    document
      .querySelectorAll(".btn-cores")[5]
      .setAttribute(
        "style",
        "box-shadow:6px 7px 7px -2px grey; border:2px solid white"
      );
  }


  function subitrairqtd() {
    if (quantidade == 0) {
      return;
    }

    setQuantidade(quantidade - 1);
  }

  useEffect(() => {
    if (quantidade <= estoque) {
      document.getElementById("errestoque").setAttribute("style", "color:#000");
    }
  }, [quantidade]);

  function amountplus() {
    if (quantidade >= estoque) {
      document.getElementById("errestoque").setAttribute("style", "color:red");
      // setQuantidade(estoque)
      return;
    }

    setQuantidade(quantidade + 1);
  }

  function mudatamanho(item) {
    setTamanho(item.cores.corPrimary.tamanhos.tamanhoOne.tamanho1);
    setEstoque(item.cores.corPrimary.tamanhos.tamanhoOne.quantidade);
    setQuantidade(1)
    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#df0707;color:#fff");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#fff;color:#000");
  }

  function mudatamanho2(item) {
    setTamanho(item.cores.corPrimary.tamanhos.tamanhoTwo.tamanho2);
    setEstoque(item.cores.corPrimary.tamanhos.tamanhoTwo.quantidade2);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#df0707;color:#fff");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#fff;color:#000");
  }
  function mudatamanho3(item) {
    setTamanho(item.cores.corPrimary.tamanhos.tamanhoThree.tamanho3);
    setEstoque(item.cores.corPrimary.tamanhos.tamanhoThree.quantidade3);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#df0707;color:#fff");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#fff;color:#000");
  }
  function mudatamanho4(item) {
    setTamanho(item.cores.corPrimary.tamanhos.tamanhoFour.tamanho4);
    setEstoque(item.cores.corPrimary.tamanhos.tamanhoFour.quantidade4);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#df0707;color:#fff");
  }
  function mudatamanho5(item) {
    setTamanho(item.cores.corSecondary.tamanhos.tamanhoOne.tamanho5);
    setEstoque(item.cores.corSecondary.tamanhos.tamanhoOne.quantidade5);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#df0707;color:#fff");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#fff;color:#000");
  }
  function mudatamanho6(item) {
    setTamanho(item.cores.corSecondary.tamanhos.tamanhoTwo.tamanho6);
    setEstoque(item.cores.corSecondary.tamanhos.tamanhoTwo.quantidade6);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#df0707;color:#fff");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#fff;color:#000");
  }
  function mudatamanho7(item) {
    setTamanho(item.cores.corSecondary.tamanhos.tamanhoThree.tamanho7);
    setEstoque(item.cores.corSecondary.tamanhos.tamanhoThree.quantidade7);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#df0707;color:#fff");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#fff;color:#000");
  }
  function mudatamanho8(item) {
    setTamanho(item.cores.corSecondary.tamanhos.tamanhoFour.tamanho8);
    setEstoque(item.cores.corSecondary.tamanhos.tamanhoFour.quantidade8);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#df0707;color:#fff");
  }
  function mudatamanho9(item) {
    setTamanho(item.cores.corTertiary.tamanhos.tamanhoOne.tamanho9);
    setEstoque(item.cores.corTertiary.tamanhos.tamanhoOne.quantidade9);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#df0707;color:#fff");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#fff;color:#000");
  }
  function mudatamanho10(item) {
    setTamanho(item.cores.corTertiary.tamanhos.tamanhoTwo.tamanho10);
    setEstoque(item.cores.corTertiary.tamanhos.tamanhoTwo.quantidade10);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#df0707;color:#fff");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#fff;color:#000");
  }
  function mudatamanho11(item) {
    setTamanho(item.cores.corTertiary.tamanhos.tamanhoThree.tamanho11);
    setEstoque(item.cores.corTertiary.tamanhos.tamanhoThree.quantidade11);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#df0707;color:#fff");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#fff;color:#000");
  }
  function mudatamanho12(item) {
    setTamanho(item.cores.corTertiary.tamanhos.tamanhoFour.tamanho12);
    setEstoque(item.cores.corTertiary.tamanhos.tamanhoFour.quantidade12);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#df0707;color:#fff");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#fff;color:#000");
  }
  function mudatamanho13(item) {
    setTamanho(item.cores.corQuaternary.tamanhos.tamanhoOne.tamanho13);
    setEstoque(item.cores.corQuaternary.tamanhos.tamanhoOne.quantidade13);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#df0707;color:#fff");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#fff;color:#000");
  }
  function mudatamanho14(item) {
    setTamanho(item.cores.corQuaternary.tamanhos.tamanhoTwo.tamanho14);
    setEstoque(item.cores.corQuaternary.tamanhos.tamanhoTwo.quantidade14);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#df0707;color:#fff");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#fff;color:#000");
  }
  function mudatamanho15(item) {
    setTamanho(item.cores.corQuaternary.tamanhos.tamanhoThree.tamanho15);
    setEstoque(item.cores.corQuaternary.tamanhos.tamanhoThree.quantidade15);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#df0707;color:#fff");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#fff;color:#000");
  }

  function mudatamanho16(item) {
    setTamanho(item.cores.corQuaternary.tamanhos.tamanhoFour.tamanho16);
    setEstoque(item.cores.corQuaternary.tamanhos.tamanhoFour.quantidade16);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#df0707;color:#fff");
  }
  function mudatamanho17(item) {
    setTamanho(item.cores.corFive.tamanhos.tamanhoOne.tamanho17);
    setEstoque(item.cores.corFive.tamanhos.tamanhoOne.quantidade17);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#fff;color:#fff");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#df0707;color:#000");
  }
  function mudatamanho18(item) {
    setTamanho(item.cores.corFive.tamanhos.tamanhoTwo.tamanho18);
    setEstoque(item.cores.corFive.tamanhos.tamanhoTwo.quantidade18);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#fff;color:#fff");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#df0707;color:#000");
  }
  function mudatamanho19(item) {
    setTamanho(item.cores.corFive.tamanhos.tamanhoThree.tamanho19);
    setEstoque(item.cores.corFive.tamanhos.tamanhoThree.quantidade19);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#fff;color:#fff");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#df0707;color:#000");
  }
  function mudatamanho20(item) {
    setTamanho(item.cores.corFive.tamanhos.tamanhoFour.tamanho20);
    setEstoque(item.cores.corFive.tamanhos.tamanhoFour.quantidade20);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#df0707;color:#fff");
  }
  function mudatamanho21(item) {
    setTamanho(item.cores.corSix.tamanhos.tamanhoOne.tamanho21);
    setEstoque(item.cores.corSix.tamanhos.tamanhoOne.quantidade21);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#fff;color:#fff");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#df0707;color:#000");
  }
  function mudatamanho22(item) {
    setTamanho(item.cores.corSix.tamanhos.tamanhoTwo.tamanho22);
    setEstoque(item.cores.corSix.tamanhos.tamanhoTwo.quantidade22);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#fff;color:#fff");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#df0707;color:#000");
  }
  function mudatamanho23(item) {
    setTamanho(item.cores.corSix.tamanhos.tamanhoThree.tamanho23);
    setEstoque(item.cores.corSix.tamanhos.tamanhoThree.quantidade23);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#fff;color:#fff");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#df0707;color:#000");
  }
  function mudatamanho24(item) {
    setTamanho(item.cores.corSix.tamanhos.tamanhoFour.tamanho24);
    setEstoque(item.cores.corSix.tamanhos.tamanhoFour.quantidade24);
    setQuantidade(1)

    document
      .querySelectorAll(".btn-tamanho")[0]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[1]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[2]
      .setAttribute("style", "background:#fff;color:#000");
    document
      .querySelectorAll(".btn-tamanho")[3]
      .setAttribute("style", "background:#df0707;color:#fff");
  }

  function showmodalcompartilhar(item) {

    let mensagem = {
      title: "Olá, estou compartilhando este produto com voçê",
      text: `Vittoriavitt\n ${item.modelo} \n R$${item.preco}`,
      url: `https://vittoriavitt.com.br/paginaproduto/${item._id}`,
    };
    navigator.share(mensagem);
  }

  return (
    <div className="container-pg-produto">
      <Header back="#de4563"></Header>

      {dataproduto.map((item) => {
        return (
          <div className="container-produto" key={item._id}>
            <div className="box-imagens-produto">
              <div className="img-principal" id="add-focusimg">
                {imgprincipal == null ? (
                  <img
                    id="add-img-focus"
                    src={item.cores.corPrimary.imgurl}
                  ></img>
                ) : (
                  <img id="add-img-focus" src={imgprincipal}></img>
                )}
                {window.screen.width > 500 ? (
                  <div className="box-item-descricao">
                    <h1>DESCRIÇÃO</h1>
                    <br></br>
                    <h5>{item.descricao}</h5>
                    <Recomendados produto={item.produto}></Recomendados>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="outras-imagens">
                {item.cores.corPrimary.imgurl != "" ? (
                  <img
                    onClick={() =>
                      setImgprincipal(item.cores.corPrimary.imgurl)
                    }
                    src={item.cores.corPrimary.imgurl}
                  ></img>
                ) : (
                  ""
                )}
                {item.cores.corSecondary.imgurl4 != "" ? (
                  <img
                    onClick={() =>
                      setImgprincipal(item.cores.corSecondary.imgurl4)
                    }
                    src={item.cores.corSecondary.imgurl4}
                  ></img>
                ) : (
                  ""
                )}
                {item.cores.corTertiary.imgurl7 != "" ? (
                  <img
                    onClick={() =>
                      setImgprincipal(item.cores.corTertiary.imgurl7)
                    }
                    src={item.cores.corTertiary.imgurl7}
                  ></img>
                ) : (
                  ""
                )}
                {item.cores.corQuaternary.imgurl10 != "" ? (
                  <img
                    onClick={() =>
                      setImgprincipal(item.cores.corQuaternary.imgurl10)
                    }
                    src={item.cores.corQuaternary.imgurl10}
                  ></img>
                ) : (
                  ""
                )}
                {item.cores.corFive.imgurl13 != "" ? (
                  <img
                    onClick={() => setImgprincipal(item.cores.corFive.imgurl13)}
                    src={item.cores.corFive.imgurl13}
                  ></img>
                ) : (
                  ""
                )}
                {item.cores.corSix.imgurl16 != "" ? (
                  <img
                    onClick={() => setImgprincipal(item.cores.corSix.imgurl16)}
                    src={item.cores.corSix.imgurl16}
                  ></img>
                ) : (
                  ""
                )}
              </div>
              <div className="outras-imagens">
                {item.cores.corPrimary.imgurl2 != "" ? (
                  <img
                    onClick={() =>
                      setImgprincipal(item.cores.corPrimary.imgurl2)
                    }
                    src={item.cores.corPrimary.imgurl2}
                  ></img>
                ) : (
                  ""
                )}
                {item.cores.corSecondary.imgurl5 != "" ? (
                  <img
                    onClick={() =>
                      setImgprincipal(item.cores.corSecondary.imgurl5)
                    }
                    src={item.cores.corSecondary.imgurl5}
                  ></img>
                ) : (
                  ""
                )}
                {item.cores.corTertiary.imgurl8 != "" ? (
                  <img
                    onClick={() =>
                      setImgprincipal(item.cores.corTertiary.imgurl8)
                    }
                    src={item.cores.corTertiary.imgurl8}
                  ></img>
                ) : (
                  ""
                )}
                {item.cores.corQuaternary.imgurl11 != "" ? (
                  <img
                    onClick={() =>
                      setImgprincipal(item.cores.corQuaternary.imgurl11)
                    }
                    src={item.cores.corQuaternary.imgurl11}
                  ></img>
                ) : (
                  ""
                )}
                {item.cores.corFive.imgurl14 != "" ? (
                  <img
                    onClick={() => setImgprincipal(item.cores.corFive.imgurl14)}
                    src={item.cores.corFive.imgurl14}
                  ></img>
                ) : (
                  ""
                )}
                {item.cores.corSix.imgurl17 != "" ? (
                  <img
                    onClick={() => setImgprincipal(item.cores.corSix.imgurl17)}
                    src={item.cores.corSix.imgurl17}
                  ></img>
                ) : (
                  ""
                )}
              </div>
              <div className="outras-imagens">
                {item.cores.corPrimary.imgurl3 != "" ? (
                  <img
                    onClick={() =>
                      setImgprincipal(item.cores.corPrimary.imgurl3)
                    }
                    src={item.cores.corPrimary.imgurl3}
                  ></img>
                ) : (
                  ""
                )}
                {item.cores.corSecondary.imgurl6 != "" ? (
                  <img
                    onClick={() =>
                      setImgprincipal(item.cores.corSecondary.imgurl6)
                    }
                    src={item.cores.corSecondary.imgurl6}
                  ></img>
                ) : (
                  ""
                )}
                {item.cores.corTertiary.imgurl9 != "" ? (
                  <img
                    onClick={() =>
                      setImgprincipal(item.cores.corTertiary.imgurl9)
                    }
                    src={item.cores.corTertiary.imgurl9}
                  ></img>
                ) : (
                  ""
                )}
                {item.cores.corQuaternary.imgurl12 != "" ? (
                  <img
                    onClick={() =>
                      setImgprincipal(item.cores.corQuaternary.imgurl12)
                    }
                    src={item.cores.corQuaternary.imgurl12}
                  ></img>
                ) : (
                  ""
                )}
                {item.cores.corFive.imgurl15 != "" ? (
                  <img
                    onClick={() => setImgprincipal(item.cores.corFive.imgurl15)}
                    src={item.cores.corFive.imgurl15}
                  ></img>
                ) : (
                  ""
                )}
                {item.cores.corSix.imgurl18 != "" ? (
                  <img
                    onClick={() => setImgprincipal(item.cores.corSix.imgurl18)}
                    src={item.cores.corSix.imgurl18}
                  ></img>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="box-info-produto">
              <div className="title-produto">
                <h2>{item.modelo}</h2>
              </div>
              <div className="title-preco">
                {item.precomaior != null ? (
                  <div style={{ display: "flex", marginLeft: "23px" }}>
                    <h5>de</h5>
                    <h3>R${item.precomaior}</h3>
                  </div>
                ) : (
                  ""
                )}
                {item.precomaior != null ? (
                  <div style={{ display: "flex" }}>
                    <h5 style={{ color: "#DF0707", fontSize: "25px" }}>por</h5>
                    <h2>R${item.preco}</h2>
                  </div>
                ) : (
                  <h2>R${item.preco}</h2>
                )}
                <p>
                  Em até {parcelas.map((item) => item.parcelas)[0]}x R$
                  {Number(
                    item.preco.replace(",", ".") /
                    parcelas.map((item) => item.parcelas)[0]
                  ).toFixed(2)}{" "}
                  sem juros
                </p>
                {item.promocao2 == true &&
                  datacarrinho.some((item) => item.promocao) != true ? (
                  <p style={{ color: "green" }}>
                    Adicionando {item.qtdpromocao2} produtos ou mais voçê ganha{" "}
                    {item.desconto}% de desconto!
                  </p>
                ) : (
                  ""
                )}
              </div>
              <span>Selecione a cor desejada: {cor}</span>
              <div className="box-escolher-cor">
                {item.cores.corPrimary.imgurl != "" ? (
                  <button onClick={() => mudacor1(item)}>
                    <img
                      className="btn-cores"
                      src={item.cores.corPrimary.imgurl}
                    ></img>
                  </button>
                ) : (
                  ""
                )}
                {item.cores.corSecondary.imgurl4 != "" ? (
                  <button onClick={() => mudacor2(item)}>
                    <img
                      className="btn-cores"
                      src={item.cores.corSecondary.imgurl4}
                    ></img>
                  </button>
                ) : (
                  ""
                )}
                {item.cores.corTertiary.imgurl7 != "" ? (
                  <button onClick={() => mudacor3(item)}>
                    <img
                      className="btn-cores"
                      src={item.cores.corTertiary.imgurl7}
                    ></img>
                  </button>
                ) : (
                  ""
                )}
                {item.cores.corQuaternary.imgurl10 != "" ? (
                  <button onClick={() => mudacor4(item)}>
                    <img
                      className="btn-cores"
                      src={item.cores.corQuaternary.imgurl10}
                    ></img>
                  </button>
                ) : (
                  ""
                )}
                {item.cores.corFive.imgurl13 != "" ? (
                  <button onClick={() => mudacor5(item)}>
                    <img
                      className="btn-cores"
                      src={item.cores.corFive.imgurl13}
                    ></img>
                  </button>
                ) : (
                  ""
                )}
                {item.cores.corSix.imgurl16 != "" ? (
                  <button onClick={() => mudacor6(item)}>
                    <img
                      className="btn-cores"
                      src={item.cores.corSix.imgurl16}
                    ></img>
                  </button>
                ) : (
                  ""
                )}
              </div>
              <span style={{ marginTop: "15px" }}></span>
              <span id="errestoque">
                Selecione o tamanho desejado: {tamanho} Temos somente {estoque}{" "}
                peças! .
              </span>
              <div className="box-escolher-tamanho">
                {cor === item.cores.corPrimary.cor1 ? (
                  <div>
                    {item.cores.corPrimary.tamanhos.tamanhoOne.tamanho1 !=
                      "" ? (
                      <button
                        onClick={() => mudatamanho(item)}
                        className="btn-tamanho"
                      >
                        {item.cores.corPrimary.tamanhos.tamanhoOne.tamanho1}
                      </button>
                    ) : (
                      ""
                    )}
                    {item.cores.corPrimary.tamanhos.tamanhoTwo.tamanho2 !=
                      "" ? (
                      <button
                        onClick={() => mudatamanho2(item)}
                        className="btn-tamanho"
                      >
                        {item.cores.corPrimary.tamanhos.tamanhoTwo.tamanho2}
                      </button>
                    ) : (
                      ""
                    )}
                    {item.cores.corPrimary.tamanhos.tamanhoThree.tamanho3 !=
                      "" ? (
                      <button
                        onClick={() => mudatamanho3(item)}
                        className="btn-tamanho"
                      >
                        {item.cores.corPrimary.tamanhos.tamanhoThree.tamanho3}
                      </button>
                    ) : (
                      ""
                    )}
                    {item.cores.corPrimary.tamanhos.tamanhoFour.tamanho4 !=
                      "" ? (
                      <button
                        onClick={() => mudatamanho4(item)}
                        className="btn-tamanho"
                      >
                        {item.cores.corPrimary.tamanhos.tamanhoFour.tamanho4}
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
                {cor === item.cores.corSecondary.cor2 ? (
                  <div>
                    {item.cores.corSecondary.tamanhos.tamanhoOne.tamanho5 !=
                      "" ? (
                      <button
                        onClick={() => mudatamanho5(item)}
                        className="btn-tamanho"
                      >
                        {item.cores.corSecondary.tamanhos.tamanhoOne.tamanho5}
                      </button>
                    ) : (
                      ""
                    )}
                    {item.cores.corSecondary.tamanhos.tamanhoTwo.tamanho6 !=
                      "" ? (
                      <button
                        onClick={() => mudatamanho6(item)}
                        className="btn-tamanho"
                      >
                        {" "}
                        {item.cores.corSecondary.tamanhos.tamanhoTwo.tamanho6}
                      </button>
                    ) : (
                      ""
                    )}
                    {item.cores.corSecondary.tamanhos.tamanhoThree.tamanho7 !=
                      "" ? (
                      <button
                        onClick={() => mudatamanho7(item)}
                        className="btn-tamanho"
                      >
                        {" "}
                        {item.cores.corSecondary.tamanhos.tamanhoThree.tamanho7}
                      </button>
                    ) : (
                      ""
                    )}
                    {item.cores.corSecondary.tamanhos.tamanhoFour.tamanho8 !=
                      "" ? (
                      <button
                        onClick={() => mudatamanho8(item)}
                        className="btn-tamanho"
                      >
                        {" "}
                        {item.cores.corSecondary.tamanhos.tamanhoFour.tamanho8}
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
                {cor === item.cores.corTertiary.cor3 ? (
                  <div>
                    {item.cores.corTertiary.tamanhos.tamanhoOne.tamanho9 !=
                      "" ? (
                      <button
                        onClick={() => mudatamanho9(item)}
                        className="btn-tamanho"
                      >
                        {item.cores.corTertiary.tamanhos.tamanhoOne.tamanho9}
                      </button>
                    ) : (
                      ""
                    )}
                    {item.cores.corTertiary.tamanhos.tamanhoTwo.tamanho10 !=
                      "" ? (
                      <button
                        onClick={() => mudatamanho10(item)}
                        className="btn-tamanho"
                      >
                        {" "}
                        {item.cores.corTertiary.tamanhos.tamanhoTwo.tamanho10}
                      </button>
                    ) : (
                      ""
                    )}
                    {item.cores.corTertiary.tamanhos.tamanhoThree.tamanho11 !=
                      "" ? (
                      <button
                        onClick={() => mudatamanho11(item)}
                        className="btn-tamanho"
                      >
                        {" "}
                        {item.cores.corTertiary.tamanhos.tamanhoThree.tamanho11}
                      </button>
                    ) : (
                      ""
                    )}
                    {item.cores.corTertiary.tamanhos.tamanhoFour.tamanho12 !=
                      "" ? (
                      <button
                        onClick={() => mudatamanho12(item)}
                        className="btn-tamanho"
                      >
                        {" "}
                        {item.cores.corTertiary.tamanhos.tamanhoFour.tamanho12}
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
                {cor === item.cores.corQuaternary.cor4 ? (
                  <div>
                    {item.cores.corQuaternary.tamanhos.tamanhoOne.tamanho13 !=
                      "" ? (
                      <button
                        onClick={() => mudatamanho13(item)}
                        className="btn-tamanho"
                      >
                        {item.cores.corQuaternary.tamanhos.tamanhoOne.tamanho13}
                      </button>
                    ) : (
                      ""
                    )}
                    {item.cores.corQuaternary.tamanhos.tamanhoTwo.tamanho14 !=
                      "" ? (
                      <button
                        onClick={() => mudatamanho14(item)}
                        className="btn-tamanho"
                      >
                        {" "}
                        {item.cores.corQuaternary.tamanhos.tamanhoTwo.tamanho14}
                      </button>
                    ) : (
                      ""
                    )}
                    {item.cores.corQuaternary.tamanhos.tamanhoThree.tamanho15 !=
                      "" ? (
                      <button
                        onClick={() => mudatamanho15(item)}
                        className="btn-tamanho"
                      >
                        {" "}
                        {
                          item.cores.corQuaternary.tamanhos.tamanhoThree
                            .tamanho15
                        }
                      </button>
                    ) : (
                      ""
                    )}
                    {item.cores.corQuaternary.tamanhos.tamanhoFour.tamanho16 !=
                      "" ? (
                      <button
                        onClick={() => mudatamanho16(item)}
                        className="btn-tamanho"
                      >
                        {" "}
                        {
                          item.cores.corQuaternary.tamanhos.tamanhoFour
                            .tamanho16
                        }
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
                {cor === item.cores.corFive.cor5 ? (
                  <div>
                    {item.cores.corFive.tamanhos.tamanhoOne.tamanho17 != "" ? (
                      <button
                        onClick={() => mudatamanho17(item)}
                        className="btn-tamanho"
                      >
                        {" "}
                        {item.cores.corFive.tamanhos.tamanhoOne.tamanho17}
                      </button>
                    ) : (
                      ""
                    )}
                    {item.cores.corFive.tamanhos.tamanhoTwo.tamanho18 != "" ? (
                      <button
                        onClick={() => mudatamanho18(item)}
                        className="btn-tamanho"
                      >
                        {" "}
                        {item.cores.corFive.tamanhos.tamanhoTwo.tamanho18}
                      </button>
                    ) : (
                      ""
                    )}
                    {item.cores.corFive.tamanhos.tamanhoThree.tamanho19 !=
                      "" ? (
                      <button
                        onClick={() => mudatamanho19(item)}
                        className="btn-tamanho"
                      >
                        {" "}
                        {item.cores.corFive.tamanhos.tamanhoThree.tamanho19}
                      </button>
                    ) : (
                      ""
                    )}
                    {item.cores.corFive.tamanhos.tamanhoFour.tamanho20 != "" ? (
                      <button
                        onClick={() => mudatamanho20(item)}
                        className="btn-tamanho"
                      >
                        {" "}
                        {item.cores.corFive.tamanhos.tamanhoFour.tamanho20}
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}

                {cor === item.cores.corSix.cor6 ? (
                  <div>
                    {item.cores.corSix.tamanhos.tamanhoOne.tamanho21 != "" ? (
                      <button
                        onClick={() => mudatamanho21(item)}
                        className="btn-tamanho"
                      >
                        {" "}
                        {item.cores.corSix.tamanhos.tamanhoOne.tamanho21}
                      </button>
                    ) : (
                      ""
                    )}
                    {item.cores.corSix.tamanhos.tamanhoTwo.tamanho22 != "" ? (
                      <button
                        onClick={() => mudatamanho22(item)}
                        className="btn-tamanho"
                      >
                        {" "}
                        {item.cores.corSix.tamanhos.tamanhoTwo.tamanho22}
                      </button>
                    ) : (
                      ""
                    )}
                    {item.cores.corSix.tamanhos.tamanhoThree.tamanho23 != "" ? (
                      <button
                        onClick={() => mudatamanho23(item)}
                        className="btn-tamanho"
                      >
                        {" "}
                        {item.cores.corSix.tamanhos.tamanhoThree.tamanho23}
                      </button>
                    ) : (
                      ""
                    )}
                    {item.cores.corSix.tamanhos.tamanhoFour.tamanho24 != "" ? (
                      <button
                        onClick={() => mudatamanho24(item)}
                        className="btn-tamanho"
                      >
                        {" "}
                        {item.cores.corSix.tamanhos.tamanhoFour.tamanho24}
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
              {window.screen.width < 500 ? (
                <div className="box-item-descricao">
                  <h1>DESCRIÇÃO</h1>
                  <br></br>
                  <h5>{item.descricao}</h5>
                </div>
              ) : (
                ""
              )}
              <div className="btn-carrinho-pag-produto">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "30%",
                    }}
                  >
                    <button onClick={subitrairqtd} className="btnquantidade">
                      -
                    </button>
                    <span id="box-qtd">{quantidade}</span>
                    <button className="btnquantidade" onClick={amountplus}>
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      if (quantidade == 0) {
                        toast.error("Quantidade minima: 1");
                        return;
                      }
                      if (cor == "") {
                        toast.error("Escolha uma cor");
                        return;
                      }
                      if (tamanho == "") {
                        toast.error("Escolha um tamanho");
                        return;
                      } else {
                        setRenderizarPopUp(true);
                      }
                    }}
                    className="btn-carrinho-produto"
                  >
                    adicionar ao carrinho
                  </button>

                  {renderizarPopUp != false ? (
                    <>
                      <div id="background-pop-up">
                        <div id="background-pop-up-white">
                          O produto selecionado foi: {cor}, {tamanho}
                          <div>
                            <button
                              id="background-pop-up-white-no"
                              onClick={() => {
                                setRenderizarPopUp(false);
                              }}
                            >
                              Não, alterar
                            </button>{" "}
                            <button
                              id="background-pop-up-white-yes"
                              onClick={() => additemcarrinho(item)}
                            >
                              Sim, continuar
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p>
                    Ou se preferir{" "}
                    <a
                      target={"_blank"}
                      href="https://api.whatsapp.com/send?phone=5519996883262&fbclid=PAAaa9cuQyhc0Z1ht0GlMzq0TFwhp20VeeiOm9jPpeoekHdxGIekLBpgitVP4"
                      style={{
                        color: "#4BC358",
                        marginLeft: "5px",
                        fontWeight: "600",
                        textDecoration: "none",
                      }}
                    >
                      <BsWhatsapp color="#4BC358"></BsWhatsapp>COMPRE PELO
                      WHATSAPPP
                    </a>{" "}
                  </p>
                </div>
                <div className="list-icons">
                  <div>
                    <AiFillCreditCard color="red"></AiFillCreditCard> Pague em
                    até 10x sem juros
                  </div>
                  <div>
                    <AiFillCreditCard color="red"></AiFillCreditCard>{" "}
                    <strong>
                      Aceitamos todos os cartões de Crédito e Débito
                    </strong>
                  </div>
                  <div>
                    <FaTruck color="red"></FaTruck>{" "}
                    <strong>
                      Frete Grátis para compras acima de R$
                      {valueFret.map((item) => item.componentetexto1)[0]}
                    </strong>
                  </div>
                  <div>
                    <GiPadlock color="red"></GiPadlock>{" "}
                    <strong>Compra 100% segura!</strong>
                  </div>
                  <div>
                    <FaMoneyBillWave color="red"></FaMoneyBillWave>{" "}
                    <strong>Pague à vista com Pix ou Boleto</strong>
                  </div>

                  {item.aparecercampobrinde != "false" || "" || null ? (
                    <div>
                      <GiPresent color="red"></GiPresent>{" "}
                      <strong>Brindes Especiais em cada compra</strong>
                      <br />
                      <strong>Brinde que acompanha:{item.brinde}</strong>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <button
                  onClick={() => showmodalcompartilhar(item)}
                  className="btn-carrinho-produto2"
                >
                  {" "}
                  Peça de presente para quem te ama!
                  <FiSend color="#fff" size={25}></FiSend>
                </button>
                <div className="provadorvirtual">
                  <button>
                    <img src={cabide}></img>
                    <span>Provador virtual</span>
                  </button>
                  <button>
                    <img src={regua}></img>
                    <span>Tabela de medidas</span>
                  </button>
                </div>
                {/* <div className="calculo-frete">
                  <input type="text" id="CEP" placeholder="CEP"></input>
                  <button className="btn-calcular-frete" onClick={CalcFrete}>
                    {load == false ? "OK" : "Carregando..."}
                  </button>
                </div> */}
                <div id="freteresult"></div>
                {window.screen.width < 500 ? (
                  <Recomendados produto={item.produto}></Recomendados>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        );
      })}
      <Comentarios></Comentarios>
      <Footer></Footer>
    </div>
  );
}
