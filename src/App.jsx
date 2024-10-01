import React, { Component }from "react";

class App extends Component{

aumentar(){
  let state = this.state;
  state.contador +=1;
  this.setState(state)

}

  render(){
  return(
    <div>
  
    </div>
  );
}
}

export default App;