import React, { useEffect, useState } from "react";
import "./Style.css";
import api from "../../services/api";
import api2 from "../../services/api2";
import { BiDotsHorizontalRounded, BiSearch, BiLogIn } from "react-icons/bi";
import { VscDashboard } from "react-icons/vsc";
import {
  MdAddBusiness,
  MdEdit,
  MdOutlineMarkEmailUnread,
  MdSecurity,
  MdWeb,
} from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { BsBoxSeam, BsTrash, BsWhatsapp } from "react-icons/bs";
import { AiOutlineFileSync } from "react-icons/ai";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/auth";
import Camisa from "../../img/dashboard/tshirt on hanger mockup.png";
import Vendas from "../../img/dashboard/online shopping money card.png";
import Faturamento from "../../img/dashboard/pink piggy bank.png";
import Box from "../../img/dashboard/open cardboard box.png";
import Logo from "../../Assets/logo viit 1.png";
import firebase from "../../services/firebaseconnection";
import AdminCadastroProdutos from "../AdminCadastroProdutos";

export default function AdminController() {
  const { sairadm } = useContext(AuthContext);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("sessaouser") || "[]")
  );

  const [senhaverificacao, setSenhaverificacao] = useState("");
  const [senha, setSenha] = useState("");
  const [alterasenha, setAlterasenha] = useState("");
  const [alteraemail, setAlteraemail] = useState("");
  const [titulopergunta, setTitulopergunta] = useState("");
  const [textoresposta, setTextoresposta] = useState("");
  const [dataperguntas, setDataperguntas] = useState([]);
  const [aparecercampobrinde, setAparecercampobrinde] = useState(false);
  const [brinde, setBrinde] = useState();
  const [sku, setSku] = useState();

  const [modaleditadados, setModaleditadados] = useState(false);
  const [modallistaemails, setModalListaemails] = useState(false);
  const [modalperguntasfrequentes, setModalperguntasfrequentes] =
    useState(false);
  const [showpedidos, setShowpedidos] = useState(true);
  const [showdashboard, setShowdeshboard] = useState(false);
  const [showlistaprodutos, setShowlistaprodutos] = useState(false);
  const [modaldeleteverifica, setModaldeleteverifica] = useState(false);
  const [showmodaldetalhesprodutos, setShowmodaldetalhesproduto] =
    useState(false);
  const [modaleditahome, setModaleditahome] = useState(false);
  const [modallistafranqueados, setModallistafranqueados] = useState(false);
  const [modalstatus, setModalstatus] = useState(false);
  const [modalcadastroprodutos, setModalcadastroprodutos] = useState(false);
  const [modallistacomentarios, setModallistacomentarios] = useState(false);
  const [datapedidos, setDatapedidos] = useState([]);
  const [datapedidos2, setDatapedidos2] = useState([]);
  const [datapedidos3, setDatapedidos3] = useState([]);
  const [datapedidos4, setDatapedidos4] = useState([]);
  const [dataemails, setDataemails] = useState([]);
  const [arrayemails, setArrayemails] = useState([]);
  const [dadospedidoselected, setDadospedidoselected] = useState([]);
  const [status, setStatus] = useState("");
  const [st1, setSt1] = useState("Pacote recebido");
  const [st2, setSt2] = useState("Pacote enviado");
  const [st3, setSt3] = useState("Preparando seu pedido");
  const [load, setLoad] = useState(false);
  const [nomefiltro, setNomefiltro] = useState("");
  const [clientes, setClientes] = useState();
  const [dataprodutos, setDataprodutos] = useState([]);
  const [faturamento, setFaturamento] = useState();
  const [detalhesproduto, setDetalhesproduto] = useState([]);
  const [datafranqueados, setDatafranqueados] = useState([]);
  const [codigo, setCodigo] = useState("");
  const [corupdate, setCorupdate] = useState("");
  const [corupdate2, setCorupdate2] = useState("");
  const [corupdate3, setCorupdate3] = useState("");
  const [corupdate4, setCorupdate4] = useState("");
  const [corupdate5, setCorupdate5] = useState("");
  const [corupdate6, setCorupdate6] = useState("");
  const [subcategoriaupdate1, setSubcategoriaupdate1] = useState("");
  const [subcategoriaupdate2, setSubcategoriaupdate2] = useState("");
  const [subcategoriaupdate3, setSubcategoriaupdate3] = useState("");
  const [subcategoriaupdate4, setSubcategoriaupdate4] = useState("");

  const [datacategorias, setDatacategorias] = useState([]);
  const [datacores, setDatacores] = useState([]);

  const [tamanho1, setTamanho1] = useState("");
  const [tamanho2, setTamanho2] = useState("");
  const [tamanho3, setTamanho3] = useState("");
  const [tamanho4, setTamanho4] = useState("");
  const [tamanho5, setTamanho5] = useState("");
  const [tamanho6, setTamanho6] = useState("");
  const [tamanho7, setTamanho7] = useState("");
  const [tamanho8, setTamanho8] = useState("");
  const [tamanho9, setTamanho9] = useState("");
  const [tamanho10, setTamanho10] = useState("");
  const [tamanho11, setTamanho11] = useState("");
  const [tamanho12, setTamanho12] = useState("");
  const [tamanho13, setTamanho13] = useState("");
  const [tamanho14, setTamanho14] = useState("");
  const [tamanho15, setTamanho15] = useState("");
  const [tamanho16, setTamanho16] = useState("");
  const [tamanho17, setTamanho17] = useState("");
  const [tamanho18, setTamanho18] = useState("");
  const [tamanho19, setTamanho19] = useState("");
  const [tamanho20, setTamanho20] = useState("");
  const [tamanho21, setTamanho21] = useState("");
  const [tamanho22, setTamanho22] = useState("");
  const [tamanho23, setTamanho23] = useState("");
  const [tamanho24, setTamanho24] = useState("");

  const [quantidade1, setQuantidade1] = useState("");
  const [quantidade2, setQuantidade2] = useState("");
  const [quantidade3, setQuantidade3] = useState("");
  const [quantidade4, setQuantidade4] = useState("");
  const [quantidade5, setQuantidade5] = useState("");
  const [quantidade6, setQuantidade6] = useState("");
  const [quantidade7, setQuantidade7] = useState("");
  const [quantidade8, setQuantidade8] = useState("");
  const [quantidade9, setQuantidade9] = useState("");
  const [quantidade10, setQuantidade10] = useState("");
  const [quantidade11, setQuantidade11] = useState("");
  const [quantidade12, setQuantidade12] = useState("");
  const [quantidade13, setQuantidade13] = useState("");
  const [quantidade14, setQuantidade14] = useState("");
  const [quantidade15, setQuantidade15] = useState("");
  const [quantidade16, setQuantidade16] = useState("");
  const [quantidade17, setQuantidade17] = useState("");
  const [quantidade18, setQuantidade18] = useState("");
  const [quantidade19, setQuantidade19] = useState("");
  const [quantidade20, setQuantidade20] = useState("");
  const [quantidade21, setQuantidade21] = useState("");
  const [quantidade22, setQuantidade22] = useState("");
  const [quantidade23, setQuantidade23] = useState("");
  const [quantidade24, setQuantidade24] = useState("");

  const [tipoprodutoupdate, setTipoprodutoupdate] = useState("");
  const [categoriaupdate, setCategoriaupdate] = useState("");
  const [decricaoupdate, setDescricaoupdate] = useState("");
  const [marcaupdate, setMarcaupdade] = useState("");
  const [precoupdate, setPrcoupdate] = useState("");
  const [precomaior, setPrecomaior] = useState("");
  const [promocao, setPromocao] = useState("");
  const [promocao2, setPromocao2] = useState("");
  const [qtdpromocao2, setQtdpromocao2] = useState("");
  const [desconto, setDesconto] = useState("");
  const [produtoupdate, setProdutoupdate] = useState("");
  const [dadosedicao, setDadosedicao] = useState([]);

  const [textofretegratis, setTextofretegratis] = useState("");
  const [titulosessaobanners, setTitulosessaobanners] = useState("");

  const [urlFoto1, setUrlFoto1] = useState("");
  const [urlFoto2, setUrlFoto2] = useState("");
  const [urlFoto3, setUrlFoto3] = useState("");

  const [urlmobile1, setUrlmobile1] = useState("");
  const [urlmobile2, setUrlmobile2] = useState("");
  const [urlmobile3, setUrlmobile3] = useState("");

  const [urllogo1, setUrllogo1] = useState("");
  const [urllogo2, setUrllogo2] = useState("");
  const [urllogo3, setUrllogo3] = useState("");
  const [urllogo4, setUrllogo4] = useState("");
  const [urllogo5, setUrllogo5] = useState("");
  const [urllogo6, setUrllogo6] = useState("");
  const [urllogo7, setUrllogo7] = useState("");

  const [urlbanner1, setUrlbanner1] = useState("");
  const [urlbanner2, setUrlbanner2] = useState("");
  const [urlbanner3, setUrlbanner3] = useState("");
  const [urlbanner4, setUrlbanner4] = useState("");
  const [urlbanner5, setUrlbanner5] = useState("");
  const [urlbanner6, setUrlbanner6] = useState("");
  const [urlbanner7, setUrlbanner7] = useState("");
  const [bannerpromocao, setBannerpromocao] = useState("");
  const [bannercentralhome, setBannercentralhome] = useState("");
  const [nomefeddback, setNomefeddback] = useState("");
  const [textofeedback, setTextofeedback] = useState("");
  const [peso, setPeso] = useState("");
  const [comprimento, setComprimento] = useState("");
  const [altura, setAltura] = useState("");
  const [largura, setLargura] = useState("");
  const [diametro, setDiametro] = useState("");
  const [formato, setFormato] = useState("");
  const [parcelas, setParcelas] = useState("");
  const [bannerpaginaproduto, setBannerpaginaproduto] = useState("");

  const [modelo, setModelo] = useState("");
  const [urlbanneredicao1, setUrlbanneredicao1] = useState("");
  const [urlbanneredicao2, setUrlbanneredicao2] = useState("");
  const [urlbanneredicao3, setUrlbanneredicao3] = useState("");
  const [urlbanneredicao4, setUrlbanneredicao4] = useState("");
  const [urlbanneredicao5, setUrlbanneredicao5] = useState("");
  const [urlbanneredicao6, setUrlbanneredicao6] = useState("");

  useEffect(() => {
    async function loadpedidos() {
      if (user == null || user == "" || user == []) {
        window.location.href = "/adminlogin";
        return;
      }

      await api2.get("/edicao").then((data) => {
        setDadosedicao(data.data);
      });
      await api2.get("/franquias").then((data) => {
        setDatafranqueados(data.data.reverse());
      });

      await api.get("/produtos").then((data) => {
        setDataprodutos(data.data);
      });

      await api2.get("/pedidos").then((data) => {
        setDatapedidos(data.data.reverse());
      });

      await api2.get(`/pedidos/status?status=Pacote recebido`).then((data) => {
        setDatapedidos2(data.data);
      });
      await api2.get(`/pedidos/status?status=Pacote enviado`).then((data) => {
        setDatapedidos3(data.data);
      });
      await api2
        .get(`/pedidos/status?status=Preparando seu pedido`)
        .then((data) => {
          setDatapedidos4(data.data);
        });

      await api.get("/categorias").then((data) => {
        setDatacategorias(data.data);
      });

      await api.get("/cores").then((item) => {
        setDatacores(item.data);
      });
    }

    loadpedidos();
  }, [dadosedicao]);

  useEffect(() => {
    api.get("/perguntas").then((item) => {
      setDataperguntas(item.data.reverse());
    });
  }, [dataperguntas]);

  useEffect(() => {
    let soma = 0;
    let novoarray = [];
    datapedidos.map((item) => {
      novoarray.push(parseFloat(item.valor));
    });

    for (let i = 0; i < novoarray.length; i++) {
      soma += novoarray[i];
    }
    setFaturamento(parseFloat(soma));
  }, [datapedidos]);

  function showmodalstatus(item) {
    setModalstatus(true);
    setDadospedidoselected(item);
  }

  async function mudastatus(dadospedidoselected) {
    if (dadospedidoselected.status === "Pacote recebido") {
      toast.error("Pedido ja recebido pelo cliente");
      return;
    }
    if (codigo === "") {
      toast.info("Preencha o codigo de ratreio!");
      return;
    }

    const idpedido = dadospedidoselected.idpedido;

    console.log(dadospedidoselected.produto.modelo);
    await api2
      .put(`/pedidos/${idpedido}`, {
        headers: {
          Authorization: "Access-Control-Allow-Origin",
        },
        idpedido: idpedido,
        nomecliente: dadospedidoselected.nomecliente,
        email: dadospedidoselected.email,
        uid: dadospedidoselected.uid,
        cpf: dadospedidoselected.cpf,
        produto: {
          modelo: String(dadospedidoselected.produto.modelo),
        },
        endereco: dadospedidoselected.endereco,
        cep: dadospedidoselected.cep,
        data: dadospedidoselected.data,
        hora: dadospedidoselected.hora,
        status: status,
        valor: dadospedidoselected.valor,
        codrastreio: codigo,
      })
      .then(async () => {
        toast.success("Status alterado com sucesso!");

        /* const link = "https://outletdaslingeries.com.br/logo.png";
         const tag = `<img style='width:150px'src=${link} alt=imagem></img>`;
 
         api2
           .post("/send", {
             email: dadospedidoselected.email,
             mensagem:
               status == "Pacote enviado"
                 ? `
           <div 
           style='
                  width: 100%;
                  height: 400px;
                  display: grid;
                  justify-items: center;
           '>
           ${tag}
          <div>
           <h1 style='padding:10px;background:#000;color:#fff;width:100%;margin:0'>Seu Pacote foi enviado atravéz dos correios!</h1>
           <h2 style='padding:10px;background:red;color:#fff;width:100%;margin:0'>Segue seu código de rastreio: ${codigo}</h2>
           </div>
           <a target=blank href='https://rastreamento.correios.com.br/app/index.php'>Ir para o site dos correios</a>
           <p>Fique atento(a) aos nossos emails para atualização de status do seu pedido!</p>
           </div> 
           `
                 : `<div>
            ${tag}
           <h1 style='padding:10px;background:#000;color:#fff;width:100%;margin:0'>Seu Pacote foi entregue!</h1>
           <h2 style='padding:10px;background:red;color:#fff;width:100%;margin:0'>Segue seu código de rastreio: ${codigo}</h2>
           </div>
           <a target=blank href='https://rastreamento.correios.com.br/app/index.php'>Ir para o site dos correios</a>
           <h2>Parabéns pela sua compra, aproveite!</h2>
           </div> `,
           })
           .then(() => {
             toast.success("email ok");
           });*/

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function filter1() {
    setLoad(true);
    await api2.get("/pedidos").then((data) => {
      setDatapedidos(data.data);
      setLoad(false);
      setNomefiltro("");
    });
  }
  async function filter(st1) {
    setLoad(true);
    await api2.get(`/pedidos/status?status=${st1}`).then((data) => {
      setDatapedidos(data.data);
      setLoad(false);
      setNomefiltro("Pacotes recebidos");
    });
  }
  async function filter2(st2) {
    setLoad(true);
    await api2.get(`/pedidos/status?status=${st2}`).then((data) => {
      setDatapedidos(data.data);
      setLoad(false);
      setNomefiltro("Pacotes enviados");
    });
  }
  async function filter3(st3) {
    setLoad(true);
    await api2.get(`/pedidos/status?status=${st3}`).then((data) => {
      setDatapedidos(data.data);
      setLoad(false);
    });
    setNomefiltro("Preparando seu pedido");
  }

  async function serachpedido(e) {
    setNomefiltro("");
    setLoad(true);
    await api2.get(`/pedidos/cpf?cpf=${e}`).then((data) => {
      setDatapedidos(data.data);
      setLoad(false);
    });
  }

  async function filtrodata(e) {
    setLoad(true);
    await api2.get(`/data?data=${e}`).then((data) => {
      setDatapedidos(data.data);
      setLoad(false);
    });
    console.log(e);
  }

  function sair() {
    sairadm();
  }

  function verpedidos() {
    setShowpedidos(true);
    setShowdeshboard(false);
    setShowmodaldetalhesproduto(false);
    setShowlistaprodutos(false);
    setModaleditahome(false);
    setModalListaemails(false);
    setModallistafranqueados(false);
    setModalcadastroprodutos(false);
    setModaleditadados(false);
    setModalperguntasfrequentes(false);
    setModallistacomentarios(false);
  }
  function verdeshboard() {
    setShowpedidos(false);
    setShowdeshboard(true);
    setShowmodaldetalhesproduto(false);
    setShowlistaprodutos(false);
    setModaleditahome(false);
    setModalListaemails(false);
    setModallistafranqueados(false);
    setModalcadastroprodutos(false);
    setModaleditadados(false);
    setModalperguntasfrequentes(false);
    setModallistacomentarios(false);
  }

  function verlistaprodutos() {
    setShowlistaprodutos(true);
    setShowpedidos(false);
    setShowdeshboard(false);
    setShowmodaldetalhesproduto(false);
    setModaleditahome(false);
    setModalListaemails(false);
    setModallistafranqueados(false);
    setModalcadastroprodutos(false);
    setModaleditadados(false);
    setModalperguntasfrequentes(false);
    setModallistacomentarios(false);
  }

  function Modaldetalhesproduto(item) {
    setShowmodaldetalhesproduto(true);
    setModelo(item.modelo);
    setSku(item.sku);
    setMarcaupdade(item.marca);
    setCategoriaupdate(item.categoria);
    setTipoprodutoupdate(item.tipo);
    setDescricaoupdate(item.descricao);
    setPrcoupdate(item.preco);
    setPrecomaior(item.precomaior);
    setPromocao(item.promocao);
    setPeso(item.peso);
    setComprimento(item.comprimento);
    setLargura(item.largura);
    setAltura(item.altura);
    setDiametro(item.diametro);
    setFormato(item.formato);
    // setPromocao2(item.promocao2)
    setQtdpromocao2(item.qtdpromocao2);
    setDesconto(promocao2 === false ? "" : item.desconto);

    setSubcategoriaupdate1(item.subcategoria1);
    setSubcategoriaupdate2(item.subcategoria2);
    setSubcategoriaupdate3(item.subcategoria3);
    setSubcategoriaupdate4(item.subcategoria4);

    setTamanho1(item.cores.corPrimary.tamanhos.tamanhoOne.tamanho1);
    setTamanho2(item.cores.corPrimary.tamanhos.tamanhoTwo.tamanho2);
    setTamanho3(item.cores.corPrimary.tamanhos.tamanhoThree.tamanho3);
    setTamanho4(item.cores.corPrimary.tamanhos.tamanhoFour.tamanho4);
    setTamanho5(item.cores.corSecondary.tamanhos.tamanhoOne.tamanho5);
    setTamanho6(item.cores.corSecondary.tamanhos.tamanhoTwo.tamanho6);
    setTamanho7(item.cores.corSecondary.tamanhos.tamanhoThree.tamanho7);
    setTamanho8(item.cores.corSecondary.tamanhos.tamanhoFour.tamanho8);
    setTamanho9(item.cores.corTertiary.tamanhos.tamanhoOne.tamanho9);
    setTamanho10(item.cores.corTertiary.tamanhos.tamanhoTwo.tamanho10);
    setTamanho11(item.cores.corTertiary.tamanhos.tamanhoThree.tamanho11);
    setTamanho12(item.cores.corTertiary.tamanhos.tamanhoFour.tamanho12);
    setTamanho13(item.cores.corQuaternary.tamanhos.tamanhoOne.tamanho13);
    setTamanho14(item.cores.corQuaternary.tamanhos.tamanhoTwo.tamanho14);
    setTamanho15(item.cores.corQuaternary.tamanhos.tamanhoThree.tamanho15);
    setTamanho16(item.cores.corQuaternary.tamanhos.tamanhoFour.tamanho16);
    setTamanho17(item.cores.corFive.tamanhos.tamanhoOne.tamanho17);
    setTamanho18(item.cores.corFive.tamanhos.tamanhoTwo.tamanho18);
    setTamanho19(item.cores.corFive.tamanhos.tamanhoThree.tamanho19);
    setTamanho20(item.cores.corFive.tamanhos.tamanhoFour.tamanho20);
    setTamanho21(item.cores.corSix.tamanhos.tamanhoOne.tamanho21);
    setTamanho22(item.cores.corSix.tamanhos.tamanhoTwo.tamanho22);
    setTamanho23(item.cores.corSix.tamanhos.tamanhoThree.tamanho23);
    setTamanho24(item.cores.corSix.tamanhos.tamanhoFour.tamanho24);

    setQuantidade1(item.cores.corPrimary.tamanhos.tamanhoOne.quantidade);
    setQuantidade2(item.cores.corPrimary.tamanhos.tamanhoTwo.quantidade2);
    setQuantidade3(item.cores.corPrimary.tamanhos.tamanhoThree.quantidade3);
    setQuantidade4(item.cores.corPrimary.tamanhos.tamanhoFour.quantidade4);
    setQuantidade5(item.cores.corSecondary.tamanhos.tamanhoOne.quantidade5);
    setQuantidade6(item.cores.corSecondary.tamanhos.tamanhoTwo.quantidade6);
    setQuantidade7(item.cores.corSecondary.tamanhos.tamanhoThree.quantidade7);
    setQuantidade8(item.cores.corSecondary.tamanhos.tamanhoFour.quantidade8);
    setQuantidade9(item.cores.corTertiary.tamanhos.tamanhoOne.quantidade9);
    setQuantidade10(item.cores.corTertiary.tamanhos.tamanhoTwo.quantidade10);
    setQuantidade11(item.cores.corTertiary.tamanhos.tamanhoThree.quantidade11);
    setQuantidade12(item.cores.corTertiary.tamanhos.tamanhoFour.quantidade12);
    setQuantidade13(item.cores.corQuaternary.tamanhos.tamanhoOne.quantidade13);
    setQuantidade14(item.cores.corQuaternary.tamanhos.tamanhoTwo.quantidade14);
    setQuantidade15(
      item.cores.corQuaternary.tamanhos.tamanhoThree.quantidade15
    );
    setQuantidade16(item.cores.corQuaternary.tamanhos.tamanhoFour.quantidade16);
    setQuantidade17(item.cores.corFive.tamanhos.tamanhoOne.quantidade17);
    setQuantidade18(item.cores.corFive.tamanhos.tamanhoTwo.quantidade18);
    setQuantidade19(item.cores.corFive.tamanhos.tamanhoThree.quantidade19);
    setQuantidade20(item.cores.corFive.tamanhos.tamanhoFour.quantidade20);
    setQuantidade21(item.cores.corSix.tamanhos.tamanhoOne.quantidade21);
    setQuantidade22(item.cores.corSix.tamanhos.tamanhoTwo.quantidade22);
    setQuantidade23(item.cores.corSix.tamanhos.tamanhoThree.quantidade23);
    setQuantidade24(item.cores.corSix.tamanhos.tamanhoFour.quantidade24);

    setDetalhesproduto(item);
    setModaleditahome(false);
    setModalListaemails(false);
    setModallistafranqueados(false);
    setModalcadastroprodutos(false);
    setModaleditadados(false);
    setModalperguntasfrequentes(false);
    setModallistacomentarios(false);
  }

  function vereditahome() {
    setModaleditahome(true);
    setShowmodaldetalhesproduto(false);
    setShowpedidos(false);
    setShowdeshboard(false);
    setShowlistaprodutos(false);
    setModalListaemails(false);
    setModallistafranqueados(false);
    setModalcadastroprodutos(false);
    setModaleditadados(false);
    setModalperguntasfrequentes(false);
    setModallistacomentarios(false);
  }
  function verlistaemails() {
    setModalListaemails(true);
    setModaleditahome(false);
    setShowmodaldetalhesproduto(false);
    setShowpedidos(false);
    setShowdeshboard(false);
    setShowlistaprodutos(false);
    setModallistafranqueados(false);
    setModalcadastroprodutos(false);
    setModaleditadados(false);
    setModalperguntasfrequentes(false);
    setModallistacomentarios(false);
  }
  function vercadastroprodutos() {
    setModalcadastroprodutos(true);
    setModallistafranqueados(false);
    setModalListaemails(false);
    setModaleditahome(false);
    setShowmodaldetalhesproduto(false);
    setShowpedidos(false);
    setShowdeshboard(false);
    setShowlistaprodutos(false);
    setModaleditadados(false);
    setModalperguntasfrequentes(false);
    setModallistacomentarios(false);
  }
  function vereditadados() {
    setModaleditadados(true);
    setModalcadastroprodutos(false);
    setModallistafranqueados(false);
    setModalListaemails(false);
    setModaleditahome(false);
    setShowmodaldetalhesproduto(false);
    setShowpedidos(false);
    setShowdeshboard(false);
    setShowlistaprodutos(false);
    setModalperguntasfrequentes(false);
    setModallistacomentarios(false);
  }
  function vereditaperguntas() {
    setModalperguntasfrequentes(true);
    setModaleditadados(false);
    setModalcadastroprodutos(false);
    setModallistafranqueados(false);
    setModalListaemails(false);
    setModaleditahome(false);
    setShowmodaldetalhesproduto(false);
    setShowpedidos(false);
    setShowdeshboard(false);
    setShowlistaprodutos(false);
    setModallistacomentarios(false);
  }
  function vercadastrocomentarios() {
    setModallistacomentarios(true);
    setModalperguntasfrequentes(false);
    setModaleditadados(false);
    setModalcadastroprodutos(false);
    setModallistafranqueados(false);
    setModalListaemails(false);
    setModaleditahome(false);
    setShowmodaldetalhesproduto(false);
    setShowpedidos(false);
    setShowdeshboard(false);
    setShowlistaprodutos(false);
  }

  async function delitemcor(_id) {
    if (promocao2 == "") {
      document.getElementById("promo2").setAttribute("style", "background:red");
      return;
    }
    let data = {
      headers: {
        Authorization: "Access-Control-Allow-Origin",
      },
      // produto: detalhesproduto.produto,
      sku: sku,
      precomaior: precomaior,
      preco: precoupdate,
      modelo: modelo == "" ? detalhesproduto.modelo : modelo,
      //marca: marcaupdate,
      //tipo: tipoprodutoupdate,
      categoria: categoriaupdate,
      descricao: decricaoupdate,
      promocao: promocao,
      promocao2: promocao2,
      qtdpromocao2: qtdpromocao2,
      desconto: desconto,
      subcategoria1: subcategoriaupdate1,
      subcategoria2: subcategoriaupdate2,
      subcategoria3: subcategoriaupdate3,
      subcategoria4: subcategoriaupdate4,
      peso: peso,
      comprimento: comprimento,
      altura: altura,
      largura: largura,
      diametro: diametro,
      formato: formato,
      cores: {
        corPrimary: {
          imgurl: "",
          imgurl2: "",
          imgurl3: "",
          cor1: "",
          tamanhos: {
            tamanhoOne: { tamanho1: "", quantidade: "" },
            tamanhoTwo: { tamanho2: "", quantidade2: "" },
            tamanhoThree: { tamanho3: "", quantidade3: "" },
            tamanhoFour: { tamanho4: "", quantidade4: "" },
          },
        },
        corSecondary: {
          imgurl4: detalhesproduto.cores.corSecondary.imgurl4,
          imgurl5: detalhesproduto.cores.corSecondary.imgurl5,
          imgurl6: detalhesproduto.cores.corSecondary.imgurl6,
          cor2:
            corupdate2 == ""
              ? detalhesproduto.cores.corSecondary.cor2
              : corupdate2,
          tamanhos: {
            tamanhoOne: { tamanho5: tamanho5, quantidade5: quantidade5 },
            tamanhoTwo: { tamanho6: tamanho6, quantidade6: quantidade6 },
            tamanhoThree: { tamanho7: tamanho7, quantidade7: quantidade7 },
            tamanhoFour: { tamanho8: tamanho8, quantidade8: quantidade8 },
          },
        },
        corTertiary: {
          imgurl7: detalhesproduto.cores.corTertiary.imgurl7,
          imgurl8: detalhesproduto.cores.corTertiary.imgurl8,
          imgurl9: detalhesproduto.cores.corTertiary.imgurl9,
          cor3:
            corupdate3 == ""
              ? detalhesproduto.cores.corTertiary.cor3
              : corupdate3,
          tamanhos: {
            tamanhoOne: { tamanho9: tamanho9, quantidade9: quantidade9 },
            tamanhoTwo: { tamanho10: tamanho10, quantidade10: quantidade10 },
            tamanhoThree: { tamanho11: tamanho11, quantidade11: quantidade11 },
            tamanhoFour: { tamanho12: tamanho12, quantidade12: quantidade12 },
          },
        },
        corQuaternary: {
          imgurl10: detalhesproduto.cores.corQuaternary.imgurl10,
          imgurl11: detalhesproduto.cores.corQuaternary.imgurl11,
          imgurl12: detalhesproduto.cores.corQuaternary.imgurl12,
          cor4:
            corupdate4 == ""
              ? detalhesproduto.cores.corQuaternary.cor4
              : corupdate4,
          tamanhos: {
            tamanhoOne: { tamanho13: tamanho13, quantidade13: quantidade13 },
            tamanhoTwo: { tamanho14: tamanho14, quantidade14: quantidade14 },
            tamanhoThree: { tamanho15: tamanho15, quantidade15: quantidade15 },
            tamanhoFour: { tamanho16: tamanho16, quantidade16: quantidade16 },
          },
        },
        corFive: {
          imgurl13: detalhesproduto.cores.corFive.imgurl13,
          imgurl14: detalhesproduto.cores.corFive.imgurl14,
          imgurl15: detalhesproduto.cores.corFive.imgurl15,
          cor5:
            corupdate5 == "" ? detalhesproduto.cores.corFive.cor5 : corupdate5,
          tamanhos: {
            tamanhoOne: { tamanho17: tamanho17, quantidade17: quantidade17 },
            tamanhoTwo: { tamanho18: tamanho18, quantidade18: quantidade18 },
            tamanhoThree: { tamanho19: tamanho19, quantidade19: quantidade19 },
            tamanhoFour: { tamanho20: tamanho20, quantidade20: quantidade20 },
          },
        },
        corSix: {
          imgurl16: detalhesproduto.cores.corSix.imgurl16,
          imgurl17: detalhesproduto.cores.corSix.imgurl17,
          imgurl18: detalhesproduto.cores.corSix.imgurl18,
          cor6:
            corupdate6 == "" ? detalhesproduto.cores.corSix.cor6 : corupdate6,
          tamanhos: {
            tamanhoOne: { tamanho21: tamanho21, quantidade21: quantidade21 },
            tamanhoTwo: { tamanho22: tamanho22, quantidade22: quantidade22 },
            tamanhoThree: { tamanho23: tamanho23, quantidade23: quantidade23 },
            tamanhoFour: { tamanho24: tamanho24, quantidade24: quantidade24 },
          },
        },
      },
    };

    api
      .put(`/produtos/${_id}`, data)
      .then(() => {
        toast.success("Item atualizado com sucesso!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function delitemcor2(_id) {
    if (promocao2 == "") {
      document.getElementById("promo2").setAttribute("style", "background:red");
      return;
    }
    let data = {
      headers: {
        Authorization: "Access-Control-Allow-Origin",
      },
      // produto: detalhesproduto.produto,
      precomaior: precomaior,
      sku: sku,
      preco: precoupdate,
      modelo: modelo == "" ? detalhesproduto.modelo : modelo,
      //marca: marcaupdate,
      //tipo: tipoprodutoupdate,
      categoria: categoriaupdate,
      descricao: decricaoupdate,
      promocao: promocao,
      promocao2: promocao2,
      qtdpromocao2: qtdpromocao2,
      desconto: desconto,
      subcategoria1: subcategoriaupdate1,
      subcategoria2: subcategoriaupdate2,
      subcategoria3: subcategoriaupdate3,
      subcategoria4: subcategoriaupdate4,
      peso: peso,
      comprimento: comprimento,
      altura: altura,
      largura: largura,
      diametro: diametro,
      formato: formato,
      cores: {
        corPrimary: {
          imgurl: detalhesproduto.cores.corPrimary.imgurl,
          imgurl2: detalhesproduto.cores.corPrimary.imgurl2,
          imgurl3: detalhesproduto.cores.corPrimary.imgurl3,
          cor1:
            corupdate == "" ? detalhesproduto.cores.corPrimary.cor1 : corupdate,
          tamanhos: {
            tamanhoOne: { tamanho1: tamanho1, quantidade: quantidade1 },
            tamanhoTwo: { tamanho2: tamanho2, quantidade2: quantidade2 },
            tamanhoThree: { tamanho3: tamanho3, quantidade3: quantidade3 },
            tamanhoFour: { tamanho4: tamanho4, quantidade4: quantidade4 },
          },
        },
        corSecondary: {
          imgurl4: "",
          imgurl5: "",
          imgurl6: "",
          cor2: "",
          tamanhos: {
            tamanhoOne: { tamanho5: "", quantidade5: "" },
            tamanhoTwo: { tamanho6: "", quantidade6: "" },
            tamanhoThree: { tamanho7: "", quantidade7: "" },
            tamanhoFour: { tamanho8: "", quantidade8: "" },
          },
        },
        corTertiary: {
          imgurl7: detalhesproduto.cores.corTertiary.imgurl7,
          imgurl8: detalhesproduto.cores.corTertiary.imgurl8,
          imgurl9: detalhesproduto.cores.corTertiary.imgurl9,
          cor3:
            corupdate3 == ""
              ? detalhesproduto.cores.corTertiary.cor3
              : corupdate3,
          tamanhos: {
            tamanhoOne: { tamanho9: tamanho9, quantidade9: quantidade9 },
            tamanhoTwo: { tamanho10: tamanho10, quantidade10: quantidade10 },
            tamanhoThree: { tamanho11: tamanho11, quantidade11: quantidade11 },
            tamanhoFour: { tamanho12: tamanho12, quantidade12: quantidade12 },
          },
        },
        corQuaternary: {
          imgurl10: detalhesproduto.cores.corQuaternary.imgurl10,
          imgurl11: detalhesproduto.cores.corQuaternary.imgurl11,
          imgurl12: detalhesproduto.cores.corQuaternary.imgurl12,
          cor4:
            corupdate4 == ""
              ? detalhesproduto.cores.corQuaternary.cor4
              : corupdate4,
          tamanhos: {
            tamanhoOne: { tamanho13: tamanho13, quantidade13: quantidade13 },
            tamanhoTwo: { tamanho14: tamanho14, quantidade14: quantidade14 },
            tamanhoThree: { tamanho15: tamanho15, quantidade15: quantidade15 },
            tamanhoFour: { tamanho16: tamanho16, quantidade16: quantidade16 },
          },
        },
        corFive: {
          imgurl13: detalhesproduto.cores.corFive.imgurl13,
          imgurl14: detalhesproduto.cores.corFive.imgurl14,
          imgurl15: detalhesproduto.cores.corFive.imgurl15,
          cor5:
            corupdate5 == "" ? detalhesproduto.cores.corFive.cor5 : corupdate5,
          tamanhos: {
            tamanhoOne: { tamanho17: tamanho17, quantidade17: quantidade17 },
            tamanhoTwo: { tamanho18: tamanho18, quantidade18: quantidade18 },
            tamanhoThree: { tamanho19: tamanho19, quantidade19: quantidade19 },
            tamanhoFour: { tamanho20: tamanho20, quantidade20: quantidade20 },
          },
        },
        corSix: {
          imgurl16: detalhesproduto.cores.corSix.imgurl16,
          imgurl17: detalhesproduto.cores.corSix.imgurl17,
          imgurl18: detalhesproduto.cores.corSix.imgurl18,
          cor6:
            corupdate6 == "" ? detalhesproduto.cores.corSix.cor6 : corupdate6,
          tamanhos: {
            tamanhoOne: { tamanho21: tamanho21, quantidade21: quantidade21 },
            tamanhoTwo: { tamanho22: tamanho22, quantidade22: quantidade22 },
            tamanhoThree: { tamanho23: tamanho23, quantidade23: quantidade23 },
            tamanhoFour: { tamanho24: tamanho24, quantidade24: quantidade24 },
          },
        },
      },
    };

    api
      .put(`/produtos/${_id}`, data)
      .then(() => {
        toast.success("Item atualizado com sucesso!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function delitemcor3(_id) {
    if (promocao2 == "") {
      document.getElementById("promo2").setAttribute("style", "background:red");
      return;
    }
    let data = {
      headers: {
        Authorization: "Access-Control-Allow-Origin",
      },
      // produto: detalhesproduto.produto,
      precomaior: precomaior,
      preco: precoupdate,
      sku: sku,
      modelo: modelo == "" ? detalhesproduto.modelo : modelo,
      //marca: marcaupdate,
      //tipo: tipoprodutoupdate,
      categoria: categoriaupdate,
      descricao: decricaoupdate,
      promocao: promocao,
      promocao2: promocao2,
      qtdpromocao2: qtdpromocao2,
      desconto: desconto,
      subcategoria1: subcategoriaupdate1,
      subcategoria2: subcategoriaupdate2,
      subcategoria3: subcategoriaupdate3,
      subcategoria4: subcategoriaupdate4,
      peso: peso,
      comprimento: comprimento,
      altura: altura,
      largura: largura,
      diametro: diametro,
      formato: formato,
      cores: {
        corPrimary: {
          imgurl: detalhesproduto.cores.corPrimary.imgurl,
          imgurl2: detalhesproduto.cores.corPrimary.imgurl2,
          imgurl3: detalhesproduto.cores.corPrimary.imgurl3,
          cor1:
            corupdate == "" ? detalhesproduto.cores.corPrimary.cor1 : corupdate,
          tamanhos: {
            tamanhoOne: { tamanho1: tamanho1, quantidade: quantidade1 },
            tamanhoTwo: { tamanho2: tamanho2, quantidade2: quantidade2 },
            tamanhoThree: { tamanho3: tamanho3, quantidade3: quantidade3 },
            tamanhoFour: { tamanho4: tamanho4, quantidade4: quantidade4 },
          },
        },
        corSecondary: {
          imgurl4: detalhesproduto.cores.corSecondary.imgurl4,
          imgurl5: detalhesproduto.cores.corSecondary.imgurl5,
          imgurl6: detalhesproduto.cores.corSecondary.imgurl6,
          cor2:
            corupdate2 == ""
              ? detalhesproduto.cores.corSecondary.cor2
              : corupdate2,
          tamanhos: {
            tamanhoOne: { tamanho5: tamanho5, quantidade5: quantidade5 },
            tamanhoTwo: { tamanho6: tamanho6, quantidade6: quantidade6 },
            tamanhoThree: { tamanho7: tamanho7, quantidade7: quantidade7 },
            tamanhoFour: { tamanho8: tamanho8, quantidade8: quantidade8 },
          },
        },
        corTertiary: {
          imgurl7: "",
          imgurl8: "",
          imgurl9: "",
          cor3: "",
          tamanhos: {
            tamanhoOne: { tamanho9: "", quantidade9: "" },
            tamanhoTwo: { tamanho10: "", quantidade10: "" },
            tamanhoThree: { tamanho11: "", quantidade11: "" },
            tamanhoFour: { tamanho12: "", quantidade12: "" },
          },
        },
        corQuaternary: {
          imgurl10: detalhesproduto.cores.corQuaternary.imgurl10,
          imgurl11: detalhesproduto.cores.corQuaternary.imgurl11,
          imgurl12: detalhesproduto.cores.corQuaternary.imgurl12,
          cor4:
            corupdate4 == ""
              ? detalhesproduto.cores.corQuaternary.cor4
              : corupdate4,
          tamanhos: {
            tamanhoOne: { tamanho13: tamanho13, quantidade13: quantidade13 },
            tamanhoTwo: { tamanho14: tamanho14, quantidade14: quantidade14 },
            tamanhoThree: { tamanho15: tamanho15, quantidade15: quantidade15 },
            tamanhoFour: { tamanho16: tamanho16, quantidade16: quantidade16 },
          },
        },
        corFive: {
          imgurl13: detalhesproduto.cores.corFive.imgurl13,
          imgurl14: detalhesproduto.cores.corFive.imgurl14,
          imgurl15: detalhesproduto.cores.corFive.imgurl15,
          cor5:
            corupdate5 == "" ? detalhesproduto.cores.corFive.cor5 : corupdate5,
          tamanhos: {
            tamanhoOne: { tamanho17: tamanho17, quantidade17: quantidade17 },
            tamanhoTwo: { tamanho18: tamanho18, quantidade18: quantidade18 },
            tamanhoThree: { tamanho19: tamanho19, quantidade19: quantidade19 },
            tamanhoFour: { tamanho20: tamanho20, quantidade20: quantidade20 },
          },
        },
        corSix: {
          imgurl16: detalhesproduto.cores.corSix.imgurl16,
          imgurl17: detalhesproduto.cores.corSix.imgurl17,
          imgurl18: detalhesproduto.cores.corSix.imgurl18,
          cor6:
            corupdate6 == "" ? detalhesproduto.cores.corSix.cor6 : corupdate6,
          tamanhos: {
            tamanhoOne: { tamanho21: tamanho21, quantidade21: quantidade21 },
            tamanhoTwo: { tamanho22: tamanho22, quantidade22: quantidade22 },
            tamanhoThree: { tamanho23: tamanho23, quantidade23: quantidade23 },
            tamanhoFour: { tamanho24: tamanho24, quantidade24: quantidade24 },
          },
        },
      },
    };

    api
      .put(`/produtos/${_id}`, data)
      .then(() => {
        toast.success("Item atualizado com sucesso!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function delitemcor4(_id) {
    if (promocao2 == "") {
      document.getElementById("promo2").setAttribute("style", "background:red");
      return;
    }
    let data = {
      headers: {
        Authorization: "Access-Control-Allow-Origin",
      },
      // produto: detalhesproduto.produto,
      precomaior: precomaior,
      sku: sku,

      preco: precoupdate,
      modelo: modelo == "" ? detalhesproduto.modelo : modelo,
      //marca: marcaupdate,
      //tipo: tipoprodutoupdate,
      categoria: categoriaupdate,
      descricao: decricaoupdate,
      promocao: promocao,
      promocao2: promocao2,
      qtdpromocao2: qtdpromocao2,
      desconto: desconto,
      subcategoria1: subcategoriaupdate1,
      subcategoria2: subcategoriaupdate2,
      subcategoria3: subcategoriaupdate3,
      subcategoria4: subcategoriaupdate4,
      peso: peso,
      comprimento: comprimento,
      altura: altura,
      largura: largura,
      diametro: diametro,
      formato: formato,
      cores: {
        corPrimary: {
          imgurl: detalhesproduto.cores.corPrimary.imgurl,
          imgurl2: detalhesproduto.cores.corPrimary.imgurl2,
          imgurl3: detalhesproduto.cores.corPrimary.imgurl3,
          cor1:
            corupdate == "" ? detalhesproduto.cores.corPrimary.cor1 : corupdate,
          tamanhos: {
            tamanhoOne: { tamanho1: tamanho1, quantidade: quantidade1 },
            tamanhoTwo: { tamanho2: tamanho2, quantidade2: quantidade2 },
            tamanhoThree: { tamanho3: tamanho3, quantidade3: quantidade3 },
            tamanhoFour: { tamanho4: tamanho4, quantidade4: quantidade4 },
          },
        },
        corSecondary: {
          imgurl4: detalhesproduto.cores.corSecondary.imgurl4,
          imgurl5: detalhesproduto.cores.corSecondary.imgurl5,
          imgurl6: detalhesproduto.cores.corSecondary.imgurl6,
          cor2:
            corupdate2 == ""
              ? detalhesproduto.cores.corSecondary.cor2
              : corupdate2,
          tamanhos: {
            tamanhoOne: { tamanho5: tamanho5, quantidade5: quantidade5 },
            tamanhoTwo: { tamanho6: tamanho6, quantidade6: quantidade6 },
            tamanhoThree: { tamanho7: tamanho7, quantidade7: quantidade7 },
            tamanhoFour: { tamanho8: tamanho8, quantidade8: quantidade8 },
          },
        },
        corTertiary: {
          imgurl7: detalhesproduto.cores.corTertiary.imgurl7,
          imgurl8: detalhesproduto.cores.corTertiary.imgurl8,
          imgurl9: detalhesproduto.cores.corTertiary.imgurl9,
          cor3:
            corupdate3 == ""
              ? detalhesproduto.cores.corTertiary.cor3
              : corupdate3,
          tamanhos: {
            tamanhoOne: { tamanho9: tamanho9, quantidade9: quantidade9 },
            tamanhoTwo: { tamanho10: tamanho10, quantidade10: quantidade10 },
            tamanhoThree: { tamanho11: tamanho11, quantidade11: quantidade11 },
            tamanhoFour: { tamanho12: tamanho12, quantidade12: quantidade12 },
          },
        },
        corQuaternary: {
          imgurl10: "",
          imgurl11: "",
          imgurl12: "",
          cor4: "",
          tamanhos: {
            tamanhoOne: { tamanho13: "", quantidade13: "" },
            tamanhoTwo: { tamanho14: "", quantidade14: "" },
            tamanhoThree: { tamanho15: "", quantidade15: "" },
            tamanhoFour: { tamanho16: "", quantidade16: "" },
          },
        },
        corFive: {
          imgurl13: detalhesproduto.cores.corFive.imgurl13,
          imgurl14: detalhesproduto.cores.corFive.imgurl14,
          imgurl15: detalhesproduto.cores.corFive.imgurl15,
          cor5:
            corupdate5 == "" ? detalhesproduto.cores.corFive.cor5 : corupdate5,
          tamanhos: {
            tamanhoOne: { tamanho17: tamanho17, quantidade17: quantidade17 },
            tamanhoTwo: { tamanho18: tamanho18, quantidade18: quantidade18 },
            tamanhoThree: { tamanho19: tamanho19, quantidade19: quantidade19 },
            tamanhoFour: { tamanho20: tamanho20, quantidade20: quantidade20 },
          },
        },
        corSix: {
          imgurl16: detalhesproduto.cores.corSix.imgurl16,
          imgurl17: detalhesproduto.cores.corSix.imgurl17,
          imgurl18: detalhesproduto.cores.corSix.imgurl18,
          cor6:
            corupdate6 == "" ? detalhesproduto.cores.corSix.cor6 : corupdate6,
          tamanhos: {
            tamanhoOne: { tamanho21: tamanho21, quantidade21: quantidade21 },
            tamanhoTwo: { tamanho22: tamanho22, quantidade22: quantidade22 },
            tamanhoThree: { tamanho23: tamanho23, quantidade23: quantidade23 },
            tamanhoFour: { tamanho24: tamanho24, quantidade24: quantidade24 },
          },
        },
      },
    };

    api
      .put(`/produtos/${_id}`, data)
      .then(() => {
        toast.success("Item atualizado com sucesso!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function delitemcor5(_id) {
    if (promocao2 == "") {
      document.getElementById("promo2").setAttribute("style", "background:red");
      return;
    }
    let data = {
      headers: {
        Authorization: "Access-Control-Allow-Origin",
      },
      // produto: detalhesproduto.produto,
      precomaior: precomaior,
      preco: precoupdate,
      sku: sku,

      modelo: modelo == "" ? detalhesproduto.modelo : modelo,
      //marca: marcaupdate,
      //tipo: tipoprodutoupdate,
      categoria: categoriaupdate,
      descricao: decricaoupdate,
      promocao: promocao,
      promocao2: promocao2,
      qtdpromocao2: qtdpromocao2,
      desconto: desconto,
      subcategoria1: subcategoriaupdate1,
      subcategoria2: subcategoriaupdate2,
      subcategoria3: subcategoriaupdate3,
      subcategoria4: subcategoriaupdate4,
      peso: peso,
      comprimento: comprimento,
      altura: altura,
      largura: largura,
      diametro: diametro,
      formato: formato,
      cores: {
        corPrimary: {
          imgurl: detalhesproduto.cores.corPrimary.imgurl,
          imgurl2: detalhesproduto.cores.corPrimary.imgurl2,
          imgurl3: detalhesproduto.cores.corPrimary.imgurl3,
          cor1:
            corupdate == "" ? detalhesproduto.cores.corPrimary.cor1 : corupdate,
          tamanhos: {
            tamanhoOne: { tamanho1: tamanho1, quantidade: quantidade1 },
            tamanhoTwo: { tamanho2: tamanho2, quantidade2: quantidade2 },
            tamanhoThree: { tamanho3: tamanho3, quantidade3: quantidade3 },
            tamanhoFour: { tamanho4: tamanho4, quantidade4: quantidade4 },
          },
        },
        corSecondary: {
          imgurl4: detalhesproduto.cores.corSecondary.imgurl4,
          imgurl5: detalhesproduto.cores.corSecondary.imgurl5,
          imgurl6: detalhesproduto.cores.corSecondary.imgurl6,
          cor2:
            corupdate2 == ""
              ? detalhesproduto.cores.corSecondary.cor2
              : corupdate2,
          tamanhos: {
            tamanhoOne: { tamanho5: tamanho5, quantidade5: quantidade5 },
            tamanhoTwo: { tamanho6: tamanho6, quantidade6: quantidade6 },
            tamanhoThree: { tamanho7: tamanho7, quantidade7: quantidade7 },
            tamanhoFour: { tamanho8: tamanho8, quantidade8: quantidade8 },
          },
        },
        corTertiary: {
          imgurl7: detalhesproduto.cores.corTertiary.imgurl7,
          imgurl8: detalhesproduto.cores.corTertiary.imgurl8,
          imgurl9: detalhesproduto.cores.corTertiary.imgurl9,
          cor3:
            corupdate3 == ""
              ? detalhesproduto.cores.corTertiary.cor3
              : corupdate3,
          tamanhos: {
            tamanhoOne: { tamanho9: tamanho9, quantidade9: quantidade9 },
            tamanhoTwo: { tamanho10: tamanho10, quantidade10: quantidade10 },
            tamanhoThree: { tamanho11: tamanho11, quantidade11: quantidade11 },
            tamanhoFour: { tamanho12: tamanho12, quantidade12: quantidade12 },
          },
        },
        corQuaternary: {
          imgurl10: detalhesproduto.cores.corQuaternary.imgurl10,
          imgurl11: detalhesproduto.cores.corQuaternary.imgurl11,
          imgurl12: detalhesproduto.cores.corQuaternary.imgurl12,
          cor4:
            corupdate4 == ""
              ? detalhesproduto.cores.corQuaternary.cor4
              : corupdate4,
          tamanhos: {
            tamanhoOne: { tamanho13: tamanho13, quantidade13: quantidade13 },
            tamanhoTwo: { tamanho14: tamanho14, quantidade14: quantidade14 },
            tamanhoThree: { tamanho15: tamanho15, quantidade15: quantidade15 },
            tamanhoFour: { tamanho16: tamanho16, quantidade16: quantidade16 },
          },
        },
        corFive: {
          imgurl13: "",
          imgurl14: "",
          imgurl15: "",
          cor5: "",
          tamanhos: {
            tamanhoOne: { tamanho17: "", quantidade17: "" },
            tamanhoTwo: { tamanho18: "", quantidade18: "" },
            tamanhoThree: { tamanho19: "", quantidade19: "" },
            tamanhoFour: { tamanho20: "", quantidade20: "" },
          },
        },
        corSix: {
          imgurl16: detalhesproduto.cores.corSix.imgurl16,
          imgurl17: detalhesproduto.cores.corSix.imgurl17,
          imgurl18: detalhesproduto.cores.corSix.imgurl18,
          cor6:
            corupdate6 == "" ? detalhesproduto.cores.corSix.cor6 : corupdate6,
          tamanhos: {
            tamanhoOne: { tamanho21: tamanho21, quantidade21: quantidade21 },
            tamanhoTwo: { tamanho22: tamanho22, quantidade22: quantidade22 },
            tamanhoThree: { tamanho23: tamanho23, quantidade23: quantidade23 },
            tamanhoFour: { tamanho24: tamanho24, quantidade24: quantidade24 },
          },
        },
      },
    };

    api
      .put(`/produtos/${_id}`, data)
      .then(() => {
        toast.success("Item atualizado com sucesso!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function delitemcor6(_id) {
    if (promocao2 == "") {
      document.getElementById("promo2").setAttribute("style", "background:red");
      return;
    }
    let data = {
      headers: {
        Authorization: "Access-Control-Allow-Origin",
      },
      // produto: detalhesproduto.produto,
      precomaior: precomaior,
      sku: sku,

      preco: precoupdate,
      modelo: modelo == "" ? detalhesproduto.modelo : modelo,
      //marca: marcaupdate,
      //tipo: tipoprodutoupdate,
      categoria: categoriaupdate,
      descricao: decricaoupdate,
      promocao: promocao,
      promocao2: promocao2,
      qtdpromocao2: qtdpromocao2,
      desconto: desconto,
      subcategoria1: subcategoriaupdate1,
      subcategoria2: subcategoriaupdate2,
      subcategoria3: subcategoriaupdate3,
      subcategoria4: subcategoriaupdate4,
      peso: peso,
      comprimento: comprimento,
      altura: altura,
      largura: largura,
      diametro: diametro,
      formato: formato,
      cores: {
        corPrimary: {
          imgurl: detalhesproduto.cores.corPrimary.imgurl,
          imgurl2: detalhesproduto.cores.corPrimary.imgurl2,
          imgurl3: detalhesproduto.cores.corPrimary.imgurl3,
          cor1:
            corupdate == "" ? detalhesproduto.cores.corPrimary.cor1 : corupdate,
          tamanhos: {
            tamanhoOne: { tamanho1: tamanho1, quantidade: quantidade1 },
            tamanhoTwo: { tamanho2: tamanho2, quantidade2: quantidade2 },
            tamanhoThree: { tamanho3: tamanho3, quantidade3: quantidade3 },
            tamanhoFour: { tamanho4: tamanho4, quantidade4: quantidade4 },
          },
        },
        corSecondary: {
          imgurl4: detalhesproduto.cores.corSecondary.imgurl4,
          imgurl5: detalhesproduto.cores.corSecondary.imgurl5,
          imgurl6: detalhesproduto.cores.corSecondary.imgurl6,
          cor2:
            corupdate2 == ""
              ? detalhesproduto.cores.corSecondary.cor2
              : corupdate2,
          tamanhos: {
            tamanhoOne: { tamanho5: tamanho5, quantidade5: quantidade5 },
            tamanhoTwo: { tamanho6: tamanho6, quantidade6: quantidade6 },
            tamanhoThree: { tamanho7: tamanho7, quantidade7: quantidade7 },
            tamanhoFour: { tamanho8: tamanho8, quantidade8: quantidade8 },
          },
        },
        corTertiary: {
          imgurl7: detalhesproduto.cores.corTertiary.imgurl7,
          imgurl8: detalhesproduto.cores.corTertiary.imgurl8,
          imgurl9: detalhesproduto.cores.corTertiary.imgurl9,
          cor3:
            corupdate3 == ""
              ? detalhesproduto.cores.corTertiary.cor3
              : corupdate3,
          tamanhos: {
            tamanhoOne: { tamanho9: tamanho9, quantidade9: quantidade9 },
            tamanhoTwo: { tamanho10: tamanho10, quantidade10: quantidade10 },
            tamanhoThree: { tamanho11: tamanho11, quantidade11: quantidade11 },
            tamanhoFour: { tamanho12: tamanho12, quantidade12: quantidade12 },
          },
        },
        corQuaternary: {
          imgurl10: detalhesproduto.cores.corQuaternary.imgurl10,
          imgurl11: detalhesproduto.cores.corQuaternary.imgurl11,
          imgurl12: detalhesproduto.cores.corQuaternary.imgurl12,
          cor4:
            corupdate4 == ""
              ? detalhesproduto.cores.corQuaternary.cor4
              : corupdate4,
          tamanhos: {
            tamanhoOne: { tamanho13: tamanho13, quantidade13: quantidade13 },
            tamanhoTwo: { tamanho14: tamanho14, quantidade14: quantidade14 },
            tamanhoThree: { tamanho15: tamanho15, quantidade15: quantidade15 },
            tamanhoFour: { tamanho16: tamanho16, quantidade16: quantidade16 },
          },
        },
        corFive: {
          imgurl13: detalhesproduto.cores.corFive.imgurl13,
          imgurl14: detalhesproduto.cores.corFive.imgurl14,
          imgurl15: detalhesproduto.cores.corFive.imgurl15,
          cor5:
            corupdate5 == "" ? detalhesproduto.cores.corFive.cor5 : corupdate5,
          tamanhos: {
            tamanhoOne: { tamanho17: tamanho17, quantidade17: quantidade17 },
            tamanhoTwo: { tamanho18: tamanho18, quantidade18: quantidade18 },
            tamanhoThree: { tamanho19: tamanho19, quantidade19: quantidade19 },
            tamanhoFour: { tamanho20: tamanho20, quantidade20: quantidade20 },
          },
        },
        corSix: {
          imgurl16: "",
          imgurl17: "",
          imgurl18: "",
          cor6: "",
          tamanhos: {
            tamanhoOne: { tamanho21: "", quantidade21: "" },
            tamanhoTwo: { tamanho22: "", quantidade22: "" },
            tamanhoThree: { tamanho23: "", quantidade23: "" },
            tamanhoFour: { tamanho24: "", quantidade24: "" },
          },
        },
      },
    };

    api
      .put(`/produtos/${_id}`, data)
      .then(() => {
        toast.success("Item atualizado com sucesso!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function updateitem(_id) {
    if (promocao2 == "") {
      document.getElementById("promo2").setAttribute("style", "background:red");
      return;
    }
    let data = {
      headers: {
        Authorization: "Access-Control-Allow-Origin",
      },
      // produto: detalhesproduto.produto,
      precomaior: precomaior,
      sku: sku,

      preco: precoupdate,
      modelo: modelo == "" ? detalhesproduto.modelo : modelo,
      //marca: marcaupdate,
      //tipo: tipoprodutoupdate,
      categoria: categoriaupdate,
      descricao: decricaoupdate,
      promocao: promocao,
      promocao2: promocao2,
      qtdpromocao2: qtdpromocao2,
      desconto: desconto,
      subcategoria1: subcategoriaupdate1,
      subcategoria2: subcategoriaupdate2,
      subcategoria3: subcategoriaupdate3,
      subcategoria4: subcategoriaupdate4,
      peso: peso,
      comprimento: comprimento,
      altura: altura,
      largura: largura,
      diametro: diametro,
      formato: formato,
      cores: {
        corPrimary: {
          imgurl: detalhesproduto.cores.corPrimary.imgurl,
          imgurl2: detalhesproduto.cores.corPrimary.imgurl2,
          imgurl3: detalhesproduto.cores.corPrimary.imgurl3,
          cor1:
            corupdate == "" ? detalhesproduto.cores.corPrimary.cor1 : corupdate,
          tamanhos: {
            tamanhoOne: { tamanho1: tamanho1, quantidade: quantidade1 },
            tamanhoTwo: { tamanho2: tamanho2, quantidade2: quantidade2 },
            tamanhoThree: { tamanho3: tamanho3, quantidade3: quantidade3 },
            tamanhoFour: { tamanho4: tamanho4, quantidade4: quantidade4 },
          },
        },
        corSecondary: {
          imgurl4: detalhesproduto.cores.corSecondary.imgurl4,
          imgurl5: detalhesproduto.cores.corSecondary.imgurl5,
          imgurl6: detalhesproduto.cores.corSecondary.imgurl6,
          cor2:
            corupdate2 == ""
              ? detalhesproduto.cores.corSecondary.cor2
              : corupdate2,
          tamanhos: {
            tamanhoOne: { tamanho5: tamanho5, quantidade5: quantidade5 },
            tamanhoTwo: { tamanho6: tamanho6, quantidade6: quantidade6 },
            tamanhoThree: { tamanho7: tamanho7, quantidade7: quantidade7 },
            tamanhoFour: { tamanho8: tamanho8, quantidade8: quantidade8 },
          },
        },
        corTertiary: {
          imgurl7: detalhesproduto.cores.corTertiary.imgurl7,
          imgurl8: detalhesproduto.cores.corTertiary.imgurl8,
          imgurl9: detalhesproduto.cores.corTertiary.imgurl9,
          cor3:
            corupdate3 == ""
              ? detalhesproduto.cores.corTertiary.cor3
              : corupdate3,
          tamanhos: {
            tamanhoOne: { tamanho9: tamanho9, quantidade9: quantidade9 },
            tamanhoTwo: { tamanho10: tamanho10, quantidade10: quantidade10 },
            tamanhoThree: { tamanho11: tamanho11, quantidade11: quantidade11 },
            tamanhoFour: { tamanho12: tamanho12, quantidade12: quantidade12 },
          },
        },
        corQuaternary: {
          imgurl10: detalhesproduto.cores.corQuaternary.imgurl10,
          imgurl11: detalhesproduto.cores.corQuaternary.imgurl11,
          imgurl12: detalhesproduto.cores.corQuaternary.imgurl12,
          cor4:
            corupdate4 == ""
              ? detalhesproduto.cores.corQuaternary.cor4
              : corupdate4,
          tamanhos: {
            tamanhoOne: { tamanho13: tamanho13, quantidade13: quantidade13 },
            tamanhoTwo: { tamanho14: tamanho14, quantidade14: quantidade14 },
            tamanhoThree: { tamanho15: tamanho15, quantidade15: quantidade15 },
            tamanhoFour: { tamanho16: tamanho16, quantidade16: quantidade16 },
          },
        },
        corFive: {
          imgurl13: detalhesproduto.cores.corFive.imgurl13,
          imgurl14: detalhesproduto.cores.corFive.imgurl14,
          imgurl15: detalhesproduto.cores.corFive.imgurl15,
          cor5:
            corupdate5 == "" ? detalhesproduto.cores.corFive.cor5 : corupdate5,
          tamanhos: {
            tamanhoOne: { tamanho17: tamanho17, quantidade17: quantidade17 },
            tamanhoTwo: { tamanho18: tamanho18, quantidade18: quantidade18 },
            tamanhoThree: { tamanho19: tamanho19, quantidade19: quantidade19 },
            tamanhoFour: { tamanho20: tamanho20, quantidade20: quantidade20 },
          },
        },
        corSix: {
          imgurl16: detalhesproduto.cores.corSix.imgurl16,
          imgurl17: detalhesproduto.cores.corSix.imgurl17,
          imgurl18: detalhesproduto.cores.corSix.imgurl18,
          cor6:
            corupdate6 == "" ? detalhesproduto.cores.corSix.cor6 : corupdate6,
          tamanhos: {
            tamanhoOne: { tamanho21: tamanho21, quantidade21: quantidade21 },
            tamanhoTwo: { tamanho22: tamanho22, quantidade22: quantidade22 },
            tamanhoThree: { tamanho23: tamanho23, quantidade23: quantidade23 },
            tamanhoFour: { tamanho24: tamanho24, quantidade24: quantidade24 },
          },
        },
      },
    };

    api
      .put(`/produtos/${_id}`, data)
      .then(() => {
        toast.success("Item atualizado com sucesso!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function deleteitem(_id) {
    await api.delete(`/produtos/${_id}`).then(() => {
      toast.success("Item excluido com sucesso!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }

  async function filtroproduto(e) {
    await api.get(`/produto?produto=${e}`).then((data) => {
      setDataprodutos(data.data);
    });
  }
  async function filtroproduto2(e) {
    await api.get(`/categoria?categoria=${e}`).then((data) => {
      setDataprodutos(data.data);
    });
  }

  async function mostrartodos() {
    await api.get(`/produtos`).then((data) => {
      setDataprodutos(data.data);
    });
  }

  async function maiorpreco() {
    await api.get(`/produtos`).then((data) => {
      setDataprodutos(
        data.data.sort((a, b) => {
          if (a.preco < b.preco) {
            return -1;
          } else {
            return true;
          }
        })
      );
    });
  }

  async function menorpreco(e) {
    await api.get(`/produtos`).then((data) => {
      setDataprodutos(
        data.data
          .sort((a, b) => {
            if (a.preco < b.preco) {
              return -1;
            } else {
              return true;
            }
          })
          .reverse()
      );
    });
  }

  async function tirabanner1() {
    setLoad(true);
    await api2
      .put(`/edicao/63ecc3bae25f69b653d416fc`, {
        headers: {
          Authorization: "Access-Control-Allow-Origin",
        },
        componentetexto1:
          textofretegratis == ""
            ? dadosedicao.map((item) => item.componentetexto1)[0]
            : textofretegratis,
        parcelas: parcelas,
        bannerpaginaprod:
          bannerpaginaproduto == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpaginaproduto,
        bannermodalpromocao:
          bannerpromocao == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpromocao,
        bannercentralhome:
          bannercentralhome == ""
            ? dadosedicao.map((item) => item.bannercentralhome)[0]
            : bannercentralhome,
            url1:'',
            url2:urlbanneredicao2 == ''? dadosedicao.map((item) => item.url2)[0] : urlbanneredicao2,
            url3:urlbanneredicao3 == ''? dadosedicao.map((item) => item.url3)[0] : urlbanneredicao3,
            url4:urlbanneredicao4 == ''? dadosedicao.map((item) => item.url4)[0] : urlbanneredicao4,
            url5:urlbanneredicao5 == ''? dadosedicao.map((item) => item.url5)[0] : urlbanneredicao5,
            url6:urlbanneredicao6 == ''? dadosedicao.map((item) => item.url6)[0] : urlbanneredicao6,

        componentelogos: {
          logo1: "",
          logo2:
            urllogo2 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo2)[0]
              : urllogo2,
          logo3:
            urllogo3 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo3)[0]
              : urllogo3,
          logo4:
            urllogo4 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo4)[0]
              : urllogo4,
          logo5:
            urllogo5 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo5)[0]
              : urllogo5,
          logo6:
            urllogo6 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo6)[0]
              : urllogo6,
          logo7:
            urllogo7 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo7)[0]
              : urllogo7,
        },
        backgoundhome: {
          background1:
            urlFoto1 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background1)[0]
              : urlFoto1,
          background2:
            urlFoto2 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background2)[0]
              : urlFoto2,
          background3:
            urlFoto3 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background3)[0]
              : urlFoto3,
          backgroundmobile1:
            urlmobile1 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile1
                )[0]
              : urlmobile1,
          backgroundmobile2:
            urlmobile2 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile2
                )[0]
              : urlmobile2,
          backgroundmobile3:
            urlmobile3 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile3
                )[0]
              : urlmobile3,
        },
        componentetexto2:
          titulosessaobanners == ""
            ? dadosedicao.map((item) => item.itemcomponentetexto2)[0]
            : titulosessaobanners,
        banners: {
          banner1:
            urlbanner1 == ""
              ? dadosedicao.map((item) => item.banners.banner1)[0]
              : urlbanner1,
          banner2:
            urlbanner2 == ""
              ? dadosedicao.map((item) => item.banners.banner2)[0]
              : urlbanner2,
          banner3:
            urlbanner3 == ""
              ? dadosedicao.map((item) => item.banners.banner3)[0]
              : urlbanner3,
          banner4:
            urlbanner4 == ""
              ? dadosedicao.map((item) => item.banners.banner4)[0]
              : urlbanner4,
          banner5:
            urlbanner5 == ""
              ? dadosedicao.map((item) => item.banners.banner5)[0]
              : urlbanner5,
          banner6:
            urlbanner6 == ""
              ? dadosedicao.map((item) => item.banners.banner6)[0]
              : urlbanner6,
          banner7:
            urlbanner7 == ""
              ? dadosedicao.map((item) => item.banners.banner7)[0]
              : urlbanner7,
        },
      })
      .then(() => {
        setLoad(false);
        toast.success("Homepage atualizada com sucesso!");
      });
  }

  async function tirabanner2() {
    setLoad(true);
    await api2
      .put(`/edicao/63ecc3bae25f69b653d416fc`, {
        headers: {
          Authorization: "Access-Control-Allow-Origin",
        },
        componentetexto1:
          textofretegratis == ""
            ? dadosedicao.map((item) => item.componentetexto1)[0]
            : textofretegratis,
        parcelas: parcelas,
        bannerpaginaprod:
          bannerpaginaproduto == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpaginaproduto,
        bannermodalpromocao:
          bannerpromocao == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpromocao,
        bannercentralhome:
          bannercentralhome == ""
            ? dadosedicao.map((item) => item.bannercentralhome)[0]
            : bannercentralhome,
            url1:urlbanneredicao1 == ''? dadosedicao.map((item) => item.url1)[0] : urlbanneredicao1,
            url2:'',
            url3:urlbanneredicao3 == ''? dadosedicao.map((item) => item.url3)[0] : urlbanneredicao3,
            url4:urlbanneredicao4 == ''? dadosedicao.map((item) => item.url4)[0] : urlbanneredicao4,
            url5:urlbanneredicao5 == ''? dadosedicao.map((item) => item.url5)[0] : urlbanneredicao5,
            url6:urlbanneredicao6 == ''? dadosedicao.map((item) => item.url6)[0] : urlbanneredicao6,

        componentelogos: {
          logo1:
            urllogo1 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo1)[0]
              : urllogo1,
          logo2:'',
          logo3:
            urllogo3 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo3)[0]
              : urllogo3,
          logo4:
            urllogo4 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo4)[0]
              : urllogo4,
          logo5:
            urllogo5 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo5)[0]
              : urllogo5,
          logo6:
            urllogo6 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo6)[0]
              : urllogo6,
          logo7:
            urllogo7 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo7)[0]
              : urllogo7,
        },
        backgoundhome: {
          background1:
            urlFoto1 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background1)[0]
              : urlFoto1,
          background2:
            urlFoto2 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background2)[0]
              : urlFoto2,
          background3:
            urlFoto3 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background3)[0]
              : urlFoto3,
          backgroundmobile1:
            urlmobile1 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile1
                )[0]
              : urlmobile1,
          backgroundmobile2:
            urlmobile2 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile2
                )[0]
              : urlmobile2,
          backgroundmobile3:
            urlmobile3 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile3
                )[0]
              : urlmobile3,
        },
        componentetexto2:
          titulosessaobanners == ""
            ? dadosedicao.map((item) => item.itemcomponentetexto2)[0]
            : titulosessaobanners,
        banners: {
          banner1:
            urlbanner1 == ""
              ? dadosedicao.map((item) => item.banners.banner1)[0]
              : urlbanner1,
          banner2:
            urlbanner2 == ""
              ? dadosedicao.map((item) => item.banners.banner2)[0]
              : urlbanner2,
          banner3:
            urlbanner3 == ""
              ? dadosedicao.map((item) => item.banners.banner3)[0]
              : urlbanner3,
          banner4:
            urlbanner4 == ""
              ? dadosedicao.map((item) => item.banners.banner4)[0]
              : urlbanner4,
          banner5:
            urlbanner5 == ""
              ? dadosedicao.map((item) => item.banners.banner5)[0]
              : urlbanner5,
          banner6:
            urlbanner6 == ""
              ? dadosedicao.map((item) => item.banners.banner6)[0]
              : urlbanner6,
          banner7:
            urlbanner7 == ""
              ? dadosedicao.map((item) => item.banners.banner7)[0]
              : urlbanner7,
        },
      })
      .then(() => {
        setLoad(false);
        toast.success("Homepage atualizada com sucesso!");
      });
  }
  
  async function tirabanner3() {
    setLoad(true);
    await api2
      .put(`/edicao/63ecc3bae25f69b653d416fc`, {
        headers: {
          Authorization: "Access-Control-Allow-Origin",
        },
        componentetexto1:
          textofretegratis == ""
            ? dadosedicao.map((item) => item.componentetexto1)[0]
            : textofretegratis,
        parcelas: parcelas,
        bannerpaginaprod:
          bannerpaginaproduto == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpaginaproduto,
        bannermodalpromocao:
          bannerpromocao == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpromocao,
        bannercentralhome:
          bannercentralhome == ""
            ? dadosedicao.map((item) => item.bannercentralhome)[0]
            : bannercentralhome,
            url1:urlbanneredicao1 == ''? dadosedicao.map((item) => item.url1)[0] : urlbanneredicao1,
            url2:urlbanneredicao2 == ''? dadosedicao.map((item) => item.url2)[0] : urlbanneredicao2,
            url3:'',
            url4:urlbanneredicao4 == ''? dadosedicao.map((item) => item.url4)[0] : urlbanneredicao4,
            url5:urlbanneredicao5 == ''? dadosedicao.map((item) => item.url5)[0] : urlbanneredicao5,
            url6:urlbanneredicao6 == ''? dadosedicao.map((item) => item.url6)[0] : urlbanneredicao6,

        componentelogos: {
          logo1:
            urllogo1 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo1)[0]
              : urllogo1,
          logo2:
            urllogo2 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo2)[0]
              : urllogo2,
          logo3:'',
          logo4:
          urllogo4 == ""
            ? dadosedicao.map((item) => item.componentelogos.logo4)[0]
            : urllogo4,
          logo5:
            urllogo5 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo5)[0]
              : urllogo5,
          logo6:
            urllogo6 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo6)[0]
              : urllogo6,
          logo7:
            urllogo7 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo7)[0]
              : urllogo7,
        },
        backgoundhome: {
          background1:
            urlFoto1 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background1)[0]
              : urlFoto1,
          background2:
            urlFoto2 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background2)[0]
              : urlFoto2,
          background3:
            urlFoto3 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background3)[0]
              : urlFoto3,
          backgroundmobile1:
            urlmobile1 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile1
                )[0]
              : urlmobile1,
          backgroundmobile2:
            urlmobile2 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile2
                )[0]
              : urlmobile2,
          backgroundmobile3:
            urlmobile3 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile3
                )[0]
              : urlmobile3,
        },
        componentetexto2:
          titulosessaobanners == ""
            ? dadosedicao.map((item) => item.itemcomponentetexto2)[0]
            : titulosessaobanners,
        banners: {
          banner1:
            urlbanner1 == ""
              ? dadosedicao.map((item) => item.banners.banner1)[0]
              : urlbanner1,
          banner2:
            urlbanner2 == ""
              ? dadosedicao.map((item) => item.banners.banner2)[0]
              : urlbanner2,
          banner3:
            urlbanner3 == ""
              ? dadosedicao.map((item) => item.banners.banner3)[0]
              : urlbanner3,
          banner4:
            urlbanner4 == ""
              ? dadosedicao.map((item) => item.banners.banner4)[0]
              : urlbanner4,
          banner5:
            urlbanner5 == ""
              ? dadosedicao.map((item) => item.banners.banner5)[0]
              : urlbanner5,
          banner6:
            urlbanner6 == ""
              ? dadosedicao.map((item) => item.banners.banner6)[0]
              : urlbanner6,
          banner7:
            urlbanner7 == ""
              ? dadosedicao.map((item) => item.banners.banner7)[0]
              : urlbanner7,
        },
      })
      .then(() => {
        setLoad(false);
        toast.success("Homepage atualizada com sucesso!");
      });
  }
  async function tirabanner4() {
    setLoad(true);
    await api2
      .put(`/edicao/63ecc3bae25f69b653d416fc`, {
        headers: {
          Authorization: "Access-Control-Allow-Origin",
        },
        componentetexto1:
          textofretegratis == ""
            ? dadosedicao.map((item) => item.componentetexto1)[0]
            : textofretegratis,
        parcelas: parcelas,
        bannerpaginaprod:
          bannerpaginaproduto == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpaginaproduto,
        bannermodalpromocao:
          bannerpromocao == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpromocao,
        bannercentralhome:
          bannercentralhome == ""
            ? dadosedicao.map((item) => item.bannercentralhome)[0]
            : bannercentralhome,
            url1:urlbanneredicao1 == ''? dadosedicao.map((item) => item.url1)[0] : urlbanneredicao1,
            url2:urlbanneredicao2 == ''? dadosedicao.map((item) => item.url2)[0] : urlbanneredicao2,
            url3:urlbanneredicao3 == ''? dadosedicao.map((item) => item.url3)[0] : urlbanneredicao3,
            url4:'',
            url5:urlbanneredicao5 == ''? dadosedicao.map((item) => item.url5)[0] : urlbanneredicao5,
            url6:urlbanneredicao6 == ''? dadosedicao.map((item) => item.url6)[0] : urlbanneredicao6,

        componentelogos: {
          logo1:
            urllogo1 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo1)[0]
              : urllogo1,
          logo2:
            urllogo2 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo2)[0]
              : urllogo2,
          logo3:
            urllogo3 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo3)[0]
              : urllogo3,
          logo4:'',
          logo5:
            urllogo5 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo5)[0]
              : urllogo5,
          logo6:
            urllogo6 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo6)[0]
              : urllogo6,
          logo7:
            urllogo7 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo7)[0]
              : urllogo7,
        },
        backgoundhome: {
          background1:
            urlFoto1 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background1)[0]
              : urlFoto1,
          background2:
            urlFoto2 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background2)[0]
              : urlFoto2,
          background3:
            urlFoto3 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background3)[0]
              : urlFoto3,
          backgroundmobile1:
            urlmobile1 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile1
                )[0]
              : urlmobile1,
          backgroundmobile2:
            urlmobile2 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile2
                )[0]
              : urlmobile2,
          backgroundmobile3:
            urlmobile3 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile3
                )[0]
              : urlmobile3,
        },
        componentetexto2:
          titulosessaobanners == ""
            ? dadosedicao.map((item) => item.itemcomponentetexto2)[0]
            : titulosessaobanners,
        banners: {
          banner1:
            urlbanner1 == ""
              ? dadosedicao.map((item) => item.banners.banner1)[0]
              : urlbanner1,
          banner2:
            urlbanner2 == ""
              ? dadosedicao.map((item) => item.banners.banner2)[0]
              : urlbanner2,
          banner3:
            urlbanner3 == ""
              ? dadosedicao.map((item) => item.banners.banner3)[0]
              : urlbanner3,
          banner4:
            urlbanner4 == ""
              ? dadosedicao.map((item) => item.banners.banner4)[0]
              : urlbanner4,
          banner5:
            urlbanner5 == ""
              ? dadosedicao.map((item) => item.banners.banner5)[0]
              : urlbanner5,
          banner6:
            urlbanner6 == ""
              ? dadosedicao.map((item) => item.banners.banner6)[0]
              : urlbanner6,
          banner7:
            urlbanner7 == ""
              ? dadosedicao.map((item) => item.banners.banner7)[0]
              : urlbanner7,
        },
      })
      .then(() => {
        setLoad(false);
        toast.success("Homepage atualizada com sucesso!");
      });
  }
  async function tirabanner5() {
    setLoad(true);
    await api2
      .put(`/edicao/63ecc3bae25f69b653d416fc`, {
        headers: {
          Authorization: "Access-Control-Allow-Origin",
        },
        componentetexto1:
          textofretegratis == ""
            ? dadosedicao.map((item) => item.componentetexto1)[0]
            : textofretegratis,
        parcelas: parcelas,
        bannerpaginaprod:
          bannerpaginaproduto == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpaginaproduto,
        bannermodalpromocao:
          bannerpromocao == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpromocao,
        bannercentralhome:
          bannercentralhome == ""
            ? dadosedicao.map((item) => item.bannercentralhome)[0]
            : bannercentralhome,
            url1:urlbanneredicao1 == ''? dadosedicao.map((item) => item.url1)[0] : urlbanneredicao1,
            url2:urlbanneredicao2 == ''? dadosedicao.map((item) => item.url2)[0] : urlbanneredicao2,
            url3:urlbanneredicao3 == ''? dadosedicao.map((item) => item.url3)[0] : urlbanneredicao3,
            url4:urlbanneredicao4 == ''? dadosedicao.map((item) => item.url4)[0] : urlbanneredicao4,
            url5:'',
            url6:urlbanneredicao6 == ''? dadosedicao.map((item) => item.url6)[0] : urlbanneredicao6,

        componentelogos: {
          logo1:
            urllogo1 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo1)[0]
              : urllogo1,
          logo2:
            urllogo2 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo2)[0]
              : urllogo2,
          logo3:
            urllogo3 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo3)[0]
              : urllogo3,
          logo4:
            urllogo4 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo4)[0]
              : urllogo4,
          logo5:'',
          logo6:
            urllogo6 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo6)[0]
              : urllogo6,
          logo7:
            urllogo7 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo7)[0]
              : urllogo7,
        },
        backgoundhome: {
          background1:
            urlFoto1 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background1)[0]
              : urlFoto1,
          background2:
            urlFoto2 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background2)[0]
              : urlFoto2,
          background3:
            urlFoto3 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background3)[0]
              : urlFoto3,
          backgroundmobile1:
            urlmobile1 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile1
                )[0]
              : urlmobile1,
          backgroundmobile2:
            urlmobile2 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile2
                )[0]
              : urlmobile2,
          backgroundmobile3:
            urlmobile3 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile3
                )[0]
              : urlmobile3,
        },
        componentetexto2:
          titulosessaobanners == ""
            ? dadosedicao.map((item) => item.itemcomponentetexto2)[0]
            : titulosessaobanners,
        banners: {
          banner1:
            urlbanner1 == ""
              ? dadosedicao.map((item) => item.banners.banner1)[0]
              : urlbanner1,
          banner2:
            urlbanner2 == ""
              ? dadosedicao.map((item) => item.banners.banner2)[0]
              : urlbanner2,
          banner3:
            urlbanner3 == ""
              ? dadosedicao.map((item) => item.banners.banner3)[0]
              : urlbanner3,
          banner4:
            urlbanner4 == ""
              ? dadosedicao.map((item) => item.banners.banner4)[0]
              : urlbanner4,
          banner5:
            urlbanner5 == ""
              ? dadosedicao.map((item) => item.banners.banner5)[0]
              : urlbanner5,
          banner6:
            urlbanner6 == ""
              ? dadosedicao.map((item) => item.banners.banner6)[0]
              : urlbanner6,
          banner7:
            urlbanner7 == ""
              ? dadosedicao.map((item) => item.banners.banner7)[0]
              : urlbanner7,
        },
      })
      .then(() => {
        setLoad(false);
        toast.success("Homepage atualizada com sucesso!");
      });
  }
  async function tirabanner6() {
    setLoad(true);
    await api2
      .put(`/edicao/63ecc3bae25f69b653d416fc`, {
        headers: {
          Authorization: "Access-Control-Allow-Origin",
        },
        componentetexto1:
          textofretegratis == ""
            ? dadosedicao.map((item) => item.componentetexto1)[0]
            : textofretegratis,
        parcelas: parcelas,
        bannerpaginaprod:
          bannerpaginaproduto == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpaginaproduto,
        bannermodalpromocao:
          bannerpromocao == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpromocao,
        bannercentralhome:
          bannercentralhome == ""
            ? dadosedicao.map((item) => item.bannercentralhome)[0]
            : bannercentralhome,
            url1:urlbanneredicao1 == ''? dadosedicao.map((item) => item.url1)[0] : urlbanneredicao1,
            url2:urlbanneredicao2 == ''? dadosedicao.map((item) => item.url2)[0] : urlbanneredicao2,
            url3:urlbanneredicao3 == ''? dadosedicao.map((item) => item.url3)[0] : urlbanneredicao3,
            url4:urlbanneredicao4 == ''? dadosedicao.map((item) => item.url4)[0] : urlbanneredicao4,
            url5:urlbanneredicao5 == ''? dadosedicao.map((item) => item.url5)[0] : urlbanneredicao5,
            url6:'',

        componentelogos: {
          logo1:
            urllogo1 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo1)[0]
              : urllogo1,
          logo2:
            urllogo2 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo2)[0]
              : urllogo2,
          logo3:
            urllogo3 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo3)[0]
              : urllogo3,
          logo4:
            urllogo4 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo4)[0]
              : urllogo4,
          logo5:
            urllogo5 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo5)[0]
              : urllogo5,
          logo6:'',
          logo7:
            urllogo7 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo7)[0]
              : urllogo7,
        },
        backgoundhome: {
          background1:
            urlFoto1 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background1)[0]
              : urlFoto1,
          background2:
            urlFoto2 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background2)[0]
              : urlFoto2,
          background3:
            urlFoto3 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background3)[0]
              : urlFoto3,
          backgroundmobile1:
            urlmobile1 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile1
                )[0]
              : urlmobile1,
          backgroundmobile2:
            urlmobile2 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile2
                )[0]
              : urlmobile2,
          backgroundmobile3:
            urlmobile3 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile3
                )[0]
              : urlmobile3,
        },
        componentetexto2:
          titulosessaobanners == ""
            ? dadosedicao.map((item) => item.itemcomponentetexto2)[0]
            : titulosessaobanners,
        banners: {
          banner1:
            urlbanner1 == ""
              ? dadosedicao.map((item) => item.banners.banner1)[0]
              : urlbanner1,
          banner2:
            urlbanner2 == ""
              ? dadosedicao.map((item) => item.banners.banner2)[0]
              : urlbanner2,
          banner3:
            urlbanner3 == ""
              ? dadosedicao.map((item) => item.banners.banner3)[0]
              : urlbanner3,
          banner4:
            urlbanner4 == ""
              ? dadosedicao.map((item) => item.banners.banner4)[0]
              : urlbanner4,
          banner5:
            urlbanner5 == ""
              ? dadosedicao.map((item) => item.banners.banner5)[0]
              : urlbanner5,
          banner6:
            urlbanner6 == ""
              ? dadosedicao.map((item) => item.banners.banner6)[0]
              : urlbanner6,
          banner7:
            urlbanner7 == ""
              ? dadosedicao.map((item) => item.banners.banner7)[0]
              : urlbanner7,
        },
      })
      .then(() => {
        setLoad(false);
        toast.success("Homepage atualizada com sucesso!");
      });
  }
  async function tirabanner7() {
    setLoad(true);
    await api2
      .put(`/edicao/63ecc3bae25f69b653d416fc`, {
        headers: {
          Authorization: "Access-Control-Allow-Origin",
        },
        componentetexto1:
          textofretegratis == ""
            ? dadosedicao.map((item) => item.componentetexto1)[0]
            : textofretegratis,
        parcelas: parcelas,
        bannerpaginaprod:
          bannerpaginaproduto == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpaginaproduto,
        bannermodalpromocao:
          bannerpromocao == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpromocao,
        bannercentralhome:
          bannercentralhome == ""
            ? dadosedicao.map((item) => item.bannercentralhome)[0]
            : bannercentralhome,
            url1:urlbanneredicao1 == ''? dadosedicao.map((item) => item.url1)[0] : urlbanneredicao1,
            url2:urlbanneredicao2 == ''? dadosedicao.map((item) => item.url2)[0] : urlbanneredicao2,
            url3:urlbanneredicao3 == ''? dadosedicao.map((item) => item.url3)[0] : urlbanneredicao3,
            url4:urlbanneredicao4 == ''? dadosedicao.map((item) => item.url4)[0] : urlbanneredicao4,
            url5:urlbanneredicao5 == ''? dadosedicao.map((item) => item.url5)[0] : urlbanneredicao5,
            url6:urlbanneredicao6 == ''? dadosedicao.map((item) => item.url6)[0] : urlbanneredicao6,

        componentelogos: {
          logo1:
            urllogo1 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo1)[0]
              : urllogo1,
          logo2:
            urllogo2 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo2)[0]
              : urllogo2,
          logo3:
            urllogo3 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo3)[0]
              : urllogo3,
          logo4:
            urllogo4 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo4)[0]
              : urllogo4,
          logo5:
            urllogo5 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo5)[0]
              : urllogo5,
          logo6:
            urllogo6 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo6)[0]
              : urllogo6,
          logo7:'',
        },
        backgoundhome: {
          background1:'',
          background2:
            urlFoto2 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background2)[0]
              : urlFoto2,
          background3:
            urlFoto3 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background3)[0]
              : urlFoto3,
          backgroundmobile1:
            urlmobile1 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile1
                )[0]
              : urlmobile1,
          backgroundmobile2:
            urlmobile2 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile2
                )[0]
              : urlmobile2,
          backgroundmobile3:
            urlmobile3 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile3
                )[0]
              : urlmobile3,
        },
        componentetexto2:
          titulosessaobanners == ""
            ? dadosedicao.map((item) => item.itemcomponentetexto2)[0]
            : titulosessaobanners,
        banners: {
          banner1:'',
          banner2:
            urlbanner2 == ""
              ? dadosedicao.map((item) => item.banners.banner2)[0]
              : urlbanner2,
          banner3:
            urlbanner3 == ""
              ? dadosedicao.map((item) => item.banners.banner3)[0]
              : urlbanner3,
          banner4:
            urlbanner4 == ""
              ? dadosedicao.map((item) => item.banners.banner4)[0]
              : urlbanner4,
          banner5:
            urlbanner5 == ""
              ? dadosedicao.map((item) => item.banners.banner5)[0]
              : urlbanner5,
          banner6:
            urlbanner6 == ""
              ? dadosedicao.map((item) => item.banners.banner6)[0]
              : urlbanner6,
          banner7:
            urlbanner7 == ""
              ? dadosedicao.map((item) => item.banners.banner7)[0]
              : urlbanner7,
        },
      })
      .then(() => {
        setLoad(false);
        toast.success("Homepage atualizada com sucesso!");
      });
  }
  async function tirabanner8() {
    setLoad(true);
    await api2
      .put(`/edicao/63ecc3bae25f69b653d416fc`, {
        headers: {
          Authorization: "Access-Control-Allow-Origin",
        },
        componentetexto1:
          textofretegratis == ""
            ? dadosedicao.map((item) => item.componentetexto1)[0]
            : textofretegratis,
        parcelas: parcelas,
        bannerpaginaprod:
          bannerpaginaproduto == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpaginaproduto,
        bannermodalpromocao:
          bannerpromocao == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpromocao,
        bannercentralhome:
          bannercentralhome == ""
            ? dadosedicao.map((item) => item.bannercentralhome)[0]
            : bannercentralhome,
            url1:urlbanneredicao1 == ''? dadosedicao.map((item) => item.url1)[0] : urlbanneredicao1,
            url2:urlbanneredicao2 == ''? dadosedicao.map((item) => item.url2)[0] : urlbanneredicao2,
            url3:urlbanneredicao3 == ''? dadosedicao.map((item) => item.url3)[0] : urlbanneredicao3,
            url4:urlbanneredicao4 == ''? dadosedicao.map((item) => item.url4)[0] : urlbanneredicao4,
            url5:urlbanneredicao5 == ''? dadosedicao.map((item) => item.url5)[0] : urlbanneredicao5,
            url6:urlbanneredicao6 == ''? dadosedicao.map((item) => item.url6)[0] : urlbanneredicao6,

        componentelogos: {
          logo1:
            urllogo1 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo1)[0]
              : urllogo1,
          logo2:
            urllogo2 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo2)[0]
              : urllogo2,
          logo3:
            urllogo3 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo3)[0]
              : urllogo3,
          logo4:
            urllogo4 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo4)[0]
              : urllogo4,
          logo5:
            urllogo5 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo5)[0]
              : urllogo5,
          logo6:
            urllogo6 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo6)[0]
              : urllogo6,
          logo7:
            urllogo7 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo7)[0]
              : urllogo7,
        },
        backgoundhome: {
          background1:urlFoto1 == ""
          ? dadosedicao.map((item) => item.backgoundhome.background1)[0]
          : urlFoto1,
          background2:'',
          background3:
            urlFoto3 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background3)[0]
              : urlFoto3,
          backgroundmobile1:
            urlmobile1 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile1
                )[0]
              : urlmobile1,
          backgroundmobile2:
            urlmobile2 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile2
                )[0]
              : urlmobile2,
          backgroundmobile3:
            urlmobile3 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile3
                )[0]
              : urlmobile3,
        },
        componentetexto2:
          titulosessaobanners == ""
            ? dadosedicao.map((item) => item.itemcomponentetexto2)[0]
            : titulosessaobanners,
        banners: {
          banner1:
            urlbanner1 == ""
              ? dadosedicao.map((item) => item.banners.banner1)[0]
              : urlbanner1,
          banner2:'',
          banner3:
            urlbanner3 == ""
              ? dadosedicao.map((item) => item.banners.banner3)[0]
              : urlbanner3,
          banner4:
            urlbanner4 == ""
              ? dadosedicao.map((item) => item.banners.banner4)[0]
              : urlbanner4,
          banner5:
            urlbanner5 == ""
              ? dadosedicao.map((item) => item.banners.banner5)[0]
              : urlbanner5,
          banner6:
            urlbanner6 == ""
              ? dadosedicao.map((item) => item.banners.banner6)[0]
              : urlbanner6,
          banner7:
            urlbanner7 == ""
              ? dadosedicao.map((item) => item.banners.banner7)[0]
              : urlbanner7,
        },
      })
      .then(() => {
        setLoad(false);
        toast.success("Homepage atualizada com sucesso!");
      });
  }
  async function tirabanner9() {
    setLoad(true);
    await api2
      .put(`/edicao/63ecc3bae25f69b653d416fc`, {
        headers: {
          Authorization: "Access-Control-Allow-Origin",
        },
        componentetexto1:
          textofretegratis == ""
            ? dadosedicao.map((item) => item.componentetexto1)[0]
            : textofretegratis,
        parcelas: parcelas,
        bannerpaginaprod:
          bannerpaginaproduto == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpaginaproduto,
        bannermodalpromocao:
          bannerpromocao == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpromocao,
        bannercentralhome:
          bannercentralhome == ""
            ? dadosedicao.map((item) => item.bannercentralhome)[0]
            : bannercentralhome,
            url1:urlbanneredicao1 == ''? dadosedicao.map((item) => item.url1)[0] : urlbanneredicao1,
            url2:urlbanneredicao2 == ''? dadosedicao.map((item) => item.url2)[0] : urlbanneredicao2,
            url3:urlbanneredicao3 == ''? dadosedicao.map((item) => item.url3)[0] : urlbanneredicao3,
            url4:urlbanneredicao4 == ''? dadosedicao.map((item) => item.url4)[0] : urlbanneredicao4,
            url5:urlbanneredicao5 == ''? dadosedicao.map((item) => item.url5)[0] : urlbanneredicao5,
            url6:urlbanneredicao6 == ''? dadosedicao.map((item) => item.url6)[0] : urlbanneredicao6,

        componentelogos: {
          logo1:
            urllogo1 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo1)[0]
              : urllogo1,
          logo2:
            urllogo2 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo2)[0]
              : urllogo2,
          logo3:
            urllogo3 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo3)[0]
              : urllogo3,
          logo4:
            urllogo4 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo4)[0]
              : urllogo4,
          logo5:
            urllogo5 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo5)[0]
              : urllogo5,
          logo6:
            urllogo6 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo6)[0]
              : urllogo6,
          logo7:
            urllogo7 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo7)[0]
              : urllogo7,
        },
        backgoundhome: {
          background1:
            urlFoto1 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background1)[0]
              : urlFoto1,
          background2:urlFoto2 == ""
          ? dadosedicao.map((item) => item.backgoundhome.background2)[0]
          : urlFoto2,
          background3:'',
          backgroundmobile1:
            urlmobile1 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile1
                )[0]
              : urlmobile1,
          backgroundmobile2:
            urlmobile2 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile2
                )[0]
              : urlmobile2,
          backgroundmobile3:
            urlmobile3 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile3
                )[0]
              : urlmobile3,
        },
        componentetexto2:
          titulosessaobanners == ""
            ? dadosedicao.map((item) => item.itemcomponentetexto2)[0]
            : titulosessaobanners,
        banners: {
          banner1:
            urlbanner1 == ""
              ? dadosedicao.map((item) => item.banners.banner1)[0]
              : urlbanner1,
          banner2:
            urlbanner2 == ""
              ? dadosedicao.map((item) => item.banners.banner2)[0]
              : urlbanner2,
          banner3:'',
          banner4:
            urlbanner4 == ""
              ? dadosedicao.map((item) => item.banners.banner4)[0]
              : urlbanner4,
          banner5:
            urlbanner5 == ""
              ? dadosedicao.map((item) => item.banners.banner5)[0]
              : urlbanner5,
          banner6:
            urlbanner6 == ""
              ? dadosedicao.map((item) => item.banners.banner6)[0]
              : urlbanner6,
          banner7:
            urlbanner7 == ""
              ? dadosedicao.map((item) => item.banners.banner7)[0]
              : urlbanner7,
        },
      })
      .then(() => {
        setLoad(false);
        toast.success("Homepage atualizada com sucesso!");
      });
  }
  async function tirabanner10() {
    setLoad(true);
    await api2
      .put(`/edicao/63ecc3bae25f69b653d416fc`, {
        headers: {
          Authorization: "Access-Control-Allow-Origin",
        },
        componentetexto1:
          textofretegratis == ""
            ? dadosedicao.map((item) => item.componentetexto1)[0]
            : textofretegratis,
        parcelas: parcelas,
        bannerpaginaprod:
          bannerpaginaproduto == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpaginaproduto,
        bannermodalpromocao:
          bannerpromocao == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpromocao,
        bannercentralhome:
          bannercentralhome == ""
            ? dadosedicao.map((item) => item.bannercentralhome)[0]
            : bannercentralhome,
            url1:urlbanneredicao1 == ''? dadosedicao.map((item) => item.url1)[0] : urlbanneredicao1,
            url2:urlbanneredicao2 == ''? dadosedicao.map((item) => item.url2)[0] : urlbanneredicao2,
            url3:urlbanneredicao3 == ''? dadosedicao.map((item) => item.url3)[0] : urlbanneredicao3,
            url4:urlbanneredicao4 == ''? dadosedicao.map((item) => item.url4)[0] : urlbanneredicao4,
            url5:urlbanneredicao5 == ''? dadosedicao.map((item) => item.url5)[0] : urlbanneredicao5,
            url6:urlbanneredicao6 == ''? dadosedicao.map((item) => item.url6)[0] : urlbanneredicao6,

        componentelogos: {
          logo1:
            urllogo1 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo1)[0]
              : urllogo1,
          logo2:
            urllogo2 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo2)[0]
              : urllogo2,
          logo3:
            urllogo3 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo3)[0]
              : urllogo3,
          logo4:
            urllogo4 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo4)[0]
              : urllogo4,
          logo5:
            urllogo5 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo5)[0]
              : urllogo5,
          logo6:
            urllogo6 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo6)[0]
              : urllogo6,
          logo7:
            urllogo7 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo7)[0]
              : urllogo7,
        },
        backgoundhome: {
          background1:
            urlFoto1 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background1)[0]
              : urlFoto1,
          background2:
            urlFoto2 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background2)[0]
              : urlFoto2,
          background3: urlFoto3 == ""
          ? dadosedicao.map((item) => item.backgoundhome.background3)[0]
          : urlFoto3,
          backgroundmobile1:'',
          backgroundmobile2:
            urlmobile2 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile2
                )[0]
              : urlmobile2,
          backgroundmobile3:
            urlmobile3 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile3
                )[0]
              : urlmobile3,
        },
        componentetexto2:
          titulosessaobanners == ""
            ? dadosedicao.map((item) => item.itemcomponentetexto2)[0]
            : titulosessaobanners,
        banners: {
          banner1:
            urlbanner1 == ""
              ? dadosedicao.map((item) => item.banners.banner1)[0]
              : urlbanner1,
          banner2:
            urlbanner2 == ""
              ? dadosedicao.map((item) => item.banners.banner2)[0]
              : urlbanner2,
          banner3:
            urlbanner3 == ""
              ? dadosedicao.map((item) => item.banners.banner3)[0]
              : urlbanner3,
          banner4:'',
          banner5:
            urlbanner5 == ""
              ? dadosedicao.map((item) => item.banners.banner5)[0]
              : urlbanner5,
          banner6:
            urlbanner6 == ""
              ? dadosedicao.map((item) => item.banners.banner6)[0]
              : urlbanner6,
          banner7:
            urlbanner7 == ""
              ? dadosedicao.map((item) => item.banners.banner7)[0]
              : urlbanner7,
        },
      })
      .then(() => {
        setLoad(false);
        toast.success("Homepage atualizada com sucesso!");
      });
  }
  async function tirabanner11() {
    setLoad(true);
    await api2
      .put(`/edicao/63ecc3bae25f69b653d416fc`, {
        headers: {
          Authorization: "Access-Control-Allow-Origin",
        },
        componentetexto1:
          textofretegratis == ""
            ? dadosedicao.map((item) => item.componentetexto1)[0]
            : textofretegratis,
        parcelas: parcelas,
        bannerpaginaprod:
          bannerpaginaproduto == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpaginaproduto,
        bannermodalpromocao:
          bannerpromocao == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpromocao,
        bannercentralhome:
          bannercentralhome == ""
            ? dadosedicao.map((item) => item.bannercentralhome)[0]
            : bannercentralhome,
            url1:urlbanneredicao1 == ''? dadosedicao.map((item) => item.url1)[0] : urlbanneredicao1,
            url2:urlbanneredicao2 == ''? dadosedicao.map((item) => item.url2)[0] : urlbanneredicao2,
            url3:urlbanneredicao3 == ''? dadosedicao.map((item) => item.url3)[0] : urlbanneredicao3,
            url4:urlbanneredicao4 == ''? dadosedicao.map((item) => item.url4)[0] : urlbanneredicao4,
            url5:urlbanneredicao5 == ''? dadosedicao.map((item) => item.url5)[0] : urlbanneredicao5,
            url6:urlbanneredicao6 == ''? dadosedicao.map((item) => item.url6)[0] : urlbanneredicao6,

        componentelogos: {
          logo1:
            urllogo1 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo1)[0]
              : urllogo1,
          logo2:
            urllogo2 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo2)[0]
              : urllogo2,
          logo3:
            urllogo3 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo3)[0]
              : urllogo3,
          logo4:
            urllogo4 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo4)[0]
              : urllogo4,
          logo5:
            urllogo5 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo5)[0]
              : urllogo5,
          logo6:
            urllogo6 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo6)[0]
              : urllogo6,
          logo7:
            urllogo7 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo7)[0]
              : urllogo7,
        },
        backgoundhome: {
          background1:
            urlFoto1 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background1)[0]
              : urlFoto1,
          background2:
            urlFoto2 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background2)[0]
              : urlFoto2,
          background3:
            urlFoto3 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background3)[0]
              : urlFoto3,
          backgroundmobile1: urlmobile1 == ""
          ? dadosedicao.map(
              (item) => item.backgoundhome.backgroundmobile1
            )[0]
          : urlmobile1,
          backgroundmobile2:'',
          backgroundmobile3:
            urlmobile3 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile3
                )[0]
              : urlmobile3,
        },
        componentetexto2:
          titulosessaobanners == ""
            ? dadosedicao.map((item) => item.itemcomponentetexto2)[0]
            : titulosessaobanners,
        banners: {
          banner1:
            urlbanner1 == ""
              ? dadosedicao.map((item) => item.banners.banner1)[0]
              : urlbanner1,
          banner2:
            urlbanner2 == ""
              ? dadosedicao.map((item) => item.banners.banner2)[0]
              : urlbanner2,
          banner3:
            urlbanner3 == ""
              ? dadosedicao.map((item) => item.banners.banner3)[0]
              : urlbanner3,
          banner4:
            urlbanner4 == ""
              ? dadosedicao.map((item) => item.banners.banner4)[0]
              : urlbanner4,
          banner5:'',
          banner6:
            urlbanner6 == ""
              ? dadosedicao.map((item) => item.banners.banner6)[0]
              : urlbanner6,
          banner7:
            urlbanner7 == ""
              ? dadosedicao.map((item) => item.banners.banner7)[0]
              : urlbanner7,
        },
      })
      .then(() => {
        setLoad(false);
        toast.success("Homepage atualizada com sucesso!");
      });
  }
  async function tirabanner12() {
    setLoad(true);
    await api2
      .put(`/edicao/63ecc3bae25f69b653d416fc`, {
        headers: {
          Authorization: "Access-Control-Allow-Origin",
        },
        componentetexto1:
          textofretegratis == ""
            ? dadosedicao.map((item) => item.componentetexto1)[0]
            : textofretegratis,
        parcelas: parcelas,
        bannerpaginaprod:
          bannerpaginaproduto == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpaginaproduto,
        bannermodalpromocao:
          bannerpromocao == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpromocao,
        bannercentralhome:
          bannercentralhome == ""
            ? dadosedicao.map((item) => item.bannercentralhome)[0]
            : bannercentralhome,
            url1:urlbanneredicao1 == ''? dadosedicao.map((item) => item.url1)[0] : urlbanneredicao1,
            url2:urlbanneredicao2 == ''? dadosedicao.map((item) => item.url2)[0] : urlbanneredicao2,
            url3:urlbanneredicao3 == ''? dadosedicao.map((item) => item.url3)[0] : urlbanneredicao3,
            url4:urlbanneredicao4 == ''? dadosedicao.map((item) => item.url4)[0] : urlbanneredicao4,
            url5:urlbanneredicao5 == ''? dadosedicao.map((item) => item.url5)[0] : urlbanneredicao5,
            url6:urlbanneredicao6 == ''? dadosedicao.map((item) => item.url6)[0] : urlbanneredicao6,

        componentelogos: {
          logo1:
            urllogo1 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo1)[0]
              : urllogo1,
          logo2:
            urllogo2 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo2)[0]
              : urllogo2,
          logo3:
            urllogo3 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo3)[0]
              : urllogo3,
          logo4:
            urllogo4 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo4)[0]
              : urllogo4,
          logo5:
            urllogo5 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo5)[0]
              : urllogo5,
          logo6:
            urllogo6 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo6)[0]
              : urllogo6,
          logo7:
            urllogo7 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo7)[0]
              : urllogo7,
        },
        backgoundhome: {
          background1:
            urlFoto1 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background1)[0]
              : urlFoto1,
          background2:
            urlFoto2 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background2)[0]
              : urlFoto2,
          background3:
            urlFoto3 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background3)[0]
              : urlFoto3,
          backgroundmobile1:
            urlmobile1 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile1
                )[0]
              : urlmobile1,
          backgroundmobile2:
            urlmobile2 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile2
                )[0]
              : urlmobile2,
          backgroundmobile3:'',
        },
        componentetexto2:
          titulosessaobanners == ""
            ? dadosedicao.map((item) => item.itemcomponentetexto2)[0]
            : titulosessaobanners,
        banners: {
          banner1:
            urlbanner1 == ""
              ? dadosedicao.map((item) => item.banners.banner1)[0]
              : urlbanner1,
          banner2:
            urlbanner2 == ""
              ? dadosedicao.map((item) => item.banners.banner2)[0]
              : urlbanner2,
          banner3:
            urlbanner3 == ""
              ? dadosedicao.map((item) => item.banners.banner3)[0]
              : urlbanner3,
          banner4:
            urlbanner4 == ""
              ? dadosedicao.map((item) => item.banners.banner4)[0]
              : urlbanner4,
          banner5:
            urlbanner5 == ""
              ? dadosedicao.map((item) => item.banners.banner5)[0]
              : urlbanner5,
          banner6:'',
          banner7:
            urlbanner7 == ""
              ? dadosedicao.map((item) => item.banners.banner7)[0]
              : urlbanner7,
        },
      })
      .then(() => {
        setLoad(false);
        toast.success("Homepage atualizada com sucesso!");
      });
  }
  async function atualizarhome() {
    setLoad(true);
    await api2
      .put(`/edicao/63ecc3bae25f69b653d416fc`, {
        headers: {
          Authorization: "Access-Control-Allow-Origin",
        },
        componentetexto1:
          textofretegratis == ""
            ? dadosedicao.map((item) => item.componentetexto1)[0]
            : textofretegratis,
        parcelas: parcelas,
        bannerpaginaprod:
          bannerpaginaproduto == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpaginaproduto,
        bannermodalpromocao:
          bannerpromocao == ""
            ? dadosedicao.map((item) => item.bannermodalpromocao)[0]
            : bannerpromocao,
        bannercentralhome:
          bannercentralhome == ""
            ? dadosedicao.map((item) => item.bannercentralhome)[0]
            : bannercentralhome,
            url1:urlbanneredicao1 == ''? dadosedicao.map((item) => item.url1)[0] : urlbanneredicao1,
            url2:urlbanneredicao2 == ''? dadosedicao.map((item) => item.url2)[0] : urlbanneredicao2,
            url3:urlbanneredicao3 == ''? dadosedicao.map((item) => item.url3)[0] : urlbanneredicao3,
            url4:urlbanneredicao4 == ''? dadosedicao.map((item) => item.url4)[0] : urlbanneredicao4,
            url5:urlbanneredicao5 == ''? dadosedicao.map((item) => item.url5)[0] : urlbanneredicao5,
            url6:urlbanneredicao6 == ''? dadosedicao.map((item) => item.url6)[0] : urlbanneredicao6,
        componentelogos: {
          logo1:
            urllogo1 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo1)[0]
              : urllogo1,
          logo2:
            urllogo2 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo2)[0]
              : urllogo2,
          logo3:
            urllogo3 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo3)[0]
              : urllogo3,
          logo4:
            urllogo4 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo4)[0]
              : urllogo4,
          logo5:
            urllogo5 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo5)[0]
              : urllogo5,
          logo6:
            urllogo6 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo6)[0]
              : urllogo6,
          logo7:
            urllogo7 == ""
              ? dadosedicao.map((item) => item.componentelogos.logo7)[0]
              : urllogo7,
        },
        backgoundhome: {
          background1:
            urlFoto1 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background1)[0]
              : urlFoto1,
          background2:
            urlFoto2 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background2)[0]
              : urlFoto2,
          background3:
            urlFoto3 == ""
              ? dadosedicao.map((item) => item.backgoundhome.background3)[0]
              : urlFoto3,
          backgroundmobile1:
            urlmobile1 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile1
                )[0]
              : urlmobile1,
          backgroundmobile2:
            urlmobile2 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile2
                )[0]
              : urlmobile2,
          backgroundmobile3:
            urlmobile3 == ""
              ? dadosedicao.map(
                  (item) => item.backgoundhome.backgroundmobile3
                )[0]
              : urlmobile3,
        },
        componentetexto2:
          titulosessaobanners == ""
            ? dadosedicao.map((item) => item.itemcomponentetexto2)[0]
            : titulosessaobanners,
        banners: {
          banner1:
            urlbanner1 == ""
              ? dadosedicao.map((item) => item.banners.banner1)[0]
              : urlbanner1,
          banner2:
            urlbanner2 == ""
              ? dadosedicao.map((item) => item.banners.banner2)[0]
              : urlbanner2,
          banner3:
            urlbanner3 == ""
              ? dadosedicao.map((item) => item.banners.banner3)[0]
              : urlbanner3,
          banner4:
            urlbanner4 == ""
              ? dadosedicao.map((item) => item.banners.banner4)[0]
              : urlbanner4,
          banner5:
            urlbanner5 == ""
              ? dadosedicao.map((item) => item.banners.banner5)[0]
              : urlbanner5,
          banner6:
            urlbanner6 == ""
              ? dadosedicao.map((item) => item.banners.banner6)[0]
              : urlbanner6,
          banner7:
            urlbanner7 == ""
              ? dadosedicao.map((item) => item.banners.banner7)[0]
              : urlbanner7,
        },
      })
      .then(() => {
        setLoad(false);
        toast.success("Home atualizada com sucesso!");
      });
  }


  async function uploadbannercentralhome(e) {
    setLoad(false);
    const img1 = e.target.files[0];

    const userUID = user.uid;
    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img1.name}`)
      .put(img1)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img1.name)
          .getDownloadURL()
          .then(async (url) => {
            setBannercentralhome(String(url));
          });
        setLoad(false);
      });
  }
  async function uploadimg1(e) {
    setLoad(false);
    const img1 = e.target.files[0];

    const userUID = user.uid;
    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img1.name}`)
      .put(img1)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img1.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto1(String(url));
          });
        setLoad(false);
      });
  }
  async function uploadimg2(e) {
    setLoad(true);
    const img2 = e.target.files[0];

    const userUID = user.uid;
    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img2.name}`)
      .put(img2)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img2.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto2(String(url));
          });
        setLoad(false);
      });
  }
  async function uploadimg3(e) {
    setLoad(true);
    const img3 = e.target.files[0];

    const userUID = user.uid;

    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img3.name}`)
      .put(img3)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img3.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto3(String(url));
          });
        setLoad(false);
      });
  }

  async function uploadimgmobile1(e) {
    const img1mobile = e.target.files[0];
    setLoad(true);

    const userUID = user.uid;

    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img1mobile.name}`)
      .put(img1mobile)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img1mobile.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlmobile1(String(url));
          });
        setLoad(false);
      });
  }
  async function uploadimgmobile2(e) {
    const img2mobile = e.target.files[0];
    setLoad(true);

    const userUID = user.uid;

    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img2mobile.name}`)
      .put(img2mobile)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img2mobile.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlmobile2(String(url));
          });
        setLoad(false);
      });
  }
  async function uploadimgmobile3(e) {
    const img3mobile3 = e.target.files[0];
    setLoad(true);

    const userUID = user.uid;

    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img3mobile3.name}`)
      .put(img3mobile3)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img3mobile3.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlmobile3(String(url));
          });
        setLoad(false);
      });
  }

  async function uploadBannerpromocao(e) {
    setLoad(true);
    const img4 = e.target.files[0];
    const userUID = user.uid;

    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img4.name}`)
      .put(img4)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img4.name)
          .getDownloadURL()
          .then(async (url) => {
            setBannerpromocao(String(url));
          });
        setLoad(false);
      });
  }
  async function uploadBannerpaginaprod(e) {
    setLoad(true);
    const img4 = e.target.files[0];
    const userUID = user.uid;

    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img4.name}`)
      .put(img4)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img4.name)
          .getDownloadURL()
          .then(async (url) => {
            setBannerpaginaproduto(String(url));
          });
        setLoad(false);
      });
  }
  async function uploadlogo1(e) {
    setLoad(true);
    const img4 = e.target.files[0];
    const userUID = user.uid;

    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img4.name}`)
      .put(img4)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img4.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrllogo1(String(url));
          });
        setLoad(false);
      });
  }
  async function uploadlogo2(e) {
    setLoad(true);
    const img5 = e.target.files[0];
    const userUID = user.uid;

    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img5.name}`)
      .put(img5)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img5.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrllogo2(String(url));
          });
        setLoad(false);
      });
  }
  async function uploadlogo3(e) {
    setLoad(true);
    const img6 = e.target.files[0];
    const userUID = user.uid;

    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img6.name}`)
      .put(img6)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img6.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrllogo3(String(url));
          });
        setLoad(false);
      });
  }
  async function uploadlogo4(e) {
    setLoad(true);
    const img7 = e.target.files[0];
    const userUID = user.uid;

    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img7.name}`)
      .put(img7)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img7.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrllogo4(String(url));
          });
        setLoad(false);
      });
  }
  async function uploadlogo5(e) {
    setLoad(true);
    const img8 = e.target.files[0];
    const userUID = user.uid;

    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img8.name}`)
      .put(img8)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img8.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrllogo5(String(url));
          });
        setLoad(false);
      });
  }
  async function uploadlogo6(e) {
    setLoad(true);
    const img9 = e.target.files[0];
    const userUID = user.uid;

    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img9.name}`)
      .put(img9)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img9.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrllogo6(String(url));
          });
        setLoad(false);
      });
  }
  async function uploadlogo7(e) {
    setLoad(true);
    const img10 = e.target.files[0];

    const userUID = user.uid;

    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img10.name}`)
      .put(img10)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img10.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrllogo7(String(url));
          });
        setLoad(false);
      });
  }
  async function uploadbanner1(e) {
    setLoad(true);

    const img11 = e.target.files[0];
    const userUID = user.uid;

    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img11.name}`)
      .put(img11)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img11.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlbanner1(String(url));
          });
        setLoad(false);
      });
  }
  async function uploadbanner2(e) {
    setLoad(true);

    const img12 = e.target.files[0];
    const userUID = user.uid;

    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img12.name}`)
      .put(img12)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img12.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlbanner2(String(url));
          });
        setLoad(false);
      });
  }
  async function uploadbanner3(e) {
    setLoad(true);

    const img13 = e.target.files[0];
    const userUID = user.uid;

    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img13.name}`)
      .put(img13)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img13.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlbanner3(String(url));
          });
        setLoad(false);
      });
  }
  async function uploadbanner4(e) {
    setLoad(true);

    const img14 = e.target.files[0];

    const userUID = user.uid;

    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img14.name}`)
      .put(img14)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img14.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlbanner4(String(url));
          });
        setLoad(false);
      });
  }
  async function uploadbanner5(e) {
    setLoad(true);

    const img15 = e.target.files[0];

    const userUID = user.uid;

    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img15.name}`)
      .put(img15)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img15.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlbanner5(String(url));
          });
        setLoad(false);
      });
  }
  async function uploadbanner6(e) {
    setLoad(true);

    const img16 = e.target.files[0];

    const userUID = user.uid;

    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img16.name}`)
      .put(img16)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img16.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlbanner6(String(url));
          });
        setLoad(false);
      });
  }
  async function uploadbanner7(e) {
    setLoad(true);

    const img17 = e.target.files[0];

    const userUID = user.uid;

    await firebase
      .storage()
      .ref(`edicaopagina/${userUID}/${img17.name}`)
      .put(img17)
      .then(async () => {
        await firebase
          .storage()
          .ref(`edicaopagina/${userUID}`)
          .child(img17.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlbanner7(String(url));
          });
        setLoad(false);
      });
  }

  function marcaremail(item) {
    /* if (arrayemails.some(data => data.email == item.email) == true) {
       return
     }
     let index = dadosedicao.findIndex(data => data.email == item.email)
   
     let lista = []
     document.querySelectorAll('.checkboxemail')[index].setAttribute('checked', true)
     lista.push(item.email)
   
   
     localStorage.setItem('listaemailoutlet', JSON.stringify(lista))
   
     console.log(arrayemails)*/
  }

  function marcartodos() {
    //console.log(document.querySelectorAll('.checkboxemail')[0].setAttribute('checked', 'true'))

    let lista = [];
    document.querySelectorAll(".checkboxemail").forEach((item) => {
      item.setAttribute("checked", "true");
      lista.push(item.value);
    });
    localStorage.setItem("listaemailoutlet", JSON.stringify(lista));
  }

  function liparlista() {
    document.querySelectorAll(".checkboxemail").forEach((item) => {
      item.setAttribute("checked", "false");
    });
    localStorage.setItem("listaemailoutlet", JSON.stringify([]));
    window.location.reload();
  }

  function copiarlista() {
    let lista = JSON.parse(localStorage.getItem("listaemailoutlet"));
    if (lista == "") {
      toast.info("Lista vazia!");
      return;
    }
    navigator.clipboard.writeText(lista);
    toast.success("Lista copiada para area de transferêcia!");
  }

  function delemail(item) {
    api2.delete(`/emailsclientes/${item._id}`).then(() => {
      toast.success("Email excluido com sucesso");
    });
  }

  useEffect(() => {
    api2.get("/emailsclientes").then((data) => {
      setDataemails(data.data);
    });
  }, [dataemails]);

  async function mudadados() {
    if (senhaverificacao == "" || alterasenha == "") {
      toast.error("campos vazios");
      return;
    }
    await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, senhaverificacao)
      .then(async function (userCredential) {
        userCredential.user.updateEmail(alteraemail);
        userCredential.user.updatePassword(alterasenha);

        toast.success("Dados alterados com sucesso!");
        setTimeout(() => {
          sairadm();
        }, 1500);
      });
  }

  async function addperguntas() {
    if (titulopergunta == "" || textoresposta == "") {
      toast.info("Preencha todos os campos!");
      return;
    }
    await api
      .post("/perguntas", {
        sumary: titulopergunta,
        resposta: textoresposta,
      })
      .then(() => {
        toast.success("Pergunta adicionada com sucesso!");
        setTitulopergunta("");
        setTextoresposta("");
      });
  }
  async function updateperguntas(_id) {
    if (titulopergunta == "" || textoresposta == "") {
      toast.info("Preencha todos os campos!");
      return;
    }
    await api
      .put(`/perguntas/${_id}`, {
        sumary: titulopergunta,
        resposta: textoresposta,
      })
      .then(() => {
        toast.success("Pergunta atualizada com sucesso!");
        setTitulopergunta("");
        setTextoresposta("");
      });
  }

  async function delpergunta(_id) {
    await api.delete(`/perguntas/${_id}`).then(() => {
      toast.success("Pergunta excluida com sucesso!");
    });
  }

  async function criarfeedback() {
    if (nomefeddback == "" || textofeedback == "") {
      toast.error("Preencha todos os campos!");
      return;
    }
    await api
      .post("/comentarios", {
        user: nomefeddback,
        idproduto: "String",
        comentario: textofeedback,
        printcomentario: "Boolean",
        star: "String",
        data: `${new Date().getDate() + "/" + new Date().getMonth()}`,
      })
      .then(() => {
        toast.success("Feedback enviado com sucesso!");
        setTextofeedback("");
        setNomefeddback("");
      });
  }


  useEffect(()=>{

   
     //console.log(dadosedicao.map(item => item.componentelogos.logo1)[0])
  },[])






  return (
    <div className="container-adm-controller">
      <div className="menu-bar">
        <h3
          style={
            window.screen.width > 500
              ? { marginTop: "30px", color: "#fff", fontFamily: "Montserrat" }
              : { display: "none" }
          }
        >
          Olá
        </h3>
        <p
          style={
            window.screen.width > 500
              ? { color: "#fff", fontFamily: "Montserrat", fontSize: "12px" }
              : { display: "none" }
          }
        >
          {user.email}
        </p>
        {window.screen.width > 500 ? (
          <div className="btn-area-admcontroller">
            <button onClick={verpedidos}>
              {" "}
              <BsBoxSeam size={25}></BsBoxSeam>Pedidos
            </button>
            <button onClick={verdeshboard}>
              {" "}
              <VscDashboard size={30}></VscDashboard>Controle
            </button>

            <button onClick={vercadastroprodutos}>
              <MdAddBusiness size={30}></MdAddBusiness> Cadastro de Produtos
            </button>
            <button onClick={verlistaprodutos}>
              <AiOutlineFileSync size={30} color="#ffffff"></AiOutlineFileSync>{" "}
              Controle de estoque
            </button>
            <button onClick={verlistaemails}>
              <BsWhatsapp size={30}></BsWhatsapp> Lista de Whatsapps
            </button>
            <button onClick={vereditahome}>
              <BiEdit size={30}></BiEdit> Editar Banners do site
            </button>
            <button onClick={vereditadados}>
              <MdSecurity size={30}></MdSecurity> Privacidade
            </button>
            <button onClick={vereditaperguntas}>
              <BiEdit size={30}></BiEdit> Editar Perguntas frequentes
            </button>
            <button onClick={vercadastrocomentarios}>
              <BiEdit size={30}></BiEdit> Cadastrar Comentarios
            </button>
            <a href="/" target={"_blank"}>
              <MdWeb size={30}></MdWeb> Ver site
            </a>

            <button onClick={sair}>
              {" "}
              <BiLogIn size={25}></BiLogIn>
              Sair
            </button>
          </div>
        ) : (
          <div className="btn-area-admcontroller">
            <button onClick={verpedidos}>
              {" "}
              <BsBoxSeam size={40}></BsBoxSeam>
            </button>
            <button onClick={verdeshboard}>
              {" "}
              <VscDashboard size={40}></VscDashboard>
            </button>

            <button onClick={() => setModalcadastroprodutos(true)}>
              <MdAddBusiness size={40}></MdAddBusiness>
            </button>
            <button onClick={verlistaprodutos}>
              <AiOutlineFileSync size={40} color="#ffffff"></AiOutlineFileSync>
            </button>
            <button onClick={verlistaemails}>
              <MdOutlineMarkEmailUnread size={40}></MdOutlineMarkEmailUnread>
            </button>
            <button onClick={vereditahome}>
              <BiEdit size={40}></BiEdit>
            </button>
            <button onClick={vereditadados}>
              <MdSecurity size={30}></MdSecurity>{" "}
            </button>
            <button onClick={vereditaperguntas}>
              <BiEdit size={30}></BiEdit>{" "}
            </button>
            <a href="/" target={"_blank"}>
              <MdWeb size={30}></MdWeb>{" "}
            </a>

            <button onClick={sair}>
              <BiLogIn size={40}></BiLogIn>
            </button>
          </div>
        )}
        <img
          style={
            window.screen.width > 500 ? { width: "100px" } : { display: "none" }
          }
          src={Logo}
        ></img>
        <div className="div-mail">
          <p>{window.screen.width > 500 ? user.email : ""}</p>
        </div>
      </div>
      <div className="pedidos-box">
        {load != false ? <div className="load">Carregando...</div> : ""}
        {modalstatus != false ? (
          <div className="container-modalstatus">
            <div className="modal-stauts-pedidos">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  id="closemodalstatus"
                  onClick={() => setModalstatus(false)}
                >
                  X
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  gap: "10px",
                }}
              >
                <strong id="strong">id: {dadospedidoselected.idpedido}</strong>
                <span>
                  Produto:{" "}
                  {dadospedidoselected.produto.modelo.replace(",", " | ")}
                </span>
                <span>Nome do Cliente: {dadospedidoselected.nomecliente}</span>
                <span>CPF: {dadospedidoselected.cpf}</span>
                <span>
                  Endereço: {dadospedidoselected.endereco}{" "}
                  {dadospedidoselected.complemento}
                </span>
                <span>CEP: {dadospedidoselected.cep}</span>
                <span>Data da compra: {dadospedidoselected.data}</span>
                {dadospedidoselected.codrastreio != "" ? (
                  <span>
                    Código Correios: {dadospedidoselected.codrastreio}
                  </span>
                ) : (
                  ""
                )}
                <span>Informar cod Ratreio correios</span>
                <input
                  style={{
                    height: "30px",
                    borderRadius: "10px",
                    background: "transparent",
                    border: "1px solid #fff",
                    outline: "none",
                    color: "#fff",
                    paddingLeft: "5px",
                    width: "250px",
                  }}
                  placeholder="ex: AA123456789BR"
                  type="text"
                  onChange={(e) => setCodigo(e.target.value)}
                ></input>
                <div>
                  <p>Mudar status do pedido</p>
                  <select
                    onChange={(e) =>
                      setStatus(e.target.value, dadospedidoselected)
                    }
                  >
                    <option>...</option>
                    <option value="Pacote recebido">Pacote recebido</option>
                    <option value="Pacote enviado">Pacote enviado</option>
                    {/* <option value="Pacote recebido">Pacote Entregue</option> */}
                  </select>
                </div>
                <button onClick={() => mudastatus(dadospedidoselected)}>
                  Salvar
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {showpedidos != false ? (
          <div className="container-pedidos">
            <div className="title-item-menu">
              <h2>
                PEDIDOS {nomefiltro} {datapedidos.length}
              </h2>
            </div>

            <div className="filter-pedidos">
              <div>
                <span>Filtrar por:</span>
              </div>

              <div>
                <button onClick={filter1}>Todos</button>
              </div>
              <div>
                <button onClick={() => filter(st1)}>
                  Pacotes recebidos {datapedidos2.length}
                </button>
              </div>
              <div>
                <button onClick={() => filter2(st2)}>
                  Pacotes enviados {datapedidos3.length}
                </button>
              </div>
              <div>
                <button onClick={() => filter3(st3)}>
                  Preparando seu pedido {datapedidos4.length}
                </button>
              </div>

              <div className="input-search">
                <input
                  type="search"
                  onChange={(e) => serachpedido(e.target.value)}
                  required
                ></input>
                <BiSearch></BiSearch>
                <span>Pesquisar por CPF</span>
              </div>
              <input
                id="filter-date"
                type={"text"}
                onChange={(e) => filtrodata(e.target.value)}
                placeholder={"ex: 05/01/2023"}
              ></input>
            </div>
            <div id="box-table">
              <table id="table" border="1">
                <thead>
                  <tr>
                    <th>id </th>
                    <th>Pedidos</th>
                    <th>Cliente</th>
                    <th>CPF</th>
                    <th>Endereço</th>
                    <th>CEP</th>
                    <th>Data</th>
                    <th>Status</th>
                    <th>Valor</th>
                    <th></th>
                  </tr>
                </thead>

                {datapedidos.length == 0 ? (
                  <h2 id="null-pedidos">Nenhum pedido!</h2>
                ) : (
                  datapedidos.map((item) => {
                    return (
                      <tbody id="table" key={item._id}>
                        <tr>
                          <td>{item.idpedido}</td>
                          <td>{item.produto.modelo}</td>
                          <td>{item.nomecliente}</td>
                          <td>{item.cpf}</td>
                          <td>
                            {item.endereco} {item.complemento}
                          </td>
                          <td>{item.cep}</td>
                          <td>
                            {item.data} {item.hora}
                          </td>
                          <td>{item.status}</td>
                          <td>
                            {parseFloat(item.valor).toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </td>
                          <td>
                            <button
                              id="mudarstatuspedido"
                              onClick={() => showmodalstatus(item)}
                            >
                              <BiDotsHorizontalRounded
                                size={20}
                              ></BiDotsHorizontalRounded>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })
                )}
              </table>
            </div>
          </div>
        ) : (
          ""
        )}
        {showdashboard != false ? (
          <div className="container-dashboard">
            <div className="title-item-menu">
              <h2>CONTROLE</h2>
            </div>
            <div className="box-info-empresa">
              <ul>
                <li>
                  <div className="box-info">
                    <div className="title-info-box">
                      Quantidade de Produtos Ativos
                    </div>
                    <img src={Camisa} alt="" srcset="" />
                    <h2>{dataprodutos.length}</h2>
                  </div>
                </li>
                <li>
                  <div className="box-info">
                    <div className="title-info-box">
                      Quantidade total de Vendas
                    </div>
                    <img src={Vendas} alt="" srcset="" />
                    <h2>{datapedidos.length}</h2>
                  </div>
                </li>
                <li>
                  <div className="box-info">
                    <div className="title-info-box">Faturamento</div>
                    <img src={Faturamento} alt="" srcset="" />
                    <h2
                      style={{
                        color: "green",
                        fontWeight: "800",
                        textShadow: " 4px 1px 9px white ",
                      }}
                    >
                      {Number(faturamento).toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </h2>
                  </div>
                </li>
                <li>
                  <div className="box-info">
                    <div className="title-info-box">
                      Quantidade total de Pedidos
                    </div>
                    <img src={Box} alt="" srcset="" />
                    <h2>{datapedidos.length}</h2>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
        {showlistaprodutos != false ? (
          <div className="container-lista-produtos">
            <div className="title-item-menu">
              <h2>LISTA DE PRODUTOS</h2>
            </div>
            <div className="box-filtros-estoque-controller">
              <div>
                <button className="btn-filtro-estoque" onClick={mostrartodos}>
                  Todos
                </button>
              </div>

              <div>
                <select
                  onChange={(e) => filtroproduto2(e.target.value)}
                  className="btn-filtro-estoque"
                >
                  <option>Categorias</option>
                  {datacategorias.map((item) => {
                    return (
                      <option key={item.categoria} value={item.categoria}>
                        {item.categoria}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <button className="btn-filtro-estoque" onClick={menorpreco}>
                  Menor preço
                </button>
              </div>
              <div>
                <button className="btn-filtro-estoque" onClick={maiorpreco}>
                  Maior preço
                </button>
              </div>
            </div>
            <div id="box-table">
              <table id="table" border="1">
                <thead>
                  <tr>
                    <th>Foto</th>
                    <th>Modelo</th>
                    <th>Está em promoção?</th>
                    <th>Está em promoção por quatidade?</th>
                    <th>Cor 1</th>
                    <th>Cor 2</th>
                    <th>Cor 3</th>
                    <th>Cor 4</th>
                    <th>Cor 5</th>
                    <th>Cor 6</th>
                  </tr>
                </thead>
                {dataprodutos.map((item) => {
                  return (
                    <tbody
                      id="table"
                      key={item._id}
                      onClick={() => Modaldetalhesproduto(item)}
                    >
                      <tr>
                        <td>
                          <img
                            style={{ width: "100px" }}
                            src={item.cores.corPrimary.imgurl}
                          ></img>
                        </td>
                        <td>{item.modelo}</td>
                        <td>{item.promocao == true ? "Sim" : "Não"}</td>
                        <td>
                          {item.promocao2 == true
                            ? `Sim a partir de ${item.qtdpromocao2} produtos, ${item.desconto}%`
                            : "Não"}{" "}
                        </td>
                        <td>
                          {item.cores.corPrimary.cor1 != "" ? (
                            <div className="box-cores-tamanhos-adm">
                              <h2
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  background: item.cores.corPrimary.cor1,
                                }}
                              ></h2>
                              <div
                                style={{
                                  display: "flex",
                                  gap: "5px",
                                  flexDirection: "column",
                                }}
                              >
                                {item.cores.corPrimary.tamanhos.tamanhoOne
                                  .tamanho1 != "" ? (
                                  <h3
                                    style={{ fontSize: "15px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corPrimary.tamanhos.tamanhoOne
                                        .tamanho1
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corPrimary.tamanhos.tamanhoOne
                                        .quantidade
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                                {item.cores.corPrimary.tamanhos.tamanhoTwo
                                  .tamanho2 != "" ? (
                                  <h3
                                    style={{ fontSize: "15px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corPrimary.tamanhos.tamanhoTwo
                                        .tamanho2
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corPrimary.tamanhos.tamanhoTwo
                                        .quantidade2
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                                {item.cores.corPrimary.tamanhos.tamanhoThree
                                  .tamanho3 != "" ? (
                                  <h3
                                    style={{ fontSize: "15px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corPrimary.tamanhos
                                        .tamanhoThree.tamanho3
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corPrimary.tamanhos
                                        .tamanhoThree.quantidade3
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                                {item.cores.corPrimary.tamanhos.tamanhoFour
                                  .tamanho4 != "" ? (
                                  <h3
                                    style={{ fontSize: "15px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corPrimary.tamanhos.tamanhoFour
                                        .tamanho4
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corPrimary.tamanhos.tamanhoFour
                                        .quantidade4
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </td>
                        <td>
                          {item.cores.corSecondary.cor2 != "" ? (
                            <div className="box-cores-tamanhos-adm">
                              <h2
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  background: item.cores.corSecondary.cor2,
                                }}
                              ></h2>
                              <div
                                style={{
                                  display: "flex",
                                  gap: "5px",
                                  flexDirection: "column",
                                }}
                              >
                                {item.cores.corSecondary.tamanhos.tamanhoOne
                                  .tamanho5 != "" ? (
                                  <h3
                                    style={{ fontSize: "15px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corSecondary.tamanhos
                                        .tamanhoOne.tamanho5
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corSecondary.tamanhos
                                        .tamanhoOne.quantidade5
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                                {item.cores.corSecondary.tamanhos.tamanhoTwo
                                  .tamanho6 != "" ? (
                                  <h3
                                    style={{ fontSize: "15px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corSecondary.tamanhos
                                        .tamanhoTwo.tamanho6
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corSecondary.tamanhos
                                        .tamanhoTwo.quantidade6
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                                {item.cores.corSecondary.tamanhos.tamanhoThree
                                  .tamanho7 != "" ? (
                                  <h3
                                    style={{ fontSize: "15px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corSecondary.tamanhos
                                        .tamanhoThree.tamanho7
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corSecondary.tamanhos
                                        .tamanhoThree.quantidade7
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                                {item.cores.corSecondary.tamanhos.tamanhoFour
                                  .tamanho8 != "" ? (
                                  <h3
                                    style={{ fontSize: "15px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corSecondary.tamanhos
                                        .tamanhoFour.tamanho8
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corSecondary.tamanhos
                                        .tamanhoFour.quantidade8
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </td>
                        <td>
                          {item.cores.corTertiary.cor2 != "" ? (
                            <div className="box-cores-tamanhos-adm">
                              <h2
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  background: item.cores.corTertiary.cor3,
                                }}
                              ></h2>
                              <div
                                style={{
                                  display: "flex",
                                  gap: "5px",
                                  flexDirection: "column",
                                }}
                              >
                                {item.cores.corTertiary.tamanhos.tamanhoOne
                                  .tamanho9 != "" ? (
                                  <h3
                                    style={{ fontSize: "15px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corTertiary.tamanhos.tamanhoOne
                                        .tamanho9
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corTertiary.tamanhos.tamanhoOne
                                        .quantidade9
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                                {item.cores.corTertiary.tamanhos.tamanhoTwo
                                  .tamanho10 != "" ? (
                                  <h3
                                    style={{ fontSize: "15px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corTertiary.tamanhos.tamanhoTwo
                                        .tamanho10
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corTertiary.tamanhos.tamanhoTwo
                                        .quantidade10
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                                {item.cores.corTertiary.tamanhos.tamanhoThree
                                  .tamanho11 != "" ? (
                                  <h3
                                    style={{ fontSize: "15px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corTertiary.tamanhos
                                        .tamanhoThree.tamanho11
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corTertiary.tamanhos
                                        .tamanhoThree.quantidade11
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                                {item.cores.corTertiary.tamanhos.tamanhoFour
                                  .tamanho12 != "" ? (
                                  <h3
                                    style={{ fontSize: "15px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corTertiary.tamanhos
                                        .tamanhoFour.tamanho12
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corTertiary.tamanhos
                                        .tamanhoFour.quantidade12
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </td>
                        <td>
                          {item.cores.corQuaternary.cor2 != "" ? (
                            <div className="box-cores-tamanhos-adm">
                              <h2
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  background: item.cores.corQuaternary.cor4,
                                }}
                              ></h2>
                              <div
                                style={{
                                  display: "flex",
                                  gap: "5px",
                                  flexDirection: "column",
                                }}
                              >
                                {item.cores.corQuaternary.tamanhos.tamanhoOne
                                  .tamanho13 != "" ? (
                                  <h3
                                    style={{ fontSize: "15px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corQuaternary.tamanhos
                                        .tamanhoOne.tamanho13
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corQuaternary.tamanhos
                                        .tamanhoOne.quantidade13
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                                {item.cores.corQuaternary.tamanhos.tamanhoTwo
                                  .tamanho14 != "" ? (
                                  <h3
                                    style={{ fontSize: "15px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corQuaternary.tamanhos
                                        .tamanhoTwo.tamanho14
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corQuaternary.tamanhos
                                        .tamanhoTwo.quantidade14
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                                {item.cores.corQuaternary.tamanhos.tamanhoThree
                                  .tamanho15 != "" ? (
                                  <h3
                                    style={{ fontSize: "15px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corQuaternary.tamanhos
                                        .tamanhoThree.tamanho15
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corQuaternary.tamanhos
                                        .tamanhoThree.quantidade15
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                                {item.cores.corQuaternary.tamanhos.tamanhoFour
                                  .tamanho16 != "" ? (
                                  <h3
                                    style={{ fontSize: "15px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corQuaternary.tamanhos
                                        .tamanhoFour.tamanho16
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corQuaternary.tamanhos
                                        .tamanhoFour.quantidade16
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </td>
                        <td>
                          {item.cores.corFive.cor2 != "" ? (
                            <div className="box-cores-tamanhos-adm">
                              <h2
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  background: item.cores.corFive.cor5,
                                }}
                              ></h2>
                              <div
                                style={{
                                  display: "flex",
                                  gap: "5px",
                                  flexDirection: "column",
                                }}
                              >
                                {item.cores.corFive.tamanhos.tamanhoOne
                                  .tamanho17 != "" ? (
                                  <h3
                                    style={{ fontSize: "15px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corFive.tamanhos.tamanhoOne
                                        .tamanho17
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corFive.tamanhos.tamanhoOne
                                        .quantidade17
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                                {item.cores.corFive.tamanhos.tamanhoTwo
                                  .tamanho18 != "" ? (
                                  <h3
                                    style={{ fontSize: "15px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corFive.tamanhos.tamanhoTwo
                                        .tamanho18
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corFive.tamanhos.tamanhoTwo
                                        .quantidade18
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                                {item.cores.corFive.tamanhos.tamanhoThree
                                  .tamanho19 != "" ? (
                                  <h3
                                    style={{ fontSize: "19px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corFive.tamanhos.tamanhoThree
                                        .tamanho19
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corFive.tamanhos.tamanhoThree
                                        .quantidade19
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                                {item.cores.corFive.tamanhos.tamanhoFour
                                  .tamanho20 != "" ? (
                                  <h3
                                    style={{ fontSize: "15px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corFive.tamanhos.tamanhoFour
                                        .tamanho20
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corFive.tamanhos.tamanhoFour
                                        .quantidade20
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </td>
                        <td>
                          {item.cores.corSix.cor2 != "" ? (
                            <div className="box-cores-tamanhos-adm">
                              <h2
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  background: item.cores.corSix.cor6,
                                }}
                              ></h2>
                              <div
                                style={{
                                  display: "flex",
                                  gap: "5px",
                                  flexDirection: "column",
                                }}
                              >
                                {item.cores.corSix.tamanhos.tamanhoOne
                                  .tamanho21 != "" ? (
                                  <h3
                                    style={{ fontSize: "15px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corSix.tamanhos.tamanhoOne
                                        .tamanho21
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corSix.tamanhos.tamanhoOne
                                        .quantidade21
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                                {item.cores.corSix.tamanhos.tamanhoTwo
                                  .tamanho22 != "" ? (
                                  <h3
                                    style={{ fontSize: "15px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corSix.tamanhos.tamanhoTwo
                                        .tamanho22
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corSix.tamanhos.tamanhoTwo
                                        .quantidade22
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                                {item.cores.corSix.tamanhos.tamanhoThree
                                  .tamanho23 != "" ? (
                                  <h3
                                    style={{ fontSize: "23px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corSix.tamanhos.tamanhoThree
                                        .tamanho23
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corSix.tamanhos.tamanhoThree
                                        .quantidade23
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                                {item.cores.corSix.tamanhos.tamanhoFour
                                  .tamanho24 != "" ? (
                                  <h3
                                    style={{ fontSize: "15px", color: "white" }}
                                  >
                                    Tamanho{" "}
                                    {
                                      item.cores.corSix.tamanhos.tamanhoFour
                                        .tamanho24
                                    }{" "}
                                    -{" "}
                                    {
                                      item.cores.corSix.tamanhos.tamanhoFour
                                        .quantidade24
                                    }
                                  </h3>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
            {showmodaldetalhesprodutos != false ? (
              <div className="modal-update-produtos">
                <div className="btnclosemodalproduto">
                  <button onClick={() => setShowmodaldetalhesproduto(false)}>
                    X
                  </button>
                </div>
                <img src={detalhesproduto.cores.corPrimary.imgurl}></img>
                <br></br>
                <span style={{ color: "#fff" }}>Titulo do Produto</span>
                <input
                  value={modelo}
                  onChange={(e) => setModelo(e.target.value)}
                  placeholder={detalhesproduto.modelo}
                ></input>
                <input
                  type="text"
                  name="SKU"
                  id="sku"
                  placeholder="SKU"
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
                />
                <span>Categoria</span>
                <select
                  value={categoriaupdate}
                  onChange={(e) => setCategoriaupdate(e.target.value)}
                >
                  <option>Categorias</option>
                  {datacategorias.map((item) => {
                    return (
                      <option key={item.categoria} value={item.categoria}>
                        {item.categoria}
                      </option>
                    );
                  })}
                </select>
                <span>Sub-Categorias</span>
                <input
                  type={"text"}
                  value={subcategoriaupdate1}
                  onChange={(e) => setSubcategoriaupdate1(e.target.value)}
                  placeholder="Sub-categoria 1"
                ></input>
                <input
                  type={"text"}
                  value={subcategoriaupdate2}
                  onChange={(e) => setSubcategoriaupdate2(e.target.value)}
                  placeholder="Sub-categoria 2"
                ></input>
                <input
                  type={"text"}
                  value={subcategoriaupdate3}
                  onChange={(e) => setSubcategoriaupdate3(e.target.value)}
                  placeholder="Sub-categoria 3"
                ></input>
                <input
                  type={"text"}
                  value={subcategoriaupdate4}
                  onChange={(e) => setSubcategoriaupdate4(e.target.value)}
                  placeholder="Sub-categoria 4"
                ></input>
                <span>Descrição</span>
                <textarea
                  value={decricaoupdate}
                  onChange={(e) => setDescricaoupdate(e.target.value)}
                ></textarea>
                <span>Preço maior R$</span>
                <input
                  type="text"
                  value={precomaior}
                  onChange={(e) => setPrecomaior(e.target.value)}
                ></input>
                <span>Preço R$</span>
                <input
                  type="text"
                  value={precoupdate}
                  onChange={(e) => setPrcoupdate(e.target.value)}
                ></input>
                <span style={{ color: "#fff", marginTop: "20px" }}>
                  Medidas do Pacote
                </span>

                <div
                  style={
                    window.screen.width > 500
                      ? { display: "flex", width: "50%", alignItems: "center" }
                      : {}
                  }
                >
                  <div>
                    <label htmlFor="">Peso</label>

                    <input
                      type={"text"}
                      value={peso}
                      placeholder="peso"
                      onChange={(e) => setPeso(e.target.value)}
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="">Comprimento</label>
                    <input
                      type={"text"}
                      value={comprimento}
                      placeholder="comprimento"
                      onChange={(e) => setComprimento(e.target.value)}
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="">Altura</label>
                    <input
                      type={"text"}
                      value={altura}
                      placeholder="altura"
                      onChange={(e) => setAltura(e.target.value)}
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="">Largura</label>
                    <input
                      type={"text"}
                      value={largura}
                      placeholder="largura"
                      onChange={(e) => setLargura(e.target.value)}
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="">Diametro</label>
                    <input
                      type={"text"}
                      value={diametro}
                      placeholder="diametro"
                      onChange={(e) => setDiametro(e.target.value)}
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="">Formato</label>
                    <input
                      type={"text"}
                      value={formato}
                      placeholder="formato"
                      onChange={(e) => setFormato(e.target.value)}
                    ></input>
                  </div>
                </div>
                <span>Este produto contem brinde?</span>
                <select
                  value={aparecercampobrinde}
                  onChange={(e) => setAparecercampobrinde(e.target.value)}
                >
                  <option value={"true"}>Sim</option>
                  <option value={"false"}>Não</option>
                </select>
                <span>Este produto está em promoção?</span>
                <select
                  value={promocao}
                  onChange={(e) => setPromocao(e.target.value)}
                >
                  <option value={"true"}>Sim</option>
                  <option value={"false"}>Não</option>
                </select>
                <span>Este produto está em promoção por quantidade?</span>
                <select
                  id="promo2"
                  value={promocao2}
                  onChange={(e) => setPromocao2(e.target.value)}
                >
                  <option>...</option>
                  <option value={"true"}>Sim</option>
                  <option value={"false"}>Não</option>
                </select>
                {promocao2 === "true" ? (
                  <>
                    <span>A partir de quantos ativa a promoção?</span>
                    <input
                      type="number"
                      value={qtdpromocao2}
                      onChange={(e) => setQtdpromocao2(e.target.value)}
                    ></input>
                    <span> % do desconto</span>
                    <input
                      type="text"
                      value={desconto}
                      onChange={(e) => setDesconto(e.target.value)}
                    ></input>
                  </>
                ) : (
                  ""
                )}
                {aparecercampobrinde === "true" ? (
                  <>
                    <span>Informe o Brinde que acompanha este produto.</span>
                    <input
                      type="text"
                      value={brinde}
                      onChange={(e) => {
                        setBrinde(e.target.value);
                      }}
                    />
                  </>
                ) : (
                  ""
                )}
                <div
                  style={
                    window.screen.width > 500
                      ? { display: "flex", width: "50%" }
                      : {
                          display: "flex",
                          flexDirection: "column",
                          gap: "20px",
                          width: "100%",
                        }
                  }
                >
                  {detalhesproduto.cores.corPrimary.cor1 != "" ? (
                    <div className="box-cores-update">
                      <p
                        style={
                          window.screen.width > 500
                            ? {
                                width: "20px",
                                height: "20px",
                                background:
                                  corupdate == ""
                                    ? detalhesproduto.cores.corPrimary.cor1
                                    : corupdate,
                              }
                            : {
                                width: "20px",
                                marginTop: "20px",
                                height: "20px",
                                background:
                                  corupdate == ""
                                    ? detalhesproduto.cores.corPrimary.cor1
                                    : corupdate,
                              }
                        }
                      ></p>
                      <button
                        id="delitemcor"
                        onClick={() => delitemcor(detalhesproduto._id)}
                      >
                        Deletar item
                      </button>
                      <select onChange={(e) => setCorupdate(e.target.value)}>
                        <option>Cores</option>
                        {datacores.map((item) => {
                          return (
                            <>
                              <option key={item._id} value={item.cor}>
                                {item.cor}
                              </option>
                            </>
                          );
                        })}
                      </select>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho1}
                          onChange={(e) => setTamanho1(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corPrimary.tamanhos.tamanhoOne
                              .tamanho1
                          }
                        ></input>
                        <input
                          value={quantidade1}
                          onChange={(e) => setQuantidade1(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corPrimary.tamanhos.tamanhoOne
                              .quantidade
                          }
                        ></input>
                      </div>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho2}
                          onChange={(e) => setTamanho2(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corPrimary.tamanhos.tamanhoTwo
                              .tamanho2
                          }
                        ></input>
                        <input
                          value={quantidade2}
                          onChange={(e) => setQuantidade2(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corPrimary.tamanhos.tamanhoTwo
                              .quantidade2
                          }
                        ></input>
                      </div>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho3}
                          onChange={(e) => setTamanho3(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corPrimary.tamanhos
                              .tamanhoThree.tamanho3
                          }
                        ></input>
                        <input
                          value={quantidade3}
                          onChange={(e) => setQuantidade3(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corPrimary.tamanhos
                              .tamanhoThree.quantidade3
                          }
                        ></input>
                      </div>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho4}
                          onChange={(e) => setTamanho4(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corPrimary.tamanhos
                              .tamanhoFour.tamanho4
                          }
                        ></input>
                        <input
                          value={quantidade4}
                          onChange={(e) => setQuantidade4(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corPrimary.tamanhos
                              .tamanhoFour.quantidade4
                          }
                        ></input>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {detalhesproduto.cores.corSecondary.cor2 != "" ? (
                    <div className="box-cores-update">
                      <p
                        style={{
                          width: "20px",
                          height: "20px",
                          background:
                            corupdate2 == ""
                              ? detalhesproduto.cores.corSecondary.cor2
                              : corupdate2,
                        }}
                      ></p>
                      <button
                        id="delitemcor"
                        onClick={() => delitemcor2(detalhesproduto._id)}
                      >
                        Deletar item
                      </button>

                      <select onChange={(e) => setCorupdate2(e.target.value)}>
                        <option>Cores</option>
                        {datacores.map((item) => {
                          return (
                            <option key={item._id} value={item.cor}>
                              {item.cor}
                            </option>
                          );
                        })}
                      </select>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho5}
                          onChange={(e) => setTamanho5(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corSecondary.tamanhos
                              .tamanhoOne.tamanho5
                          }
                        ></input>
                        <input
                          value={quantidade5}
                          onChange={(e) => setQuantidade5(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corSecondary.tamanhos
                              .tamanhoOne.quantidade5
                          }
                        ></input>
                      </div>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho6}
                          onChange={(e) => setTamanho6(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corSecondary.tamanhos
                              .tamanhoTwo.tamanho6
                          }
                        ></input>
                        <input
                          value={quantidade6}
                          onChange={(e) => setQuantidade6(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corSecondary.tamanhos
                              .tamanhoTwo.quantidade6
                          }
                        ></input>
                      </div>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho7}
                          onChange={(e) => setTamanho7(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corSecondary.tamanhos
                              .tamanhoThree.tamanho7
                          }
                        ></input>
                        <input
                          value={quantidade7}
                          onChange={(e) => setQuantidade7(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corSecondary.tamanhos
                              .tamanhoThree.quantidade7
                          }
                        ></input>
                      </div>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho8}
                          onChange={(e) => setTamanho8(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corSecondary.tamanhos
                              .tamanhoFour.tamanho8
                          }
                        ></input>
                        <input
                          value={quantidade8}
                          onChange={(e) => setQuantidade8(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corSecondary.tamanhos
                              .tamanhoFour.quantidade8
                          }
                        ></input>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {detalhesproduto.cores.corTertiary.cor3 != "" ? (
                    <div className="box-cores-update">
                      <p
                        style={{
                          width: "20px",
                          height: "20px",
                          background:
                            corupdate3 == ""
                              ? detalhesproduto.cores.corTertiary.cor3
                              : corupdate3,
                        }}
                      ></p>
                      <button
                        id="delitemcor"
                        onClick={() => delitemcor3(detalhesproduto._id)}
                      >
                        Deletar item
                      </button>

                      <select onChange={(e) => setCorupdate3(e.target.value)}>
                        <option>Cores</option>
                        {datacores.map((item) => {
                          return (
                            <option key={item._id} value={item.cor}>
                              {item.cor}
                            </option>
                          );
                        })}
                      </select>

                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho9}
                          onChange={(e) => setTamanho9(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corTertiary.tamanhos
                              .tamanhoOne.tamanho9
                          }
                        ></input>
                        <input
                          value={quantidade9}
                          onChange={(e) => setQuantidade9(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corTertiary.tamanhos
                              .tamanhoOne.quantidade9
                          }
                        ></input>
                      </div>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho10}
                          onChange={(e) => setTamanho10(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corTertiary.tamanhos
                              .tamanhoTwo.tamanho10
                          }
                        ></input>
                        <input
                          value={quantidade10}
                          onChange={(e) => setQuantidade10(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corTertiary.tamanhos
                              .tamanhoTwo.quantidade10
                          }
                        ></input>
                      </div>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho11}
                          onChange={(e) => setTamanho11(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corTertiary.tamanhos
                              .tamanhoThree.tamanho11
                          }
                        ></input>
                        <input
                          value={quantidade11}
                          onChange={(e) => setQuantidade11(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corTertiary.tamanhos
                              .tamanhoThree.quantidade11
                          }
                        ></input>
                      </div>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho12}
                          onChange={(e) => setTamanho12(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corTertiary.tamanhos
                              .tamanhoFour.tamanho12
                          }
                        ></input>
                        <input
                          value={quantidade12}
                          onChange={(e) => setQuantidade12(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corTertiary.tamanhos
                              .tamanhoFour.quantidade12
                          }
                        ></input>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {detalhesproduto.cores.corQuaternary.cor4 != "" ? (
                    <div className="box-cores-update">
                      <p
                        style={{
                          width: "20px",
                          height: "20px",
                          background:
                            corupdate4 == ""
                              ? detalhesproduto.cores.corQuaternary.cor4
                              : corupdate4,
                        }}
                      ></p>
                      <button
                        id="delitemcor"
                        onClick={() => delitemcor4(detalhesproduto._id)}
                      >
                        Deletar item
                      </button>

                      <select onChange={(e) => setCorupdate4(e.target.value)}>
                        <option>Cores</option>
                        {datacores.map((item) => {
                          return (
                            <option key={item._id} value={item.cor}>
                              {item.cor}
                            </option>
                          );
                        })}
                      </select>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho21}
                          onChange={(e) => setTamanho13(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corQuaternary.tamanhos
                              .tamanhoOne.tamanho13
                          }
                        ></input>
                        <input
                          value={quantidade13}
                          onChange={(e) => setQuantidade13(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corQuaternary.tamanhos
                              .tamanhoOne.quantidade13
                          }
                        ></input>
                      </div>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho14}
                          onChange={(e) => setTamanho14(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corQuaternary.tamanhos
                              .tamanhoTwo.tamanho14
                          }
                        ></input>
                        <input
                          value={quantidade14}
                          onChange={(e) => setQuantidade14(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corQuaternary.tamanhos
                              .tamanhoTwo.quantidade14
                          }
                        ></input>
                      </div>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho15}
                          onChange={(e) => setTamanho15(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corQuaternary.tamanhos
                              .tamanhoThree.tamanho15
                          }
                        ></input>
                        <input
                          value={quantidade15}
                          onChange={(e) => setQuantidade15(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corQuaternary.tamanhos
                              .tamanhoThree.quantidade15
                          }
                        ></input>
                      </div>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho16}
                          onChange={(e) => setTamanho16(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corQuaternary.tamanhos
                              .tamanhoFour.tamanho16
                          }
                        ></input>
                        <input
                          value={quantidade16}
                          onChange={(e) => setQuantidade16(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corQuaternary.tamanhos
                              .tamanhoFour.quantidade16
                          }
                        ></input>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {detalhesproduto.cores.corFive.cor4 != "" ? (
                    <div className="box-cores-update">
                      <p
                        style={{
                          width: "20px",
                          height: "20px",
                          background:
                            corupdate5 == ""
                              ? detalhesproduto.cores.corFive.cor5
                              : corupdate5,
                        }}
                      ></p>
                      <button
                        id="delitemcor"
                        onClick={() => delitemcor5(detalhesproduto._id)}
                      >
                        Deletar item
                      </button>

                      <select onChange={(e) => setCorupdate5(e.target.value)}>
                        <option>Cores</option>
                        {datacores.map((item) => {
                          return (
                            <option key={item._id} value={item.cor}>
                              {item.cor}
                            </option>
                          );
                        })}
                      </select>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho17}
                          onChange={(e) => setTamanho17(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corFive.tamanhos.tamanhoOne
                              .tamanho17
                          }
                        ></input>
                        <input
                          value={quantidade17}
                          onChange={(e) => setQuantidade17(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corFive.tamanhos.tamanhoOne
                              .quantidade17
                          }
                        ></input>
                      </div>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho18}
                          onChange={(e) => setTamanho18(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corFive.tamanhos.tamanhoTwo
                              .tamanho18
                          }
                        ></input>
                        <input
                          value={quantidade18}
                          onChange={(e) => setQuantidade18(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corFive.tamanhos.tamanhoTwo
                              .quantidade18
                          }
                        ></input>
                      </div>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho19}
                          onChange={(e) => setTamanho19(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corFive.tamanhos.tamanhoThree
                              .tamanho19
                          }
                        ></input>
                        <input
                          value={quantidade19}
                          onChange={(e) => setQuantidade19(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corFive.tamanhos.tamanhoThree
                              .quantidade19
                          }
                        ></input>
                      </div>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho20}
                          onChange={(e) => setTamanho20(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corFive.tamanhos.tamanhoFour
                              .tamanho20
                          }
                        ></input>
                        <input
                          value={quantidade20}
                          onChange={(e) => setQuantidade20(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corFive.tamanhos.tamanhoFour
                              .quantidade20
                          }
                        ></input>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {detalhesproduto.cores.corSix.cor4 != "" ? (
                    <div className="box-cores-update">
                      <p
                        style={{
                          width: "20px",
                          height: "20px",
                          background:
                            corupdate6 == ""
                              ? detalhesproduto.cores.corSix.cor6
                              : corupdate6,
                        }}
                      ></p>
                      <button
                        id="delitemcor"
                        onClick={() => delitemcor6(detalhesproduto._id)}
                      >
                        Deletar item
                      </button>

                      <select onChange={(e) => setCorupdate6(e.target.value)}>
                        <option>Cores</option>
                        {datacores.map((item) => {
                          return (
                            <option key={item._id} value={item.cor}>
                              {item.cor}
                            </option>
                          );
                        })}
                      </select>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho21}
                          onChange={(e) => setTamanho21(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corSix.tamanhos.tamanhoOne
                              .tamanho21
                          }
                        ></input>
                        <input
                          value={quantidade21}
                          onChange={(e) => setQuantidade21(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corSix.tamanhos.tamanhoOne
                              .quantidade21
                          }
                        ></input>
                      </div>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho22}
                          onChange={(e) => setTamanho22(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corSix.tamanhos.tamanhoTwo
                              .tamanho22
                          }
                        ></input>
                        <input
                          value={quantidade22}
                          onChange={(e) => setQuantidade22(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corSix.tamanhos.tamanhoTwo
                              .quantidade22
                          }
                        ></input>
                      </div>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho23}
                          onChange={(e) => setTamanho23(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corSix.tamanhos.tamanhoThree
                              .tamanho23
                          }
                        ></input>
                        <input
                          value={quantidade23}
                          onChange={(e) => setQuantidade23(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corSix.tamanhos.tamanhoThree
                              .quantidade23
                          }
                        ></input>
                      </div>
                      <div className="box-input-tamanho-update">
                        <input
                          value={tamanho24}
                          onChange={(e) => setTamanho24(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corSix.tamanhos.tamanhoFour
                              .tamanho24
                          }
                        ></input>
                        <input
                          value={quantidade24}
                          onChange={(e) => setQuantidade24(e.target.value)}
                          className="input-tamanho-update"
                          placeholder={
                            detalhesproduto.cores.corSix.tamanhos.tamanhoFour
                              .quantidade24
                          }
                        ></input>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="box-btn-update-delete">
                  <button
                    onClick={() => updateitem(detalhesproduto._id)}
                    id="update"
                  >
                    Atualizar
                  </button>
                  <button
                    id="delete"
                    onClick={() => setModaldeleteverifica(true)}
                  >
                    Deletar
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
        {modaldeleteverifica != false ? (
          <div className="popup-delete">
            <div className="popup-delete-item">
              <h2>Deseja Realmente excluir?</h2>
              <button id="sim" onClick={() => deleteitem(detalhesproduto._id)}>
                Sim
              </button>
              <button onClick={() => setModaldeleteverifica(false)}>Não</button>
            </div>
          </div>
        ) : (
          ""
        )}

        {modaleditahome != false ? (
          <div className="container-editahome">
            <div className="title-item-menu">
              <h2>EDITAR HOME</h2>
            </div>
            <div className="form-edita-home">
              <div className="box-input-files">
                <span>Mudar valor frete grátis</span>
                <input
                  type="number"
                  onChange={(e) => setTextofretegratis(e.target.value)}
                ></input>
              </div>
                <div className="box-input-files">
                  <span>Mudar Quantidade de Parcelas aceitas</span>
                  <input
                    type="text"
                    onChange={(e) => setParcelas(e.target.value)}
                  ></input>
                </div>
              <div className="box-input-files">
                <span>Mudar banner central da Home -max: 1500x400 - min:1200x300</span>
                <input type="file" onChange={uploadbannercentralhome}></input>
                <span>Mudar Imagem Pop-up até ( 700x500) </span>
                <input type="file" onChange={uploadBannerpromocao}></input>
                <span>Mudar banner pagina produtos ( 980x140) </span>
                <input type="file" onChange={uploadBannerpaginaprod}></input>
              </div>
              <div className="box-input-files">
                <strong>
                  Essas Imagens devem ter no maximo 1920×960 e
                  formato(jpeg,jpg,gif,webp) para melhor resolução
                </strong>
                <span>Mudar banner Home Computador Destaque1 </span>
                <div style={{ display: "flex",alignItems:'center' }}>
                  <input type="file" onChange={uploadlogo1}></input>
                  <div className="box-view-banner"><img src={dadosedicao.map(item => item.componentelogos.logo1)[0]} alt='Vazio'></img></div>
                  <input className="inputurl" placeholder="Url do banner" type={'text'} onChange={(e)=> setUrlbanneredicao1(e.target.value)}></input>
                  <button
                    style={{ background: "transparent",marginLeft:"1rem" }}
                    onClick={tirabanner1}
                  >
                    <BsTrash color="#fff"></BsTrash>
                  </button>
                </div>
                <span>Mudar banner Home Computador Destaque2 </span>
                <div style={{ display: "flex",alignItems:'center' }}>
                  <input type="file" onChange={uploadlogo2}></input>
                  <div className="box-view-banner"><img src={dadosedicao.map(item => item.componentelogos.logo2)[0]} alt='Vazio'></img></div>
                  <input className="inputurl" placeholder="Url do banner" type={'text'} onChange={(e)=> setUrlbanneredicao2(e.target.value)}></input>
                  <button
                    style={{ background: "transparent",marginLeft:"1rem" }}
                    onClick={tirabanner2}
                  >
                    <BsTrash color="#fff"></BsTrash>
                  </button>

                </div>
                <span>Mudar banner Home Computador Destaque3 </span>
                <div style={{ display: "flex",alignItems:'center' }}>
                  <input type="file" onChange={uploadlogo3}></input>
                  <div className="box-view-banner"><img src={dadosedicao.map(item => item.componentelogos.logo3)[0]} alt='Vazio'></img></div>
                  <input className="inputurl" placeholder="Url do banner" type={'text'} onChange={(e)=> setUrlbanneredicao3(e.target.value)}></input>
                  <button
                    style={{ background: "transparent",marginLeft:"1rem" }}
                    onClick={tirabanner3}
                  >
                    <BsTrash color="#fff"></BsTrash>
                  </button>

                </div>
                <span>Mudar banner Home Computador Destaque4 </span>
                <div style={{ display: "flex",alignItems:'center' }}>
                <input type="file" onChange={uploadlogo4}></input>
                  <div className="box-view-banner"><img src={dadosedicao.map(item => item.componentelogos.logo4)[0]} alt='Vazio'></img></div>
                  <input className="inputurl" placeholder="Url do banner" type={'text'} onChange={(e)=> setUrlbanneredicao4(e.target.value)}></input>
                <button
                    style={{ background: "transparent",marginLeft:"1rem" }}
                    onClick={tirabanner4}
                  >
                    <BsTrash color="#fff"></BsTrash>
                  </button>

                </div>
                <span>Mudar banner Home Computador Destaque5 </span>
                <div style={{ display: "flex",alignItems:'center' }}>
                <input type="file" onChange={uploadlogo5}></input>
                  <div className="box-view-banner"><img src={dadosedicao.map(item => item.componentelogos.logo5)[0]} alt='Vazio'></img></div>
                  <input className="inputurl" placeholder="Url do banner" type={'text'} onChange={(e)=> setUrlbanneredicao5(e.target.value)}></input>
                <button
                    style={{ background: "transparent",marginLeft:"1rem" }}
                    onClick={tirabanner5}
                  >
                    <BsTrash color="#fff"></BsTrash>
                  </button>

                </div>
                <span>Mudar banner Home Computador Destaque6 </span>
                <div style={{ display: "flex",alignItems:'center' }}>
                <input type="file" onChange={uploadlogo6}></input>
                  <div className="box-view-banner"><img src={dadosedicao.map(item => item.componentelogos.logo6)[0]} alt='Vazio'></img></div>
                  <input className="inputurl" placeholder="Url do banner" type={'text'} onChange={(e)=> setUrlbanneredicao6(e.target.value)}></input>
                <button
                    style={{ background: "transparent",marginLeft:"1rem" }}
                    onClick={tirabanner6}
                  >
                    <BsTrash color="#fff"></BsTrash>
                  </button>

                </div>
              </div>

              {
                <div className="box-input-files">
                  <strong>
                    Essas Imagens devem ter no maximo 500x600 e
                    formato(jpeg,jpg,gif,webp) para melhor resolução
                  </strong>

                  <span>Mudar banner Celular Home1 </span>
                  <div style={{ display: "flex",alignItems:'center' }}>
                  <input type="file" onChange={uploadbanner1}></input>
                  <button
                    style={{ background: "transparent" }}
                    onClick={tirabanner7}
                  >
                    <BsTrash color="#fff"></BsTrash>
                  </button>
                  <div className="box-view-banner"><img src={dadosedicao.map(item => item.banners.banner1)[0]} alt='Vazio'></img></div>

                  </div>
                  <span>Mudar banner Celular Home2 </span>
                  <div style={{ display: "flex",alignItems:'center' }}>
                  <input type="file" onChange={uploadbanner2}></input>
                  <button
                    style={{ background: "transparent" }}
                    onClick={tirabanner8}
                  >
                    <BsTrash color="#fff"></BsTrash>
                  </button>
                  <div className="box-view-banner"><img src={dadosedicao.map(item => item.banners.banner2)[0]} alt='Vazio'></img></div>

                  </div>
                  <span>Mudar banner Celular Home3 </span>
                  <div style={{ display: "flex",alignItems:'center' }}>
                  <input type="file" onChange={uploadbanner3}></input>
                  <button
                    style={{ background: "transparent" }}
                    onClick={tirabanner9}
                  >
                    <BsTrash color="#fff"></BsTrash>
                  </button>
                  <div className="box-view-banner"><img src={dadosedicao.map(item => item.banners.banner3)[0]} alt='Vazio'></img></div>

                  </div>
                  <span>Mudar banner Celular Home4 </span>
                  <div style={{ display: "flex",alignItems:'center' }}>
                  <input type="file" onChange={uploadbanner4}></input>
                  <button
                    style={{ background: "transparent" }}
                    onClick={tirabanner10}
                  >
                    <BsTrash color="#fff"></BsTrash>
                  </button>
                  <div className="box-view-banner"><img src={dadosedicao.map(item => item.banners.banner4)[0]} alt='Vazio'></img></div>

                  </div>
                  <span>Mudar banner Celular Home5 </span>
                  <div style={{ display: "flex",alignItems:'center' }}>
                  <input type="file" onChange={uploadbanner5}></input>
                  <button
                    style={{ background: "transparent" }}
                    onClick={tirabanner11}
                  >
                    <BsTrash color="#fff"></BsTrash>
                  </button>
                  <div className="box-view-banner"><img src={dadosedicao.map(item => item.banners.banner5)[0]} alt='Vazio'></img></div>

                  </div>
                  <span>Mudar banner Celular Home6 </span>
                  <div style={{ display: "flex",alignItems:'center' }}>
                  <input type="file" onChange={uploadbanner6}></input>
                  <button
                    style={{ background: "transparent" }}
                    onClick={tirabanner12 }
                  >
                    <BsTrash color="#fff"></BsTrash>
                  </button>
                  <div className="box-view-banner"><img src={dadosedicao.map(item => item.banners.banner6)[0]} alt='Vazio'></img></div>

                  </div>
                </div>
              }
              <button id="btnsalvar" onClick={atualizarhome}>
                Salvar
              </button>
            </div>
          </div>
        ) : (
          ""
        )}

        {modallistaemails != false ? (
          <div className="container-lista-emails">
            <div className="title-item-menu">
              <h2>LISTA DE WHATSAPPS</h2>
            </div>
            <div className="area-btns-lista-emails">
              <button onClick={marcartodos}>Marcar todos</button>
              <button onClick={liparlista}>Limpar</button>
              <button onClick={copiarlista}>Copiar lista</button>
            </div>
            {dataemails.map((item) => {
              return (
                <div key={item._id} className="box-email-lista">
                  <input
                    type="checkbox"
                    value={item.telefone}
                    className="checkboxemail"
                    onClick={() => marcaremail(item)}
                  ></input>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "300px",
                      gap: "10px",
                    }}
                  >
                    <span>Nome: </span>
                    <span>{item.nome}</span>
                    <span>Whatsapp: </span>
                    <span>{item.telefone}</span>
                  </div>
                  <button onClick={() => delemail(item)} id="del-email-list">
                    <BsTrash size={25} color="white"></BsTrash>
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}

        {modaleditadados != false ? (
          <div className="modaleditadados">
            <div className="title-item-menu">
              <h2>PRIVACIDADE</h2>
            </div>

            <div className="box-form-edta-acesso">
              <label>E-mail</label>
              <input
                type={"text"}
                placeholder="Digite um email de sua preferência"
                onChange={(e) => setAlteraemail(e.target.value)}
              ></input>
              <label>Senha</label>
              <input
                type={"text"}
                placeholder="Senha atual"
                onChange={(e) => setSenhaverificacao(e.target.value)}
              ></input>
              <input
                type={"text"}
                placeholder="Nova senha"
                onChange={(e) => setAlterasenha(e.target.value)}
              ></input>
              <button onClick={mudadados}>Salvar</button>
            </div>
          </div>
        ) : (
          ""
        )}

        {modalperguntasfrequentes != false ? (
          <div className="modalperguntas">
            <div className="title-item-menu">
              <h2>EDITAR PERGUNTAS FREQUENTES</h2>
            </div>

            <div className="box-input-perguntas">
              <input
                type={"text"}
                placeholder="Titulo da Pergunta"
                value={titulopergunta}
                onChange={(e) => setTitulopergunta(e.target.value)}
              ></input>
              <textarea
                type={"text"}
                placeholder="Resposta da Pergunta"
                value={textoresposta}
                onChange={(e) => setTextoresposta(e.target.value)}
              ></textarea>
              <button onClick={addperguntas}>Cadastrar pergunta</button>
            </div>

            {dataperguntas.map((item) => {
              return (
                <div key={item._id} className="item-pergunta">
                  <h2>{item.sumary}</h2>
                  <p>{item.resposta}</p>

                  <button
                    onClick={() =>
                      document
                        .querySelectorAll(".boxeditpergunta")
                        [
                          dataperguntas.findIndex(
                            (data) => data._id == item._id
                          )
                        ].setAttribute("style", "display:flex")
                    }
                  >
                    <MdEdit color="#2d2d2d" size={20}></MdEdit>
                  </button>
                  <button onClick={() => delpergunta(item._id)}>
                    <BsTrash color="#2d2d2d" size={20}></BsTrash>
                  </button>
                  <div className="boxeditpergunta">
                    <input
                      type={"text"}
                      placeholder="Titulo da Pergunta"
                      value={titulopergunta}
                      onChange={(e) => setTitulopergunta(e.target.value)}
                    ></input>
                    <textarea
                      type={"text"}
                      placeholder="Resposta da Pergunta"
                      value={textoresposta}
                      onChange={(e) => setTextoresposta(e.target.value)}
                    ></textarea>
                    <button onClick={() => updateperguntas(item._id)}>
                      Atualizar pergunta
                    </button>
                    <button
                      onClick={() =>
                        document
                          .querySelectorAll(".boxeditpergunta")
                          [
                            dataperguntas.findIndex(
                              (data) => data._id == item._id
                            )
                          ].setAttribute("style", "display:none")
                      }
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}

        {modalcadastroprodutos != false ? (
          <AdminCadastroProdutos></AdminCadastroProdutos>
        ) : (
          ""
        )}

        {modallistacomentarios != false ? (
          <div className="modallistacomentarios">
            <div className="title-item-menu">
              <h2>GERENCIAR COMENTÁRIOS</h2>
            </div>

            <input
              type={"text"}
              placeholder={"Seu nome"}
              value={nomefeddback}
              onChange={(e) => setNomefeddback(e.target.value)}
            ></input>
            <textarea
              placeholder="Digite aqui"
              value={textofeedback}
              onChange={(e) => setTextofeedback(e.target.value)}
            ></textarea>
            <button type="button" onClick={criarfeedback}>
              Enviar
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
