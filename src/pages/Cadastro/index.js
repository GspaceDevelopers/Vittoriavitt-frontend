import { React, useContext, useState } from "react";
import "./style.css";
import { AuthContext } from "../../Contexts/auth";
import { toast } from "react-toastify";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Titlemainallpages from "../../Components/Titlemainallpages";

export default function Cadastro() {
  const { Cadastroclientes } = useContext(AuthContext);

  const [cpf, setCpf] = useState("");
  const [datanascimento, setDatanascimento] = useState("");
  const [sexo, setSexo] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [Complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [pais, setPais] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [senha, setSenha] = useState("");
  const [infoloja, setIfoloja] = useState("");
  const [repitasenha, setRepitasenha] = useState("");

  function Cadclientes(e) {
    e.preventDefault();

    if (
      cpf == "" &&
      nome == "" &&
      cep == "" &&
      sexo == "" &&
      endereco == "" &&
      numero == "" &&
      email == "" &&
      telefone == "" &&
      Complemento == "" &&
      estado == "" &&
      senha == ""
    ) {
      toast.error("Preencha todos os campos!");
      return;
    }
    if (senha != repitasenha) {
      toast.error("Senhas não conferem");
      return;
    }
    Cadastroclientes(
      nome,
      sobrenome,
      sexo,
      datanascimento,
      cpf,
      email,
      telefone,
      cep,
      endereco,
      numero,
      Complemento,
      bairro,
      pais,
      estado,
      cidade,
      senha
    );
    toast.success("cadastro realizado com sucesso!");
  }
  return (
    <div className="cadastro-clientes">
      <Header back="#e06f84"></Header>
      <Titlemainallpages name="CADASTRE-SE"></Titlemainallpages>
      <div className="formclientes">
        <form id="formpj" onSubmit={Cadclientes}>
          <div className="titleformPj">
            <h2>Dados Pessoais</h2>
          </div>
          <div className="inputgrup-pj">
            <div className="inputs-row">
              <div className="inputs-row-area">
                <label>Nome:</label>
                <input
                  onChange={(e) => setNome(e.target.value)}
                  type="text"
                ></input>
              </div>
              <div className="inputs-row-area">
                <label>Sobrenome:</label>
                <input
                  onChange={(e) => setSobrenome(e.target.value)}
                  type="text"
                ></input>
              </div>
              <div className="input-sozinho-sexo-pf">
                <label>Sexo:</label>
                <div style={{ display: "flex", gap: "20px" }}>
                  <input
                    value="masculino"
                    onChange={(e) => setSexo(e.target.value)}
                    type="radio"
                    name="sexo"
                  ></input>
                  <label>Masculino</label>
                  <input
                    value="feminino"
                    onChange={(e) => setSexo(e.target.value)}
                    type="radio"
                    name="sexo"
                  ></input>
                  <label>Feminino</label>
                  <input
                    value="nao informado"
                    onChange={(e) => setSexo(e.target.value)}
                    type="radio"
                    name="sexo"
                  ></input>
                  <label>Não informar</label>
                </div>
              </div>
              <div className="inputs-row-area">
                <label>Data de Nascimento</label>
                <input
                  onChange={(e) => setDatanascimento(e.target.value)}
                  type="date"
                ></input>
              </div>
              <div className="inputgrup-pj">
                <div className="inputs-row">
                  <div className="inputs-row-area">
                    <label>CPF</label>
                    <input
                      onChange={(e) => setCpf(e.target.value)}
                      type="number"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="inputs-row">
              <div className="inputs-row-area">
                <label>E-mail:</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                ></input>
              </div>
              <div className="inputs-row-area">
                <label>Telefone:</label>
                <input
                  onChange={(e) => setTelefone(e.target.value)}
                  type="text"
                ></input>
              </div>
            </div>
          </div>
          <div className="titleformPj">
            <h2>Dados do Endereço</h2>
          </div>

          <div className="inputgrup-pj">
            <div className="inputs-row">
              <div className="inputs-row-area">
                <label>CEP:</label>
                <input
                  onChange={(e) => setCep(e.target.value)}
                  type="number"
                ></input>
              </div>
              <div className="inputs-row-area">
                <label>Endereço:</label>
                <input
                  onChange={(e) => setEndereco(e.target.value)}
                  type="text"
                ></input>
              </div>
              <div className="inputs-row-area">
                <label>Número:</label>
                <input
                  onChange={(e) => setNumero(e.target.value)}
                  type="text"
                ></input>
              </div>
            </div>
            <div className="inputs-row">
              <div className="inputs-row-area">
                <label>Complemento</label>
                <input
                  onChange={(e) => setComplemento(e.target.value)}
                  type="text"
                ></input>
              </div>
              <div className="inputs-row-area">
                <label>Bairro:</label>
                <input
                  onChange={(e) => setBairro(e.target.value)}
                  type="text"
                ></input>
              </div>
            </div>
            <div className="inputs-row">
              <div className="inputs-row-area">
                <label>País:</label>
                <input
                  onChange={(e) => setPais(e.target.value)}
                  type="text"
                ></input>
              </div>
              <div className="inputs-row-area">
                <label>Estado:</label>
                <input
                  onChange={(e) => setEstado(e.target.value)}
                  type="text"
                ></input>
              </div>
              <div className="inputs-row-area">
                <label>Cidade:</label>
                <input
                  onChange={(e) => setCidade(e.target.value)}
                  type="text"
                ></input>
              </div>
            </div>
          </div>

          <div className="titleformPj">
            <h2>Senha para Acesso</h2>
          </div>
          <div className="inputgrup-pj">
            <div className="inputs-row">
              <div className="inputs-row-area">
                <label>Senha:</label>
                <input
                  onChange={(e) => setSenha(e.target.value)}
                  type="text"
                ></input>
              </div>
              <div className="inputs-row-area">
                <label>Repita a senha:</label>
                <input
                  onChange={(e) => setRepitasenha(e.target.value)}
                  type="text"
                ></input>
              </div>
            </div>
          </div>
          <div className="btn-submitarea">
            <div style={{ display: "flex", gap: "10px" }}>
              <span style={{ color: "#000" }}>
                Li e aceito os Política de Privacidade
              </span>
              <input type="checkbox"></input>
            </div>
            <button id="btn-cadastrar" type="submit">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
}
