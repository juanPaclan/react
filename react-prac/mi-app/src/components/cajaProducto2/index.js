import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

const style  = {
  caja1:{
    display: 'flex',
    width: '50%'
  },
  caja2:{
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    justifyContent: 'center',
    textAlign: 'center',
    // background: color (props) => { this.color =  this.props.colorFon}
  },
  tituloProducto:{
    textAlign: 'center',
    width: '100%',
    height: '10%',
    color: '#606060',
    margin: '0px'
  },
  tituloProducto2:{
    textDecoration: 'none',
    width: '35%',
    margin: 'auto',
    color: '#606060'
  },
  contenImagen: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    width: '30%',
    height: '320px',
    borderRight: '1px solid #e0e0e0',
    borderRadius: '10px 10px 10px 10px',
    overflow: 'hidden',

  },
  imagen1: {
    borderRadius: '10px 10px 10px 10px',
    width: '100%',
    height: '55%',
    margin: 'auto'
},
  botonC: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    textAlign: 'center'
  },
  boton: {
    textDecoration: 'none',
    background: '#e0e0e0',
    color: 'rgba(41, 98, 255, 0.9)',
    borderRadius: '5px 20px 5px 20px',
    border: '1px solid',
    width: '50%',
    padding: '5px',
    right: '-29px',
    position: 'relative'
  }
}


const CajaProducto2= (props) => {
  console.log(props)
  return (
    <div style={style.contenImagen }>
      <div style={style.caja1}>
        <img src={props.urlImg} style={style.imagen1}/>
      </div>
      <div style={style.caja2}>
        <h3 style={style.tituloProducto}>{props.valor}</h3>
        <h4 style={style.tituloProducto}>{props.precio}</h4>
          <button  proceso="add" className="botonMenu"
          id={`button${props.indexU}`} onClick={props.fun} valor={props.precio} onFocus={(e) => props.onFocus(e)}
           indexU={props.indexU}>Compra</button>
          <button proceso="elimina" id={`button${props.indexU}`} onClick={props.fun}
          valor={props.precio} className="botonMenu" onFocus={(e) => props.onFocus(e)}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
          </button>
      </div>
    </div>
  );
}

export default CajaProducto2;
