//Toda vez que tiver presença de html, precisa ter o react importado
import React from 'react';
import './App.css';
import TechList from './components/TechList';

function App(){
  return <TechList />
}
export default App;

//Componentes podem ser criados usando classes ou funções. 
//Aqui estamos construindo utilizando function 
//Mas podemos usar classes como em  'TechList.js'