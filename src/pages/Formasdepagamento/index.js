import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import TitleFormasPagamento from "../../Components/TitleFormasPagamento";
import { toast } from "react-toastify";
import api2 from "../../services/api2";
import apidepagamento from "../../services/apiPagamento";
//IMPORT DE IMGS
import pix from "../../Assets/Image/pix.png";
import master from "../../Assets/Image/master.png";
import hiper from "../../Assets/Image/hiper.png";
import visa from "../../Assets/Image/visa.png";
import boleto from "../../Assets/Image/boleto.png";
import diners from "../../Assets/Image/diners.png";
import amex from "../../Assets/Image/amex.png";
import { AuthContext } from "../../Contexts/auth";

export default function Formasdepagamento() {
  const { usercliente } = useContext(AuthContext);

  const [pagamento, setPagamento] = useState("");
  const [showmodalcredito, setModalcredito] = useState(false);
  const [parcelamento, setParcelamento] = useState();
  const [valorfinal, setValorfinal] = useState();
  const [numerocartao, setNumerocartao] = useState("");
  const [datacarrinho, setDatacarrinho] = useState([]);
  const [tipocartao, setTipocartao] = useState();
  const [rua, setRua] = useState();
  const [estado, setEstado] = useState();
  const [cep, setCep] = useState();
  const [cidade, setCidade] = useState();
  const [nome, setNome] = useState();
  const [Telefone, setTelefone] = useState();
  const [numero, setNumero] = useState();
  const [cpf, setCpf] = useState();
  const [cvc, setCvc] = useState("");
  const [datanumero, setDatanumero] = useState("");
  const [brand, setBrand] = useState("");
  const [valor, setValor] = useState("");
  const [parcelas, setParcelas] = useState("");
  const [datacard, setDatacard] = useState("");
  const [modalpix, setModalpix] = useState(false);
  const [modalpaicards, setModalpaicards] = useState(true);
  const [imgqrcode, setImgqrcode] = useState(false);
  const [baseqr, setBaseqr] = useState("");
  const [resultapi, setResultapi] = useState([]);
  const [linkpix, setLinkpix] = useState("");
  const [pixmodalinput, setPixmodalinput] = useState(false);
  const [modalboleto, setModalboleto] = useState(false);
  // 00020101021226890014br.gov.bcb.pix2567qrcodes.cielo.com.br/pix-qr/v2/0e062665-13a7-4f6f-b285-c38d4f6769885204000053039865802BR5925LOVE ME DE BOM JARDIM COM6010BOM JARDIM62070503***6304CA02
  useEffect(() => {
    setValorfinal(JSON.parse(localStorage.getItem("valorfinalrr11")));

    setDatacarrinho(JSON.parse(localStorage.getItem("carrinhorr11") || "[]"));
  }, []);

  function formaescolhida() {
    if (
      pagamento == "master" ||
      pagamento == "visa" ||
      pagamento == "diners" ||
      pagamento == "amex" ||
      pagamento == "hiper"
    ) {
      setModalcredito(true);
      setModalpaicards(false);
    }

    if (pagamento == "pix") {
      setModalpix(true);
      setModalpaicards(false);
    }

    if (pagamento == "boleto") {
      setModalboleto(true);
      setModalpaicards(false);
    }
  }
  function copyfunction() {
    let btn = document.querySelector("#copy");
    btn.addEventListener("click", function (e) {
      let textArea = document.querySelector(".text");
      textArea.select();
      document.execCommand("copy");
    });
  }
  async function fazerpedidoboleto() {
    await apidepagamento
      .post("/1/sales/", {
        MerchantOrderId: "2014111706",
        Customer: {
          Name: "Comprador Teste Boleto",
          Identity: "1234567890",
          Address: {
            Street: "Avenida Marechal Câmara",
            Number: "160",
            Complement: "Sala 934",
            ZipCode: "22750012",
            District: "Centro",
            City: "Rio de Janeiro",
            State: "RJ",
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
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function fazerpedidopix() {
    await apidepagamento
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
        console.log(resultapi.ReturnMessage);
        console.log(result.data.Payment.QrCodeString);
        setLinkpix(result.data.Payment.QrCodeString);
        setPixmodalinput(true);

        // console.log(result.data.Payment.QrCodeBase64Image);
        // setBaseqr(result.data.Payment.QrCodeBase64Image);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function fazerpedido() {
    const data = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
    const hora = `${new Date().getHours()}:${new Date().getMinutes()}`;
    // await apidepagamento
    //   .post("/1/sales/", {
    //     MerchantOrderId: "2014113245231706",
    //     Customer: {
    //       Name: usercliente.nome,
    //     },
    //     Payment: {
    //       Type: "CreditCard",
    //       Amount: 0.1,
    //       Installments: 1,
    //       SoftDescriptor: "123456789ABCD",
    //       Recurrent: true,
    //       CreditCard: {
    //         CardNumber: numerocartao,
    //         Holder: "Teste Holder",
    //         ExpirationDate: "03/2030",
    //         SecurityCode: String(cvc),
    //         SaveCard: "false",
    //         Brand: "Master",
    //       },
    //     },
    //   })

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
          Installments: parcelamento,
          Interest: "ByMerchant",
          Capture: true,
          Authenticate: "false",
          Recurrent: "false",
          SoftDescriptor: "123456789ABCD",
          CreditCard: {
            CardNumber: numerocartao,
            Holder: nome,
            ExpirationDate: datacard,
            SecurityCode: cvc,
            SaveCard: "false",
            Brand: "Master",
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
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });

    // await api2
    //   .post("/pedidos", {
    //     headers: {
    //       Authorization: "Access-Control-Allow-Origin",
    //       "Content-type": "application/json",
    //     },
    //     idpedido: `${Math.floor(Math.random() * 1000)}`,
    //     uid: usercliente.uid,
    //     nomecliente: nome,
    //     cpf: cpf,
    //     telefone: Telefone,
    //     cep: cep,
    //     endereco: rua,
    //     numero: numero,
    //     data: data,
    //     hora: hora,
    //     produto: {
    //       modelo: `${datacarrinho.map(
    //         (modelo) => modelo.modelo + " " + "Qtd:" + modelo.quantidade
    //       )}`,
    //     },
    //     parcelas: parcelamento,
    //     valor: valorfinal,
    //     status: "Preparando seu pedido",
    //   })
    //   .then(() => {
    //     toast.success(
    //       "Pedido realizado com sucesso, verifique o status na area do cliente!"
    //     );
    //     setTimeout(() => {
    //       window.location.href = "/minhaconta";
    //     }, 2000);
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
  }
  return (
    <div>
      <Header back="#121212"></Header>
      <div className="container-Formas-pagamento">
        {modalpaicards == true ? (
          <div className="box-formas-pagamento">
            <TitleFormasPagamento name="ESCOLHA A FORMA DE PAGAMENTO"></TitleFormasPagamento>
            <div className="tipo-pagamento">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "absolute",
                  left: "30px",
                }}
              >
                <input
                  onChange={(e) => setPagamento(e.target.value)}
                  name="formapagamento"
                  value="pix"
                  type="radio"
                ></input>
                <img className="icon-pagamento" src={pix}></img>
              </div>
              <div>
                <h2>PIX</h2>
              </div>
            </div>
            <div className="tipo-pagamento">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "absolute",
                  left: "30px",
                }}
              >
                <input
                  onChange={(e) => setPagamento(e.target.value)}
                  name="formapagamento"
                  value="boleto"
                  type="radio"
                ></input>
                <img className="icon-pagamento" src={boleto}></img>
              </div>
              <div>
                <h2>Boleto</h2>
              </div>
            </div>
            <div className="tipo-pagamento">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "absolute",
                  left: "30px",
                }}
              >
                <input
                  onChange={(e) => setPagamento(e.target.value)}
                  name="formapagamento"
                  value="master"
                  type="radio"
                ></input>
                <img className="icon-pagamento" src={master}></img>
              </div>
              <div>
                <h2>MasterCard</h2>
              </div>
            </div>
            <div className="tipo-pagamento">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "absolute",
                  left: "30px",
                }}
              >
                <input
                  onChange={(e) => setPagamento(e.target.value)}
                  name="formapagamento"
                  value="visa"
                  type="radio"
                ></input>
                <img className="icon-pagamento" src={visa}></img>
              </div>
              <div>
                <h2>Visa</h2>
              </div>
            </div>
            <div className="tipo-pagamento">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "absolute",
                  left: "30px",
                }}
              >
                <input
                  onChange={(e) => setPagamento(e.target.value)}
                  name="formapagamento"
                  value="hiper"
                  type="radio"
                ></input>
                <img className="icon-pagamento" src={hiper}></img>
              </div>
              <div>
                <h2>Hipercard</h2>
              </div>
            </div>
            <div className="tipo-pagamento">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "absolute",
                  left: "30px",
                }}
              >
                <input
                  onChange={(e) => setPagamento(e.target.value)}
                  name="formapagamento"
                  value="amex"
                  type="radio"
                ></input>
                <img className="icon-pagamento" src={amex}></img>
              </div>
              <div>
                <h2>American Express</h2>
              </div>
            </div>
            <div className="tipo-pagamento">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "absolute",
                  left: "30px",
                }}
              >
                <input
                  onChange={(e) => setPagamento(e.target.value)}
                  name="formapagamento"
                  value="diners"
                  type="radio"
                ></input>
                <img className="icon-pagamento" src={diners}></img>
              </div>
              <div>
                <h2>Diners Club</h2>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {modalpix != false ? (
          <div className="box-formas-pagamento">
            <TitleFormasPagamento name="DADOS DO CARTÃO"></TitleFormasPagamento>

            <div id="text-sucess-pix">{resultapi.ReturnMessage}</div>
            {pixmodalinput != false ? (
              <div id="input-link-pix">
                <input type="text" value={linkpix} className="text" />{" "}
                <button onClick={copyfunction} id="copy">
                  copy
                </button>
              </div>
            ) : (
              ""
            )}
            {/* {imgqrcode != false ? (
              <img id="baseqr" src={baseqr} alt="" srcset="" />
            ) : (
              ""
            )} */}

            <div className="form-cartao">
              <div className="input-numero-nome">
                <input
                  onChange={(e) => setNome(e.target.value)}
                  type="text"
                  placeholder="Nome Completo"
                ></input>
                <input
                  onChange={(e) => setCpf(e.target.value)}
                  type="text"
                  placeholder="Cpf"
                ></input>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {modalboleto != false ? (
          <div className="box-formas-pagamento">
            <TitleFormasPagamento name="DADOS DO CARTÃO"></TitleFormasPagamento>

            <div id="text-sucess-pix">{resultapi.ReturnMessage}</div>
            {pixmodalinput != false ? (
              <div id="input-link-pix">
                <input type="text" value={linkpix} className="text" />{" "}
                <button onClick={copyfunction} id="copy">
                  copy
                </button>
              </div>
            ) : (
              ""
            )}
            {/* {imgqrcode != false ? (
              <img id="baseqr" src={baseqr} alt="" srcset="" />
            ) : (
              ""
            )} */}

            <div className="form-cartao">
              <div className="input-numero-nome">
                <input
                  onChange={(e) => setNome(e.target.value)}
                  type="text"
                  placeholder="Nome Completo"
                ></input>
                <input
                  onChange={(e) => setCpf(e.target.value)}
                  type="text"
                  placeholder="CPF"
                ></input>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {showmodalcredito != false ? (
          <div className="modal-cartao-credito">
            <TitleFormasPagamento name="DADOS DO CARTÃO"></TitleFormasPagamento>
            <div className="form-cartao">
              <div className="input-numero-nome">
                <input
                  onChange={(e) => setNumerocartao(e.target.value)}
                  type="text"
                  placeholder="Número do Cartão"
                ></input>
                <input
                  onChange={(e) => setNome(e.target.value)}
                  type="text"
                  placeholder="Nome Completo"
                ></input>
                <input
                  onChange={(e) => setCpf(e.target.value)}
                  type="text"
                  placeholder="CPF"
                ></input>
              </div>
              <div className="input-numero-nome">
                <input value={pagamento} type="text"></input>
              </div>
              <div className="input-data-cvv">
                <input
                  type="text"
                  placeholder="Data de validade ex: 05/2026"
                  value={datacard}
                  onChange={(e) => {
                    setDatacard(e.target.value);
                  }}
                ></input>
                <input
                  type="text"
                  placeholder="CVV"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                ></input>
              </div>
              <div className="title-parcelamento">
                <h2>Crédito ou Débito</h2>
                <select
                  id="select-parcelas"
                  onChange={(e) => setTipocartao(e.target.value)}
                >
                  <option>...</option>
                  <option value="CreditCard">Cartão de Crédito</option>
                  <option value="Debtcard">Cartão de Débito</option>
                </select>
              </div>
              {tipocartao == "CreditCard" ? (
                <div className="title-parcelamento">
                  <h2>Parcelamento</h2>
                  <select
                    id="select-parcelas"
                    onChange={(e) => setParcelamento(e.target.value)}
                  >
                    <option value="...">...</option>
                    <option value={1}>
                      1x R${parseFloat(valorfinal / 1).toFixed(2)}
                    </option>
                    <option value={2}>
                      2x R${parseFloat(valorfinal / 2).toFixed(2)}
                    </option>
                    <option value={3}>
                      3x R${parseFloat(valorfinal / 3).toFixed(2)}
                    </option>
                    <option value={4}>
                      4x R${parseFloat(valorfinal / 4).toFixed(2)}
                    </option>
                    <option value={5}>
                      5x R${parseFloat(valorfinal / 5).toFixed(2)}
                    </option>
                    <option value={6}>
                      6x R${parseFloat(valorfinal / 6).toFixed(2)}
                    </option>
                    <option value={7}>
                      7x R${parseFloat(valorfinal / 7).toFixed(2)}
                    </option>
                  </select>
                </div>
              ) : (
                ""
              )}

              <div className="input-data-cvv">
                <input
                  onChange={(e) => setTelefone(e.target.value)}
                  type="text"
                  placeholder="Telefone"
                ></input>
                <input
                  onChange={(e) => setCep(e.target.value)}
                  type="text"
                  placeholder="CEP"
                ></input>
              </div>
              <div className="input-data-cvv">
                <input
                  onChange={(e) => setCidade(e.target.value)}
                  type="text"
                  placeholder="Cidade"
                ></input>
                <input
                  onChange={(e) => setEstado(e.target.value)}
                  type="text"
                  placeholder="Estado"
                ></input>
              </div>
              <div className="input-data-cvv">
                <input
                  onChange={(e) => setRua(e.target.value)}
                  type="text"
                  placeholder="Rua"
                ></input>
                <input
                  onChange={(e) => setNumero(e.target.value)}
                  type="text"
                  placeholder="Número"
                ></input>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="conatiner-details-pedido">
          <span>Detalhes do pedido</span>
          {datacarrinho.map((modelo) => {
            return (
              <h3>
                - {modelo.modelo} Qtd: {modelo.quantidade} cor:{" "}
                <div
                  style={{
                    background: modelo.cor,
                    width: "15px",
                    height: "15px",
                  }}
                ></div>
              </h3>
            );
          })}
          <p>Dados pagamento: </p>
          <h4>
            Cartao {pagamento} final:{numerocartao.slice(11)}
          </h4>
          {tipocartao == "CreditCard" ? <h4>Parcelas: {parcelamento}</h4> : ""}
          <h2>Total: R${parseFloat(valorfinal).toFixed(2)}</h2>
          <p>Dados entrega: </p>
          <h3>
            Endereço: {rua} n°{numero}
          </h3>
          <h3>CEP: {cep}</h3>
          <h3>Estado: {cidade}</h3>
        </div>
        {showmodalcredito != false ? (
          <button className="finalizarcompra" onClick={fazerpedido}>
            FINALIZAR COMPRA
          </button>
        ) : (
          ""
        )}

        {modalpix != false ? (
          <button className="finalizarcompra" onClick={fazerpedidopix}>
            FINALIZAR COMPRA
          </button>
        ) : (
          ""
        )}

        {modalboleto != false ? (
          <button className="finalizarcompra" onClick={fazerpedidoboleto}>
            FINALIZAR COMPRA
          </button>
        ) : (
          ""
        )}
        {modalpaicards == true ? (
          <div className="btncontinuar">
            <button onClick={formaescolhida}>Continuar</button>
          </div>
        ) : (
          ""
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}
