import React from 'react';

const estilo=  {
  color: 'black',
  textAlign: 'center',
  
}

const Parrafo = (props) => {
  return (<p style={estilo}> {props.valor} </p>);
}

export default Parrafo;
