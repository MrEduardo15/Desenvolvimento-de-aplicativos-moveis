// import logo from './logo.svg';
// import './App.css';
import {useState} from "react";


function Saudacao(props){
  return <h1>Olá, {props.nome} </h1>
}

function Perfil({nome, idade, cidade}){
return (
  <div>
    <h2>{nome}</h2>
    <p>Idade: {idade}</p>
    <p>Cidade: {cidade}</p>
  </div>

)
}

function Contador(){
  const [valor, setValor] = useState(15);

  function Incrementar(){
    setValor(valor + 1);
  }
  function Zerar(){
    setValor(0)
  }
    function Decrementar(){
    setValor(valor - 1);
  }
  const estilo = {
    border: "3px solid #000000ff",
    backgroundColor: "sky-blue",
    borderRadius: "8px",
    padding: "26px",
    margin:"8px",
    width:"400px",
    display: "inline-block"
    
    
  }

  return(
    <div style ={estilo}>
      <p>Contagem: {valor}</p>
      <button on onClick={Incrementar}>Incrementar</button>
      <button on onClick={Decrementar}>Decrementar</button>
      <button on onClick={Zerar}>Zerar</button> 
      Podemos usa dessa forma tambem 
      <button on onClick={() => setValor(0)}>Zerar</button>
    </div>

  )
}

function Card({nome, idade, profissao}){
  const estilo = {
    border: "3px solid #000000ff",
    backgroundColor: "sky-blue",
    borderRadius: "8px",
    padding: "16px",
    margin:"8px",
    width:"200px",
    display: "inline-block"
  }
  return(
    <div style={estilo}>
      <h3>{nome}</h3>
      <p>Idade: {idade}</p>
      <p>Profissao: {profissao}</p>

    </div>

  )
}


function CapoTexto(){
  const [texto, setTexto] = useState("");

  function handleChange(evento){
    setTexto(evento.target.value);
  }

  return (
    <div>
    <input type="text" onChange={handleChange} 
    placeholder="Digite algo..." />
    <p>Voce digitou: {texto}</p>
    </div>
  );
}

function App() {
  return (
    <div >
      <Saudacao nome = "Maria" />
      <Perfil nome ="Carlos" idade ={30} cidade ="São Paulo"/>
      <Contador/>
      <CapoTexto/>

      <h1>Lista de Pessoas</h1> 
      <Card
      nome="Ana Silva"
      idade={28}
      profissao="Engenheira"
      />

      <Card
      nome="Bruno Costa"
      idade={35}
      profissao="Designer"
      />

      <Card
      nome="Carla Lima"
      idade={22}
      profissao="Estudante"
      />
      </div>
 
      
  );
}

export default App;


