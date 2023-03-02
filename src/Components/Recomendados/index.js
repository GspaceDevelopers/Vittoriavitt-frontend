import React, { useEffect, useState, useContext } from 'react'
import './style.css'
import api from '../../services/api'
import { HiHeart } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { toast } from "react-toastify";
import { AuthContext } from '../../Contexts/auth';


export default function Recomendados(props) {
    const { usercliente } = useContext(AuthContext);

    const [fotocorselecionada, setFotocorselecionada] = useState(null);

    const [dataproduto, setDataproduto] = useState([])
    const [dadosedicao, setDadosedicao] = useState([])

    useEffect(()=>{
       api.get('/edicao')
       .then((data)=>{
        setDadosedicao(data.data)
       })
    },[])
    useEffect(() => {
        api.get(`/produto?produto=${props.produto}`)
            .then((data) => {
                setDataproduto(data.data)
            })
    }, [])
    function hoverimg1(item) {
        const index = dataproduto.findIndex(ind => ind._id == item._id)
        document.querySelectorAll('.imgitem')[index].setAttribute('src', `${item.cores.corPrimary.imgurl2}`)
    }
    function hoverimg2(item) {
        const index = dataproduto.findIndex(ind => ind._id == item._id)
        document.querySelectorAll('.imgitem')[index].setAttribute('src', `${item.cores.corPrimary.imgurl}`)
    }

    function right() {
        let rigthcontent = document.querySelectorAll(".box-itens-area-home")[0];
        rigthcontent.scrollBy(-350, 0);
    }
    function left() {
        let leftcontent = document.querySelectorAll(".box-itens-area-home")[0];
        leftcontent.scrollBy(350, 0);
    }

    function addfavoritos(item) {
        const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");

        let index = dataproduto.findIndex(data => data._id == item._id)
        document.querySelectorAll('.incon-btn-fav')[index].setAttribute('style', 'color:red')

        let arrayfavoritos = {
            _id: item._id,
            cpf: usercliente.cpf,
            imgurl: item.cores.corPrimary.imgurl,
            marca: item.marca,
            modelo: item.modelo,
            preco: item.preco,
        };

        favoritos.push(arrayfavoritos);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));

        toast.success("Item adicionado aos favoritos");
    }

    return (
        <div className='container-pai-recomendados'>
            <h2>Recomendados</h2>
            <div className='contianer-recomendados'>

                <article className="box-itens-area-home" id='recomendados'>
                    <button onClick={right} id="btn-arrow-left"><IoIosArrowBack size={30}></IoIosArrowBack></button>
                    <button onClick={left} id="btn-arrow-right"><IoIosArrowForward size={30}></IoIosArrowForward></button>
                    {dataproduto.map((item) => {
                        return (
                            <div key={item._id} className="item-home">
                                {fotocorselecionada == null ? (
                                    <img
                                        onMouseEnter={() => hoverimg1(item)}
                                        onMouseOut={() => hoverimg2(item)}
                                        className="imgitem"
                                        onClick={() =>
                                            (window.location.href = `/PaginaProduto/${item._id}`)
                                        }
                                        src={item.cores.corPrimary.imgurl}
                                    ></img>
                                ) : (
                                    <img
                                        onMouseEnter={() => hoverimg1(item)}
                                        onMouseOut={() => hoverimg2(item)}
                                        className="imgitem"
                                        onClick={() =>
                                            (window.location.href = `/PaginaProduto/${item._id}`)
                                        }
                                        src={fotocorselecionada}
                                    ></img>
                                )}
                                <button id="btn-fav-home">
                                    <HiHeart
                                        className="incon-btn-fav"
                                        size={20}
                                        onClick={() => addfavoritos(item)}
                                    ></HiHeart>
                                </button>
                                <h3>{item.modelo}</h3>
                                {item.promocao2 == true ? <p style={window.screen.width > 500 ? { color: "darkgreen", fontWeight: "600", background: "rgb(149, 255, 149)", padding: "5px", borderRadius: "5px", height: "60px" } : { color: "darkgreen", fontWeight: "600", background: "rgb(149, 255, 149)", padding: "5px", borderRadius: "5px", fontSize: "10px" }}>Comprando {item.qtdpromocao2} produto(s) ou mais voçê ganha {item.desconto}% de desconto!</p> : <div style={{ height: "60px" }}></div>}
                                <h4>R${item.preco}</h4>
                                <p style={{ color: "#666666", marginBottom: '15px' }}>Em até {dadosedicao.map(data => data.parcelas)[0]}x de {Number(parseFloat(item.preco) / Number(dadosedicao.map(data => data.parcelas)[0])).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>

                                <div style={{ display: "flex" }} id="label-div-ajus-absolute">
                                    {item.cores.corPrimary.cor1 != "" ? (
                                        <div>
                                            <input
                                                value={item.cores.corPrimary.cor1}
                                                name="cores3"
                                                type="radio"
                                                onChange={() =>
                                                    document
                                                        .querySelectorAll(".imgitem")
                                                    [
                                                        dataproduto.findIndex(
                                                            (index) => index._id === item._id
                                                        )
                                                    ].setAttribute(
                                                        "src",
                                                        `${item.cores.corPrimary.imgurl}`
                                                    )
                                                }
                                            ></input>
                                            <label
                                                style={{ background: item.cores.corPrimary.cor1 }}
                                            ></label>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    {item.cores.corSecondary.cor2 != "" ? (
                                        <div>
                                            <input
                                                value={item.cores.corSecondary.cor2}
                                                name="cores3"
                                                type="radio"
                                                onChange={() =>
                                                    document
                                                        .querySelectorAll(".imgitem")
                                                    [
                                                        dataproduto.findIndex(
                                                            (index) => index._id === item._id
                                                        )
                                                    ].setAttribute(
                                                        "src",
                                                        `${item.cores.corSecondary.imgurl3}`
                                                    )
                                                }
                                            ></input>
                                            <label
                                                style={{ background: item.cores.corSecondary.cor2 }}
                                            ></label>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    {item.cores.corTertiary.cor3 != "" ? (
                                        <div>
                                            <input
                                                value={item.cores.corTertiary.cor3}
                                                name="cores3"
                                                type="radio"
                                                onChange={() =>
                                                    document
                                                        .querySelectorAll(".imgitem")
                                                    [
                                                        dataproduto.findIndex(
                                                            (index) => index._id === item._id
                                                        )
                                                    ].setAttribute(
                                                        "src",
                                                        `${item.cores.corTertiary.imgurl5}`
                                                    )
                                                }
                                            ></input>
                                            <label
                                                style={{ background: item.cores.corTertiary.cor3 }}
                                            ></label>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    {item.cores.corQuaternary.cor4 != "" ? (
                                        <div>
                                            <input
                                                value={item.cores.corQuaternary.cor4}
                                                name="cores3"
                                                type="radio"
                                                onChange={() =>
                                                    document
                                                        .querySelectorAll(".imgitem")
                                                    [
                                                        dataproduto.findIndex(
                                                            (index) => index._id === item._id
                                                        )
                                                    ].setAttribute(
                                                        "src",
                                                        `${item.cores.corQuaternary.imgurl7}`
                                                    )
                                                }
                                            ></input>
                                            <label
                                                style={{ background: item.cores.corQuaternary.cor4 }}
                                            ></label>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </article>
            </div>
        </div>
    )
}