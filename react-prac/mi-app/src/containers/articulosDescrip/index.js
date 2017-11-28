import React, { Component } from 'react';
import CuerpoDescrip from '../../components/cuerpoDescrip';

export default class ArticulosDescrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datoArt: []
    };
  }
  componentDidMount(){
    var id= this.props.match.params.modelo;
    fetch("http://127.0.0.1:8000/articulo/"+id+"/")
    .then((Response)=>Response.json())
    .then((Respuesta)=> {
      console.log('>>>>>>>>>',Respuesta);
      this.setState({
        datoArt: Respuesta,
      })
    })
  }
  render() {

    return (
      <div>
        <CuerpoDescrip datoArt={this.state.datoArt}/>
      </div>
    );
  }
}
