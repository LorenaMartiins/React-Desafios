import { Component } from "react";

// class Pessoa extends Component {
//   render() {
//     return (
//       <div>
//         <h2>{this.props.nome}</h2>
//       </div>
//     );
//   }
// }

// ============ STATE =============

// class Contador extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       contador: 0
//     };

//     this.aumenta = this.aumenta.bind(this); // Passando o state como um argumento para a função
//     this.diminuir = this.diminuir.bind(this);
//   }

//   aumenta(){
//     let state = this.state; // Recebe todos os estados da props
//     state.contador += 1; // Define o valor do state

//     this.setState(state)
//   }

//   diminuir(){
//     let state = this.state;
//     state.contador -= 1;

//     this.setState(state)
//   }

//   render(){
//     return (
//       <div>
//         <h2>Contador: {this.state.contador}</h2>
//         <button onClick={this.diminuir}> - </button>
//         <button onClick={this.aumenta}> + </button>
//       </div>
//     );
//   }

// }

// ================ Ciclo de Vida ================

class Horas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hora: '00:00:00'
    }
  }

  cores = [
    '#FF0D4F',
    '#0C24F5',
    '#F5E24E',
    '#E82517',
    '#01ff09'
  ]

  coresBackground = [
    '#FF0D4F5a',
    '#0C24F55a',
    '#F5E24E5a',
    '#E825175a',
    '#01ff095a'
  ]

  // ======= metodos =======

  componentDidMount() { // Monta o componente na tela uma vez
    setInterval(() => {
      this.setState({hora: new Date().toLocaleTimeString()})
    }, 1000);
  }

  componentDidUpdate(){ // Atualiza o componente
    document.getElementById('horas').style.color = this.cores[Math.floor(Math.random() * this.cores.length)];
    document.querySelector('body').style.backgroundColor = this.coresBackground[Math.floor(Math.random() * this.cores.length)];
  }

  // =======================

  render() {
    return (
      <div>
        <h2 id='horas'>Horas: {this.state.hora}</h2>
      </div>
    );
  }

}

function App() {
  return (
    <div>
      <Horas/>
    </div>
  );
}

export default App;