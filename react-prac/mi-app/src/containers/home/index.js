import React, { Component } from 'react';
import Titulo from '../../components/titulo';
import Cuerpo from '../../components/cuerpo';

export default class Home extends Component {
  render() {
    
    return (
      <div>
        <Cuerpo fun={this.props.fun}  onFocus={this.props.onFocus} array={this.props.array} />
      </div>
    );
  }
}
