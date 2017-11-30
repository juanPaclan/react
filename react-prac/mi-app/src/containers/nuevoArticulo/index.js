import React, { Component } from 'react';
import FormArticulo from '../../components/formArticulo';
import axios from 'axios';
import Cookies from 'js-cookie';

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
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e, state) {
    e.preventDefault()
    alert('datos a marca: '+ state.marca +
          '  datos a modelo: '+ state.modelo +
          '  datos a producto: '+ state.producto +
          '  datos a precio: '+ state.precio +
          '  datos a descripcion: '+ state.descripcion +
          '  datos a imagen: '+ state.imagen
    );
    var csrftoken = Cookies.get('csrftoken');
    console.log('>>>>csrftoken>',csrftoken);
    var formdata = new FormData();
    formdata.append("producto", state.producto);
    formdata.append('marca', state.marca);
    formdata.append('modelo', state.modelo);
    formdata.append('precio', state.precio);
    formdata.append('descripcion', state.descripcion);
    var imagedata = document.querySelector('input[type="file"]').files[0];
    formdata.append('imagen', imagedata);
    console.log('>>>imagen>' ,imagedata);
    const config = {
      headers: {
        'X-CSRFToken' : 'token 5e1701f360961a99786e6de88df5aeac9ea45963',
        'Authorization': 'token 5e1701f360961a99786e6de88df5aeac9ea45963',
        'Content-Type': 'multipart/form-data',


      },
      mode: 'no-cors',
      method: 'POST'
    };

    axios.post('http://127.0.0.1:8000/articulo/', formdata, config)
    .then(function (response) {
                console.log(response);
              })
    .catch(function (error) {
      console.log(error);
    });


  }

  render() {

    return (
      <form onSubmit={(e) => this.handleSubmit(e, this.state)}>
        <FormArticulo  handleChange={this.handleChange}
          producto={this.state.producto}
          marca={this.state.marca}
          modelo={this.state.modelo}
          precio={this.state.precio}
          descripcion={this.state.descripcion}
          imagen={this.state.imagen}
        />
      </form>
    );
  }
}
