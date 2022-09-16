import './App.css';
import Header from './Header';
import Siderbar from './Siderbar';
import Feed from './components/Feed/Feed'

function App() {
  return (
    <div className="App">
     <Header/>
     <div className="appBody"> 
        <Siderbar/>
        <Feed/>
     </div>
    </div>
  );
}

export default App;
