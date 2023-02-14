import React from "react";
import './style.css'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

export default function Sucesso() {
    return (
        <div className="container-sucesso">
            <Header back='#000'></Header>
            <div className="container-congratulations">
                <h1>PARABÉNS PELA COMPRA!</h1>
            </div>
            <a href="/minhaconta">Ir para Minha conta</a>
            <Footer></Footer>
        </div>
    )
}