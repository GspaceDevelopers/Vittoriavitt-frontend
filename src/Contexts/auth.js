import { createContext, React, useContext, useEffect, useState } from "react";
import firebase from "../services/firebaseconnection";

import { toast } from "react-toastify";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [usercliente, setUsercliente] = useState()
    const [modalSideBar, setModalSideBar] = useState(false);

    useEffect(() => {
        function loadsessao() {
            const sessao = JSON.parse(localStorage.getItem("sessaouser"));
            if (sessao) {
                setUser(sessao);
            }
            const sessaoclientes = JSON.parse(localStorage.getItem("sessaocliente"));

            if (sessaoclientes) {
                setUsercliente(sessaoclientes);
            }
        }
        loadsessao();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                Login,
                Cadastro,
                signed: !!user,
                sairadm,
                openSideBar,
                setModalSideBar,
                modalSideBar,
                Cadastroclientes,
                loginclientes,
                usercliente,
                setUsercliente,
                saircliente
            }}
        >
            {children}
        </AuthContext.Provider>
    );

    function sotrageUser(data) {
        localStorage.setItem("sessaouser", JSON.stringify(data));
    }
    function storageclientes(datacliente) {
        localStorage.setItem("sessaocliente", JSON.stringify(datacliente));
    }

    //funcao criar usuario

    async function Cadastro(nomeAdmin, email, telefone, senha) {
        await firebase
            .auth()
            .createUserWithEmailAndPassword(email, senha)
            .then(async (value) => {

                toast.success("usuario cadastrado com sucesso");
                window.location.href = "/AdminLogin";
            })
            .catch((error) => {
                alert(error);
            });
    }

    //funcao fazer login

    async function Login(emailAdmin, senhaAdmin) {
        await firebase
            .auth()
            .signInWithEmailAndPassword(emailAdmin, senhaAdmin)
            .then(async (value) => {
                let uid = value.user.uid;

                /* const Datauser = await firebase
                      .firestore()
                      .collection(uid)
                      .doc(uid)
                      .get();*/

                let data = {
                    uid: uid,
                    imgUrl: null,
                    email: emailAdmin,
                }
                setUser(data);

                sotrageUser(data);
                window.location.href = '/admincontroller'
            })
            .catch(() => {
                toast.error("usuario incorreto ou nao cadastrado");
            });
    }

    async function sairadm() {
        await firebase.auth().signOut();
        localStorage.removeItem("sessaouser");
        setUser(null);
        window.location.href = '/adminlogin'
    }

    function openSideBar(e) {
        setModalSideBar(e);
    }

    async function Cadastroclientes(
        nome,
        sobrenome,
        sexo,
        datanascimento,
        cpf,
        email,
        telefone,
        cep,
        endereco,
        numero,
        Complemento,
        bairro,
        pais,
        estado,
        cidade,
        senha,) {
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(async (value) => {
                let uid = value.user.uid
                await firebase.firestore().collection('clientes')
                    .doc(uid).set({
                        uid: uid,
                        cpf: cpf,
                        datanascimento: datanascimento,
                        sexo: sexo,
                        nome: nome,
                        sobrenome: sobrenome,
                        email: email,
                        telefone: telefone,
                        cep: cep,
                        endereco: endereco,
                        numero: numero,
                        Complemento: Complemento,
                        bairro: bairro,
                        pais: pais,
                        cidade: cidade,
                        estado: estado,
                        cep2: null,
                        endereco2: null,
                        numero2: null,
                        Complemento2: null,
                        bairro2: null,
                        pais2: null,
                        cidade2: null,
                        estado2: null,
                        senha: senha,
                        imgUrl: null,
                    })
                    .then(() => {
                        window.location.href = '/login'
                    })
            })
            .catch((error) => {
                alert(error)
                return;
            })
    }

    async function loginclientes(emailcliente, senhacliente) {
        await firebase.auth().signInWithEmailAndPassword(emailcliente, senhacliente)
            .then(async (value) => {
                let uid = value.user.uid
                const datausercliente = await firebase.firestore().collection('clientes').doc(uid)
                    .get()
                let datacliente = {
                    uid: uid,
                    nome: datausercliente.data().nome,
                    telefone: datausercliente.data().telefone,
                    cpf: datausercliente.data().cpf,
                    email: datausercliente.data().emailcliente,
                    endereco: datausercliente.data().endereco,
                    cep: datausercliente.data().cep,
                    Complemento: datausercliente.data().Complemento,
                    numero: datausercliente.data().numero,
                }
                storageclientes(datacliente)
                setUsercliente(datacliente)
                window.location.href = '/'
            })
    }

    async function saircliente() {
        if (usercliente == null) {
            toast.error('nenhuma sessão ativa')
            return;
        }
        await firebase.auth().signOut()
        localStorage.removeItem('sessaocliente')
        setUsercliente(null)
        toast.success('Volte sempre!')
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }
}
