import React from 'react';
import style from './Style';

const Notas= (props) =>{
  return (
    <a className={props.clase} href='#'>
    <blockquote id={props.claseId}>
      <b id={props.claseIdtexto}>
        { props.valor }
      </b>
    </blockquote>
    </a>
  );
}

export default Notas;
