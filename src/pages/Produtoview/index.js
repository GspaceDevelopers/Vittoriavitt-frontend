import React, { useEffect, useState } from "react"
import api from "../../services/api"
import { useParams, Link } from 'react-router-dom'
import './produto.css'
import logorr11 from '../../img/cropped-logo-final-cropped.webp'
import { MdArrowBack, MdAddShoppingCart, MdFilterListAlt } from 'react-icons/md'
import { FiTrash } from 'react-icons/fi'
import { toast } from 'react-toastify'

export default function Produtoview() {
    const { produtoparamer, tipoparamer } = useParams();

    const [produto, setProduto] = useState([])
    const [modaldetails, setModaldetails] = useState(false)
    const [iteminfo, setIteminfo] = useState([])
    const [quantidade, setQuantidade] = useState(1)
    const [modalCarrinho, setModalCarrinho] = useState(false)
    const [itensnocarrinho, setItensnocarrinho] = useState([])
    const [cor, setCor] = useState('')
    const [imginfoview, setImginfoview] = useState(null)
    const [tamanho, setTamanho] = useState('')
    const [corescolhida, setCorescolhida] = useState('')
    const [showvalorfinal, setShowvalorfinal] = useState([])

    useEffect(() => {
        async function loadprodutos() {

            const response = await api.get(`/tipo/produto?produto=${produtoparamer}&tipo=${tipoparamer}`)

            setProduto(response.data)

            if (itensnocarrinho.length === 0) {
                setModalCarrinho(false)
            }
        }
        loadprodutos()

        setItensnocarrinho(JSON.parse(localStorage.getItem('carrinho') || '[]'))
        const arrvalorfinal = (JSON.parse(localStorage.getItem('valorfinal') || '[]'))

        let soma = 0
        let novoarray = []
        arrvalorfinal.map((item) => {
            novoarray.push(item.preco)
        })

        for (let i = 0; i < novoarray.length; i++) {
            soma += novoarray[i]
        }

        localStorage.setItem('@valorapagar', JSON.stringify(soma.toLocaleString('pt-bt', { style: 'currency', currency: 'BRL' })))
        setShowvalorfinal(JSON.parse(localStorage.getItem('@valorapagar') || '[]'))

    }, [])

    function showdetalhes(item) {
        setIteminfo(item)
        setModaldetails(true)
    }

    function additem(iteminfo, quantidade) {
        const datacart = JSON.parse(localStorage.getItem('carrinho') || '[]')
        const valorfinal = JSON.parse(localStorage.getItem('valorfinal') || '[]')

        let itemjaadd = datacart.some(itemadd => itemadd._id === iteminfo._id)

        if (itemjaadd) {
            toast.error('item ja adicionado')
            return;
        }
        if (quantidade < 1) {
            toast.error('Quantidade min: 1 item')
            return;
        }
        if (corescolhida === '') {
            toast.error('ecolha a cor')
            return;
        }
        if (tamanho === '') {
            toast.error('escolha o tamanho')
            return;
        }

        let price = iteminfo.preco.replace(',', '.')


        datacart.push({
            _id: iteminfo._id,
            produto: iteminfo.produto,
            modelo: iteminfo.modelo,
            categoria: iteminfo.categoria,
            imgurl: iteminfo.cores.corPrimary.imgurl,
            descricao: iteminfo.descricao,
            preco: parseFloat(price) * Number(quantidade),
            tamanho: tamanho,
            cor: corescolhida,
            quantidade: quantidade
        })

        let pricecont = price * Number(quantidade)
        valorfinal.push({
            _id: iteminfo._id,
            preco: pricecont
        })

        localStorage.setItem('carrinho', JSON.stringify(datacart))
        localStorage.setItem('valorfinal', JSON.stringify(valorfinal))

        toast.success('item adicionado com sucesso')
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }

    function deletaritem(_id) {
        let filtro = itensnocarrinho.filter((item) => {
            return (item._id !== _id)
        })
        setItensnocarrinho(filtro)
        localStorage.setItem('carrinho', JSON.stringify(filtro) || [])
        localStorage.setItem('valorfinal', JSON.stringify(filtro) || [])

        window.location.reload();
    }

    function abrirmodal() {
        if (itensnocarrinho.length > 0) {
            setModalCarrinho(true)
        } else {
            toast.error('carrinho vazio!')
        }
    }
    async function filtrar(cor) {
        if (cor === '') {
            return;
        }
        let filtrocor = produto.filter((item) => {
            return (item.cor == cor)
        })
        setProduto(filtrocor)
    }


    function closemodalview() {
        setModaldetails(false)
        setImginfoview(null)
    }

    function somaqtd() {

        setQuantidade(quantidade + 1)
    }
    function subqutd() {
        if (quantidade == 1) {
            return;
        }
        setQuantidade(quantidade - 1)
    }

    function tamanhoescolhido1() {
        document.getElementById('tmbox1').setAttribute('style', 'background:red;')
        document.getElementById('tmbox2').setAttribute('style', 'background:white')
        document.getElementById('tmbox3').setAttribute('style', 'background:white')
        document.getElementById('tmbox4').setAttribute('style', 'background:white')
    }
    function tamanhoescolhido2() {
        document.getElementById('tmbox2').setAttribute('style', 'background:red;')
        document.getElementById('tmbox1').setAttribute('style', 'background:white')
        document.getElementById('tmbox3').setAttribute('style', 'background:white')
        document.getElementById('tmbox4').setAttribute('style', 'background:white')
    }
    function tamanhoescolhido3() {
        document.getElementById('tmbox3').setAttribute('style', 'background:red;')
        document.getElementById('tmbox4').setAttribute('style', 'background:white')
        document.getElementById('tmbox2').setAttribute('style', 'background:white')
        document.getElementById('tmbox1').setAttribute('style', 'background:white')
    }
    function tamanhoescolhido4() {
        document.getElementById('tmbox4').setAttribute('style', 'background:red;')
        document.getElementById('tmbox3').setAttribute('style', 'background:white')
        document.getElementById('tmbox2').setAttribute('style', 'background:white')
        document.getElementById('tmbox1').setAttribute('style', 'background:white')
    }

    function tamanhoescolhido5() {
        document.getElementById('tmbox5').setAttribute('style', 'background:red;')
        document.getElementById('tmbox6').setAttribute('style', 'background:white')
        document.getElementById('tmbox7').setAttribute('style', 'background:white')
        document.getElementById('tmbox8').setAttribute('style', 'background:white')
    }
    function tamanhoescolhido6() {
        document.getElementById('tmbox6').setAttribute('style', 'background:red;')
        document.getElementById('tmbox5').setAttribute('style', 'background:white')
        document.getElementById('tmbox7').setAttribute('style', 'background:white')
        document.getElementById('tmbox8').setAttribute('style', 'background:white')
    }
    function tamanhoescolhido7() {
        document.getElementById('tmbox7').setAttribute('style', 'background:red; ')
        document.getElementById('tmbox6').setAttribute('style', 'background:white')
        document.getElementById('tmbox8').setAttribute('style', 'background:white')
        document.getElementById('tmbox5').setAttribute('style', 'background:white')
    }
    function tamanhoescolhido8() {
        document.getElementById('tmbox8').setAttribute('style', 'background:red; ')
        document.getElementById('tmbox7').setAttribute('style', 'background:white')
        document.getElementById('tmbox6').setAttribute('style', 'background:white')
        document.getElementById('tmbox5').setAttribute('style', 'background:white')
    }

    function tamanhoescolhido9() {
        document.getElementById('tmbox9').setAttribute('style', 'background:red; ')
        document.getElementById('tmbox10').setAttribute('style', 'background:white')
        document.getElementById('tmbox11').setAttribute('style', 'background:white')
        document.getElementById('tmbox12').setAttribute('style', 'background:white')
    }
    function tamanhoescolhido10() {
        document.getElementById('tmbox10').setAttribute('style', 'background:red; ')
        document.getElementById('tmbox9').setAttribute('style', 'background:white')
        document.getElementById('tmbox11').setAttribute('style', 'background:white')
        document.getElementById('tmbox12').setAttribute('style', 'background:white')
    }
    function tamanhoescolhido11() {
        document.getElementById('tmbox11').setAttribute('style', 'background:red; ')
        document.getElementById('tmbox12').setAttribute('style', 'background:white')
        document.getElementById('tmbox10').setAttribute('style', 'background:white')
        document.getElementById('tmbox9').setAttribute('style', 'background:white')
    }
    function tamanhoescolhido12() {
        document.getElementById('tmbox12').setAttribute('style', 'background:red; ')
        document.getElementById('tmbox11').setAttribute('style', 'background:white')
        document.getElementById('tmbox10').setAttribute('style', 'background:white')
        document.getElementById('tmbox9').setAttribute('style', 'background:white')
    }

    function tamanhoescolhido13() {
        document.getElementById('tmbox13').setAttribute('style', 'background:red; ')
        document.getElementById('tmbox14').setAttribute('style', 'background:white')
        document.getElementById('tmbox15').setAttribute('style', 'background:white')
        document.getElementById('tmbox16').setAttribute('style', 'background:white')
    }
    function tamanhoescolhido14() {
        document.getElementById('tmbox14').setAttribute('style', 'background:red; ')
        document.getElementById('tmbox15').setAttribute('style', 'background:white')
        document.getElementById('tmbox13').setAttribute('style', 'background:white')
        document.getElementById('tmbox16').setAttribute('style', 'background:white')
    }
    function tamanhoescolhido15() {
        document.getElementById('tmbox15').setAttribute('style', 'background:red; ')
        document.getElementById('tmbox14').setAttribute('style', 'background:white')
        document.getElementById('tmbox13').setAttribute('style', 'background:white')
        document.getElementById('tmbox16').setAttribute('style', 'background:white')
    }
    function tamanhoescolhido16() {
        document.getElementById('tmbox16').setAttribute('style', 'background:red; ')
        document.getElementById('tmbox15').setAttribute('style', 'background:white')
        document.getElementById('tmbox14').setAttribute('style', 'background:white')
        document.getElementById('tmbox13').setAttribute('style', 'background:white')
    }


    return (
        <div id="content-main">
            <header>
                <button onClick={() => window.location.href = '/'}><MdArrowBack size={40} color='white'></MdArrowBack></button>
                <img src={logorr11}></img>
                <button className="animationcart" onClick={abrirmodal}><MdAddShoppingCart size={30} color='#fff'></MdAddShoppingCart><p style={{
                    width: "15px", height: "15px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", backgroundColor: "green", borderRadius: "50%", padding: "2px"
                }}>{itensnocarrinho.length}</p> <span style={{ color: "white", marginLeft: "10px" }}>{showvalorfinal.toLocaleString('pt-bt', { style: 'currency', currency: 'BRL' })}</span></button>
            </header>
            <h2>Peças exclusivas!</h2>
            <div className="content-main-itens">
                <div id="filtro">
                    <span>Filtros</span>
                    <select onChange={(e) => setCor(e.target.value)}>
                        <option value=''>Cores</option>
                        {produto.map((itemcor) => {
                            return (
                                <>
                                    <option value={itemcor.cor}>{itemcor.cor}</option>
                                </>
                            )
                        })}
                    </select><button onClick={() => filtrar(cor)}><MdFilterListAlt size={20}></MdFilterListAlt> <p style={{ fontSize: "10px", textTransform: "capitalize" }}>{cor}</p></button><button onClick={() => window.location.reload()}>Limpar</button>
                </div>
                <article id="itens-api">

                    {produto.map((item) => {
                        return (
                            <div id="item" key={item.id}>
                                <img style={{ width: "200px", height: "250px", objectFit: "cover" }} src={item.cores.corPrimary.imgurl}></img>
                                <span>{item.modelo}</span>
                                <strong>R${item.preco}</strong>
                                <button id="btn-maisdetails" onClick={() => showdetalhes(item)}>Mais detalhes</button>
                            </div>
                        )
                    })}
                </article>
            </div>
            {modaldetails != false ?
                <div id='desfoca-fundo1'>
                    <div style={{ width: "100%", height: "100%", background: "#fff" }}>
                        <div>
                            <button onClick={closemodalview} id='closebuton'>X</button>
                        </div>
                        <div className="modaldetails1">
                            <div className='box-img-item1'>
                                <div style={{ display: "flex", gap: "5px" }} >
                                    <img id='img-main' src={imginfoview == null ? iteminfo.cores.corPrimary.imgurl : imginfoview}></img>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                        <button onClick={() => setImginfoview(iteminfo.cores.corPrimary.imgurl)}>{iteminfo.cores.corPrimary.imgurl === '' ? '' : <img className="styleimg" id="img1" src={iteminfo.cores.corPrimary.imgurl}></img>}</button>
                                        <button onClick={() => setImginfoview(iteminfo.cores.corPrimary.imgurl2)}>{iteminfo.cores.corPrimary.imgurl2 === '' ? '' : <img className="styleimg" id="img2" src={iteminfo.cores.corPrimary.imgurl2}></img>}</button>
                                        <button onClick={() => setImginfoview(iteminfo.cores.corSecondary.imgurl3)}>{iteminfo.cores.corSecondary.imgurl3 === '' ? '' : <img className="styleimg" id="img3" src={iteminfo.cores.corSecondary.imgurl3}></img>}</button>
                                        <button onClick={() => setImginfoview(iteminfo.cores.corSecondary.imgurl4)}>{iteminfo.cores.corSecondary.imgurl4 === '' ? '' : <img className="styleimg" id="img4" src={iteminfo.cores.corSecondary.imgurl4}></img>}</button>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                        <button onClick={() => setImginfoview(iteminfo.cores.corTertiary.imgurl5)}>{iteminfo.cores.corTertiary.imgurl5 === '' ? '' : <img className="styleimg" id="img5" src={iteminfo.cores.corTertiary.imgurl5}></img>}</button>
                                        <button onClick={() => setImginfoview(iteminfo.cores.corTertiary.imgurl6)}>{iteminfo.cores.corTertiary.imgurl6 === '' ? '' : <img className="styleimg" id="img6" src={iteminfo.cores.corTertiary.imgurl6}></img>}</button>
                                        <button onClick={() => setImginfoview(iteminfo.cores.corQuaternary.imgurl7)}>{iteminfo.cores.corQuaternary.imgurl7 === '' ? '' : <img className="styleimg" id="img7" src={iteminfo.cores.corQuaternary.imgurl7}></img>}</button>
                                        <button onClick={() => setImginfoview(iteminfo.cores.corQuaternary.imgurl8)}>{iteminfo.cores.corQuaternary.imgurl8 === '' ? '' : <img className="styleimg" id="img8" src={iteminfo.cores.corQuaternary.imgurl8}></img>}</button>
                                    </div>
                                </div>
                                {window.screen.width > 500 ? <div id='desc-produto'>
                                    <p id="descricao">{iteminfo.descricao}</p>
                                </div> : ""}
                            </div>
                            <div className='box-info-itens1'>
                                <span>{iteminfo.modelo}</span>
                                {window.screen.width < 500 ? <p id="descricao">{iteminfo.descricao}</p> : ''}
                                <span>R$ {iteminfo.preco}</span>

                                <span>Cores disponiveis</span>
                                <div id="colorsOptions1">

                                    {iteminfo.cores.corPrimary.cor1 != '' ? <div className="colorBox">
                                        <img className='imgcor' src={iteminfo.cores.corPrimary.imgurl}></img>
                                        <input type="radio" name='radio1' value={iteminfo.cores.corPrimary.cor1} onClick={() => setImginfoview(iteminfo.cores.corPrimary.imgurl)} onChange={() => setCorescolhida(iteminfo.cores.corPrimary.cor1)}></input>
                                        <p>{iteminfo.cores.corPrimary.cor1}</p>
                                    </div> : ''}
                                    {iteminfo.cores.corSecondary.cor2 != '' ? <div className="colorBox">
                                        <img className='imgcor' src={iteminfo.cores.corSecondary.imgurl3}></img>
                                        <input type="radio" name='radio1' value={iteminfo.cores.corSecondary.cor2} onClick={() => setImginfoview(iteminfo.cores.corSecondary.imgurl3)} onChange={() => setCorescolhida(iteminfo.cores.corSecondary.cor2)}></input>
                                        <p>{iteminfo.cores.corSecondary.cor2}</p>
                                    </div> : ''}
                                    {iteminfo.cores.corTertiary.cor3 != '' ? <div className="colorBox">
                                        <img className='imgcor' src={iteminfo.cores.corTertiary.imgurl6}></img>

                                        <input type="radio" name='radio1' value={iteminfo.cores.corTertiary.cor3} onClick={() => setImginfoview(iteminfo.cores.corTertiary.imgurl5)} onChange={() => setCorescolhida(iteminfo.cores.corTertiary.cor3)}></input>
                                        <p>{iteminfo.cores.corTertiary.cor3}</p>
                                    </div> : ''}
                                    {iteminfo.cores.corQuaternary.cor4 != '' ? <div className="colorBox">
                                        <img className='imgcor' src={iteminfo.cores.corQuaternary.imgurl8}></img>

                                        <input type="radio" name='radio1' value={iteminfo.cores.corQuaternary.cor4} onClick={() => setImginfoview(iteminfo.cores.corQuaternary.imgurl7)} onChange={() => setCorescolhida(iteminfo.cores.corQuaternary.cor4)}></input>
                                        <p>{iteminfo.cores.corQuaternary.cor4}</p>
                                    </div> : ''}

                                </div>
                                <p>Tamanhos disponiveis</p>
                                <div id="tamanhosOptions1">

                                    <>
                                        {corescolhida === iteminfo.cores.corPrimary.cor1 ?
                                            <div style={{ display: "flex" }}>
                                                {iteminfo.cores.corPrimary.tamanhos.tamanhoOne.tamanho1 != '' ? <div className="tamanhoBox">
                                                    <div className='tape' id='tmbox1'></div>
                                                    <input type="radio" name='radio' value={iteminfo.cores.corPrimary.tamanhos.tamanhoOne.tamanho1} onClick={tamanhoescolhido1} onChange={() => setTamanho(iteminfo.cores.corPrimary.tamanhos.tamanhoOne.tamanho1)}></input>
                                                    <p>{iteminfo.cores.corPrimary.tamanhos.tamanhoOne.tamanho1}</p>
                                                </div> : ''}
                                                {iteminfo.cores.corPrimary.tamanhos.tamanhoTwo.tamanho2 != '' ? <div className="tamanhoBox" >
                                                    <div className='tape' id='tmbox2'></div>
                                                    <input type="radio" name='radio' value={iteminfo.cores.corPrimary.tamanhos.tamanhoTwo.tamanho2} onClick={tamanhoescolhido2} onChange={() => setTamanho(iteminfo.cores.corPrimary.tamanhos.tamanhoTwo.tamanho2)}></input>
                                                    <p>{iteminfo.cores.corPrimary.tamanhos.tamanhoTwo.tamanho2}</p>
                                                </div> : ''}
                                                {iteminfo.cores.corPrimary.tamanhos.tamanhoThree.tamanho3 != '' ? <div className="tamanhoBox" >
                                                    <div className='tape' id='tmbox3'></div>
                                                    <input type="radio" name='radio' value={iteminfo.cores.corPrimary.tamanhos.tamanhoThree.tamanho3} onClick={tamanhoescolhido3} onChange={() => setTamanho(iteminfo.cores.corPrimary.tamanhos.tamanhoThree.tamanho3)}></input>
                                                    <p>{iteminfo.cores.corPrimary.tamanhos.tamanhoThree.tamanho3}</p>
                                                </div> : ''}
                                                {iteminfo.cores.corPrimary.tamanhos.tamanhoFour.tamanho4 != '' ? <div className="tamanhoBox">
                                                    <div className='tape' id='tmbox4'></div>
                                                    <input type="radio" name='radio' value={iteminfo.cores.corPrimary.tamanhos.tamanhoFour.tamanho4} onClick={tamanhoescolhido4} onChange={() => setTamanho(iteminfo.cores.corPrimary.tamanhos.tamanhoFour.tamanho4)}></input>
                                                    <p>{iteminfo.cores.corPrimary.tamanhos.tamanhoFour.tamanho4}</p>
                                                </div> : ''}
                                            </div> :
                                            ''}

                                    </>
                                    {corescolhida === iteminfo.cores.corSecondary.cor2 ?
                                        <div style={{ display: "flex" }}>
                                            {iteminfo.cores.corSecondary.tamanhos.tamanhoOne.tamanho5 != '' ? <div className="tamanhoBox" id=''>
                                                <div className='tape' id='tmbox5'></div>
                                                <input type="radio" name='radio' value={iteminfo.cores.corSecondary.tamanhos.tamanhoOne.tamanho5} onClick={tamanhoescolhido5} onChange={() => setTamanho(iteminfo.cores.corSecondary.tamanhos.tamanhoOne.tamanho5)}></input>
                                                <p>{iteminfo.cores.corSecondary.tamanhos.tamanhoOne.tamanho5}</p>
                                            </div> : ''}
                                            {iteminfo.cores.corSecondary.tamanhos.tamanhoTwo.tamanho6 != '' ? <div className="tamanhoBox" id=''>
                                                <div className='tape' id='tmbox6'></div>
                                                <input type="radio" name='radio' value={iteminfo.cores.corSecondary.tamanhos.tamanhoTwo.tamanho6} onClick={tamanhoescolhido6} onChange={() => setTamanho(iteminfo.cores.corSecondary.tamanhos.tamanhoTwo.tamanho6)}></input>
                                                <p>{iteminfo.cores.corSecondary.tamanhos.tamanhoTwo.tamanho6}</p>
                                            </div> : ''}
                                            {iteminfo.cores.corSecondary.tamanhos.tamanhoThree.tamanho7 != '' ? <div className="tamanhoBox" id=''>
                                                <div className='tape' id='tmbox7'></div>
                                                <input type="radio" name='radio' value={iteminfo.cores.corSecondary.tamanhos.tamanhoThree.tamanho7} onClick={tamanhoescolhido7} onChange={() => setTamanho(iteminfo.cores.corSecondary.tamanhos.tamanhoThree.tamanho7)}></input>
                                                <p>{iteminfo.cores.corSecondary.tamanhos.tamanhoThree.tamanho7}</p>
                                            </div> : ''}
                                            {iteminfo.cores.corSecondary.tamanhos.tamanhoFour.tamanho8 != '' ? <div className="tamanhoBox" id=''>
                                                <div className='tape' id='tmbox8'></div>
                                                <input type="radio" name='radio' value={iteminfo.cores.corPrimary.tamanhos.tamanhoFour.tamanho8} onClick={tamanhoescolhido8} onChange={() => setTamanho(iteminfo.cores.corPrimary.tamanhos.tamanhoFour.tamanho8)}></input>
                                                <p>{iteminfo.cores.corSecondary.tamanhos.tamanhoFour.tamanho8}</p>
                                            </div> : ''}
                                        </div> : ''}

                                    {corescolhida === iteminfo.cores.corTertiary.cor3 ?
                                        <div style={{ display: "flex" }}>
                                            {iteminfo.cores.corTertiary.tamanhos.tamanhoOne.tamanho9 != '' ? <div className="tamanhoBox">
                                                <div className='tape' id='tmbox9'></div>
                                                <input type="radio" name='radio' value={iteminfo.cores.corTertiary.tamanhos.tamanhoOne.tamanho9} onClick={tamanhoescolhido9} onChange={() => setTamanho(iteminfo.cores.corTertiary.tamanhos.tamanhoOne.tamanho9)}></input>
                                                <p>{iteminfo.cores.corTertiary.tamanhos.tamanhoOne.tamanho9}</p>
                                            </div> : ''}
                                            {iteminfo.cores.corTertiary.tamanhos.tamanhoTwo.tamanho10 != '' ? <div className="tamanhoBox">
                                                <div className='tape' id='tmbox10'></div>
                                                <input type="radio" name='radio' value={iteminfo.cores.corTertiary.tamanhos.tamanhoTwo.tamanho10} onClick={tamanhoescolhido10} onChange={() => setTamanho(iteminfo.cores.corTertiary.tamanhos.tamanhoTwo.tamanho10)}></input>
                                                <p>{iteminfo.cores.corTertiary.tamanhos.tamanhoTwo.tamanho10}</p>
                                            </div> : ''}
                                            {iteminfo.cores.corTertiary.tamanhos.tamanhoThree.tamanho11 != '' ? <div className="tamanhoBox">
                                                <div className='tape' id='tmbox11'></div>
                                                <input type="radio" name='radio' value={iteminfo.cores.corTertiary.tamanhos.tamanhoThree.tamanho11} onClick={tamanhoescolhido11} onChange={() => setTamanho(iteminfo.cores.corTertiary.tamanhos.tamanhoThree.tamanho11)}></input>
                                                <p>{iteminfo.cores.corTertiary.tamanhos.tamanhoThree.tamanho11}</p>
                                            </div> : ''}
                                            {iteminfo.cores.corTertiary.tamanhos.tamanhoFour.tamanho12 != '' ? <div className="tamanhoBox">
                                                <div className='tape' id='tmbox12'></div>
                                                <input type="radio" name='radio' value={iteminfo.cores.corTertiary.tamanhos.tamanhoFour.tamanho12} onClick={tamanhoescolhido12} onChange={() => setTamanho(iteminfo.cores.corTertiary.tamanhos.tamanhoFour.tamanho12)}></input>
                                                <p>{iteminfo.cores.corTertiary.tamanhos.tamanhoFour.tamanho12}</p>
                                            </div> : ''}
                                        </div> : ''}

                                    {corescolhida === iteminfo.cores.corQuaternary.cor4 ?
                                        <div style={{ display: "flex" }}>
                                            {iteminfo.cores.corQuaternary.tamanhos.tamanhoOne.tamanho13 != '' ? <div className="tamanhoBox">
                                                <div className='tape' id='tmbox13'></div>
                                                <input type="radio" name='radio' value={iteminfo.cores.corQuaternary.tamanhos.tamanhoOne.tamanho13} onClick={tamanhoescolhido13} onChange={() => setTamanho(iteminfo.cores.corQuaternary.tamanhos.tamanhoOne.tamanho13)}></input>
                                                <p>{iteminfo.cores.corQuaternary.tamanhos.tamanhoOne.tamanho13}</p>
                                            </div> : ''}
                                            {iteminfo.cores.corQuaternary.tamanhos.tamanhoTwo.tamanho14 != '' ? <div className="tamanhoBox">
                                                <div className='tape' id='tmbox14'></div>
                                                <input type="radio" name='radio' value={iteminfo.cores.corQuaternary.tamanhos.tamanhoTwo.tamanho14} onClick={tamanhoescolhido14} onChange={() => setTamanho(iteminfo.cores.corQuaternary.tamanhos.tamanhoTwo.tamanho14)}></input>
                                                <p>{iteminfo.cores.corQuaternary.tamanhos.tamanhoTwo.tamanho14}</p>
                                            </div> : ''}
                                            {iteminfo.cores.corQuaternary.tamanhos.tamanhoThree.tamanho15 != '' ? <div className="tamanhoBox">
                                                <div className='tape' id='tmbox15'></div>
                                                <input type="radio" name='radio' value={iteminfo.cores.corQuaternary.tamanhos.tamanhoThree.tamanho15} onClick={tamanhoescolhido15} onChange={() => setTamanho(iteminfo.cores.corQuaternary.tamanhos.tamanhoThree.tamanho15)}></input>
                                                <p>{iteminfo.cores.corQuaternary.tamanhos.tamanhoThree.tamanho15}</p>
                                            </div> : ''}
                                            {iteminfo.cores.corQuaternary.tamanhos.tamanhoFour.tamanho16 != '' ? <div className="tamanhoBox">
                                                <div className='tape' id='tmbox16'></div>
                                                <input type="radio" name='radio' value={iteminfo.cores.corQuaternary.tamanhos.tamanhoFour.tamanho16} onClick={tamanhoescolhido16} onChange={() => setTamanho(iteminfo.cores.corQuaternary.tamanhos.tamanhoFour.tamanho16)}></input>
                                                <p>{iteminfo.cores.corQuaternary.tamanhos.tamanhoFour.tamanho16}</p>
                                            </div> : ''}
                                        </div> : ''}
                                </div>
                                <div style={{ display: "flex" }}></div>
                                <div id="box-final1"><button className="btnqtd" onClick={subqutd}>-</button><span>{quantidade}</span><button className="btnqtd" onClick={somaqtd}>+</button>
                                    <button id="addcarrinho1" onClick={() => additem(iteminfo, quantidade)}>Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : ''
            }


            {modalCarrinho != false ? <div className="modalCarrinhoHome">
                <div id="closecart"><button onClick={() => setModalCarrinho(false)}>X</button></div>
                <article id="info-item-carrinho">
                    {itensnocarrinho.map((item) => {
                        return (
                            <div className="content-cart">
                                <img src={item.imgurl}></img>
                                <span>{item.modelo}</span>
                                <span>Cor: {item.cor}</span>
                                <span>Tamanho: {item.tamanho}</span>
                                <span>Qtd: {item.quantidade}</span>
                                <strong>{item.preco.toLocaleString('pt-bt', { style: 'currency', currency: 'BRL' })}</strong>
                                <button id="trash" onClick={() => deletaritem(item._id)}><FiTrash size={25} color='#fff'></FiTrash></button>
                            </div>
                        )
                    })}
                </article>
                <div id="pagamento">
                    <span>Pagamento</span>
                    <h3 className='valortotal'>Total: {showvalorfinal.toLocaleString('pt-bt', { style: 'currency', currency: 'BRL' })}</h3>
                </div>
            </div> : ''}
            {modalCarrinho != false ? <div className="modalCarrinho">
                <div id="closecart"><button onClick={() => setModalCarrinho(false)}>X</button></div>
                <article id="info-item-carrinho">
                    {itensnocarrinho.map((item) => {
                        return (
                            <div className="content-cart">
                                <img src={item.imgurl}></img>
                                <span>{item.modelo}</span>
                                <span>Cor: {item.cor}</span>
                                <span>Tamanho: {item.tamanho}</span>
                                <span>Qtd: {item.quantidade}</span>
                                <strong>{item.preco.toLocaleString('pt-bt', { style: 'currency', currency: 'BRL' })}</strong>
                                <button id="trash" onClick={() => deletaritem(item._id)}><FiTrash size={25} color='#fff'></FiTrash></button>
                            </div>
                        )
                    })}
                </article>
                <div id="pagamento">
                    <span>Pagamento</span>
                    <h3 className='valortotal'>Total: {showvalorfinal.toLocaleString('pt-bt', { style: 'currency', currency: 'BRL' })}</h3>
                </div>
            </div> : ''}
        </div>

    )
}