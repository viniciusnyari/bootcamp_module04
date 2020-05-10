import React, { Component} from 'react';

class TechList extends Component {
  state = {
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

  render() {
    console.log(this.state);
    return (
      <ul>
        <li> Node.js</li>
        <li> ReactJS</li>
        <li> React Native</li>
      </ul>
    );
  }
}

export default TechList;

//Componentes podem ser criados usando classes ou funções. 
//Aqui estamos construindo utilizando Class
//Mas podemos usar função como em  'App.js'