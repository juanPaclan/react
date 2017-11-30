import React from 'react';

const style= {
  contenedor: {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    height: '400px',
    margin: '30px auto',
    background: 'rgb(224, 224, 224)',
    padding: '5px'
  },
  linea: {
    margin: '10px',
    alignSelf: 'center'
  },
  texto: {
    width: '470px',
height: '150px'
  }
}

// Generated token 5e1701f360961a99786e6de88df5aeac9ea45963 for user paclan
//action="http://127.0.0.1:8000/articulo/"
const FormArticulo = (props) => {
  return (
    <div>
      <input name="csrfmiddlewaretoken" value="BwYLTFoOn7O0UoBDossJyO5tabUuCYEt1elTIILQbX8h8gNjkZRC6kjFrtkNSiSx" type="hidden" />
      <div style={style.linea}>
          <label>Producto:
            <select  name="producto" value={props.producto} onChange={props.handleChange}>
            <option value="COMPUTADORA">Computadora</option>
            <option value="CELULAR">Celular</option>
            <option value="TABLET">Tablet</option>
            </select>
          </label>
          <label>Marca:
            <input type="text" value={props.marca} onChange={props.handleChange} id="marca" name="marca" />
          </label>
      </div>
      <div style={style.linea}>
          <label>Modelo:
            <input type="text" value={props.modelo} onChange={props.handleChange} id="modelo" name="modelo" />
          </label>
          <label>Precio:
            <input type="text"  id="precio" name="precio" value={props.precio} onChange={props.handleChange} />
          </label>
      </div>
      <div style={style.linea}>
          <label>descripcion:
            <textarea style={style.texto}  name="descripcion" value={props.descripcion} onChange={props.handleChange}></textarea>
          </label>
      </div>
      <div style={style.linea}>
          <label>Imagen:
            <input name="imagen" type="file" value={props.imagen} onChange={props.handleChange} />
          </label>
      </div>
      <input type="submit" value="guardar" />
    </div>
  )
}

export default FormArticulo;
