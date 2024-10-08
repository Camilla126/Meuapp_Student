import React, { Component }from "react";
import Feed from './components/Feed'

class App extends Component{
  
constructor(props){
  super(props);
  this.state = {
   feed: [
    {id: 1, username: 'Marcel', curtidas:15, comentarios:6 },
    {id: 2, username: 'Nicklaus', curtidas:300, comentarios:70 },
    {id: 3, username: 'Elijah', curtidas:209, comentarios:46 },
    {id: 4, username: 'Rebeca', curtidas:1, comentarios:0 },

   ]
  };


}


  render(){
  return(
    <div>
{this.state.feed.map((item)=>{
  return (
<Feed id={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios}/>
  );
})}
    </div>
  );
}
}

export default App;