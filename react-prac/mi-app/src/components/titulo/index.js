import React from 'react';
import  Menu   from '../menu/Menu.js';
import  TituloPrincipal  from '../tituloP';
import Logo from '../../components/logo';
import style from './style';
import './style.css';

const Titulo= (props) => {
  return (
    <header className='elemento1'  >
      <div className='imagenTitulo'>
        <div>
          <Logo src='/assets/img/imagen1.jpg' />
        </div>
        <div>
          <TituloPrincipal array={props.array} valor={props.compra}/>
        </div>
      </div>
      <nav className='menu'>
          <Menu url='/' claseId='menu' valor='inicio' />
          <Menu url='/articulos' claseId='menu' valor='Articulos' />
          <Menu url='/nuevo' claseId='menu' valor='Nuevo' />
          <a id='menu' onClick={props.fun} >Reset   <i className="fa fa-refresh" aria-hidden="true"></i>
</a>
      </nav>
    </header>
  );
}
export default Titulo;
