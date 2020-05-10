import React, { Component} from 'react';

class TechList extends Component {
  
  //Todo array de estado 'state' é imutável e não pode ser alterado diretamente
  //por isso precisamos dos métodos 'setState'
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

  //Precisa ser no formato de 'arrow function' fois senão não tem acesso a 
  //variável 'this'
  handleInputChange = e => {
    this.setState( { newTech: e.target.value});
  }

  handleSubmit = e => {
    //N]ao dá refresh na tela
    e.preventDefault();
    //spreadoperatior '...'
    //tem que recriar o array
    this.setState({ 
      techs: [... this.state.techs, this.state.newTech],
      newTech: '',
    });
  }

  // <> é chamado de fragment no React - ao invésde usar uma div
  // coloca o conteudo direto na tag principal
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          { this.state.techs.map(tech=> <li key={tech}>{tech}</li>)}
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          value={ this.state.newTech}
          />
          <button type="submit">Enviar</button>
      </form>      
    );
  }
}

export default TechList;

//Componentes podem ser criados usando classes ou funções. 
//Aqui estamos construindo utilizando Class
//Mas podemos usar função como em  'App.js'