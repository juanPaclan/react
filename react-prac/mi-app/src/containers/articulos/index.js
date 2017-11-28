import React, { Component } from 'react';
import Cuerpo2 from '../../components/cuerpo2';

export default class Articulos extends Component {
  constructor(){
    super();
    this.state={
      data: []
    }
  }
  render() {
    return (
      <div>
        <Cuerpo2 fun={this.props.fun} onFocus={this.props.onFocus} array={this.props.array}/>
      </div>
    );
  }
}
