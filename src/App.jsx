

import React from 'react';

const Equipe = (props) =>{
  return (
    <div>
      <Sobre username={props.nome} cargo={props.cargo} idade={props.idade} />
      <Social Fb={props.Facebook}/>
      <hr />
    </div>
  );
}

const Sobre = (props) =>{
  return(
    <div>
      <h2> Olá sou o(a) {props.username}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade} anos</h3>
    </div>
  )
}

const Social = () =>{
  return(
    <div>
      <a href='https://google.com'>Facebook</a>
      <a>Linkedin</a>
      <a>YouTube</a>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Conheça nossa equipe:</h1> 
      <Equipe nome="Demon Salvatore" cargo="Sanguesuga" idade="180" Facebook="https://google.com" />
      <Equipe nome="Stefan Salvatore" cargo="Matador de esquilos" idade="171" Facebook="https://google.com" />
      <Equipe nome="Elena" cargo="Ser odiada" idade="23" Facebook="https://google.com" />
    </div>
  );
}
export default App;
