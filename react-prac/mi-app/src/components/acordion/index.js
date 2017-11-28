import React from 'react';
import './style.css';

const Acordion = () => {
  return (
    <div id="container-main">
      <h1>Mejores Jugadores Liga BBVA</h1>

      <div className="accordion-container">
          <a href="#" className="accordion-titulo">Messi<span className="toggle-icon"></span></a>
          <div className="accordion-content">
              <img src="http://e0.365dm.com/15/05/660x350/champions-league-barcelona-bayern-munich-soccer-messi_3299830.jpg?20150506214236" alt=""/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sedeiusmod tempor incididunt ut labore et dolore magna alenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodte irure dolor reprehenderit oluptate velit esse cillum dolore eu fugiat nulla pariatur.

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta suntint occaecat cupidatat non proident, sunt a qui officia deserunt mollit anim id est laborum.</p>
          </div>
      </div>
  </div>
  );
}

export default Acordion;
