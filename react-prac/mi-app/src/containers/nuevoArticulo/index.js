import React, { Component } from 'react';
import FormArticulo from '../../components/formArticulo';

export default class NuevoArticulo extends Component {
  constructor(props) {
    super(props);
    this.state= {
      producto: '',
      marca: '',
      modelo: '',
      precio: '',
      descripcion: '',
      imagen: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSumit = this.handleSumit.bind(this);
  }

  handleChange(event) {
    console.log('>>>>>>>>>>', event.target.name);
    const target = event.target;
    const valor = target.value;
    const name = target.name;
    this.setState({
      [name]: valor
    })
  }

  handleSumit(event) {
    alert('datos a marca: '+ this.state.marca +
          '  datos a modelo: '+ this.state.modelo +
          '  datos a producto: '+ this.state.producto +
          '  datos a precio: '+ this.state.precio +
          '  datos a descripcion: '+ this.state.descripcion +
          '  datos a imagen: '+ this.state.imagen
    );
    event.preventDefault();
  }

  render() {

    return (
      <div>
        <FormArticulo handleSumit={this.handleSumit} handleChange={this.handleChange}
          producto={this.state.producto}
          marca={this.state.marca}
          modelo={this.state.modelo}
          precio={this.state.precio}
          descripcion={this.state.descripcion}
          imagen={this.state.imagen}
        />
      </div>
    );
  }
}
