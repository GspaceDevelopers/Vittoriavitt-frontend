import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import "./Styles.css";
import api from "../../services/api";
import firebase from "../../services/firebaseconnection";
import { AuthContext } from "../../Contexts/auth";
import { toast } from "react-toastify";
import { BsList, BsTrash } from "react-icons/bs";

const AdminCadastroProdutos = () => {
  const { user } = useContext(AuthContext);

  const [cont, setCont] = useState(0);
  const [cor, setCor] = useState("");
  const [peso, setPeso] = useState("");
  const [comprimento, setComprimento] = useState("");
  const [altura, setAltura] = useState("");
  const [largura, setLargura] = useState("");
  const [diametro, setDiametro] = useState("");
  const [formato, setFormato] = useState("");
  const [categoriacadastro, setCategoriacadastro] = useState("");
  const [datacores, setDatacores] = useState([]);
  const [datacategoriacadastro, setDatacategoriacadastro] = useState([]);
  const [load, setLoad] = useState(false);
  const [modalistacategorias, setModallistacategorias] = useState(false);
  const [aparecercampobrinde, setAparecercampobrinde] = useState(false);
  const [brinde, setBrinde] = useState();
  const [sku, setSku] = useState();
  const [sub1, setSub1] = useState();
  const [sub2, setSub2] = useState();
  const [sub3, setSub3] = useState();
  const [sub4, setSub4] = useState();
  const [filtrodesubcategoria, setFiltrodesubcategoria] = useState([]);

  function modalCorAtualEnglish() {
    setModalcadcores(true);
    if (modalcadcores == true) {
      document.addEventListener("click", () => setModalcadcores(false));
    }
  }

  useEffect(() => {
    if (cont == 0) {
      document
        .querySelectorAll(".box-inputs-tamanhos")[0]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[1]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[2]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[3]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[4]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[5]
        .setAttribute("style", "display:flex");
    }
    if (cont == 1) {
      document
        .querySelectorAll(".box-inputs-tamanhos")[0]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[1]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[2]
        .setAttribute("style", "display:none");
      document
        .querySelectorAll(".box-inputs-tamanhos")[3]
        .setAttribute("style", "display:none");
      document
        .querySelectorAll(".box-inputs-tamanhos")[4]
        .setAttribute("style", "display:none");
      document
        .querySelectorAll(".box-inputs-tamanhos")[5]
        .setAttribute("style", "display:none");
    }
    if (cont == 2) {
      document
        .querySelectorAll(".box-inputs-tamanhos")[0]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[1]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[2]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[3]
        .setAttribute("style", "display:none");
      document
        .querySelectorAll(".box-inputs-tamanhos")[4]
        .setAttribute("style", "display:none");
      document
        .querySelectorAll(".box-inputs-tamanhos")[5]
        .setAttribute("style", "display:none");
    }
    if (cont == 3) {
      document
        .querySelectorAll(".box-inputs-tamanhos")[0]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[1]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[2]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[3]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[4]
        .setAttribute("style", "display:none");
      document
        .querySelectorAll(".box-inputs-tamanhos")[5]
        .setAttribute("style", "display:none");
    }
    if (cont == 4) {
      document
        .querySelectorAll(".box-inputs-tamanhos")[0]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[1]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[2]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[3]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[4]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[5]
        .setAttribute("style", "display:none");
    }
    if (cont == 5) {
      document
        .querySelectorAll(".box-inputs-tamanhos")[0]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[1]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[2]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[3]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[4]
        .setAttribute("style", "display:flex");
      document
        .querySelectorAll(".box-inputs-tamanhos")[5]
        .setAttribute("style", "display:flex");
    }
  }, []);

  const [tm1, setTm1] = useState("");
  const [tm2, setTm2] = useState("");
  const [tm3, setTm3] = useState("");
  const [tm4, setTm4] = useState("");
  const [tm5, setTm5] = useState("");
  const [tm6, setTm6] = useState("");
  const [tm7, setTm7] = useState("");
  const [tm8, setTm8] = useState("");
  const [tm9, setTm9] = useState("");
  const [tm10, setTm10] = useState("");
  const [tm11, setTm11] = useState("");
  const [tm12, setTm12] = useState("");
  const [tm13, setTm13] = useState("");
  const [tm14, setTm14] = useState("");
  const [tm15, setTm15] = useState("");
  const [tm16, setTm16] = useState("");
  const [tm17, setTm17] = useState("");
  const [tm18, setTm18] = useState("");
  const [tm19, setTm19] = useState("");
  const [tm20, setTm20] = useState("");
  const [tm21, setTm21] = useState("");
  const [tm22, setTm22] = useState("");
  const [tm23, setTm23] = useState("");
  const [tm24, setTm24] = useState("");

  const [qt1, setqt1] = useState("");
  const [qt2, setqt2] = useState("");
  const [qt3, setqt3] = useState("");
  const [qt4, setqt4] = useState("");
  const [qt5, setqt5] = useState("");
  const [qt6, setqt6] = useState("");
  const [qt7, setqt7] = useState("");
  const [qt8, setqt8] = useState("");
  const [qt9, setqt9] = useState("");
  const [qt10, setqt10] = useState("");
  const [qt11, setqt11] = useState("");
  const [qt12, setqt12] = useState("");
  const [qt13, setqt13] = useState("");
  const [qt14, setqt14] = useState("");
  const [qt15, setqt15] = useState("");
  const [qt16, setqt16] = useState("");
  const [qt17, setqt17] = useState("");
  const [qt18, setqt18] = useState("");
  const [qt19, setqt19] = useState("");
  const [qt20, setqt20] = useState("");
  const [qt21, setqt21] = useState("");
  const [qt22, setqt22] = useState("");
  const [qt23, setqt23] = useState("");
  const [qt24, setqt24] = useState("");

  const [cor1, setcor1] = useState("");
  const [cor2, setcor2] = useState("");
  const [cor3, setcor3] = useState("");
  const [cor4, setcor4] = useState("");
  const [cor5, setcor5] = useState("");
  const [cor6, setcor6] = useState("");

  const [modelo, setmodelo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setcategoria] = useState("");
  const [marca, setmarca] = useState("");
  const [preco, setpreco] = useState("");
  const [precomaior, setPrecomaior] = useState("");
  const [inputFile, SetInputFile] = useState(0);
  const [promocao, setPromocao] = useState(false);
  const [promocao2, setPromocao2] = useState(false);
  const [qtdpromocao2, setQtdpromocao2] = useState(0);
  const [desconto, setDesconto] = useState("");
  const [subcategoria1, setSubcategoria1] = useState("");
  const [subcategoria2, setSubcategoria2] = useState("");
  const [subcategoria3, setSubcategoria3] = useState("");
  const [subcategoria4, setSubcategoria4] = useState("");

  const [nomearquivo1, setNomearquivo1] = useState();
  const [nomearquivo2, setNomearquivo2] = useState();
  const [nomearquivo3, setNomearquivo3] = useState();
  const [nomearquivo4, setNomearquivo4] = useState();
  const [nomearquivo5, setNomearquivo5] = useState();
  const [nomearquivo6, setNomearquivo6] = useState();
  const [nomearquivo7, setNomearquivo7] = useState();
  const [nomearquivo8, setNomearquivo8] = useState();
  const [nomearquivo9, setNomearquivo9] = useState();
  const [nomearquivo10, setNomearquivo10] = useState();
  const [nomearquivo11, setNomearquivo11] = useState();
  const [nomearquivo12, setNomearquivo12] = useState();
  const [nomearquivo13, setNomearquivo13] = useState();
  const [nomearquivo14, setNomearquivo14] = useState();
  const [nomearquivo15, setNomearquivo15] = useState();
  const [nomearquivo16, setNomearquivo16] = useState();
  const [nomearquivo17, setNomearquivo17] = useState();
  const [nomearquivo18, setNomearquivo18] = useState();

  const [urlFoto1, setUrlFoto1] = useState("");
  const [urlFoto2, setUrlFoto2] = useState("");
  const [urlFoto3, setUrlFoto3] = useState("");
  const [urlFoto4, setUrlFoto4] = useState("");
  const [urlFoto5, setUrlFoto5] = useState("");
  const [urlFoto6, setUrlFoto6] = useState("");
  const [urlFoto7, setUrlFoto7] = useState("");
  const [urlFoto8, setUrlFoto8] = useState("");
  const [urlFoto9, setUrlFoto9] = useState("");
  const [urlFoto10, setUrlFoto10] = useState("");
  const [urlFoto11, setUrlFoto11] = useState("");
  const [urlFoto12, setUrlFoto12] = useState("");
  const [urlFoto13, setUrlFoto13] = useState("");
  const [urlFoto14, setUrlFoto14] = useState("");
  const [urlFoto15, setUrlFoto15] = useState("");
  const [urlFoto16, setUrlFoto16] = useState("");
  const [urlFoto17, setUrlFoto17] = useState("");
  const [urlFoto18, setUrlFoto18] = useState("");

  const [modalcadcores, setModalcadcores] = useState(false);
  const [modalcadacategorias, setModalcadcategorias] = useState(false);

  useEffect(() => {
    async function loadCategorias() {
      setLoad(true);
      await api.get("/categorias").then((item) => {
        setDatacategoriacadastro(item.data);
        setFiltrodesubcategoria(
          datacategoriacadastro.filter((item) => item.categoria == categoria)
        );
      });
      await api.get("/cores").then((item) => {
        setDatacores(item.data);
        setLoad(false);
      });
    }
    loadCategorias();
  }, [modalcadacategorias, modalcadcores, modalistacategorias, categoria]);

  async function upfoto1(e) {
    const foto1url = e.target.files[0];
    setNomearquivo1(foto1url.name);

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${foto1url.name}`)
      .put(foto1url)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(foto1url.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto1(url);
          });
      });
  }
  async function upfoto2(e) {
    const foto1url = e.target.files[0];
    setNomearquivo2(foto1url.name);

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${foto1url.name}`)
      .put(foto1url)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(foto1url.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto2(url);
          });
      });
  }
  async function upfoto3(e) {
    const foto1url = e.target.files[0];
    setNomearquivo3(foto1url.name);

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${foto1url.name}`)
      .put(foto1url)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(foto1url.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto3(url);
          });
      });
  }
  async function upfoto4(e) {
    const foto1url = e.target.files[0];
    setNomearquivo4(foto1url.name);

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${foto1url.name}`)
      .put(foto1url)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(foto1url.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto4(url);
          });
      });
  }
  async function upfoto5(e) {
    const foto1url = e.target.files[0];
    setNomearquivo5(foto1url.name);

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${foto1url.name}`)
      .put(foto1url)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(foto1url.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto5(url);
          });
      });
  }

  async function upfoto6(e) {
    const foto1url = e.target.files[0];
    setNomearquivo6(foto1url.name);

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${foto1url.name}`)
      .put(foto1url)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(foto1url.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto6(url);
          });
      });
  }

  async function upfoto7(e) {
    const foto1url = e.target.files[0];
    setNomearquivo7(foto1url.name);

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${foto1url.name}`)
      .put(foto1url)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(foto1url.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto7(url);
          });
      });
  }
  async function upfoto8(e) {
    const foto1url = e.target.files[0];
    setNomearquivo8(foto1url.name);

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${foto1url.name}`)
      .put(foto1url)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(foto1url.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto8(url);
          });
      });
  }
  async function upfoto9(e) {
    const foto1url = e.target.files[0];
    setNomearquivo9(foto1url.name);

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${foto1url.name}`)
      .put(foto1url)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(foto1url.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto9(url);
          });
      });
  }
  async function upfoto10(e) {
    const foto1url = e.target.files[0];
    setNomearquivo10(foto1url.name);

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${foto1url.name}`)
      .put(foto1url)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(foto1url.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto10(url);
          });
      });
  }

  async function upfoto11(e) {
    const foto1url = e.target.files[0];
    setNomearquivo11(foto1url.name);

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${foto1url.name}`)
      .put(foto1url)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(foto1url.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto11(url);
          });
      });
  }

  async function upfoto12(e) {
    const foto1url = e.target.files[0];
    setNomearquivo12(foto1url.name);

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${foto1url.name}`)
      .put(foto1url)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(foto1url.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto12(url);
          });
      });
  }

  async function upfoto13(e) {
    const foto1url = e.target.files[0];
    setNomearquivo13(foto1url.name);

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${foto1url.name}`)
      .put(foto1url)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(foto1url.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto13(url);
          });
      });
  }
  async function upfoto14(e) {
    const foto1url = e.target.files[0];
    setNomearquivo14(foto1url.name);

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${foto1url.name}`)
      .put(foto1url)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(foto1url.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto14(url);
          });
      });
  }
  async function upfoto14(e) {
    const foto1url = e.target.files[0];
    setNomearquivo14(foto1url.name);

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${foto1url.name}`)
      .put(foto1url)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(foto1url.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto14(url);
          });
      });
  }
  async function upfoto15(e) {
    const foto1url = e.target.files[0];
    setNomearquivo15(foto1url.name);

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${foto1url.name}`)
      .put(foto1url)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(foto1url.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto15(url);
          });
      });
  }
  async function upfoto16(e) {
    const foto1url = e.target.files[0];
    setNomearquivo16(foto1url.name);

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${foto1url.name}`)
      .put(foto1url)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(foto1url.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto16(url);
          });
      });
  }
  async function upfoto17(e) {
    const foto1url = e.target.files[0];
    setNomearquivo17(foto1url.name);

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${foto1url.name}`)
      .put(foto1url)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(foto1url.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto17(url);
          });
      });
  }
  async function upfoto18(e) {
    const foto1url = e.target.files[0];
    setNomearquivo18(foto1url.name);

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${foto1url.name}`)
      .put(foto1url)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(foto1url.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto18(url);
          });
      });
  }

  async function uploadImage(e) {
    e.preventDefault();
    if (
      modelo == "" ||
      preco == "" ||
      descricao == "" ||
      peso == "" ||
      altura == "" ||
      largura == "" ||
      comprimento == "" ||
      diametro == "" ||
      formato == ""
    ) {
      toast.info("Preencha os campos principais");
      return;
    }
    setLoad(true);

    let data = {
      produto: "",
      modelo: modelo,
      marca: "",
      brinde: brinde,
      aparecercampobrinde: aparecercampobrinde,
      sku: sku,
      tipo: "",
      subcategoria1: subcategoria1.toLowerCase(),
      subcategoria2: subcategoria2.toLowerCase(),
      subcategoria3: subcategoria3.toLowerCase(),
      subcategoria4: subcategoria4.toLowerCase(),
      peso: peso,
      comprimento: comprimento,
      altura: altura,
      largura: largura,
      diametro: diametro,
      formato: formato,
      cores: {
        corPrimary: {
          imgurl: `${urlFoto1 != [] ? urlFoto1 : ""}`,
          imgurl2: `${urlFoto2 != [] ? urlFoto2 : ""}`,
          imgurl3: `${urlFoto3 != [] ? urlFoto3 : ""}`,
          cor1: cor1,
          tamanhos: {
            tamanhoOne: { tamanho1: tm1, quantidade: qt1 },
            tamanhoTwo: { tamanho2: tm2, quantidade2: qt2 },
            tamanhoThree: { tamanho3: tm3, quantidade3: qt3 },
            tamanhoFour: { tamanho4: tm4, quantidade4: qt4 },
          },
        },
        corSecondary: {
          imgurl4: `${urlFoto4 != [] ? urlFoto4 : ""}`,
          imgurl5: `${urlFoto5 != [] ? urlFoto5 : ""}`,
          imgurl6: `${urlFoto6 != [] ? urlFoto6 : ""}`,
          cor2: cor2,
          tamanhos: {
            tamanhoOne: { tamanho5: tm5, quantidade5: qt5 },
            tamanhoTwo: { tamanho6: tm6, quantidade6: qt6 },
            tamanhoThree: { tamanho7: tm7, quantidade7: qt7 },
            tamanhoFour: { tamanho8: tm8, quantidade8: qt8 },
          },
        },
        corTertiary: {
          imgurl7: `${urlFoto7 != [] ? urlFoto7 : ""}`,
          imgurl8: `${urlFoto8 != [] ? urlFoto8 : ""}`,
          imgurl9: `${urlFoto9 != [] ? urlFoto9 : ""}`,
          cor3: cor3,
          tamanhos: {
            tamanhoOne: { tamanho9: tm9, quantidade9: qt9 },
            tamanhoTwo: { tamanho10: tm10, quantidade10: qt10 },
            tamanhoThree: { tamanho11: tm11, quantidade11: qt11 },
            tamanhoFour: { tamanho12: tm12, quantidade12: qt12 },
          },
        },
        corQuaternary: {
          imgurl10: `${urlFoto10 != [] ? urlFoto10 : ""}`,
          imgurl11: `${urlFoto11 != [] ? urlFoto11 : ""}`,
          imgurl12: `${urlFoto12 != [] ? urlFoto12 : ""}`,
          cor4: cor4,
          tamanhos: {
            tamanhoOne: { tamanho13: tm13, quantidade13: qt13 },
            tamanhoTwo: { tamanho14: tm14, quantidade14: qt14 },
            tamanhoThree: { tamanho15: tm15, quantidade15: qt15 },
            tamanhoFour: { tamanho16: tm16, quantidade16: qt16 },
          },
        },
        corFive: {
          imgurl13: `${urlFoto13 != [] ? urlFoto13 : ""}`,
          imgurl14: `${urlFoto14 != [] ? urlFoto14 : ""}`,
          imgurl15: `${urlFoto15 != [] ? urlFoto15 : ""}`,
          cor5: cor5,
          tamanhos: {
            tamanhoOne: { tamanho17: tm17, quantidade17: qt17 },
            tamanhoTwo: { tamanho18: tm18, quantidade18: qt18 },
            tamanhoThree: { tamanho19: tm19, quantidade19: qt19 },
            tamanhoFour: { tamanho20: tm20, quantidade20: qt20 },
          },
        },
        corSix: {
          imgurl16: `${urlFoto16 != [] ? urlFoto16 : ""}`,
          imgurl17: `${urlFoto17 != [] ? urlFoto17 : ""}`,
          imgurl18: `${urlFoto18 != [] ? urlFoto18 : ""}`,
          cor6: cor6,
          tamanhos: {
            tamanhoOne: { tamanho21: tm21, quantidade21: qt21 },
            tamanhoTwo: { tamanho22: tm22, quantidade22: qt22 },
            tamanhoThree: { tamanho23: tm23, quantidade23: qt23 },
            tamanhoFour: { tamanho24: tm24, quantidade24: qt24 },
          },
        },
      },
      precomaior: precomaior,
      preco: preco,
      categoria: categoria.toLowerCase(),
      descricao: descricao,
      promocao: promocao,
      promocao2: promocao2,
      qtdpromocao2: qtdpromocao2,
      desconto: promocao2 == false ? "" : desconto,
    };
    await api.post("/produtos", data).then(() => {
      cadCategoria();
      setLoad(false);
      toast.success("Item cadastrado com sucesso!");
      setmodelo("");
      setDescricao("");
      setcategoria("");
      setmarca("");
      setpreco("");
      setPrecomaior("");
      setQtdpromocao2("");
      setDesconto("");
      setSubcategoria1("");
      setSubcategoria2("");
      setSubcategoria3("");
      setSubcategoria4("");
    });
  }

  function renderplus() {
    setCont(cont + 1);

    if (cont == 5) {
      document
        .getElementById("btn-cad-mais-cores")
        .setAttribute("style", "display:none");
      return;
    } else {
      setCont(cont + 1);
    }
  }

  async function cadCor() {
    if (cor == "") {
      return;
    }
    setLoad(true);
    await api
      .post("/cores", {
        cor: cor,
      })
      .then(() => {
        setLoad(false);
        toast.success("Cor cadastrada com sucesso!");
        setModalcadcores(false);
      });
  }
  async function cadCategoria() {
    if (categoriacadastro == "") {
      return;
    }
    setLoad(true);
    // await api.get("/categorias").then((data) => {
    //   const categoriasjaexistentes = [data.data];
    //   if (categoriasjaexistentes.some() == true) {
    //     api.put(() => {});
    //   } else {
    //   }
    // });

    await api
      .post("/categorias", {
        categoria: categoriacadastro,
        sub1: subcategoria1.toLowerCase(),
        sub2: subcategoria2.toLowerCase(),
        sub3: subcategoria3.toLowerCase(),
        sub4: subcategoria4.toLowerCase(),
      })
      .then(() => {
        setLoad(false);
        toast.success("categoria cadastrada com sucesso!");
        setModalcadcategorias(false);
      });
  }

  async function delcategoria(_id) {
    setLoad(true);
    await api
      .delete(`/categorias/${_id}`)
      .then(() => {
        toast.success("Categoria excluida com sucesso!");
        setLoad(false);
        setModallistacategorias(false);
      })
      .catch(() => {});
  }

  return (
    <div className="create-products">
      {load != false ? (
        <div className="load">
          <h2>Carregando...</h2>
        </div>
      ) : (
        ""
      )}

      <h1 id="h1-create">Cadastro de produtos</h1>
      <form id="form-create" onSubmit={uploadImage}>
        <div className="section-div-flex">
          <div className="box-select-btn">
            <select
              id="tipo"
              name="cars"
              value={categoria}
              onChange={(e) => {
                setcategoria(e.target.value);
              }}
            >
              <option> Categoria </option>
              {datacategoriacadastro.map((item) => {
                return <option value={item.categoria}>{item.categoria}</option>;
              })}
            </select>
            <button
              id="btn-cad-categoria"
              onClick={() => setModalcadcategorias(true)}
              type="button"
            >
              +
            </button>
            <button
              id="btn-cad-categoria2"
              onClick={() => setModallistacategorias(true)}
              type="button"
            >
              <BsList></BsList>
            </button>
          </div>

          {modalistacategorias != false ? (
            <div className="container-modallistacategorias">
              <div className="modallistacategorias">
                <button
                  style={{ background: "transparent", fontSize: "20px" }}
                  type="button"
                  onClick={() => setModallistacategorias(false)}
                >
                  X
                </button>
                <h3>Lista de categorias</h3>
                {datacategoriacadastro.map((item) => {
                  return (
                    <div
                      key={item._id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>{item.categoria}</span>
                      <button
                        type="button"
                        onClick={() => delcategoria(item._id)}
                      >
                        <BsTrash></BsTrash>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="box-subcategoria">
            <select
              name="sub1"
              id="sub1"
              onChange={(e) => setSub1(e.target.value)}
            >
              <option selected value="...">
                Selecione uma subcategoria
              </option>
              {filtrodesubcategoria.map((item) => {
                return (
                  <>
                    <option value={item.sub1}>{item.sub1}</option>
                    <option value={item.sub2}>{item.sub2}</option>
                    <option value={item.sub3}>{item.sub3}</option>
                    <option value={item.sub4}>{item.sub4}</option>
                  </>
                );
              })}
            </select>

            <select
              name="sub2"
              id="sub1"
              onChange={(e) => setSub2(e.target.value)}
            >
              <option selected value="...">
                Selecione uma subcategoria
              </option>
              {filtrodesubcategoria.map((item) => {
                return (
                  <>
                    <option value={item.sub1}>{item.sub1}</option>
                    <option value={item.sub2}>{item.sub2}</option>
                    <option value={item.sub3}>{item.sub3}</option>
                    <option value={item.sub4}>{item.sub4}</option>
                  </>
                );
              })}
            </select>
            <select
              name="sub3"
              id="sub1"
              onChange={(e) => setSub3(e.target.value)}
            >
              <option selected value="...">
                Selecione uma subcategoria
              </option>
              {filtrodesubcategoria.map((item) => {
                return (
                  <>
                    <option value={item.sub1}>{item.sub1}</option>
                    <option value={item.sub2}>{item.sub2}</option>
                    <option value={item.sub3}>{item.sub3}</option>
                    <option value={item.sub4}>{item.sub4}</option>
                  </>
                );
              })}
            </select>
            <select
              name="sub4"
              id="sub1"
              onChange={(e) => setSub4(e.target.value)}
            >
              <option selected value="...">
                Selecione uma subcategoria
              </option>
              {filtrodesubcategoria.map((item) => {
                return (
                  <>
                    <option value={item.sub1}>{item.sub1}</option>
                    <option value={item.sub2}>{item.sub2}</option>
                    <option value={item.sub3}>{item.sub3}</option>
                    <option value={item.sub4}>{item.sub4}</option>
                  </>
                );
              })}
            </select>
          </div>
        </div>
        <input
          type="text"
          name="SKU"
          id="sku"
          placeholder="SKU"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
        />
        <input
          type="text"
          name="modelo"
          id="modelo"
          placeholder="Titulo do produto"
          value={modelo}
          onChange={(e) => setmodelo(e.target.value)}
        />{" "}
        <div className="input-categoria">
          <input
            type="text"
            name="preco maior"
            placeholder="preco maior"
            id="preco"
            value={precomaior}
            onChange={(e) => setPrecomaior(e.target.value)}
          />
          <input
            type="text"
            name="preco"
            placeholder="preço"
            id="preco"
            value={preco}
            onChange={(e) => setpreco(e.target.value)}
          />

          {/* <div className="box-select-btn">
            <select
              id="tipo"
              name="cars"
              value={marca}
              onChange={(e) => setmarca(e.target.value)}
            >
              <option> Marca </option>
            </select>
            <button type="button">+</button>
          </div> */}

          <div className="box-container-tamanhos-fotos-cores ">
            <h2 style={{ color: "#fff" }}>Tamanhos, Quantidades e Fotos</h2>
            <button
              type="button"
              id="add-cor-nova-pedido-roger-na-ultima-reuniao"
              onClick={modalCorAtualEnglish}
            >
              Cadastrar Nova Cor
            </button>
            <div id="position-create-product-example">
              <div className="box-inputs-tamanhos">
                {modalcadcores != false ? (
                  <div className="modal-cad-cores">
                    <input
                      type={"text"}
                      placeholder={"nome da cor em inglês"}
                      onChange={(e) => setCor(e.target.value)}
                    ></input>
                    <button type="button" onClick={cadCor}>
                      Salvar
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setModalcadcores(false);
                      }}
                    >
                      Fechar
                    </button>
                  </div>
                ) : (
                  ""
                )}
                {modalcadacategorias != false ? (
                  <div className="modal-cad-cores">
                    <input
                      type={"text"}
                      placeholder={"Digite uma categoria"}
                      onChange={(e) => setCategoriacadastro(e.target.value)}
                    ></input>

                    <div className="box-subcategoria">
                      <input
                        type={"text"}
                        value={subcategoria1}
                        onChange={(e) => setSubcategoria1(e.target.value)}
                        placeholder="Sub 1"
                      ></input>
                      <input
                        type={"text"}
                        value={subcategoria2}
                        onChange={(e) => setSubcategoria2(e.target.value)}
                        placeholder="Sub 2"
                      ></input>
                      <input
                        type={"text"}
                        value={subcategoria3}
                        onChange={(e) => setSubcategoria3(e.target.value)}
                        placeholder="Sub 3"
                      ></input>
                      <input
                        type={"text"}
                        value={subcategoria4}
                        onChange={(e) => setSubcategoria4(e.target.value)}
                        placeholder="Sub 4"
                      ></input>
                    </div>
                    <button type="button" onClick={cadCategoria}>
                      Salvar
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setModalcadcategorias(false);
                      }}
                    >
                      Fechar
                    </button>
                  </div>
                ) : (
                  ""
                )}

                <div className="box-select-btn" id="cor-ajust-left">
                  <select
                    id="tipo"
                    name="cars"
                    value={cor1}
                    onChange={(e) => setcor1(e.target.value)}
                  >
                    <option> Cores </option>
                    {datacores.map((item) => {
                      return (
                        <option type="button" value={item.cor}>
                          {item.cor}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    value={tm1}
                    placeholder="tamanho"
                    onChange={(e) => setTm1(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    value={qt1}
                    placeholder="quantidade"
                    onChange={(e) => setqt1(e.target.value)}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    value={tm2}
                    placeholder="tamanho"
                    onChange={(e) => setTm2(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    value={qt2}
                    placeholder="quantidade"
                    onChange={(e) => setqt2(e.target.value)}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    value={tm3}
                    placeholder="tamanho"
                    onChange={(e) => setTm3(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    value={qt3}
                    placeholder="quantidade"
                    onChange={(e) => setqt3(e.target.value)}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    value={tm4}
                    placeholder="tamanho"
                    onChange={(e) => setTm4(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    value={qt4}
                    placeholder="quantidade"
                    onChange={(e) => setqt4(e.target.value)}
                  ></input>
                </div>
                <div className="box-subcategoria">
                  <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto1(e)}></input>
                    <span>Foto 1 {nomearquivo1}</span>
                  </div>
                  <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto2(e)}></input>
                    <span>Foto 2 {nomearquivo2}</span>
                  </div>
                  <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto3(e)}></input>
                    <span>Foto 3 {nomearquivo3}</span>
                  </div>
                  {/* <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto4(e)}></input>
                    <span>Foto 4 {nomearquivo4}</span>
                  </div> */}
                </div>
              </div>

              <div className="box-inputs-tamanhos">
                <div className="box-select-btn" id="cor-ajust-left">
                  <select
                    id="tipo"
                    name="cars"
                    value={cor2}
                    onChange={(e) => setcor2(e.target.value)}
                  >
                    <option> Cores </option>
                    {datacores.map((item) => {
                      return <option value={item.cor}>{item.cor}</option>;
                    })}
                  </select>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="tamanho"
                    onChange={(e) => setTm5(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    placeholder="quantidade"
                    onChange={(e) => setqt5(e.target.value)}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="tamanho"
                    onChange={(e) => setTm6(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    placeholder="quantidade"
                    onChange={(e) => setqt6(e.target.value)}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="tamanho"
                    onChange={(e) => setTm7(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    placeholder="quantidade"
                    onChange={(e) => setqt7(e.target.value)}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="tamanho"
                    onChange={(e) => setTm8(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    placeholder="quantidade"
                    onChange={(e) => setqt8(e.target.value)}
                  ></input>
                </div>
                <div className="box-subcategoria">
                  <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto4(e)}></input>
                    <span>Foto 1 {nomearquivo4}</span>
                  </div>
                  <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto5(e)}></input>
                    <span>Foto 2 {nomearquivo5}</span>
                  </div>
                  <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto6(e)}></input>
                    <span>Foto 3 {nomearquivo6}</span>
                  </div>
                  {/* <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto8(e)}></input>
                    <span>Foto 4 {nomearquivo8}</span>
                  </div> */}
                </div>
              </div>
            </div>
            <div id="position-create-product-example">
              <div className="box-inputs-tamanhos">
                <div className="box-select-btn" id="cor-ajust-left">
                  <select
                    id="tipo"
                    name="cars"
                    value={cor3}
                    onChange={(e) => setcor3(e.target.value)}
                  >
                    <option> Cores </option>
                    {datacores.map((item) => {
                      return <option value={item.cor}>{item.cor}</option>;
                    })}
                  </select>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="tamanho"
                    onChange={(e) => setTm9(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    placeholder="quantidade"
                    onChange={(e) => setqt9(e.target.value)}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="tamanho"
                    onChange={(e) => setTm10(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    placeholder="quantidade"
                    onChange={(e) => setqt10(e.target.value)}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="tamanho"
                    onChange={(e) => setTm11(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    placeholder="quantidade"
                    onChange={(e) => setqt11(e.target.value)}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="tamanho"
                    onChange={(e) => setTm12(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    placeholder="quantidade"
                    onChange={(e) => setqt12(e.target.value)}
                  ></input>
                </div>
                <div className="box-subcategoria">
                  <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto7(e)}></input>
                    <span>Foto 1 {nomearquivo7}</span>
                  </div>
                  <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto8(e)}></input>
                    <span>Foto 2 {nomearquivo8}</span>
                  </div>
                  <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto9(e)}></input>
                    <span>Foto 3 {nomearquivo9}</span>
                  </div>
                  {/* <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto12(e)}></input>
                    <span>Foto 4 {nomearquivo12}</span>
                  </div> */}
                </div>
              </div>

              <div className="box-inputs-tamanhos">
                <div className="box-select-btn" id="cor-ajust-left">
                  <select
                    id="tipo"
                    name="cars"
                    value={cor4}
                    onChange={(e) => setcor4(e.target.value)}
                  >
                    <option> Cores </option>
                    {datacores.map((item) => {
                      return <option value={item.cor}>{item.cor}</option>;
                    })}
                  </select>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="tamanho"
                    onChange={(e) => setTm13(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    placeholder="quantidade"
                    onChange={(e) => setqt13(e.target.value)}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="tamanho"
                    onChange={(e) => setTm14(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    placeholder="quantidade"
                    onChange={(e) => setqt14(e.target.value)}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="tamanho"
                    onChange={(e) => setTm15(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    placeholder="quantidade"
                    onChange={(e) => setqt15(e.target.value)}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="tamanho"
                    onChange={(e) => setTm16(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    placeholder="quantidade"
                    onChange={(e) => setqt16(e.target.value)}
                  ></input>
                </div>
                <div className="box-subcategoria">
                  <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto10(e)}></input>
                    <span>Foto 1 {nomearquivo10}</span>
                  </div>
                  <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto11(e)}></input>
                    <span>Foto 2 {nomearquivo11}</span>
                  </div>
                  <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto12(e)}></input>
                    <span>Foto 3 {nomearquivo12}</span>
                  </div>
                  {/* <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto16(e)}></input>
                    <span>Foto 4 {nomearquivo16}</span>
                  </div> */}
                </div>
              </div>
            </div>
            <div id="position-create-product-example">
              <div className="box-inputs-tamanhos">
                <div className="box-select-btn" id="cor-ajust-left">
                  <select
                    id="tipo"
                    name="cars"
                    value={cor5}
                    onChange={(e) => setcor5(e.target.value)}
                  >
                    <option> Cores </option>
                    {datacores.map((item) => {
                      return <option value={item.cor}>{item.cor}</option>;
                    })}
                  </select>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="tamanho"
                    onChange={(e) => setTm17(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    placeholder="quantidade"
                    onChange={(e) => setqt17(e.target.value)}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="tamanho"
                    onChange={(e) => setTm18(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    placeholder="quantidade"
                    onChange={(e) => setqt18(e.target.value)}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="tamanho"
                    onChange={(e) => setTm19(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    placeholder="quantidade"
                    onChange={(e) => setqt19(e.target.value)}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="tamanho"
                    onChange={(e) => setTm20(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    placeholder="quantidade"
                    onChange={(e) => setqt20(e.target.value)}
                  ></input>
                </div>
                <div className="box-subcategoria">
                  <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto13(e)}></input>
                    <span>Foto 1 {nomearquivo13}</span>
                  </div>
                  <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto14(e)}></input>
                    <span>Foto 2 {nomearquivo14}</span>
                  </div>
                  <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto15(e)}></input>
                    <span>Foto 3 {nomearquivo15}</span>
                  </div>
                  {/* <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto20(e)}></input>
                    <span>Foto 4 {nomearquivo20}</span>
                  </div> */}
                </div>
              </div>

              <div className="box-inputs-tamanhos">
                <div className="box-select-btn" id="cor-ajust-left">
                  <select
                    id="tipo"
                    name="cars"
                    value={cor6}
                    onChange={(e) => setcor6(e.target.value)}
                  >
                    <option> Cores </option>
                    {datacores.map((item) => {
                      return <option value={item.cor}>{item.cor}</option>;
                    })}
                  </select>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="tamanho"
                    onChange={(e) => setTm21(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    placeholder="quantidade"
                    onChange={(e) => setqt21(e.target.value)}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="tamanho"
                    onChange={(e) => setTm22(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    placeholder="quantidade"
                    onChange={(e) => setqt22(e.target.value)}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="tamanho"
                    onChange={(e) => setTm23(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    placeholder="quantidade"
                    onChange={(e) => setqt23(e.target.value)}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="tamanho"
                    onChange={(e) => setTm24(e.target.value)}
                  ></input>
                  <input
                    type={"text"}
                    placeholder="quantidade"
                    onChange={(e) => setqt24(e.target.value)}
                  ></input>
                </div>
                <div className="box-subcategoria">
                  <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto16(e)}></input>
                    <span>Foto 1 {nomearquivo16}</span>
                  </div>
                  <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto17(e)}></input>
                    <span>Foto 2 {nomearquivo17}</span>
                  </div>
                  <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto18(e)}></input>
                    <span>Foto 3 {nomearquivo18}</span>
                  </div>
                  {/* <div className="box-input-file-btn">
                    <input type={"file"} onChange={(e) => upfoto24(e)}></input>
                    <span>Foto 4 {nomearquivo24}</span>
                  </div> */}
                </div>
              </div>
            </div>
            {/* <button type="button" id="btn-cad-mais-cores" onClick={renderplus}>
              +
            </button> */}
          </div>
        </div>
        <textarea
          name=""
          className="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Descrição do Produto"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        ></textarea>
        <span style={{ color: "#fff" }}>Produto está em promoção?</span>
        <select
          id="select-promocao"
          value={promocao}
          onChange={(e) => setPromocao(e.target.value)}
        >
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </select>
        <br></br>
        <span style={{ color: "#fff" }}>
          Este produto está em promoção por quantidade?
        </span>
        <select
          id="select-promocao"
          value={promocao2}
          onChange={(e) => setPromocao2(e.target.value)}
        >
          <option>...</option>
          <option value={"true"}>Sim</option>
          <option value={"false"}>Não</option>
        </select>
        <br />
        <span style={{ color: "white", fontWeight: "400" }}>
          Este produto contém brinde?
        </span>
        <select
          style={{ width: "80%", height: "40px" }}
          value={aparecercampobrinde}
          onChange={(e) => setAparecercampobrinde(e.target.value)}
        >
          <option value="...">...</option>
          <option value={"true"}>Sim</option>
          <option value={"false"}>Não</option>
        </select>
        <br />
        {promocao2 === "true" ? (
          <>
            <span style={{ color: "#fff" }}>
              A partir de quantos ativa a promoção?
            </span>
            <input
              type="number"
              value={qtdpromocao2}
              onChange={(e) => setQtdpromocao2(e.target.value)}
            ></input>
            <span style={{ color: "#fff" }}> % do desconto</span>
            <select
              name=""
              id="select-desconto-promo"
              onChange={(e) => setDesconto(e.target.value)}
            >
              <option selected value="...">
                ...
              </option>
              <option value="10">10%</option>
              <option value="20">20%</option>
              <option value="30">30%</option>
              <option value="40">40%</option>
              <option value="50">50%</option>
              <option value="60">60%</option>
              <option value="70">70%</option>
              <option value="80">80%</option>
              <option value="90">90%</option>
            </select>
          </>
        ) : (
          ""
        )}
        {aparecercampobrinde === "true" ? (
          <>
            <span style={{ color: "white", fontWeight: "400" }}>
              Informe o Brinde que acompanha este produto.
            </span>
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
        <span style={{ color: "#fff", marginTop: "20px" }}>
          Medidas do Pacote(peso(kg), medida(cm), formato(sempre 2))
          <br />
          Colocar somente o número
        </span>
        <div
          style={
            window.screen.width > 500
              ? { display: "flex", alignItems: "center" }
              : {}
          }
        >
          <input
            type={"text"}
            placeholder="peso(kg)"
            onChange={(e) => setPeso(e.target.value)}
          ></input>
          <input
            type={"text"}
            placeholder="comprimento"
            onChange={(e) => setComprimento(e.target.value)}
          ></input>
          <input
            type={"text"}
            placeholder="altura"
            onChange={(e) => setAltura(e.target.value)}
          ></input>
          <input
            type={"text"}
            placeholder="largura"
            onChange={(e) => setLargura(e.target.value)}
          ></input>
          <input
            type={"text"}
            placeholder="diametro"
            onChange={(e) => setDiametro(e.target.value)}
          ></input>
          <input
            type={"text"}
            placeholder="formato"
            onChange={(e) => setFormato(e.target.value)}
          ></input>
        </div>
        <button id="submit" type="submit">
          Salvar
        </button>
      </form>
      <br />
    </div>
  );
};

export default AdminCadastroProdutos;
