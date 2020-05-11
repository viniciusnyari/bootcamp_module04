import React from 'react';
import PropTypes from 'prop-types';

//Aqui pode desestruturar pegando somete o que é necessário {tech}
//Ou passar props e aí fica 'props.tech'
function TechItem( {tech, onDelete}) {
return (
        <li>
          {tech}
          <button onClick={onDelete} type="button">Remover</button>
        </li>);
}

//Default Props em funções 
//Caso não seja informado a propriedade, a informação padrão é passada
TechItem.defaultProps = {
  tech: 'Oculto',
};

//Prop Types - mas isso em nível de desenvolvimento
//Ao esquecer de passar a propriedade
TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default TechItem;