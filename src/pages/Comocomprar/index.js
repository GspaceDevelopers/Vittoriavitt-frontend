import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Titlemainallpages from "../../Components/Titlemainallpages";
import banner from "../../Assets/paginaproduto.png";
import api from "../../services/api";
const Comocomprar = () => {
  const [imgdesktop, setImgdesktop] = useState([]);
  useEffect(() => {
    api.get("/comocomprar").then((result) => {
      setImgdesktop(result.data);
    });
  }, []);
  return (
    <div className="container-comocomprar">
      <Header back="#de4563"></Header>
      <Titlemainallpages name={"Como Comprar"}></Titlemainallpages>

      <div className="content-page-comocomprar">
        {window.screen.width > 500 ? (
          <img
            src={imgdesktop.map((item) => item.urlbanner)}
            alt=""
            srcset=""
          />
        ) : (
          <img
            src={imgdesktop.map((item) => item.urlbannermobile)}
            alt=""
            srcset=""
          />
        )}
        {/* <section className="sec1-comocomprar">
          <h2>POR ONDE COMEÇAR?</h2>
          <br></br>
          <h4>PASSO 1 - SELECIONE SUA PEÇA:</h4>
          <br></br>
          <p>Clique na peça que deseja comprar e selecione:</p>
          <br></br>
          <ul>
            <li>A cor que deseja</li>
            <li>O tamanho</li>
            <li>Quantidade de peças</li>
          </ul>
          <br></br>
          <p>
            OBS: Não se esqueça de checar a tabela de medidas e o provador
            virtual!
          </p>
          <br></br>
          <img src={banner}></img>
          <br></br>
          <h4>
            Após escolher as opções certas, clique em “Adicionar ao carrinho”
          </h4>
          <br />
          <br />

          <h4>PASSO 2 - CARRINHO:</h4>
          <br></br>
          <p>
            Ao adicionar seu item, você será redirecionado(a) para o carrinho de
            compras
          </p>
          <br></br>

          <h4>Entrando no carrinho, você vai se deparar com 4 áreas:</h4>
          <br></br>
          <ul>
            <li>
              1- Identifique-se: nessa área é onde você coloca suas informações
              pessoais. Área importante para podermos identifica-lo e entrarmos
              em contato para oferecer informações essenciais sobre o seu
              pedido.
            </li>
            <br></br>
            <li>
              2- Endereço de entrega: Onde você coloca suas informações de
              entrega para que seu pedido chegue no lugar certo e sua compra
              seja feita com sucesso! - OBS: NÃO SE ESQUEÇA DE CHECAR SE O
              ENDEREÇO INFORMADO É O CERTO.
            </li>
            <br></br>
            <li>
              3- Confira seus produtos: É onde você pode ver os produtos que
              está prestes a comprar. Lá poderá checar informações como tamanho,
              cor, preço de cada peça e preço total do carrinho. Nessa área você
              também pode adicionar mais peças iguais as que você escolheu, ou
              remove-las de seu carrinho.
            </li>
            <br></br>
            <li>
              4- Pagamento: Área onde você pode escolher sua forma de pagamento.
              Clique na opção desejada (escolha entre Débito, Crédito, Pix ou
              Boleto) e logo em seguida Finalize seu pagamento!
            </li>
          </ul>
          <br></br>
          <br></br>

          <h2>Sua compra na VittoriavittStore é segura!</h2>
          <br></br>
          <p>
            Ler a{" "}
            <a href="/politicadeprivacidade" target={"_blank"}>
              Politica de Privacidade
            </a>
          </p>
          <br></br>
        </section> */}
      </div>
      <p>
        Ler a{" "}
        <a href="/politicadeprivacidade" target={"_blank"}>
          Politica de Privacidade
        </a>
      </p>
      <Footer></Footer>
    </div>
  );
};
export default Comocomprar;
