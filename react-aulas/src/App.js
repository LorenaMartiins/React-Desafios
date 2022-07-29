import './App.css';
// import Dados from '../src/Aulas/aula-04/dados';
import Soma from './Desafios/calculadora/soma.js';
import Sub from './Desafios/calculadora/sub.js';
import Div from './Desafios/calculadora/div.js';
import Mult from './Desafios/calculadora/mult.js';

function App() {
  return (
    <div className="App">
      {/* <Dados nome="Lorena" login="Lorena12" senha="123456" idade="20" email="lorena1657@gmail.com"/> */}
      <Soma somaA={5} somaB={7}/>
      <Sub SubA={5} SubB={3}/>
      <Mult MultA={7} MultB={8}/>
      <Div divA={10} divB={2}/>
    </div>
  );
}

export default App;
