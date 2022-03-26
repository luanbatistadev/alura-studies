import React from "react";
import Botao from "../botao";
import style from './formulario.module.scss';

class Formulario extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        placeholder="O que você quer estudar?"
                        id="tarefa"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input
                        type="time"
                        name="tempo"
                        step='1'
                        id="tempo"
                        min='00:00:00'
                        max='01:30:00'
                        required
                    />
                </div>
                <Botao />
            </form>
        )
    }
}
export default Formulario;