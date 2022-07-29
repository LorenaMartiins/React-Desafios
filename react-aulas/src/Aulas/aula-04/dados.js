// chamando os componentes

// function BemVindo(props){
//   return <h1>Oi, {props.name}!!</h1>
// }

// const nome = <BemVindo name="Manoela"/>
// const BemVindo = () => <h3>Bem Vindo</h3>

// const Turma = (props) =>{
//   return(
//     <div>
//       <Aluno nome={props.nome} nota={props.nota} idade={props.idade}/>
//     </div>
//   );
// }

// const Aluno = (props) =>{
//   return(
//     <div>
//       <h2>O aluno(a) {props.nome} tirou {props.nota}</h2>
//       <h4>A idade de {props.nome} é {props.idade}</h4>
//     </div>
//   );
// }

// function Soma(props) {
//   return(
//     <div>
//       {/* mostrar a soma 
//       <h3>{props.a} + {props.b}</h3> */}
      
//       {/* calcular a soma */}
//       <h3>{props.a + props.b}</h3>
//     </div>
//   );
// }

const Dados = (props) => {
  return (
    <div>
      <Usuario nome={props.nome} login={props.login} senha={props.senha} idade={props.idade} email={props.email}/>
    </div>
  );
}

function Usuario(props){
  return(
    <div>
      <h3>Nome: {props.nome}</h3>
      <h3>Login: {props.login}</h3>
      <h3>Senha: {props.senha}</h3>
      <h3>Idade: {props.idade}</h3>
      <h3>Email: {props.email}</h3>
    </div>
  );
}

export default Dados;