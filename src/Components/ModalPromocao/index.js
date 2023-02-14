import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import api2 from "../../services/api2";
import logo from "../../Assets/logo viit 1 copy.png";
import { FiSend } from "react-icons/fi";
import { toast } from "react-toastify";
import { AuthContext } from '../../Contexts/auth'





export default function ModalPromocao() {

  const { usercliente } = useContext(AuthContext)

  const [bannerpromo, setBannerpromo] = useState([]);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagembonita, setMensagembonita] = useState("");

  useEffect(() => {
    api2.get("/edicao").then((data) => {
      setBannerpromo(data.data);
    });
  }, []);

  async function sendmail() {
    if (nome == "" && telefone == "") {
      toast.error("Campos vazios!");
      return;
    }
    await api2
      .post("/emailsclientes", {
        nome: nome,
        telefone: telefone,
      })
      .then(() => {
        setTelefone("");
        setNome("");
        document
          .querySelector(".container-pai-modal-promocao")
          .setAttribute("style", "display:none");

        /*const link = 'https://vittoriavitt.com.br/logo.png'
        const tag = `<img style='width:150px'src=${link} alt=imagem></img>`
        api2.post('/send', {
          email: usercliente.email,
          mensagem: `
          <div 
          style='
                 width: 100%;
                 height: 400px;
                 display: grid;
                 justify-items: center;
          '>
          ${tag}
         <div>
          <h1 style='padding:10px;background:red;color:#fff;width:100%;margin:0'>Olá ${usercliente.nome} Seja bem vindo a nossa loja! Obrigado por se cadastrar!</h1>
          </div>
          </div> 
          `
        })
          .then(() => {
            toast.success('email ok')
          })*/

        toast.success("Cadastrado com sucesso!");
      });
  }

  return (
    <div className="container-pai-modal-promocao">
      <div className="container-modal-promocao">
        <div className="ilustracao-modal-promocao">
          <img
            className="bannerpromo"
            src={bannerpromo.map((item) => item.bannermodalpromocao)}
          ></img>
          <div className="logo-area-modal-promocao">
            <img src={logo}></img>
          </div>
        </div>
        <div className="form-modal-promocao">
          <div>
            <h2>Cadastre-se e</h2>
            <h1>Ganhe Agora!</h1>
          </div>
          <h1 style={{ fontWeight: '800', color: "#e06f84", fontSize: "72px" }}>R$20,00</h1>
          <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: "15px" }}>de desconto na 1° compra!</h2>


          <div className="box-input-modal-promocao">
            <input
              value={nome}
              type="text"
              onChange={(e) => setNome(e.target.value)}
              placeholder='Nome:'
            ></input>
          </div>

          <div className="box-input-modal-promocao">
            <input
              value={telefone}
              type="text"
              onChange={(e) => setTelefone(e.target.value)}
              placeholder='Whatsapp:'
            ></input>
          </div>
          <button onClick={sendmail} className="btn-submit-modal-promo">
            ENVIAR <FiSend></FiSend>
          </button>
          <p style={{ fontWeight: "600" }}>*Válido para compras acima de R${bannerpromo.map(item => item.componentetexto1.replace('.', ','))}</p>
          <p id="id-p-mensagembonita-haha">{mensagembonita}</p>

          <button
            onClick={() =>
              document
                .querySelector(".container-pai-modal-promocao")
                .setAttribute("style", "display:none")
            }
            className="close-modal-promocao"
          >
            X
          </button>
        </div>
      </div>
    </div >
  );
}
