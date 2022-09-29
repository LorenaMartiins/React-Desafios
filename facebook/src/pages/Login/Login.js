import './Login.css'
import { Link } from 'react-router-dom'
import {React, useState} from 'react'
import {useNavigate } from 'react-router-dom'
import { logInWithEmailAndPassword} from '../../firebase-config'

export default function Login(){

  const navigate = useNavigate()

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
      navigate("/face")
    }
  }


  return(
    <div className="login">
      <div className="face">
        <h1>facebook</h1>
      </div>
      <form className="form_box">
        <input type="text" name="i_usuario" placeholder="Email" className="i_text" required onChange={(event) => {setLoginEmail(event.target.value);}}/>
        
        <input type="password" name="i_senha" placeholder="Senha" className="i_text" required onChange={(event) => {setLoginSenha(event.target.value);}}/>

        <button onClick={entrar} type="button" className="btt_form">Entrar</button>

        <p className="traco"> </p>
        <p> Não tem conta? <Link to="/cadastro">Cadastre-se</Link></p>
      </form>
    </div>
  )
}