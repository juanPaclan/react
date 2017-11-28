import React from 'react';
import { Link } from 'react-router-dom'

const button= {
  containers: {
    display: 'block',
    width: '25%',
    height: '30%',
    padding: '10px',
    textAlign: 'center',
    borderRadius: '5px',
    background: '#e0e0e0',
    color: 'rgba(41, 98, 255, 0.9)',
    fontWeight: 'bold',
    margin: '5px',
    position: 'relative',
    textDecoration: 'none',
    top: '-17px'
},
hover: {
  color: 'red',
  background: 'red'
}

}

const Menu = (props) => {
return (
  <Link to={props.url} id={props.claseId}>{props.valor}</Link>
);
};

export default Menu;
