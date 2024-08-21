import React from 'react';

const Bemvindo = (props) => {
  return (
    <div>
      <h2>Bem-vindo(a)  {props.nome} </h2>
      <h3>Tenho {props.idade} Anos </h3>
    </div>
  );
}

function App() {
  return (
    <div>
      Olá
      <Bemvindo nome="Elijah" idade='1062' />
      <Bemvindo nome="Nicklaus" idade='1059' />
    </div>
  );
}
export default App;
