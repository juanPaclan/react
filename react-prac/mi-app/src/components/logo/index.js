import React from 'react';

const estilo= {
  position: 'relative',
  right: '-60px',
  width: '100%',
  height: '100%',
  alignSelf: 'center',
  flex: '1 1',
  marginUp: '10px'
}

const Logo = (props) => {
return <img  src={props.src} style={estilo} />
}

export default Logo;
