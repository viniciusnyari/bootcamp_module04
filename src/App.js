//Toda vez que tiver presença de html, precisa ter o react importado
import React from 'react';
import './App.css';
import profile from './assets/profile.jpg';

function App(){
  return <img src={profile}></img>
}
export default App;