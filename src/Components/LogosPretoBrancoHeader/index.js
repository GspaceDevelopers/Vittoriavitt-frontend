import React from 'react'
import './style.css'

import img1 from './foreverlogo.webp'
import img2 from './foryoulogo.webp'
import img3 from './lovelogo.webp'
import img4 from './spartalogo.png'
import img5 from './starklogo.webp'
import img6 from './takelogo.webp'
import img7 from './2.png'


export default function LogoPretoBrancoHeader() {
    return (
        <div className='headerlogopretobranco'>
            <div className='boximglogosgrey'>
                <a href='http://www.foreveryounglingerie.com.br/'>
                    <img src={img1}></img>
                </a>

            </div>
            <div className='boximglogosgrey'>
                <a href='https://www.foryoulingerie.com.br/'>
                    <img src={img2}></img>
                </a>
            </div>
            <div className='boximglogosgrey'>
                <a href='https://www.lovemelingerie.com.br/'>
                    <img src={img3}></img>
                </a>
            </div>
            <div className='boximglogosgrey'>
                <a href='http://www.spartamenswear.com.br/'>
                    <img src={img4}></img>
                </a>
            </div>
            <div className='boximglogosgrey'>
                <a href=''>
                    <img src={img5}></img>
                </a>
            </div>
            <div className='boximglogosgrey'>
                <a href=''>
                    <img src={img6}></img>
                </a>
            </div>
            <div className='boximglogosgrey'>
                <a href='https://www.maxsportmenswear.com.br/'>
                    <img src={img7}></img>
                </a>
            </div>

        </div>
    )
}