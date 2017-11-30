import React, { Component } from 'react';
import Home  from './containers/home';
import Articulos  from './containers/articulos';
import NuevoArticulo  from './containers/nuevoArticulo';
import ArticulosDescrip  from './containers/articulosDescrip';
import Titulo from './components/titulo';
import axios from 'axios';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const styles3 = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  alignContent: 'center',
  width: '100%'
}

const routes = [
  { path: '/',
    exact: true,
    sidebar: () => 'Titulo principal'
  },
  { path: '/articulos',
    sidebar: () => 'Titulo secundario'
  }
]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      array: [],
      data: []
    };

    this.handleCountClick = this.handleCountClick.bind(this);
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/articulo/')
    .then((Response)=>Response.data)
    .then((findresponse)=> {
      console.log('>>>>>>>>>',findresponse);
      this.setState({
        data: findresponse,
      })
    })
  }

  onFocus(e){
    var key= e.target.getAttribute('proceso');
    var index = e.target.id;
    if(key === "add") {
      document.getElementById(index).style.backgroundColor='rgba(41, 98, 245, 0.9)';
      document.getElementById(index).style.color='white';
    } else if(key === "elimina") {
      document.getElementById(index).style.backgroundColor='#e0e0e0';
      document.getElementById(index).style.color='rgba(41, 98, 255, 0.9)';
    }
  }

  handleCountClick(e) {
    var valor = e.target.getAttribute('valor')
    var key= e.target.getAttribute('proceso');
    var DatosArray = this.state.array

		if(key === "add") {

      DatosArray.push(parseFloat(valor))
			this.setState({
				count: this.state.count + parseFloat(valor),
        array: DatosArray
			})

  	}else if (key === "elimina" && this.state.count > 0) {
      var index = DatosArray.indexOf(parseFloat(valor));
      DatosArray.splice(index,1);

			this.setState({
				count: this.state.count - parseFloat(valor),
        array: DatosArray
			})

		} else {
			this.setState({
				count: 0
			})
		}
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div style={styles3}>
            <Titulo fun={this.handleCountClick} array={this.state.array} compra={this.state.count} valor= {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))} />
            <Route exact path="/" render={() => (
                <Home fun={this.handleCountClick}  onFocus={this.onFocus.bind(this)} array={this.state.data} />
            )}/>
            <Route path="/articulos" render={() => (
                <Articulos fun={this.handleCountClick} onFocus={this.onFocus.bind(this)} array={this.state.data}/>
            )}/>
            <Route path="/descripcion/:modelo" component={ArticulosDescrip}/>
            <Route path="/nuevo" component={NuevoArticulo}/>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
