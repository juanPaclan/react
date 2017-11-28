import React from 'react';
import CajaProducto from '../cajaProducto';
import './style.css';

const modelos = [
    { valor: 'Sony', imagen: './assets/img/cel2.jpeg', ruta:'/descripcion', precio: 8200, indexU: 4 },
    { valor:'Mac', imagen: './assets/img/cel2.jpeg', ruta:'/descripcion', precio: 2000, indexU: 5 },
    { valor:'Alcatel', imagen: './assets/img/cel5.jpeg', ruta:'/descripcion', precio: 3200, indexU: 6 },
    { valor:'Motorola', imagen: './assets/img/celinx.jpg', ruta:'/descripcion', precio: 4200, indexU: 7 },
    { valor:'Alcatel', imagen: './assets/img/cel5.jpeg', ruta:'/descripcion', precio: 8200, indexU: 8 },
    { valor:'Alcatel', imagen: './assets/img/cel5.jpeg', ruta:'/descripcion', precio: 8200, indexU: 9 }
  ];
const Cuerpo2= (props) => {
  return (
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
  );
}

export default Cuerpo2;
