import React from 'react';
import CajaRuleta from '../cajaRuleta';
import CajaProducto from '../cajaProducto';
import CajaProducto2 from '../cajaProducto2';
import './style.css';


const modelos2 = [
  { valor: 'Sony', imagen: './assets/img/cel2.jpeg', ruta:'/descripcion', precio: 5200 , indexU: 5 },
  { valor:'Mac', imagen: './assets/img/cel2.jpeg', ruta:'/descripcion', precio: 4920, indexU: 6 },
  { valor:'Alcatel', imagen: './assets/img/cel5.jpeg', ruta:'/descripcion', precio: 7200, indexU: 6 }
];

const style= {
  colorFondo:{
    background: 'rgba(41, 98, 255, 0.6)'
  },
  tituloProductos:{
    color: '#606060',
    padding: '10px'
  }

}
const Cuerpo= (props) => {

  return (
    <div>
      <div  style={style.colorFondo}>
        <CajaRuleta array={props.array} />
      </div>
      <div className='elemento2' >
      {
        props.array.slice(0,3).map((modelo) =>
        <CajaProducto2  fun={props.fun}
          valor={modelo.marca} urlImg={modelo.imagen} url={`/descripcion/${modelo.id}`}
          precio={modelo.precio} indexU={modelo.id} onFocus={props.onFocus} />
        )
      }
      </div>
      <div  style={style.colorFondo}>
      <h2 style={style.tituloProductos}>Catalogo de Productos</h2>
      </div>
      <div className='elemento2' >
        <section className='seccion3'>

        {
          props.array.map((modelo) =>
          <CajaProducto  fun={props.fun}
            valor={modelo.marca} urlImg={modelo.imagen} url={`/descripcion/${modelo.id}`}
            precio={modelo.precio} indexU={modelo.id} onFocus={props.onFocus} />
          )
        }
        </section>
      </div>
    </div>
  );
}

export default Cuerpo;
