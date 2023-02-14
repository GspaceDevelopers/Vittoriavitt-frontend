import { React, useEffect, useState } from "react";
import './slide.css'
import { Fade } from 'react-slideshow-image'
import "react-slideshow-image/dist/styles.css";
import banner1 from '../../videos/Banner RR11 (1).gif'
import banner2 from '../../videos/Banner RR11 (2).gif'
import banner3 from '../../videos/Banner RR11 (3).gif'
import banner4 from '../../videos/Banner RR11 (4).gif'
import banner5 from '../../videos/Banner RR11 (5).gif'
import banner6 from '../../videos/Banner RR11 (6).gif'

import banner1mobile from '../../videos/Banner RR11 mobile (1).gif'
import banner2mobile from '../../videos/Banner RR11 mobile (2).gif'
import banner3mobile from '../../videos/Banner RR11 mobile (3).gif'
import banner4mobile from '../../videos/Banner RR11 mobile (4).gif'
import banner5mobile from '../../videos/Banner RR11 mobile (5).gif'
import banner6mobile from '../../videos/Banner RR11 mobile (6).gif'

import './slide.css'

const SlideHome = () => {
    const fadeImages = [
        banner1,
        banner2,
        banner3,
        banner4,
        banner5,
        banner6,
    ];

    const fadeImages2 = [
        banner1mobile,
        banner2mobile,
        banner3mobile,
        banner4mobile,
        banner5mobile,
        banner6mobile,
    ];
    const [tamanhotela,setTamanhotela] = useState()


   /* useEffect(() => {
        const scrrensize = window.screen.width
        setTamanhotela(scrrensize)
    }, [])*/
    return (
        <div className="slide-container">
            {window.screen.width <= 600 ? <Fade duration={2800} pauseOnHover={false} arrows={false}>
                    <div className="each-fade">
                        <img className="slideimg" src={fadeImages2[0]} />
                    </div>
                    <div className="each-fade">
                        <img className="slideimg" src={fadeImages2[1]} />
                    </div>
                    <div className="each-fade">
                        <img className="slideimg" src={fadeImages2[2]} />
                    </div>
                    <div className="each-fade">
                        <img className="slideimg" src={fadeImages2[3]} />
                    </div>
                    <div className="each-fade">
                        <img className="slideimg" src={fadeImages2[4]} />
                    </div>
                    <div className="each-fade">
                        <img className="slideimg" src={fadeImages2[5]} />
                    </div>
            </Fade>
                : <Fade duration={2800} pauseOnHover={false} arrows={false} >
                    <div className="each-fade">
                        <img className="slideimg" src={fadeImages[0]} />
                    </div>
                    <div className="each-fade">
                        <img className="slideimg" src={fadeImages[1]} />
                    </div>
                    <div className="each-fade">
                        <img className="slideimg" src={fadeImages[2]} />
                    </div>
                    <div className="each-fade">
                        <img className="slideimg" src={fadeImages[3]} />
                    </div>
                    <div className="each-fade">
                        <img className="slideimg" src={fadeImages[4]} />
                    </div>
                    <div className="each-fade">
                        <img className="slideimg" src={fadeImages[5]} />
                    </div>
                </Fade>

            }
        </div>
    )

}
export default SlideHome;
