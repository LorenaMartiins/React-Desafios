import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Cadastro.css'
// import {useNavigate } from 'react-router-dom'
import { registerWithEmailAndPassword, signInWithGoogle} from '../../firebase-config'

export default function Cadastro(){

  const [newEmail, setNewEmail] =useState("")
  const [newNome, setNewNome] = useState("")
  const [newSenha, setNewSenha] = useState(0)
  
  const registrar = () => {
    if(!newNome) alert("Coloque o nome ")
    registerWithEmailAndPassword(newNome, newEmail, newSenha)
  }

  return(
    <div className="container-cad">
      <form className="form_box-cadastro">
        <h1>Registrar</h1>
        <input placeholder="Nome..." onChange={(event) => {setNewNome(event.target.value);}}/>
        <input placeholder="email..." onChange={(event) => {setNewEmail(event.target.value);}}/>
        <input type="password" placeholder="Senha..." onChange={(event) => {setNewSenha(event.target.value);}}/>
        <button className="btt_form-cad" type="button" onClick={registrar}>Resgistrar</button>
      </form>
      <button className="btn btn-danger" onClick={signInWithGoogle}>Resgistrar com google</button>
      <Link to="/" className="volte">Volte</Link>
    </div>
  );
}