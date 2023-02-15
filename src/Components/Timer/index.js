import React, { useEffect, useState } from 'react'
import './style.css'



const Timer = () => {
    const [display, setDisplay] = useState('2:00:00')
    useEffect(() => {
        let hh = 2
        let mm = 59
        let ss = 59
        let timer
        function start() {
            timer = setInterval(() => {
                ss--
                if (ss == 0) {
                    ss = 59
                    mm--
                }
                if (mm == 0) {
                    mm = 59
                    hh--
                }
                let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)
                setDisplay(format)
            }, 1000)
        }
        start();

    }, [])




    return (
        <div className='container-Timer'>
            < h2 > A PROMOÇÃO TERMINA EM {display}</h2 >
        </div >
    )
}

export default Timer;