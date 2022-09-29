import {React, useEffect, useState} from 'react'
import {useNavigate } from 'react-router-dom'
import {db, registerWithEmailAndPassword, signInWithGoogle, logInWithEmailAndPassword} from '../firebase-config'
import { collection, query, where, getDocs } from "firebase/firestore";

export default function SignIn(){

  const navigate = useNavigate()
  
  const [newEmail, setNewEmail] =useState("")
  const [newNome, setNewNome] = useState("")
  const [newSenha, setNewSenha] = useState(0)
  
  const registrar = () => {
    if(!newNome) alert("Coloque o nome ")
    registerWithEmailAndPassword(newNome, newEmail, newSenha)
  }

  const [loginEmail, setLoginEmail] = useState("")
  const [loginSenha, setLoginSenha] = useState("")
  
  const entrar = async () =>{
    var estado = false
    if(await logInWithEmailAndPassword(loginEmail, loginSenha)){
      estado = true
    }else{
      estado = false
    }

    if(estado == true){
      navigate("/logado")
    }
  }

  return (
    <div>
      <h2>Registrar</h2>
      <input placeholder="Nome..." onChange={(event) => {setNewNome(event.target.value);}}/>
      <br/>
      <input placeholder="email..." onChange={(event) => {setNewEmail(event.target.value);}}/>
      <br/>
      <input type="" placeholder="Senha..." onChange={(event) => {setNewSenha(event.target.value);}}/>
      <br/>
      <button className="btn btn-primary" onClick={registrar}>Resgistrar</button>


      <h1>Google</h1>
      <button className="btn btn-danger" onClick={signInWithGoogle}>Resgistrar com google</button>
      

      <h4>Login</h4>
      <input placeholder="Email..." onChange={(event) => {setLoginEmail(event.target.value);}}/>
      <br/>
      <input type="" placeholder="senha..." onChange={(event) => {setLoginSenha(event.target.value);}}/>
      <br/>
      <button onClick={entrar} className="btn btn-success m-2">Entrar</button>
    </div>
  );
}