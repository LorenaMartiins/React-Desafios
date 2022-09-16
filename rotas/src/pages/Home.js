import { getDocs, collection, doc, where, query, deleteDoc, addDoc } from 'firebase/firestore';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../component/Header'
import {db} from '../firebase-config'


export default function Home() {

  //insert 
  const [newNome, setNewNome] = useState("");
  const [newSenha, setNewSenha] = useState(0);

  const createUser = async () =>{
    await addDoc(userCollection, {nome: newNome, senha: Number(newSenha)})
  }

  //get
  const [users, setUsers] = useState([]);
  const userCollection = collection(db, 'usuario')

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollection)
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      console.log(data)
    }
    getUsers()
  }, []);

  const deleteUser = async(id)=>{
    const userDoc = doc(db, "usuario", id)
    await deleteDoc(userDoc);
  }

  return (
    <div className="container">
      <Header/>
      {/* insert */}
      <input placeholder="nome..." onChange={(event) => {setNewNome(event.target.value);}}/>
      <br/>
      <input type="number" placeholder="senha..." onChange={(event) => {setNewSenha(event.target.value);}}/>
      <br/>
      <button onClick={createUser} className="btn btn-success m-2">Novo Usuario</button>

      <h1>Home</h1>
      {/* === get === */}
      {users.map((user) => {
        return (
          <div>
            <h1>Nome: {user.nome}, senha: {user.senha}</h1>

            {/* delete */}
            <button onClick={() => {deleteUser(user.id);}} className="btn btn-danger m-2">Apagar Usuario</button>
          </div>
        )
      })
      
      }

      <Link to='/user'><button>User</button></Link>
    </div>
  )
}
