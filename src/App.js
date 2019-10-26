import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/index';
import Oceans from './components/Oceans/index';
import images from './components/images.json'
import Game from './components/Game/index'

function App() {
  return (
    <div>

      <Game />
    </div>
  );
}

export default App;