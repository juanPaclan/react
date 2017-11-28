import React from 'react';
import { Link } from 'react-router-dom'
import style from './style';


const CajaProducto= (props) => {
  return (
    <div style={style.contenImagen}>
    <img src={props.urlImg} style={style.imagen1}/>
    <Link style={style.tituloProducto2} to={props.url}>
      <h3 style={style.tituloProducto}>{props.valor}</h3>
      <h3 style={style.tituloProducto}>{props.precio}</h3>
    </Link>
      <div style={style.botonC} >
    
      <button  proceso="add" className="botonMenu"
      id={`button${props.indexU}`} onClick={props.fun} valor={props.precio} onFocus={(e) => props.onFocus(e)}
       indexU={props.indexU}>Compra</button>
      <button proceso="elimina" id={`button${props.indexU}`} onClick={props.fun}
      valor={props.precio} className="botonMenu" onFocus={(e) => props.onFocus(e)}>
      <i className="fa fa-trash-o" aria-hidden="true"></i>
      </button>
      </div>
      <hr style={style.hr} />
    </div>
  );
}

export default CajaProducto;
