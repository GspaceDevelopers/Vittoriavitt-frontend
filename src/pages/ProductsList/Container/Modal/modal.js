import { useContext, useState, useParams, useEffect } from "react";
import Modal from "react-modal";
import api from "../../../../services/api";
import firebase from "../../../../services/firebaseconnection";
import { BsPlusLg } from "react-icons/bs";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./modal.css";
import { AuthContext } from "../../../../Contexts/auth";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#root");

function ModalApp(props) {
  const { user } = useContext(AuthContext);

  const [produto, setProduto] = useState();
  const [imageurl, setImageurl] = useState();
  const [imageurl2, setImageurl2] = useState();
  const [imageurl3, setImageurl3] = useState();
  const [imageurl4, setImageurl4] = useState();
  const [imageurl5, setImageurl5] = useState();
  const [imageurl6, setImageurl6] = useState();
  const [imageurl7, setImageurl7] = useState();
  const [imageurl8, setImageurl8] = useState();
  const [urlFoto, setUrlFoto] = useState([]);
  const [urlFoto2, setUrlFoto2] = useState([]);
  const [urlFoto3, setUrlFoto3] = useState([]);
  const [urlFoto4, setUrlFoto4] = useState([]);
  const [urlFoto5, setUrlFoto5] = useState([]);
  const [urlFoto6, setUrlFoto6] = useState([]);
  const [urlFoto7, setUrlFoto7] = useState([]);
  const [urlFoto8, setUrlFoto8] = useState([]);
  const [inputFile, SetInputFile] = useState(0);
  const [inputValue, setInputValue] = useState([]);
  const [modelo, setModelo] = useState(props.tittle);
  const [modeloProduto, setModeloProduto] = useState(props.produto);
  const [modeloCor, setModeloCor] = useState(props.cor);
  const [modeloCor2, setModeloCor2] = useState(props.cor2);
  const [modeloCor3, setModeloCor3] = useState(props.cor3);
  const [modeloCor4, setModeloCor4] = useState(props.cor4);
  const [modeloPreco, setModeloPreco] = useState(props.preco);
  const [modeloTamanho, setModeloTamanho] = useState(props.tamanho);
  const [modeloTamanho2, setModeloTamanho2] = useState(props.tamanho2);
  const [modeloTamanho3, setModeloTamanho3] = useState(props.tamanho3);
  const [modeloTamanho4, setModeloTamanho4] = useState(props.tamanho4);
  const [modeloEstoque, setModeloEstoque] = useState(props.estoque);
  const [modeloDescricao, setModeloDescricao] = useState(props.descricao);
  const [modeloCategory, setModeloCategory] = useState(props.category);
  const [image, setImage] = useState(props.image1);

  const idItem = ` Esse é um id:${props.testId}`;

  async function fileImage(e) {
    const imageurlLet = e.target.files[0];

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${imageurlLet.name}`)
      .put(imageurlLet)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(imageurlLet.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto(url);
          });
      });
  }

  async function fileImage2(e) {
    const imageurlLet2 = e.target.files[0];

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${imageurlLet2.name}`)
      .put(imageurlLet2)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(imageurlLet2.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto2(url);
          });
      });
  }

  async function fileImage3(e) {
    const imageurlLet3 = e.target.files[0];

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${imageurlLet3.name}`)
      .put(imageurlLet3)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(imageurlLet3.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto3(url);
          });
      });
  }

  async function fileImage4(e) {
    const imageurlLet4 = e.target.files[0];

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${imageurlLet4.name}`)
      .put(imageurlLet4)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(imageurlLet4.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto4(url);
          });
      });
  }
  async function fileImage5(e) {
    const imageurlLet5 = e.target.files[0];

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${imageurlLet5.name}`)
      .put(imageurlLet5)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(imageurlLet5.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto5(url);
          });
      });
  }

  async function fileImage6(e) {
    const imageurlLet6 = e.target.files[0];

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${imageurlLet6.name}`)
      .put(imageurlLet6)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(imageurlLet6.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto6(url);
          });
      });
  }

  async function fileImage7(e) {
    const imageurlLet7 = e.target.files[0];

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${imageurlLet7.name}`)
      .put(imageurlLet7)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(imageurlLet7.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto7(url);
          });
      });
  }

  async function fileImage8(e) {
    const imageurlLet8 = e.target.files[0];

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${imageurlLet8.name}`)
      .put(imageurlLet8)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(imageurlLet8.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto8(url);
          });
      });
  }
  async function upAtualizar(id) {
    alert(id);
    // e.preventDefault();
    // verificao do campo files
    if (urlFoto == "" && urlFoto2 == "") {
      toast.error("Campo de imagem vazio, selecione pelo menos 2 imagens");
      return;
    }

    // fim da verificacao
    const produto = document.getElementById("produto").value;
    const cor = document.getElementById("cor").value;
    const cor2 = document.getElementById("cor2").value;
    const cor3 = document.getElementById("cor3").value;
    const cor4 = document.getElementById("cor4").value;

    const categoria = document.getElementById("categoria").value;
    const tamanho = document.getElementById("tamanho").value;
    const tamanho2 = document.getElementById("tamanho2").value;
    const tamanho3 = document.getElementById("tamanho3").value;
    const tamanho4 = document.getElementById("tamanho4").value;
    const preco = document.getElementById("preco").value;
    const descricao = document.getElementById("description").value;
    const modelo = document.getElementById("modelo").value;
    const marca = document.getElementById("marca").value;
    const estoque = document.getElementById("estoque").value;

    // alert(urlFoto);
    const config = {
      headers: {
        Authorization: "Access-Control-Allow-Origin",
      },
    };

    const data = {
      produto: produto,
      categoria: categoria,
      descricao: descricao,
      imgurl: String(urlFoto),
      imgurl2: String(urlFoto2),
      imgurl3: String(urlFoto3),
      imgurl4: String(urlFoto4),
      imgurl5: String(urlFoto5),
      imgurl6: String(urlFoto6),
      imgurl7: String(urlFoto7),
      imgurl8: String(urlFoto8),
      preco: preco,
      marca: marca,
      tamanho: tamanho,
      tamanho2: tamanho2,
      tamanho3: tamanho3,
      tamanho4: tamanho4,
      cor: cor,
      cor2: cor2,
      cor3: cor3,
      cor4: cor4,
      modelo: modelo,
      estoque: estoque,
    };

    await api
      .put(`/produtos/${id}`, data, config)
      .then(() => {
        console.log(data);
        toast.success("Atualização feita");
        // window.location.reload();
        // produto = "";
        // categoria = "";
        // descricao = "";

        // preco = "";
        // // marca = "";
        // tamanho = "";
        // tamanho2 = "";
        // tamanho3 = "";
        // tamanho4 = "";
        // cor = "";
        // // cor2 = "";
        // // cor3 = "";
        // // cor4 = "";
        // modelo = "";
        // toast.success("Cadastrado com sucesso");
      })
      .catch((error) => {
        alert(error);
      });
  }

  function plusFile() {
    SetInputFile(inputFile + 1);
    console.log(inputFile);
  }
  useEffect(() => {
    fetch("https://apigspace.herokuapp.com/produtos")
      .then((response) => response.json())
      .then((data) => {
        setProduto(data);
        console.log(produto[0].estoque);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="ContainerEdit">
      <Modal
        isOpen={props.modalOpen}
        onRequestClose={props.modalClose}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <form id="form-edit-products">
          <input
            type="text"
            placeholder="Nome do produto"
            name="produto"
            id="produto"
            value={String(modeloProduto)}
            onChange={(e) => {
              setModeloProduto(e.target.value);
            }}
          />
          <input
            type="text"
            name="modelo"
            value={String(modelo)}
            onChange={(e) => {
              setModelo(e.target.value);
            }}
            id="modelo"
            placeholder="modelo"
          />
          <div className="input-categoria" id="input-categoria">
            <input
              type="text"
              name="preco"
              placeholder="preço"
              id="preco"
              value={String(modeloPreco)}
              onChange={(e) => {
                setModeloPreco(e.target.value);
              }}
            />
            <input
              type="text"
              name="estoque"
              placeholder="Quantidade"
              id="estoque"
              value={String(modeloEstoque)}
              onChange={(e) => {
                setModeloEstoque(e.target.value);
              }}
            />
            <select id="marca" name="cars">
              <option value="maxsport">MaXsport</option>
              <option value="foryou">For you</option>
              <option value="sparta">Mercedes SLK</option>
              <option value="foreveryoung">Forever Young</option>
              <option value="stark">Stark</option>
              <option value="loveme">Love me</option>
              <option value="rr11">RR11</option>
            </select>
            {/* <input type="text" name="marca" placeholder="marca" id="marca" /> */}
            <select id="categoria" name="cars">
              <option value="fitness feminino">fitness feminino</option>
              <option value="fitness masculino">fitness masculino</option>
              <option value="lingeries">lingeries</option>
            </select>
            {/* <input
                type="text"
                name="categoria"
                placeholder="categoria"
                id="categoria"
              /> */}
          </div>

          <div className="input-number">
            <input
              type="text"
              name="tamanho"
              placeholder="tamanho"
              id="tamanho"
              value={String(modeloTamanho)}
              onChange={(e) => {
                setModeloTamanho(e.target.value);
              }}
            />
            <input
              type="text"
              name="tamanho"
              placeholder="tamanho"
              id="tamanho2"
              value={String(modeloTamanho2)}
              onChange={(e) => {
                setModeloTamanho2(e.target.value);
              }}
            />
            <input
              type="text"
              name="tamanho"
              placeholder="tamanho"
              id="tamanho3"
              value={String(modeloTamanho3)}
              onChange={(e) => {
                setModeloTamanho3(e.target.value);
              }}
            />
            <input
              type="text"
              name="tamanho"
              placeholder="tamanho"
              id="tamanho4"
              value={String(modeloTamanho4)}
              onChange={(e) => {
                setModeloTamanho4(e.target.value);
              }}
            />
          </div>
          <div className="input-number">
            <input
              type="text"
              name="cor"
              placeholder="cor (1)"
              id="cor"
              value={String(modeloCor)}
              onChange={(e) => {
                setModeloCor(e.target.value);
              }}
            />
            <input
              type="text"
              name="cor"
              placeholder="cor (2)"
              id="cor2"
              value={String(modeloCor2)}
              onChange={(e) => {
                setModeloCor2(e.target.value);
              }}
            />
            <input
              type="text"
              name="cor"
              placeholder="cor (3)"
              id="cor3"
              value={String(modeloCor3)}
              onChange={(e) => {
                setModeloCor3(e.target.value);
              }}
            />
            <input
              type="text"
              name="cor"
              placeholder="cor (4)"
              id="cor4"
              value={String(modeloCor4)}
              onChange={(e) => {
                setModeloCor4(e.target.value);
              }}
            />
          </div>
          <div id="input-file" className="input-file">
            <div id="file-style">
              <label htmlFor="arquivo" id="label-file">
                Enviar imagem (1)
              </label>
              <input
                name="arquivo"
                type="file"
                multiple="multiple"
                accept="image/*"
                onChange={fileImage}
                id="arquivo"
                required
              />
            </div>
            <div id="file-style">
              <label htmlFor="arquivo" id="label-file">
                Enviar imagem (2)
              </label>
              <input
                type="file"
                multiple="multiple"
                accept="image/*"
                onChange={fileImage2}
                id="arquivo"
                required
              />
            </div>

            {inputFile > 0 ? (
              <div id="file-style">
                <label htmlFor="arquivo" id="label-file">
                  Enviar imagem (3)
                </label>
                <input
                  type="file"
                  multiple="multiple"
                  accept="image/*"
                  onChange={fileImage3}
                  id="arquivo"
                />
              </div>
            ) : (
              ""
            )}
            {inputFile >= 2 ? (
              <div id="file-style">
                <label htmlFor="arquivo" id="label-file">
                  Enviar imagem (4)
                </label>
                <input
                  type="file"
                  multiple="multiple"
                  accept="image/*"
                  onChange={fileImage4}
                  id="arquivo"
                />
              </div>
            ) : (
              ""
            )}
            {inputFile >= 3 ? (
              <div id="file-style">
                <label htmlFor="" id="label-file">
                  Enviar imagem (5)
                </label>
                <input
                  type="file"
                  multiple="multiple"
                  accept="image/*"
                  onChange={fileImage5}
                  id="arquivo"
                />
              </div>
            ) : (
              ""
            )}
            {inputFile >= 4 ? (
              <div id="file-style">
                <label htmlFor="arquivo" id="label-file">
                  Enviar imagem (6)
                </label>
                <input
                  type="file"
                  multiple="multiple"
                  accept="image/*"
                  onChange={fileImage6}
                  id="arquivo"
                />
              </div>
            ) : (
              ""
            )}

            {inputFile >= 5 ? (
              <div id="file-style">
                <label htmlFor="arquivo" id="label-file">
                  Enviar imagem (7)
                </label>
                <input
                  type="file"
                  multiple="multiple"
                  accept="image/*"
                  onChange={fileImage7}
                  id="arquivo"
                />
              </div>
            ) : (
              ""
            )}
            {inputFile >= 6 ? (
              <div id="file-style">
                <label htmlFor="arquivo" id="label-file">
                  Enviar imagem (8)
                </label>
                <input
                  type="file"
                  multiple="multiple"
                  accept="image/*"
                  onChange={fileImage8}
                  id="arquivo"
                />
              </div>
            ) : (
              ""
            )}

            {inputFile <= 5 ? (
              <button type="button" id="btn-plus-file-image" onClick={plusFile}>
                <BsPlusLg size={15} color="white" />
              </button>
            ) : (
              ""
            )}
          </div>
          <textarea
            name=""
            id="description"
            cols="30"
            rows="10"
            placeholder="Descrição"
            value={String(modeloDescricao)}
            onChange={(e) => {
              setModeloDescricao(e.target.value);
            }}
          ></textarea>
          <button
            id="submitPut"
            type="button"
            onClick={() => upAtualizar(props.testId)}
          >
            Atualizar
          </button>
          <button id="cancelList" onClick={props.modalClose}>
            Close
          </button>
        </form>
        <br />
        <br />
      </Modal>
    </div>
  );
}

export default ModalApp;
