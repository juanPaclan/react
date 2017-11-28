import React from 'react';
import Ruleta from '../ruleta';
import './style.css';

const imagenes = [
  { imagen: 'img1', ruta:'./assets/img/cel1.jpeg' },
  { imagen: 'img2', ruta:'./assets/img/cel1.jpeg' },
 { imagen: 'img3', ruta:'./assets/img/cel1.jpeg' },
   { imagen: 'img4', ruta:'./assets/img/cel1.jpeg' }
];
const listItems = imagenes.map((datos) =>
  <Ruleta url='/articulos' urlImagenes={datos.ruta} claseId={datos.imagen} />
);

const CajaRuleta= (props) => {
  return (
    <div className='ruleta'>
      <div className='formaR'>
        {
          props.array.slice(0,4).map((modelo, key) =>
          <Ruleta  url='/articulos'
            urlImagenes={modelo.imagen} url={`/descripcion/${modelo.id}`}
            claseId={'img'+(key+1)} descripcion={modelo.descripcion}
             />
          )
        }
      </div>

    </div>
  );
}

export default CajaRuleta;
