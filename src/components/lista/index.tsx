import React from "react";
import Item from "./item";
import style from './lista.module.scss';
function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00',
    },
    {
        tarefa: 'Java Script',
        tempo: '01:00:00'
    },{
        tarefa: 'TypeScript',
        tempo: '03:00:00'
    }
    ]
    return (
        <aside className={style.listaTarefas}>
            <h2>
                Estudos do dia
                <ul>
                    {
                        tarefas.map((item, index) => (
                           <Item
                           key={index}
                           {...item}
                           />
                        ))
                    }
                </ul>
            </h2>
        </aside>
    )
}
export default Lista;