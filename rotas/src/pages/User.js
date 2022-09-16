import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import Header from '../component/Header'

import {db} from '../firebase-config'
import {collection, getDocs, query, where} from 'firebase/firestore'

export default function User() {

  useEffect(() => {
    const q = query(collection(db, "usuario"), where("nome", "==", "Lorena"));

    const getUsers = async () => {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) =>{
        console.log(doc.id, " =>", doc.data());
      });
    }
    getUsers()
  }, []);

  return (
    <div>
      <Header/>
      <h1>User</h1>
      <Link to='/about'>Sobre mim</Link>
      <Link to='/'><button>Home</button></Link>
    </div>
  )
}
