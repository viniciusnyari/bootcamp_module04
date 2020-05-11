import React, { Component} from 'react';
import TechItem from './TechItem';

class TechList extends Component {

  //Conceito de Default Props na classe
  //static defaultProps = {
    //tech: 'Oculto',
  //};
  
  //Todo array de estado 'state' é imutável e não pode ser alterado diretamente
  //por isso precisamos dos métodos 'setState'
  state = {
    newTech: '',
    techs: []
  };

  //Início da explicação do Ciclo de vida dos componentes
  
  //Executado assim que o componente aparece na tela
  //Chamar uma API por exemplo para carregar os dados
  componentDidMount(){
    //Obtém do storage do navegador a key = techs
    const techs = localStorage.getItem('techs');
    if(techs){
      this.setState({ techs:JSON.parse(techs)});
    }
  }

  //Executado sempre que houver alterações nas props ou estado
  //Permite comparar as propriedades
  //this.state ou this.props com o que está sendo passando como parâmetro
  componentDidUpdate(prevProps, prevState){
    if(prevState.techs != this.state.techs){
      //Persistindo no navegador - F12 - Application - LocalStorage
      localStorage.setItem('techs',JSON.stringify(this.state.techs));
    }
  }

  // Executado quando o componnte deixa de existir
  componentWillUnmount(){

  }

  //Fim da explicação do Ciclo de vida dos componentes

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

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t=> t != tech)});
  }

  // <> é chamado de fragment no React - ao invésde usar uma div
  // coloca o conteudo direto na tag principal
  render() {
    return (
      //Precisa ser no formato de arrow function no evento do botão 'Remover'
      //para executar somente quando clicar
      <form onSubmit={this.handleSubmit}>
        <ul>
          { this.state.techs.map(tech=> 
          <TechItem 
            key={tech} 
            tech={tech} 
            onDelete={()=> this.handleDelete(tech)}
          />          
          )}         
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