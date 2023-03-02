import React, { useContext, useEffect, useState } from "react";
import "./minhaconta.css";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Titlemainallpages from "../../Components/Titlemainallpages";
import { AuthContext } from "../../Contexts/auth";
import firebase from "../../services/firebaseconnection";
import { toast } from "react-toastify";
import api from "../../services/api";
import api2 from "../../services/api2";
import { FiEdit, FiTrash } from "react-icons/fi";

export default function Minhaconta() {
  const { usercliente, setUsercliente } = useContext(AuthContext);

  const [modaladdcomentarios, setModaladdcomentarios] = useState(false);
  const [listadesejosview, setListadesejosview] = useState(false);
  const [pedidosview, setPedidosview] = useState(true);
  const [devolucoesview, setDevolucoesview] = useState(false);
  const [meusdados, setMeusdadosview] = useState(false);
  const [cartoes, setCartoes] = useState(false);
  const [favoritosdata, setFavoritosdata] = useState([]);
  const [formcartaoview, setFormcartaoview] = useState(false);
  const [formcartaoview2, setFormcartaoview2] = useState(false);
  const [cartoesuser, setCartoesuser] = useState([]);
  const [idcartao, setIdcartao] = useState("");
  const [pedidos, setPedidos] = useState([]);
  //const [datalocalstorage, setDatalocalstorage] = useState([])

  const [alteranome, setAlteranome] = useState("");
  const [alterasobrenome, setAlterasobrenome] = useState("");
  const [alteraemail, setAlteraemail] = useState("");
  const [alteratelefone, setAlteratelefone] = useState("");
  const [alteradatanascimento, setAlteradatanascimento] = useState("");
  const [alterasenha, setAlterasenha] = useState("");
  const [alterasexo, setAlterasexo] = useState("");
  const [alteracep, setAlteracep] = useState("");
  const [alteraendereco, setAlteraendereco] = useState("");
  const [alteranumero, setAlteranumero] = useState("");
  const [alteracomplemento, setAlteracomplemento] = useState("");
  const [alterabairro, setAlterabairro] = useState("");
  const [alterapais, setAlterapais] = useState("");
  const [alteracidade, setAlteracidade] = useState("");
  const [alteraestado, setAlteraestado] = useState("");
  const [alteracep2, setAlteracep2] = useState("");
  const [alteraendereco2, setAlteraendereco2] = useState("");
  const [alteranumero2, setAlteranumero2] = useState("");
  const [alteracomplemento2, setAlteracomplemento2] = useState("");
  const [alterabairro2, setAlterabairro2] = useState("");
  const [alterapais2, setAlterapais2] = useState("");
  const [alteracidade2, setAlteracidade2] = useState("");
  const [alteraestado2, setAlteraestado2] = useState("");
  const [senhaverificacao, setSenhaverificacao] = useState("");
  const [senhaverificacao2, setSenhaverificacao2] = useState("");
  const [numerocartao, setNumerocartao] = useState("");
  const [datavalidade, setDatavalidade] = useState("");
  const [bandeira, setBandeira] = useState("");
  const [nomefeddback, setNomefeddback] = useState("");
  const [textofeedback, setTextofeedback] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //setUsercliente(JSON.parse(localStorage.getItem('sessaocliente')))
    if (JSON.parse(localStorage.getItem("sessaocliente")) === null) {
      window.location.href = "/login";
      return;
    }

    const uiduser = JSON.parse(localStorage.getItem("sessaouser") || "[]");
    const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");

    if (uiduser === "") {
      window.location.href = "/";
      return;
    }

    let filtro = favoritos.filter((item) => {
      return item.uid == uiduser.cpf;
    });
    setFavoritosdata(filtro);

    //setDatalocalstorage(JSON.parse(localStorage.getItem('sessaouser') || '[]'))

    const cpfuser = JSON.parse(localStorage.getItem("sessaocliente") || "[]");

    async function loadcardsuser() {
      await api2.get(`cpf?cpf=${cpfuser.cpf}`).then((data) => {
        setCartoesuser(data.data);
      });
    }
    // console.log(cpfuser.cpf)

    api2.get(`/pedidos/uid?uid=${cpfuser.uid}`).then((data) => {
      setPedidos(data.data);
    });
    console.log(pedidos);

    loadcardsuser();
  }, []);

  function verlistadesejos() {
    setListadesejosview(true);
    setPedidosview(false);
    setDevolucoesview(false);
    setMeusdadosview(false);
    setCartoes(false);
    setModaladdcomentarios(false);
  }
  function vermeuspedidos() {
    setPedidosview(true);
    setListadesejosview(false);
    setDevolucoesview(false);
    setMeusdadosview(false);
    setCartoes(false);
    setModaladdcomentarios(false);
  }
  function verminhasdevolucoes() {
    setDevolucoesview(true);
    setPedidosview(false);
    setListadesejosview(false);
    setMeusdadosview(false);
    setCartoes(false);
    setModaladdcomentarios(false);
  }
  function vermeusdados() {
    setMeusdadosview(true);
    setDevolucoesview(false);
    setPedidosview(false);
    setListadesejosview(false);
    setCartoes(false);
    setModaladdcomentarios(false);
  }
  function vremeuscartoes() {
    setCartoes(true);
    setMeusdadosview(false);
    setDevolucoesview(false);
    setPedidosview(false);
    setListadesejosview(false);
    setModaladdcomentarios(false);
  }
  function vermodalcomentarios() {
    setModaladdcomentarios(true);
    setCartoes(false);
    setMeusdadosview(false);
    setDevolucoesview(false);
    setPedidosview(false);
    setListadesejosview(false);
  }

  async function alterardados() {
    if (senhaverificacao === "") {
      toast.error("Informe sua senha!");
      return;
    }
    if (
      alteranome == "" &&
      alterasobrenome == "" &&
      alteraemail == "" &&
      alteratelefone == "" &&
      alterasexo == "" &&
      alteradatanascimento == "" &&
      alteracep == "" &&
      alterabairro == "" &&
      alteraendereco == "" &&
      alteracomplemento == "" &&
      alteraestado == "" &&
      alteranumero == "" &&
      alterapais == "" &&
      alteracidade == ""
    ) {
      toast.error("Preencha todos os campos!");
      return;
    }
    setLoading(true);

    await firebase
      .auth()
      .signInWithEmailAndPassword(usercliente.email, senhaverificacao)
      .then(function (userCredential) {
        userCredential.user.updateEmail(alteraemail);
      });

    await firebase
      .firestore()
      .collection("clientes")
      .doc(usercliente.uid)
      .update({
        datanascimento: alteradatanascimento,
        sexo: alterasexo,
        nome: alteranome,
        sobrenome: alterasobrenome,
        email: alteraemail,
        telefone: alteratelefone,
        cep: alteracep,
        endereco: alteraendereco,
        numero: alteranumero,
        Complemento: alteracomplemento,
        bairro: alterabairro,
        pais: alterapais,
        cidade: alteracidade,
        estado: alteraestado,
        cep2: alteracep2,
        endereco2: alteraendereco2,
        numero2: alteranumero2,
        Complemento2: alteracomplemento2,
        bairro2: alterabairro2,
        pais2: alterapais2,
        cidade2: alteracidade2,
        estado2: alteraestado2,
        imgUrl: null,
      })

      .then(async () => {
        let datauser = {
          uid: usercliente.uid,
          datanascimento: alteradatanascimento,
          sexo: alterasexo,
          nome: alteranome,
          sobrenome: alterasobrenome,
          email: alteraemail,
          telefone: alteratelefone,
          cep: alteracep,
          endereco: alteraendereco,
          numero: alteranumero,
          Complemento: alteracomplemento,
          bairro: alterabairro,
          pais: alterapais,
          cidade: alteracidade,
          estado: alteraestado,
          cep2: alteracep2,
          endereco2: alteraendereco2,
          numero2: alteranumero2,
          Complemento2: alteracomplemento2,
          bairro2: alterabairro2,
          pais2: alterapais2,
          cidade2: alteracidade2,
          estado2: alteraestado2,
          imgUrl: null,
        };
        setUsercliente(datauser);
        localStorage.setItem("sessaouser", JSON.stringify(datauser));

        toast.success("Dados alterados com sucesso");
        setLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function alterarsenha() {
    if (senhaverificacao2 === "" && alterasenha == "") {
      toast.error("Informe sua senha!");
      return;
    }
    setLoading(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(usercliente.email, senhaverificacao2)
      .then(function (userCredential2) {
        userCredential2.user.updatePassword(alterasenha);

        toast.success("Senha alterada!");
        setLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch(() => {
        setLoading(false);
        toast.error("senha inválida!");
      });
    await firebase
      .firestore()
      .collection("clientes")
      .doc(usercliente.uid)
      .update({
        senha: alterasenha,
      });
  }

  function formcartao() {
    setFormcartaoview(true);
  }

  async function salvarcartao() {
    if (cartoesuser.length === 4) {
      toast.error("Limite de cartões atingido");
      return;
    }
    await api2
      .post("/cartoes", {
        numero: numerocartao,
        datavalidade: datavalidade,
        bandeira: bandeira,
        cpf: usercliente.cpf,
      })
      .then(() => {
        toast.success("Cartão adicionado com sucesso!");
        setFormcartaoview(false);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      });
  }

  function editarcartao(_id) {
    setFormcartaoview2(true);
    setIdcartao(_id);
    console.log(idcartao);
  }
  async function deletarcartao(_id) {
    await api2.delete(`/cartoes/${_id}`).then(() => {
      toast.success("Cartão excluido com sucesso");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    });
  }

  async function salvarcartao2() {
    await api2
      .put(`/cartoes/${idcartao}`, {
        numero: numerocartao,
        datavalidade: datavalidade,
        bandeira: bandeira,
        cpf: usercliente.cpf,
      })
      .then(() => {
        setTimeout(() => {
          toast.success("Cartão atualizado com sucesso!");
          window.location.reload();
        }, 1500);
      });
  }

  function deletarfavorito(_id) {
    const itemFavoritos = JSON.parse(localStorage.getItem("favoritos")) || "[]";

    let filtro = itemFavoritos.filter((item) => {
      return item._id != _id;
    });
    localStorage.setItem("favoritos", JSON.stringify(filtro));
    window.location.reload();
  }

  async function delpedido(_id) {
    await api2.delete(`/pedidos/${_id}`).then(() => {
      toast.success("Pedido excluido!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }

  async function updatestatus(item) {
    await api2
      .put(`/pedidos/${item.idpedido}`, {
        idpedido: item.idpedido,
        nomecliente: item.nomecliente,
        uid: item.uid,
        cpf: item.cpf,
        produto: {
          modelo: String(item.produto.modelo),
        },
        endereco: item.endereco,
        cep: item.cep,
        data: item.data,
        hora: item.hora,
        status: "Pacote recebido",
      })
      .then(() => {
        toast.success(`Pedido ${item.idpedido} recebido!`);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
  }

  function mostraformcartao() {
    setFormcartaoview(true);
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
        liberar: "reprovado",
        data: `${new Date().getDate() + "/" + new Date().getMonth()}`,
      })
      .then(() => {
        toast.success("Feedback enviado com sucesso!");
        setTextofeedback("");
        setNomefeddback("");
      });
  }

  return (
    <div className="container-minhaconta">
      <Header back="#de4563"></Header>
      <Titlemainallpages name="MINHA CONTA"></Titlemainallpages>
      <div className="content-minhaconta">
        <div className="btn-options">
          <button className="btnoption" onClick={verlistadesejos}>
            Lista de desejos
          </button>
          <button className="btnoption" onClick={vermeuspedidos}>
            Meus pedidos
          </button>
          <button className="btnoption" onClick={verminhasdevolucoes}>
            Minhas devoluções
          </button>
          <button className="btnoption" onClick={vermeusdados}>
            Meus dados
          </button>
          <button className="btnoption" onClick={vremeuscartoes}>
            Meus cartões
          </button>
          <button className="btnoption" onClick={vermodalcomentarios}>
            Feedback's
          </button>
        </div>
        {listadesejosview != false ? (
          <div className="container-content-btns">
            <div className="titlemenuminhaconta">
              <h2>Lista de desejos:</h2>
            </div>
            {favoritosdata.length == 0 ? (
              <p>Sua lista de desejos está vazia!</p>
            ) : (
              <div className="container-fav-item">
                {favoritosdata.map((item) => {
                  return (
                    <div className="item-favoritos" key={item._id}>
                      <img
                        onClick={() =>
                          (window.location.href = `/PaginaProduto/${item._id}`)
                        }
                        src={item.imgurl}
                      ></img>
                      <span>{item.marca}</span>
                      <span>{item.modelo}</span>
                      <p>{item.descricao}</p>
                      <button
                        id="del-favorito"
                        onClick={() => deletarfavorito(item._id)}
                      >
                        Excluir
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          ""
        )}
        {pedidosview != false ? (
          <div className="container-content-btns">
            <div className="titlemenuminhaconta">
              <h2>Meus pedidos:</h2>
            </div>
            {pedidos.length == 0 ? (
              <p>Sua lista de pedidos está vazia!</p>
            ) : (
              pedidos.map((item) => {
                return (
                  <div key={item._id} className="box-pedidos">
                    <p>id pedido: {item.idpedido}</p>
                    <strong style={{ textOrientation: "mixed" }}>
                      Produto: {item.produto.modelo}
                    </strong>
                    <span>
                      Data do pedido: {item.data} as {item.hora}hrs
                    </span>
                    <span>
                      Endereço: {item.endereco} {item.complemento}, cep:{" "}
                      {item.cep}
                    </span>

                    {item.status === "Preparando seu pedido" ? (
                      <span
                        style={{
                          background: "yellow",
                          maxWidth: "250px",
                          padding: "4px",
                          borderRadius: "4px",
                        }}
                      >
                        status: {item.status}
                      </span>
                    ) : item.status === "Pacote enviado" ? (
                      <span
                        style={{
                          background: "blue",
                          maxWidth: "250px",
                          padding: "4px",
                          borderRadius: "4px",
                        }}
                      >
                        status: {item.status}
                      </span>
                    ) : item.status === "Pacote recebido" ? (
                      <span
                        style={{
                          background: "green",
                          maxWidth: "250px",
                          padding: "4px",
                          borderRadius: "4px",
                        }}
                      >
                        status: {item.status}
                      </span>
                    ) : (
                      ""
                    )}

                    {item.codrastreio == "" ? (
                      <p>Aguardando código de rastreio...</p>
                    ) : (
                      <span>
                        Código de Rastreio: {item.codrastreio}{" "}
                        <a
                          target="blank"
                          href="https://rastreamento.correios.com.br/app/index.php"
                        >
                          Ir para o site dos Correios
                        </a>
                      </span>
                    )}

                    <button
                      id="btn-recebimeupedido"
                      onClick={() => updatestatus(item)}
                    >
                      Recebi meu pedido!
                    </button>
                    <hr style={{ marginTop: "10px" }}></hr>
                  </div>
                );
              })
            )}
          </div>
        ) : (
          ""
        )}
        {devolucoesview != false ? (
          <div className="container-content-btns">
            <div className="titlemenuminhaconta">
              <h2>Minhas Devoluções:</h2>
            </div>
          </div>
        ) : (
          ""
        )}
        {meusdados != false ? (
          <div className="container-content-btns">
            <div className="titlemenuminhaconta">
              <h2>Meus Dados:</h2>
            </div>
            <div className="inputareameusdados">
              <div className="labelarea">
                <label>Nome</label>
                <input
                  onChange={(e) => setAlteranome(e.target.value)}
                  placeholder={usercliente.nome}
                  type="text"
                ></input>
              </div>
              <div className="labelarea">
                <label>Sobrenome</label>
                <input
                  onChange={(e) => setAlterasobrenome(e.target.value)}
                  placeholder={usercliente.sobrenome}
                  type="text"
                ></input>
              </div>
            </div>
            <div className="inputareameusdados">
              <div className="labelarea">
                <label>E-mail</label>
                <input
                  onChange={(e) => setAlteraemail(e.target.value)}
                  placeholder={usercliente.email}
                  type="text"
                ></input>
              </div>
              <div className="labelarea">
                <label>Telefone</label>
                <input
                  onChange={(e) => setAlteratelefone(e.target.value)}
                  placeholder={usercliente.telefone}
                  type="tel"
                ></input>
              </div>
            </div>

            <div className="inputareameusdados">
              <div className="labelarea">
                <label>Data de nascimento:</label>
                <input
                  onChange={(e) => setAlteradatanascimento(e.target.value)}
                  placeholder={usercliente.datanascimento}
                  type="date"
                ></input>
              </div>
              <div className="labelarea">
                <label>Sexo</label>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      value="masculino"
                      onChange={(e) => setAlterasexo(e.target.value)}
                      type="radio"
                    ></input>
                    <label>Masculino</label>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      value="feminino"
                      onChange={(e) => setAlterasexo(e.target.value)}
                      type="radio"
                    ></input>
                    <label>Feminino</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="inputareameusdados">
              <div className="labelarea">
                <label>Endereço</label>
                <input
                  onChange={(e) => setAlteraendereco(e.target.value)}
                  placeholder={usercliente.endereco}
                  type="text"
                ></input>
              </div>
              <div className="labelarea">
                <label>Complemento</label>
                <input
                  onChange={(e) => setAlteracomplemento(e.target.value)}
                  placeholder={usercliente.Complemento}
                  type="text"
                ></input>
              </div>
              <div className="labelarea">
                <label>Bairro</label>
                <input
                  onChange={(e) => setAlterabairro(e.target.value)}
                  placeholder={usercliente.bairro}
                  type="text"
                ></input>
              </div>
            </div>
            <div className="inputareameusdados">
              <div className="labelarea">
                <label>Cep</label>
                <input
                  onChange={(e) => setAlteracep(e.target.value)}
                  placeholder={usercliente.cep}
                  type="number"
                ></input>
              </div>
              <div className="labelarea">
                <label>Numero</label>
                <input
                  onChange={(e) => setAlteranumero(e.target.value)}
                  placeholder={usercliente.numero}
                  type="text"
                ></input>
              </div>
              <div className="labelarea">
                <label>Cidade</label>
                <input
                  onChange={(e) => setAlteracidade(e.target.value)}
                  placeholder={usercliente.cidade}
                  type="text"
                ></input>
              </div>
              <div className="labelarea">
                <label>Estado</label>
                <input
                  onChange={(e) => setAlteraestado(e.target.value)}
                  placeholder={usercliente.estado}
                  type="text"
                ></input>
              </div>
              <div className="labelarea">
                <label>Pais</label>
                <input
                  onChange={(e) => setAlterapais(e.target.value)}
                  placeholder={usercliente.pais}
                  type="text"
                ></input>
              </div>
            </div>
            <div className="titlemenuminhaconta">
              <h2>Endereço 2</h2>
            </div>
            <div className="inputareameusdados">
              <div className="labelarea">
                <label>Endereço</label>
                <input
                  onChange={(e) => setAlteraendereco2(e.target.value)}
                  placeholder={usercliente.endereco2}
                  type="text"
                ></input>
              </div>
              <div className="labelarea">
                <label>Complemento</label>
                <input
                  onChange={(e) => setAlteracomplemento2(e.target.value)}
                  placeholder={usercliente.Complemento2}
                  type="text"
                ></input>
              </div>
              <div className="labelarea">
                <label>Bairro</label>
                <input
                  onChange={(e) => setAlterabairro2(e.target.value)}
                  placeholder={usercliente.bairro2}
                  type="text"
                ></input>
              </div>
            </div>
            <div className="inputareameusdados">
              <div className="labelarea">
                <label>Cep</label>
                <input
                  onChange={(e) => setAlteracep2(e.target.value)}
                  placeholder={usercliente.cep2}
                  type="number"
                ></input>
              </div>
              <div className="labelarea">
                <label>Numero</label>
                <input
                  onChange={(e) => setAlteranumero2(e.target.value)}
                  placeholder={usercliente.numero2}
                  type="text"
                ></input>
              </div>
              <div className="labelarea">
                <label>Cidade</label>
                <input
                  onChange={(e) => setAlteracidade2(e.target.value)}
                  placeholder={usercliente.cidade2}
                  type="text"
                ></input>
              </div>
              <div className="labelarea">
                <label>Estado</label>
                <input
                  onChange={(e) => setAlteraestado2(e.target.value)}
                  placeholder={usercliente.estado2}
                  type="text"
                ></input>
              </div>
              <div className="labelarea">
                <label>Pais</label>
                <input
                  onChange={(e) => setAlterapais2(e.target.value)}
                  placeholder={usercliente.pais2}
                  type="text"
                ></input>
              </div>
            </div>
            <div className="inputareameusdados">
              <div className="labelarea">
                <label>Digite sua senha</label>
                <input
                  onChange={(e) => setSenhaverificacao(e.target.value)}
                  type="password"
                ></input>
              </div>
            </div>
            <div className="btn-salvar-area">
              <button onClick={alterardados}>Salvar</button>
            </div>

            <div className="titlemenuminhaconta">
              <h2>Alterar senha</h2>
            </div>
            <div className="inputareameusdados">
              <div className="labelarea">
                <label>Digite sua senha</label>
                <input
                  onChange={(e) => setSenhaverificacao2(e.target.value)}
                  type="password"
                ></input>
              </div>
              <div className="labelarea">
                <label>Nova senha</label>
                <input
                  onChange={(e) => setAlterasenha(e.target.value)}
                  type="password"
                ></input>
              </div>
            </div>
            <div className="btn-salvar-area">
              <button onClick={alterarsenha}>Alterar</button>
            </div>
          </div>
        ) : (
          ""
        )}
        {cartoes != false ? (
          <div className="container-content-btns">
            <div className="titlemenuminhaconta">
              <h2>Meus cartões:</h2>
            </div>
            {cartoesuser.length === 0 ? (
              <span>Nenhum cartao adicionado</span>
            ) : (
              cartoesuser.map((item) => {
                return (
                  <div className="card-caontainer" key={item._id}>
                    <span>{item.bandeira}</span>
                    <h2>{item.numero}</h2>
                    <span>{item.datavalidade}</span>
                    <div>
                      <button
                        id="editarcard"
                        onClick={() => editarcartao(item._id)}
                      >
                        <FiEdit size={20}></FiEdit>
                      </button>
                      <button
                        id="editarcard"
                        onClick={() => deletarcartao(item._id)}
                      >
                        <FiTrash size={20}></FiTrash>
                      </button>
                    </div>
                  </div>
                );
              })
            )}

            <div className="btn-salvar-area">
              <button onClick={mostraformcartao}>Adicionar</button>
            </div>
          </div>
        ) : (
          ""
        )}

        {modaladdcomentarios != false ? (
          <div className="modalcomentarios">
            <div className="titlemenuminhaconta">
              <h2>Feedback</h2>
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

      {formcartaoview != false ? (
        <div className="container-form-cartao-add">
          <div className="modal-form-cartao">
            <div className="titlemenuminhaconta">
              <button
                id="fecha-modal-cartao"
                onClick={() => setFormcartaoview(false)}
              >
                X
              </button>
              <h2>Adcionar cartão:</h2>
            </div>
            <div className="inputareameusdados">
              <div className="labelarea">
                <label>Numero do cartao</label>
                <input
                  onChange={(e) => setNumerocartao(e.target.value)}
                  type="text"
                ></input>
              </div>
            </div>
            <div className="inputareameusdados">
              <div className="labelarea">
                <label>Data de validade</label>
                <input
                  onChange={(e) => setDatavalidade(e.target.value)}
                  type="text"
                  placeholder="ex: 02/2025"
                ></input>
              </div>
            </div>
            <div className="inputareameusdados">
              <div className="labelarea">
                <label>Bandeira</label>
                <select onChange={(e) => setBandeira(e.target.value)}>
                  <option>selecione</option>
                  <option value="visa">Visa</option>
                  <option value="Master">Mastercard</option>
                  <option value="Amex">American Express</option>
                  <option value="Elo">Elo</option>
                  <option value="Diners">Diners club</option>
                </select>
              </div>
            </div>
            <div className="btn-salvar-area">
              <button onClick={salvarcartao}>Salvar</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {formcartaoview2 != false ? (
        <div className="container-form-cartao-add">
          <div className="modal-form-cartao">
            <div className="titlemenuminhaconta">
              <button
                id="fecha-modal-cartao"
                onClick={() => setFormcartaoview2(false)}
              >
                X
              </button>
              <h2>Atualizar cartão:</h2>
            </div>
            <div className="inputareameusdados">
              <div className="labelarea">
                <label>Numero do cartao</label>
                <input
                  onChange={(e) => setNumerocartao(e.target.value)}
                  type="text"
                ></input>
              </div>
            </div>
            <div className="inputareameusdados">
              <div className="labelarea">
                <label>Data de validade</label>
                <input
                  onChange={(e) => setDatavalidade(e.target.value)}
                  type="text"
                  placeholder="ex: 02/2025"
                ></input>
              </div>
            </div>
            <div className="inputareameusdados">
              <div className="labelarea">
                <label>Bandeira</label>
                <select onChange={(e) => setBandeira(e.target.value)}>
                  <option>selecione</option>
                  <option value="visa">Visa</option>
                  <option value="Master">Mastercard</option>
                  <option value="Amex">American Express</option>
                  <option value="Elo">Elo</option>
                  <option value="Diners">Diners club</option>
                </select>
              </div>
            </div>
            <div className="btn-salvar-area">
              <button onClick={salvarcartao2}>Atualizar</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {loading != false ? (
        <div className="loading">
          <span>Atualizando...</span>
        </div>
      ) : (
        ""
      )}

      <Footer></Footer>
    </div>
  );
}
