import React from "react";
import './style.css'

export default function TitleFormasPagamento({ children, name }) {
    return (
        <div className="box-component-pagamento">
            {children}
            <h2>{name}</h2>
        </div>
    )
}