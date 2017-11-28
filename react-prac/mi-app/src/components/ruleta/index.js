import React from 'react';
import { Link } from 'react-router-dom'

const style= {
  cajaUno: {
  width: '100%'
},
cajaImagen: {
  display: 'flex',
  width: '50%',
  margin: '10px'
},
cajaEnlace:{
  display: 'flex',
  justifyContent: 'end',
  margin: 'auto',
  height: '100%'
},
cajaTexto: {
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  padding: '5px',
  width: '50%',
  color: '#606060',
  fontSize: '14px'
},
imagen: {
  width: '250px'
}
}

const Ruleta= (props) => {
  return (
    <div style={style.cajaUno}>
    <div  id={props.claseId}>
      <figure style={style.cajaImagen}>
        <Link to={props.url} style={style.cajaEnlace}>
          <img style={style.imagen} src={props.urlImagenes} />
        </Link>
      </figure>
      <figcaption style={style.cajaTexto}>
      {props.descripcion}
      </figcaption>
    </div>
    </div>
  );
}

export default Ruleta;
