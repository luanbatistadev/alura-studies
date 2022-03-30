import React from 'react';
import Cronometro from '../components/cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import style from './App.module.scss';


function App() {
  return (
    <samp>
      <div className={style.AppStyle}>
        <Formulario />
        <Lista />
        <Cronometro/>
      </div>
    </samp>
  );
}

export default App;
