import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { MdArrowBack } from "react-icons/md";
import { useDispatch } from "react-redux";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Timer from "../../Components/Timer";
import Titlemainallpages from "../../Components/Titlemainallpages";
import { toast } from "react-toastify";
import api from "../../services/api";
import api2 from "../../services/api2";
import Viacep from "../../services/apiViacep";
import axios from "axios";
import { AuthContext } from "../../Contexts/auth";
import apidepagamento from "../../services/apiPagamento";

const data = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
const hora = `${new Date().getHours()}:${new Date().getMinutes()}`;

export default function Carrinho() {
  const dispath = useDispatch();
  const { usercliente } = useContext(AuthContext);

  const [tipoentrega, setTipoentrega] = useState("");
  const [datacarrinho, setDatacarrinho] = useState([]);
  const [dadosfrete, setDadosfrete] = useState([]);
  const [valorfinal, setValorfinal] = useState();
  const [itemclicado, setItemclicado] = useState();
  const [somaqtd, setSomaqtd] = useState();
  const [frete, setFrete] = useState(0);
  const [verificafrete, setVerificafrete] = useState(true);
  const [verificapromo, setVerificapromo] = useState(false);
  const [cep, setCep] = useState("");
  const [dadoscep, setDadoscep] = useState([]);
  const [load, setLoad] = useState(false);
  const [modalpagamento, setModalpagamento] = useState(false);
  const [modalcadastro, setModalcadastro] = useState(true);
  const [pagamentoescolhido, setPagamentoescolhido] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [bairro, setBairro] = useState("");
  const [numerocard, setNumerocard] = useState("");
  const [cvv, setCvv] = useState("");
  const [datavalidade, setDatavalidade] = useState("");
  const [parcelas, setParcelas] = useState("");
  const [brand, setBrand] = useState("");
  const [linkpix, setLinkpix] = useState("");
  const [resultapi, setResultapi] = useState([]);
  const [dadosentrega, setDadosentrega] = useState([]);
  const [imgqrcode, setImgqrcode] = useState(false);
  const [cpfstateform, setCpfstateform] = useState("");
  const [cpfformat, setCpfformat] = useState("_ _ _ - _ _ _ - _ _ _ -_ _");

  useEffect(() => {
    //console.log(frete);
    document.title = "Carrinho 🛒 | Vittotiavitt";

    setDatacarrinho(JSON.parse(localStorage.getItem("carrinhorr11") || "[]"));

    api.get("/edicao").then((data) => {
      setDadosfrete(data.data);
    });

    let soma = 0;
    let novoarray = [];
    datacarrinho.map((item) => {
      novoarray.push(item.valorTotal);
    });

    for (let i = 0; i < novoarray.length; i++) {
      soma += novoarray[i];
    }
    localStorage.setItem("valorfinalrr11", JSON.stringify(soma));

    let soma2 = 0;
    let newarr = [];
    datacarrinho.map((item) => newarr.push(item.quantidade));
    for (let i = 0; i < newarr.length; i++) {
      soma2 += newarr[i];
    }
    setSomaqtd(soma2);

    setValorfinal(JSON.parse(localStorage.getItem("valorfinalrr11")));

    if (
      (datacarrinho.some((item) => item.promocao) === true &&
        datacarrinho.length >=
          datacarrinho.map((item) => item.qtdpromocao)[0]) ||
      somaqtd >= datacarrinho.map((item) => item.qtdpromocao)[0] ||
      datacarrinho.some((item) => item.quantidade >= item.qtdpromocao)
    ) {
      let fretegratis = dadosfrete.map((item) =>
        parseFloat(item.componentetexto1)
      )[0];
      let valor = JSON.parse(localStorage.getItem("valorfinalrr11"));

      if (parseFloat(valor) < fretegratis) {
        setValorfinal(
          parseFloat(valor - (itemclicado * valor) / 100) + parseFloat(frete)
        ); //colocar o valor do frete
        localStorage.setItem("valorfinalrr11", JSON.stringify(valorfinal));
        setVerificapromo(true);
        setVerificafrete(true);
      } else {
        setValorfinal(parseFloat(valor - (itemclicado * valor) / 100));
        localStorage.setItem("valorfinalrr11", JSON.stringify(valorfinal));
        setVerificafrete(false);
        setVerificapromo(false);
      }

      localStorage.setItem("valorfinalrr11", JSON.stringify(valorfinal));
    } else {
      let fretegratis = dadosfrete.map((item) =>
        parseFloat(item.componentetexto1)
      )[0];

      let valor = JSON.parse(localStorage.getItem("valorfinalrr11"));
      if (parseFloat(valor) < fretegratis) {
        setValorfinal(parseFloat(valor) + parseFloat(frete)); //colocar o valor do frete
        localStorage.setItem("valorfinalrr11", JSON.stringify(valorfinal));
        setVerificapromo(true);
        setVerificafrete(true);
      } else {
        setValorfinal(JSON.parse(localStorage.getItem("valorfinalrr11"))); //colocar o valor do frete
        localStorage.setItem("valorfinalrr11", JSON.stringify(valorfinal));
        setVerificafrete(false);
        setVerificapromo(false);
      }
    }

    setItemclicado(
      JSON.parse(localStorage.getItem("descontoaplicado")) || "[]"
    );

    //console.log(frete)

    // console.log(dadosentrega.map(item => item.Valor));
  }, [dadosfrete, valorfinal]);

  function additem(item) {
    dispath({
      type: "ADD_ITEM",
      item,
    });
    let index = datacarrinho.findIndex((data) => data._id == item._id);

    if (item.desconto[index] != "" || item.desconto[index] != null) {
      localStorage.setItem("descontoaplicado", JSON.stringify(item.desconto));
    }
    window.location.reload();
  }

  function subitem(item) {
    if (item.quantidade == 1) {
      return;
    }
    dispath({
      type: "REMOVE_ITEM",
      item,
    });
    if (item.promocao == true && item.quantidade >= item.qtdpromocao) {
      let valor = JSON.parse(localStorage.getItem("valorfinalrr11"));
      setValorfinal(parseFloat(valor - (item.desconto * valor) / 100));
    }
    if (item.qtdpromocao > item.quantidade) {
      setValorfinal(JSON.parse(localStorage.getItem("valorfinalrr11")));
    }
    let index = datacarrinho.findIndex((data) => data._id == item._id);

    if (item.desconto[index] != "" || item.desconto[index] != null) {
      localStorage.setItem("descontoaplicado", JSON.stringify(item.desconto));
    }
    window.location.reload();
  }

  function removeitem(item) {
    dispath({
      type: "DELETE_ITEM",
      item,
    });
    toast.success("item excluido com sucesso!");
  }

  async function CalcFrete2() {
    if (cep == "") {
      toast.info("Digite seu cep!");
      return;
    }
    setLoad(true);

    //api de frete vittoria url
    let url = "https://web-production-7617.up.railway.app/frete";
    await axios
      .post(url, {
        headers: {
          "Content-type": "application/json",
        },
        ceporigem: "28660000",
        cepdestino: cep,
        peso: datacarrinho.map((item) => item.peso)[0],
        comprimento: datacarrinho.map((item) => item.comprimento)[0],
        altura: datacarrinho.map((item) => item.altura)[0],
        largura: datacarrinho.map((item) => item.largura)[0],
        diametro: datacarrinho.map((item) => item.diametro)[0],
        formato: datacarrinho.map((item) => item.formato)[0],
      })
      .then((result) => {
        const arrayCep = result.data;
        console.log(arrayCep);

        setDadosentrega(arrayCep);

        setLoad(false);
        Viacep.get(`${cep}/json`).then((data) => {
          //console.log(data.data);
          setDadoscep(data.data);
          setEndereco(data.data.logradouro);
          setBairro(data.data.bairro);
          setCidade(data.data.localidade);
          setEstado(data.data.uf);
        });
      })
      .catch((error) => {
        console.log(error);
        toast.info("Verifique seu cep!");
      });
  }

  //REQUISIÇÃO CREDITO//
  async function fazerpedido() {
    if (nome == "" || email == "" || telefone == "" || cpf == "" || cep == "") {
      toast.info("Preencha todos os campos!");
      return;
    }
    const data = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
    const hora = `${new Date().getHours()}:${new Date().getMinutes()}`;

    await apidepagamento
      .post("/1/sales/", {
        MerchantOrderId: "2014111701",
        Customer: {
          Name: usercliente.nome,
          // Email: usercliente.email,
          // Birthdate: usercliente.datanascimento,
        },
        Payment: {
          Currency: "BRL",
          Country: "BRA",
          ServiceTaxAmount: 0,
          Installments: parcelas,
          Interest: "ByMerchant",
          Capture: true,
          Authenticate: "false",
          Recurrent: "false",
          SoftDescriptor: "123456789ABCD",
          CreditCard: {
            CardNumber: numerocard,
            Holder: nome,
            ExpirationDate: datavalidade,
            SecurityCode: cvv,
            SaveCard: "false",
            Brand: brand,
            CardOnFile: {
              Usage: "Used",
              Reason: "Unscheduled",
            },
          },
          IsCryptoCurrencyNegotiation: true,
          Type: "CreditCard",
          Amount: 1,
          AirlineData: {
            TicketNumber: "AR988983",
          },
        },
      })
      .then(() => {
        api2
          .post("/pedidos", {
            headers: {
              Authorization: "Access-Control-Allow-Origin",
              "Content-type": "application/json",
            },
            idpedido: `${Math.floor(Math.random() * 1000)}`,
            idLojafranqueada: "vittoriafitstore",
            uid: usercliente.uid,
            nomecliente: nome,
            cpf: cpf,
            telefone: telefone,
            cep: cep,
            endereco: endereco,
            numero: numero,
            data: data,
            hora: hora,
            produto: {
              modelo: `${datacarrinho.map(
                (modelo) => modelo.modelo + " " + "Qtd:" + modelo.quantidade
              )}`,
            },
            parcelas: parcelas,
            valor: valorfinal,
            status: "Preparando seu pedido",
          })
          .then(() => {
            toast.success(
              "Pedido realizado com sucesso, verifique o status na area do cliente!"
            );
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // REQUISIÇÃO PIX//
  async function fazerpedidopix() {
    if (nome == "" || email == "" || telefone == "" || cpf == "" || cep == "") {
      toast.info("Preencha todos os campos!");
      return;
    }
    api2
      .post("/pedidos", {
        headers: {
          Authorization: "Access-Control-Allow-Origin",
          "Content-type": "application/json",
        },
        idpedido: `${Math.floor(Math.random() * 1000)}`,
        idLojafranqueada: "vittoriafitstore",
        uid: usercliente.uid,
        nomecliente: nome,
        cpf: cpf,
        telefone: telefone,
        cep: cep,
        endereco: endereco,
        numero: numero,
        data: data,
        hora: hora,
        produto: {
          modelo: `${datacarrinho.map(
            (modelo) => modelo.modelo + " " + "Qtd:" + modelo.quantidade
          )}`,
        },
        parcelas: parcelas,
        valor: valorfinal,
        status: "Preparando seu pedido",
      })
      .then(() => {
        toast.success(
          "Pedido realizado com sucesso, verifique o status na area do cliente!"
        );
      })
      .catch((error) => {
        alert(error);
      });

    /* await apidepagamento
       .post("/1/sales/", {
         MerchantOrderId: "2020102601",
         Customer: {
           Name: nome,
           Identity: cpf,
           IdentityType: "CPF",
         },
         Payment: {
           Type: "Pix",
           Amount: 100,
         },
       })
       .then((result) => {
         console.log(result);
         setImgqrcode(true);
         setResultapi(result.data.Payment);
         setLinkpix(result.data.Payment.QrCodeString);
 
        api2
           .post("/pedidos", {
             headers: {
               Authorization: "Access-Control-Allow-Origin",
               "Content-type": "application/json",
             },
             idpedido: `${Math.floor(Math.random() * 1000)}`,
             idLojafranqueada: "vittoriafitstore",
             uid: usercliente.uid,
             nomecliente: nome,
             cpf: cpf,
             telefone: telefone,
             cep: cep,
             endereco: endereco,
             numero: numero,
             data: data,
             hora: hora,
             produto: {
               modelo: `${datacarrinho.map(
                 (modelo) => modelo.modelo + " " + "Qtd:" + modelo.quantidade
               )}`,
             },
             parcelas: parcelas,
             valor: valorfinal,
             status: "Preparando seu pedido",
           })
           .then(() => {
             toast.success(
               "Pedido realizado com sucesso, verifique o status na area do cliente!"
             );
           })
           .catch((error) => {
             alert(error);
           });
       })
       .catch((error) => {
         console.log(error);
       });*/
  }

  //REQUISIÇÃO BOLETO//

  async function fazerpedidoboleto() {
    if (nome == "" || email == "" || telefone == "" || cpf == "" || cep == "") {
      toast.info("Preencha todos os campos!");
      return;
    }
    await apidepagamento
      .post("/1/sales/", {
        MerchantOrderId: "2014111706",
        Customer: {
          Name: nome,
          Identity: "1234567890",
          Address: {
            Street: endereco,
            Number: numero,
            Complement: "Sala 934",
            ZipCode: cep,
            District: "Centro",
            City: cidade,
            State: estado,
            Country: "BRA",
          },
          Billing: {
            Street: "Avenida Marechal Câmara",
            Number: "160",
            Complement: "Sala 934",
            Neighborhood: "Centro",
            City: "Rio de Janeiro",
            State: "RJ",
            Country: "BR",
            ZipCode: "22750012",
          },
        },
        Payment: {
          Type: "Boleto",
          Amount: 15700,
          Provider: "Bradesco2",
          Address: "Rua Teste",
          BoletoNumber: "123",
          Assignor: "Empresa Teste",
          Demonstrative: "Desmonstrative Teste",
          ExpirationDate: "2020-12-31",
          Identification: "11884926754",
          Instructions:
            "Aceitar somente até a data de vencimento, após essa data juros de 1% dia.",
        },
      })
      .then((result) => {
        console.log(result);
        api2
          .post("/pedidos", {
            headers: {
              Authorization: "Access-Control-Allow-Origin",
              "Content-type": "application/json",
            },
            idpedido: `${Math.floor(Math.random() * 1000)}`,
            idLojafranqueada: "vittoriafitstore",
            uid: usercliente.uid,
            nomecliente: nome,
            cpf: cpf,
            telefone: telefone,
            cep: cep,
            endereco: endereco,
            numero: numero,
            data: data,
            hora: hora,
            produto: {
              modelo: `${datacarrinho.map(
                (modelo) => modelo.modelo + " " + "Qtd:" + modelo.quantidade
              )}`,
            },
            parcelas: parcelas,
            valor: valorfinal,
            status: "Preparando seu pedido",
          })
          .then(() => {
            toast.success(
              "Pedido realizado com sucesso, verifique o status na area do cliente!"
            );
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // console.log(cpfstateform);
  function validarCpfStateFormatTest(e) {
    setCpf(e.target.value);

    function validarPrimeiroDigito(cpf) {
      let sum = 0;
      for (let i = 0; i < 9; i++) {
        sum += cpf[i] * (10 - i);
      }
      const resto = (sum * 10) % 11;
      if (resto < 10) {
        return cpf[9] == resto;
      }
      return cpf[9] == 0;
    }

    function validarSegundoDigito(cpf) {
      let sum = 0;
      for (let i = 0; i < 10; i++) {
        sum += cpf[i] * (10 - i);
      }
      const resto = (sum * 10) % 11;
      if (resto < 10) {
        return cpf[10] == resto;
      }
      return cpf[10] == 0;
    }

    function validarRepetido(cpf) {
      const primeiro = cpf[0];
      let diferente = false;
      for (let i = 1; i < cpf.length; i++) {
        if (cpf[i] !== primeiro) {
          diferente = true;
        }
      }

      return diferente;
    }

    function validarCpf(cpf) {
      console.log(cpf.length);
      if (cpf.length != 10) {
        return setCpfstateform("CPF Inválido");
      }
      if (!validarRepetido(cpf)) {
        return setCpfstateform("CPF Inválido");
      }
      if (!validarPrimeiroDigito(cpf)) {
        return setCpfstateform("CPF Inválido");
      }
      // if (!validarSegundoDigito(cpf)) {
      //   return setCpfstateform("14");
      // }
      return setCpfstateform("CPF Válido");
    }

    const cpfState = String(cpf)
      .split("")
      .map((e) => parseInt(e));

    const cpfValido = validarCpf(cpfState);
  }

  function nextStaps() {
    document
      .querySelector(".container-itens-nocarrinho")
      .setAttribute("style", "display:none");
    setModalcadastro(true);
    document
      .querySelectorAll(".stap")[1]
      .setAttribute("style", "background:green");
    document
      .querySelectorAll(".linha")[0]
      .setAttribute("style", "background:green");
  }

  function copiarpix() {
    navigator.clipboard.writeText(linkpix);
    toast.success("Código pix copiado!");
    //console.log(textArea)
  }

  function closemodalcad() {
    setModalcadastro(false);
    document
      .querySelector(".container-itens-nocarrinho")
      .setAttribute("style", "display:flex");
    document
      .querySelectorAll(".stap")[1]
      .setAttribute("style", "background:red");
    document
      .querySelectorAll(".linha")[0]
      .setAttribute("style", "background:red");
  }

  return (
    <div className="container-carrinho">
      <Header back="#DE4563"></Header>
      <Titlemainallpages name="MEU CARRINHO"></Titlemainallpages>
      <Timer></Timer>

      {modalcadastro != false ? (
        <div className="modalCadastro">
          <div className="container-cadastro-carrinho">
            <div className="box-dados-pessoais">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "3px",
                    background: "#DE4563",
                    color: "white",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                  }}
                >
                  1
                </p>
                <h3>Identifique-se</h3>
              </div>
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                type="text"
                placeholder="Nome"
                required
              ></input>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="E-mail"
                required
              ></input>
              <input
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                type="text"
                placeholder="Telefone"
                required
              ></input>
              <input
                value={cpf}
                onChange={validarCpfStateFormatTest}
                type="text"
                placeholder="CPF"
                required
              ></input>

              <p>{cpfstateform}</p>
            </div>
            <div className="box-dados-entrega">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "3px",
                    background: "#DE4563",
                    color: "white",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                  }}
                >
                  2
                </p>
                <h3>Endereço para a entrega</h3>
              </div>
              <div style={{ width: "100%" }}>
                <input
                  onChange={(e) => setCep(e.target.value)}
                  type="text"
                  placeholder="CEP ex: 08385165"
                  autoComplete={true}
                ></input>
                <button id="btncalc" onClick={CalcFrete2}>
                  {load == false ? "Calcular" : "Calculando..."}
                </button>
              </div>
              <input
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                type="text"
                placeholder="Endereço"
              ></input>
              <input
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                type="text"
                placeholder="Número"
                required
              ></input>
              <input
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                type="text"
                placeholder="Bairro"
              ></input>
              <input
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                type="text"
                placeholder="Cidade"
              ></input>
              <input
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                type="text"
                placeholder="Estado"
              ></input>

              <div className="box-frete">
                {verificafrete != true ? (
                  <h2 style={{ color: "green", textAlign: "center" }}>
                    Parabéns! Você ganhou Frete Grátis!
                  </h2>
                ) : (
                  <>
                    <div>
                      <h2>Correios</h2>
                      {dadosentrega.map((item) => {
                        return (
                          <div
                            style={{
                              display: "flex",
                              alignitems: "center",
                              gap: "5px",
                            }}
                            key={item.id}
                          >
                            <input
                              name="tipo"
                              style={{ width: "15px", height: "15px" }}
                              type={"radio"}
                              value={item.Valor}
                              onChange={(e) => setFrete(e.target.value)}
                            ></input>
                            <label
                              style={{
                                display: "flex",
                                alignitems: "center",
                                gap: "5px",
                              }}
                            >
                              {item.Codigo == "04014" ? "Sedex" : "Pac"}
                              <p>até {item.PrazoEntrega} dias úteis</p>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      <h2>R${frete}</h2>
                    </div>
                  </>
                )}
              </div>
            </div>
            {window.screen.width < 500 ? (
              <div className="box-dados-pedido">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "3px",
                      background: "#DE4563",
                      color: "white",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                    }}
                  >
                    3
                  </p>
                  <h3>Confira seus Produtos</h3>
                </div>
                {datacarrinho.map((item) => {
                  return (
                    <div key={item.cor} className="box-item-carrinho">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          height: "100%",
                          gap: "20px",
                        }}
                      >
                        <img src={item.imgurl}></img>
                        <div className="box-info-qtd-cor">
                          <h2>{item.modelo}</h2>
                          {item.promocao == true ? (
                            <p style={{ color: "green", fontSize: "13px" }}>
                              {item.desconto}% de desconto na compra de{" "}
                              {item.qtdpromocao} peças!
                            </p>
                          ) : (
                            ""
                          )}
                          <div className="qtd-cor">
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "3px",
                              }}
                            >
                              <button
                                onClick={() => subitem(item)}
                                className="btn-qtd-carrinho"
                              >
                                -
                              </button>
                              <span id="qtdview">{item.quantidade}</span>
                              <button
                                onClick={() => additem(item)}
                                className="btn-qtd-carrinho"
                              >
                                +
                              </button>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "3px",
                              }}
                            >
                              <p className="style-tamanho-cor">
                                {item.tamanho}
                              </p>
                              <div
                                style={{
                                  background: item.cor,
                                  width: "30px",
                                  height: "30px",
                                  border: "1px solid black",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="precocarrinho">
                        <h3>
                          {parseFloat(item.valorTotal).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </h3>
                        <button onClick={() => removeitem(item)}>
                          Remover
                        </button>
                      </div>
                    </div>
                  );
                })}
                <div className="box-total">
                  <div className="cupom">
                    <div
                      style={{
                        width: "100%",
                        height: "40px",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        gap: "20px",
                      }}
                    >
                      <input placeholder="INSIRA SEU CUPOM"></input>
                      <button id="btnverificar">Verificar</button>
                    </div>
                    <div className="total-cupom">
                      <span>TOTAL COM CUPOM:</span>
                      <h2>
                        {datacarrinho.length == 0
                          ? "R$00,00"
                          : parseFloat(valorfinal).toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })}
                      </h2>
                    </div>
                  </div>
                  <div className="subtotal">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                      }}
                    >
                      <h2
                        style={
                          (datacarrinho.some((item) => item.promocao == true) ==
                            true &&
                            datacarrinho.some(
                              (item) => item.quantidade >= item.qtdpromocao
                            )) ||
                          somaqtd >=
                            datacarrinho.map((item) => item.qtdpromocao)[0] ||
                          datacarrinho.length >=
                            datacarrinho.map((item) => item.qtdpromocao)[0]
                            ? {
                                color: "green",
                                fontSize: "14px",
                                background: "rgb(149, 255, 149)",
                                padding: "5px",
                                borderRadius: "5px",
                              }
                            : {
                                color: "green",
                                fontSize: "14px",
                                background: "transparent",
                                padding: "5px",
                                borderRadius: "5px",
                              }
                        }
                      >
                        {datacarrinho.length == 0
                          ? "R$00,00"
                          : (datacarrinho.some((item) => item.promocao) ==
                              true &&
                              datacarrinho.some(
                                (item) => item.quantidade >= item.qtdpromocao
                              )) ||
                            somaqtd >=
                              datacarrinho.map((item) => item.qtdpromocao)[0] ||
                            datacarrinho.length >=
                              datacarrinho.map((item) => item.qtdpromocao)[0]
                          ? `Você ganhou ${itemclicado}% de desconto em sua compra, Aproveite agora! `
                          : ""}
                      </h2>

                      {verificafrete ? (
                        <p style={{ color: "green", fontSize: "12px" }}>
                          {parseFloat(
                            valorfinal - parseFloat(frete)
                          ).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          }) +
                            " + " +
                            "frete: " +
                            "R$" +
                            frete.toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            }) +
                            " = " +
                            parseFloat(valorfinal).toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <h2>
                      SUB-TOTAL:{" "}
                      {parseFloat(valorfinal).toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}{" "}
                    </h2>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="box-dados-pagamento">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "3px",
                    background: "#DE4563",
                    color: "white",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                  }}
                >
                  4
                </p>
                <h3>Pagamento</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={() => setPagamentoescolhido("credito")}
                  className="btn-tipo-pagamento"
                >
                  Cartão de Crédito
                </button>
                <button
                  onClick={() => setPagamentoescolhido("debito")}
                  className="btn-tipo-pagamento"
                >
                  Cartão de Débito
                </button>
                <button
                  onClick={() => setPagamentoescolhido("pix")}
                  className="btn-tipo-pagamento"
                >
                  Pix
                </button>
                <button
                  onClick={() => setPagamentoescolhido("boleto")}
                  className="btn-tipo-pagamento"
                >
                  Boleto
                </button>
              </div>
              {pagamentoescolhido == "credito" ? (
                <div className="box-cartao-credito">
                  <input
                    onChange={(e) => setNumerocard(e.target.value)}
                    type="text"
                    placeholder="Número do cartão"
                    required
                  ></input>
                  <select onChange={(e) => setBrand(e.target.value)}>
                    <option value={"master"}>Mastercard</option>
                    <option value={"visa"}>Visa</option>
                    <option value={"hiper"}>Hipercard</option>
                    <option value={"amex"}>American Express</option>
                    <option value={"diners"}>Diners club</option>
                  </select>
                  <select onChange={(e) => setParcelas(e.target.value)}>
                    <option value={1}>1x</option>
                    <option value={2}>2x</option>
                    <option value={3}>3x</option>
                  </select>
                  <input
                    onChange={(e) => setDatavalidade(e.target.value)}
                    type="text"
                    placeholder="Validade Example = 12/2030"
                    required
                  ></input>
                  <input
                    onChange={(e) => setCvv(e.target.value)}
                    type="text"
                    placeholder="CVV"
                    required
                  ></input>
                  <button id="btn-pagamento" onClick={fazerpedido}>
                    FINALIZAR PAGAMENTO
                  </button>
                </div>
              ) : (
                ""
              )}
              {pagamentoescolhido == "debito" ? (
                <div className="box-cartao-credito">
                  <input
                    onChange={(e) => setNumerocard(e.target.value)}
                    type="text"
                    placeholder="Número do cartão"
                    required
                  ></input>
                  <select onChange={(e) => setBrand(e.target.value)}>
                    <option value={"master"}>Mastercard</option>
                    <option value={"visa"}>Visa</option>
                    <option value={"hiper"}>Hipercard</option>
                    <option value={"amex"}>American Express</option>
                    <option value={"diners"}>Diners club</option>
                  </select>
                  <input
                    onChange={(e) => setDatavalidade(e.target.value)}
                    type="text"
                    placeholder="Validade Example = 12/2030"
                  ></input>
                  <input
                    onChange={(e) => setCvv(e.target.value)}
                    type="text"
                    placeholder="CVV"
                    required
                  ></input>
                  <button id="btn-pagamento">FINALIZAR PAGAMENTO</button>
                </div>
              ) : (
                ""
              )}
              {pagamentoescolhido == "pix" ? (
                <div className="box-cartao-credito">
                  <input
                    onChange={(e) => setNome(e.target.value)}
                    type="text"
                    placeholder="Nome completo"
                    required
                  ></input>
                  <input
                    onChange={(e) => setCpf(e.target.value)}
                    type="text"
                    placeholder="CPF"
                    required
                  ></input>
                  <button onClick={fazerpedidopix} id="btn-pagamento">
                    GERAR CODIGO PIX
                  </button>
                  {linkpix != "" ? (
                    <h2
                      className="copy"
                      onClick={copiarpix}
                      style={{
                        fontSize: "11px",
                        cursor: "pointer",
                        padding: "5px",
                        background: "#fff",
                      }}
                    >
                      {linkpix} Clique aqui para copiar!
                    </h2>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )}
              {pagamentoescolhido == "boleto" ? (
                <div className="box-cartao-credito">
                  <input
                    onChange={(e) => setNome(e.target.value)}
                    type="text"
                    placeholder="Nome completo"
                    required
                  ></input>
                  <input
                    onChange={(e) => setCpf(e.target.value)}
                    type="text"
                    placeholder="CPF"
                    required
                  ></input>
                  <button onClick={fazerpedidoboleto} id="btn-pagamento">
                    GERAR BOLETO
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          {window.screen.width > 500 ? (
            <div className="container-dados-pedido">
              <div className="box-dados-pedido">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "3px",
                      background: "#DE4563",
                      color: "white",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                    }}
                  >
                    3
                  </p>
                  <h3>Confira seus Produtos</h3>
                </div>
                {datacarrinho.map((item) => {
                  return (
                    <div key={item.cor} className="box-item-carrinho">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          height: "100%",
                          gap: "20px",
                        }}
                      >
                        <img src={item.imgurl}></img>
                        <div className="box-info-qtd-cor">
                          <h2>{item.modelo}</h2>
                          {item.promocao == true ? (
                            <p style={{ color: "green", fontSize: "13px" }}>
                              {item.desconto}% de desconto na compra de{" "}
                              {item.qtdpromocao} peças!
                            </p>
                          ) : (
                            ""
                          )}
                          <div className="qtd-cor">
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "3px",
                              }}
                            >
                              <button
                                onClick={() => subitem(item)}
                                className="btn-qtd-carrinho"
                              >
                                -
                              </button>
                              <span id="qtdview">{item.quantidade}</span>
                              <button
                                onClick={() => additem(item)}
                                className="btn-qtd-carrinho"
                              >
                                +
                              </button>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "3px",
                              }}
                            >
                              <p className="style-tamanho-cor">
                                {item.tamanho}
                              </p>
                              <div
                                style={{
                                  background: item.cor,
                                  width: "30px",
                                  height: "30px",
                                  border: "1px solid black",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="precocarrinho">
                        <h3>
                          {parseFloat(item.valorTotal).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </h3>
                        <button onClick={() => removeitem(item)}>
                          Remover
                        </button>
                      </div>
                    </div>
                  );
                })}
                <div className="box-total">
                  <div className="cupom">
                    <div
                      style={{
                        width: "100%",
                        height: "40px",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        gap: "20px",
                      }}
                    >
                      <input placeholder="INSIRA SEU CUPOM"></input>
                      <button id="btnverificar">Verificar</button>
                    </div>
                    <div className="total-cupom">
                      <span>TOTAL COM CUPOM:</span>
                      <h2>
                        {datacarrinho.length == 0
                          ? "R$00,00"
                          : parseFloat(valorfinal).toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })}
                      </h2>
                    </div>
                  </div>
                  <div className="subtotal">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                      }}
                    >
                      <h2
                        style={
                          (datacarrinho.some((item) => item.promocao) == true &&
                            datacarrinho.some(
                              (item) => item.quantidade >= item.qtdpromocao
                            )) ||
                          somaqtd >=
                            datacarrinho.map((item) => item.qtdpromocao)[0] ||
                          datacarrinho.length >=
                            datacarrinho.map((item) => item.qtdpromocao)[0]
                            ? {
                                color: "green",
                                fontSize: "14px",
                                background: "rgb(149, 255, 149)",
                                padding: "5px",
                                borderRadius: "5px",
                              }
                            : {
                                color: "green",
                                fontSize: "14px",
                                background: "transparent",
                                padding: "5px",
                                borderRadius: "5px",
                              }
                        }
                      >
                        {datacarrinho.length == 0
                          ? "R$00,00"
                          : (datacarrinho.some((item) => item.promocao) ==
                              true &&
                              datacarrinho.some(
                                (item) => item.quantidade >= item.qtdpromocao
                              )) ||
                            somaqtd >=
                              datacarrinho.map((item) => item.qtdpromocao)[0] ||
                            datacarrinho.length >=
                              datacarrinho.map((item) => item.qtdpromocao)[0]
                          ? `Você ganhou ${itemclicado}% de desconto em sua compra, Aproveite agora! `
                          : ""}
                      </h2>

                      {verificafrete ? (
                        <p style={{ color: "green", fontSize: "12px" }}>
                          {parseFloat(
                            valorfinal - parseFloat(frete)
                          ).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          }) +
                            " + " +
                            "frete: " +
                            "R$" +
                            frete.toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            }) +
                            " = " +
                            parseFloat(valorfinal).toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <h2>
                      SUB-TOTAL:{" "}
                      {parseFloat(valorfinal).toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}{" "}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      <div className="container-itens-nocarrinho">
        <div
          style={
            window.screen.width > 500
              ? {
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                  gap: "20px",
                }
              : {
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  gap: "20px",
                }
          }
        >
          <div className="box-item">
            {datacarrinho.map((item) => {
              return (
                <div key={item.cor} className="box-item-carrinho">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                      gap: "20px",
                    }}
                  >
                    <img src={item.imgurl}></img>
                    <div className="box-info-qtd-cor">
                      <h2>{item.modelo}</h2>
                      {item.promocao == true ? (
                        <p style={{ color: "green", fontSize: "13px" }}>
                          {item.desconto}% de desconto na compra de{" "}
                          {item.qtdpromocao} peças!
                        </p>
                      ) : (
                        ""
                      )}
                      <div className="qtd-cor">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "3px",
                          }}
                        >
                          <button
                            onClick={() => subitem(item)}
                            className="btn-qtd-carrinho"
                          >
                            -
                          </button>
                          <span id="qtdview">{item.quantidade}</span>
                          <button
                            onClick={() => additem(item)}
                            className="btn-qtd-carrinho"
                          >
                            +
                          </button>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "3px",
                          }}
                        >
                          <p className="style-tamanho-cor">{item.tamanho}</p>
                          <div
                            style={{
                              background: item.cor,
                              width: "30px",
                              height: "30px",
                              border: "1px solid black",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="precocarrinho">
                    <h3>
                      {parseFloat(item.valorTotal).toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </h3>
                    <button onClick={() => removeitem(item)}>Remover</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="box-total">
          <div className="cupom">
            <div
              style={{
                width: "100%",
                height: "40px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <input placeholder="INSIRA SEU CUPOM"></input>
              <button id="btnverificar">Verificar</button>
            </div>
            <div className="total-cupom">
              <span>TOTAL COM CUPOM:</span>
              <h2>
                {datacarrinho.length == 0
                  ? "R$00,00"
                  : parseFloat(valorfinal).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
              </h2>
            </div>
          </div>
          <div className="subtotal">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <h2
                style={
                  (datacarrinho.some((item) => item.promocao) == true &&
                    datacarrinho.some(
                      (item) => item.quantidade >= item.qtdpromocao
                    )) ||
                  somaqtd >= datacarrinho.map((item) => item.qtdpromocao)[0] ||
                  datacarrinho.length >=
                    datacarrinho.map((item) => item.qtdpromocao)[0]
                    ? {
                        color: "green",
                        fontSize: "14px",
                        background: "rgb(149, 255, 149)",
                        padding: "5px",
                        borderRadius: "5px",
                      }
                    : {
                        color: "green",
                        fontSize: "14px",
                        background: "transparent",
                        padding: "5px",
                        borderRadius: "5px",
                      }
                }
              >
                {datacarrinho.length == 0
                  ? "R$00,00"
                  : (datacarrinho.some((item) => item.promocao) == true &&
                      datacarrinho.some(
                        (item) => item.quantidade >= item.qtdpromocao
                      )) ||
                    somaqtd >=
                      datacarrinho.map((item) => item.qtdpromocao)[0] ||
                    datacarrinho.length >=
                      datacarrinho.map((item) => item.qtdpromocao)[0]
                  ? `Desconto de ${itemclicado}% ativado! `
                  : ""}
              </h2>
              {verificafrete != true ? (
                <p
                  style={{
                    color: "green",
                    fontSize: "13px",
                    background: "rgb(149, 255, 149)",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  Frete Gratis
                </p>
              ) : (
                ""
              )}
              {verificafrete ? (
                <p style={{ color: "green", fontSize: "12px" }}>
                  {parseFloat(valorfinal - parseFloat(frete)).toLocaleString(
                    "pt-br",
                    { style: "currency", currency: "BRL" }
                  ) +
                    " + " +
                    "frete: " +
                    "R$" +
                    frete.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    }) +
                    " = " +
                    parseFloat(valorfinal).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                </p>
              ) : (
                ""
              )}
            </div>
            <h2>
              SUB-TOTAL:{" "}
              {parseFloat(valorfinal).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}{" "}
            </h2>
          </div>

          <div className="btn-forma-pgmt">
            <button onClick={nextStaps}>ESCOLHER FORMA DE PAGAMENTO</button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
