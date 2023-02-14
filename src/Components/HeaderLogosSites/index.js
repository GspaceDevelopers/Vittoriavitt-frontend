import React from "react";
import './style.css'
import img1 from './imgLogos/1.png'
import img2 from './imgLogos/2.png'
import img3 from './imgLogos/3.png'
import img4 from './imgLogos/4.png'
import img5 from './imgLogos/5.png'
import img6 from './imgLogos/6.png'
import img8 from './imgLogos/8.png'



export default function HeaderLogosSites() {
    return (
        <div className="container-header-component">
            <div className="boxsitelogo">
                <img src={img1}></img>
            </div>
            <div className="boxsitelogo">
                <img src={img2}></img>
            </div>
            <div className="boxsitelogo">
                <img src={img3}></img>
            </div>
            <div className="boxsitelogo">
                <img src={img4}></img>
            </div>
            <div className="boxsitelogo">
                <img src={img5}></img>
            </div>
            <div className="boxsitelogo">
                <img src={img6}></img>
            </div>
            <div className="boxsitelogo">
                <img src={img8}></img>
            </div>
        </div>
    )
}