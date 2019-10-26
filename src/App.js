import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/index';
import Oceans from './components/Oceans/index';
import images from './components/images.json'
import Game from './components/Game/index'

function App() {
  return (
    <div>
      <Header/>
      <Game />
    </div>
  );
}

// class App extends Component{
//   state={
//     score:0,
//     highScore:0,
//     clicked:false
//   }



//   myClick=(event)=>{
//     console.log(event.target)

//   }

//   render() {
//     return (
//       <div>
//       <Header
//         score={this.state.score}
//         highScore={this.state.highScore}
//       />

//      {images.map(pic =>(
//        <Oceans
//        image={pic.img} key={pic.id}
//        myClick={this.myClick}
//          />

//      ))}
//       </div>
//     )
//   }
// }

export default App;