import React from "react";
import styled from "styled-components";
import { useTaskContext } from "../../context/createContext";

const DivEstilo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 21em;
    height: 10em;
    background-color: #e9e9e9;
    border: 1px solid black;
    border-radius: 0.4em;

    h3{
        font-size: 2em;
    }

    hr{
        width: 100%;
        border: 1px solid #000000;
    }
`
const DivTask = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0em 0.5em;

    .buttonTask{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1em;
        height: 1em;
        border: 1px solid black;
        border-radius: 4em;
        font-size: 1.8em;
        margin: auto 0;
        cursor: pointer;
    }

    .buttonTask:last-child{
        padding-bottom: 2px;
    }

    .botoesTask{
        display: flex;
        align-items: center;
        gap: 0.2em;
    }
`
const DivSubTask = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
    
    p{
        display: flex;
        justify-content: space-between;
        padding: 0 0.2em;
        width: 100%;
        font-size: 1.3em;
        background-color: #ffe693dd;
        border-bottom: 1px solid #00000055;
        user-select: none;
    }

    .buttonSubTask{
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 1em;
        min-height: 1em;
        max-width: 1em;
        max-height: 1em;
        border: 1px solid black;
        border-radius: 4em;
        font-size: 0.8em;
        margin: auto 0;
        cursor: pointer;
    }

`

const Task: React.FC = () => {

    const { PesquisarTarefas, painelSubTask, setPainelSubTask, setTaskSelected, DeletarTask, DeletarSubTask, AlterarCorSubTask } = useTaskContext();

    return (
        PesquisarTarefas().map((task) => (

            <DivEstilo key={task.id}>
                <DivTask>
                    <h3>{task.titulo}</h3>
                    <div className="botoesTask">
                        <button onClick={() => { setPainelSubTask(!painelSubTask); setTaskSelected(task.id) }} className="buttonTask">+</button>
                        <button onDoubleClick={() => DeletarTask(task.id)} className="buttonTask">x</button>
                    </div>
                </DivTask>
                <hr />
                <DivSubTask >
                    {task.subTasks.map((subTask) => (
                        <p key={subTask.id}
                            onClick={() => AlterarCorSubTask(task.id, subTask.id)}
                            style={{
                                backgroundColor: subTask.corSubTask == 1 ? "#D98282" :
                                    subTask.corSubTask == 2 ? "#FFD580" :
                                        "#66FF99"
                            }}>{subTask.titulo}
                            <button onClick={(e) => e.stopPropagation()}
                                onDoubleClick={() => DeletarSubTask(task.id, subTask.id)}
                                className="buttonSubTask">x</button></p>
                    ))}
                </DivSubTask>

            </DivEstilo>
        ))
    )
}

export default Task;