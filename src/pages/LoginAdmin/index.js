import React, { useState } from 'react'
import './adminlogin.css'
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/auth';
import { toast } from 'react-toastify'
import logorr11 from '../../Assets/logo viit 1.png'


export default function AdminLogin() {
    const { Login } = useContext(AuthContext)

    const [emailAdmin, setEmailAdmin] = useState('')
    const [senhaAdmin, setSenhaAdmin] = useState('')

    function fazerlogin(e) {
        e.preventDefault();
        if (emailAdmin === '' || senhaAdmin === '') {
            toast.error('Preencha todos os campos')
            return
        }
        Login(emailAdmin, senhaAdmin);
    }
    return (
        <div className='container-adminlogin'>
            <img src={logorr11}></img>
            <form id='form-admin' onSubmit={fazerlogin}>
                <div className='title-login-admin'><h2>Admin controller</h2></div>
                <div className='input-area'>
                    <input type='text' placeholder='Digite seu email' onChange={(e) => setEmailAdmin(e.target.value)}></input>
                    <input type='text' placeholder='Digite sua senha' onChange={(e) => setSenhaAdmin(e.target.value)}></input>
                    <button type='submit'>Entrar</button>
                </div>
            </form>
        </div>
    )
}