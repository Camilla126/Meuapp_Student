import React from 'react';

const Bemvindo = (props) => {
  return (
    <div>
      <h2>Bem-vindo(a)  {props.nome} </h2>
    </div>
  );
}

function App() {
  return (
    <div>
      Olá
      <Bemvindo nome="Elijah" />
      <h1>Ao curso</h1>
    </div>
  );
}
export default App;
