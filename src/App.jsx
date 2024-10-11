import React, { Component } from 'react';
import './style.css'
class App extends Component{

constructor(props){
    super(props);
    this.state = {};
    this.frases = ["O sucesso é a soma de pequenos esforços repetidos diariamente.",
"Acredite no seu potencial, mesmo quando os desafios parecem grandes demais.",
"Cada dificuldade é uma oportunidade disfarçada para crescer e se fortalecer.",
"Não importa a velocidade, o importante é continuar avançando.",
"O único limite para as suas conquistas é a sua determinação em alcançá-las.",
"Transforme seus sonhos em metas e suas metas em realidade com ação constante.",
"A jornada pode ser difícil, mas a vista do topo faz cada passo valer a pena.",
"Grandes realizações começam com a coragem de dar o primeiro passo."];
}


    render(){
        return(
            <div className='container'>
        <img src={require('./assets/biscoito.png')}className='img'/>
        <Botao/>
        <h3 className='textoFrase'>Frase número 1 aleatória...</h3>
            </div>         
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button>Abrir Biscoito</button>
            </div>
        )
    }
}

export default App;
