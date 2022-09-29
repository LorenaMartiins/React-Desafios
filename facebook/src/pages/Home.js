import React from 'react'
import Header from '../Header';
import Siderbar from '../Siderbar';
import Feed from '../components/Feed/Feed'
import '../App.css';

function Home() {
  return (
    <div className="App">
     <Header/>
     <div className="appBody"> 
        <Siderbar/>
        <Feed/>
     </div>
    </div>
  )
}

export default Home