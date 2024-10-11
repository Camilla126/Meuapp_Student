import React, { Component } from 'react';
import './style.css'
class App extends Component{

constructor(props){
    super(props);
    this.state = {
        textoFrase: "",
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ["O sucesso é a soma de pequenos esforços repetidos diariamente.",
"Acredite no seu potencial, mesmo quando os desafios parecem grandes demais.",
"Cada dificuldade é uma oportunidade disfarçada para crescer e se fortalecer.",
"Não importa a velocidade, o importante é continuar avançando.",
"O único limite para as suas conquistas é a sua determinação em alcançá-las.",
"Transforme seus sonhos em metas e suas metas em realidade com ação constante.",
"A jornada pode ser difícil, mas a vista do topo faz cada passo valer a pena.",
"Grandes realizações começam com a coragem de dar o primeiro passo."];
}

quebraBiscoito() {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img src={require('./assets/biscoito.png')} className="img" alt='Biscoito da sorte'/>
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito} />
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}

export default App;
