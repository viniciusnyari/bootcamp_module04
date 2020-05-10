import React from 'react';

//Aqui pode desestruturar pegando somete o que é necessário {tech}
//Ou passar props e aí fica 'props.tech'
function TechItem( {tech, onDelete}) {
return (
        <li>
          {tech}
          <button onClick={onDelete} type="button">Remover</button>
        </li>);
}

export default TechItem;