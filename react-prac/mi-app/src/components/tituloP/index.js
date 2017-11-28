import React from 'react';

const estilo={
  color: '#606060',
  position: 'relative',
  left: '-91px'
}

const TituloPrincipal = (props) => {
return (
  <h1 style={estilo} >
    <label>
      <i className="fa fa-shopping-basket" id="icono" aria-hidden="true"></i>
    </label>
  $ {props.valor}
  
  </h1>
);
}

export default TituloPrincipal;
