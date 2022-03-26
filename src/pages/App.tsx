import React from 'react';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import style from './App.module.scss';


function App() {
  return (
    <samp>
      <div className={style.AppStyle}>
        <Formulario />
        <Lista />
      </div>
    </samp>
  );
}

export default App;
