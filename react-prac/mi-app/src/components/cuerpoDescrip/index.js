import React from 'react';
import Notas from '../nota';
import './style.css';

const CuerpoDescrip= (props) => {

  return (
    <div className="muestraE">

      <section className="section">

        <h1 className="formato"> {props.datoArt.marca} </h1>
        <figure id="imagent">
          <img className="tama" src={props.datoArt.imagen} />
        </figure>
        <h3 className="formato"><b> caracteristicas</b> </h3>
        <div className="parraf">
            <p>
            {props.datoArt.descripcion}
            </p>
        </div>
      </section>
      <aside className="cuerpoNot">
        <Notas clase='caja1' claseId='nota' claseIdtexto='textnota' valor='Nesecitas una aqui encontraras las mejores ofertas'  />
        <Notas clase='caja1' claseId='nota' claseIdtexto='textnota' valor='Nesecitas un celular aqui tenemos las mejores ofertas'  />
        <Notas clase='caja1' claseId='nota' claseIdtexto='textnota' valor='Llebatelos de Regalo'  />
      </aside>
    </div>
  );
}

export default CuerpoDescrip;
