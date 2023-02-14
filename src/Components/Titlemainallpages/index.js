import React from "react";
import './style.css'


export default function Titlemainallpages({ children, name }) {
    return (
        <div className="title-box-component">
            {children}
            <h2>{name}</h2>
        </div>
    )
}
