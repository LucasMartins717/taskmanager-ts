import React from "react";
import styled from "styled-components";
import { useTaskContext } from "../../context/createContext";

const DivEstilo = styled.div`
    .addTaskButton{
        width: 1.1em;
        height: 1.1em;
        border: 1px solid black;
        border-radius: 4em;
        font-size: 2em;
    }
`
const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25em;
    height: 6.5em;
    background-color: #f1dd67;
    border-radius: 0.4em;
    border: 1px solid black;
    z-index: 99;

    h2{
        font-size: 2em;
        color: #2b1300;
    }

    input{
        width: 80%;
        height: 1.1em;
        background-color: #f3f3f3;
        border: 1px solid black;
        border-radius: 0.2em;
        font-size: 1.6em;
        padding-left: 0.15em;
    }

    button{
        width: 5em;
        height: 1.9em;
    }
`
const DivBackground = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 110vw;
    height: 110vh;
    background-color: #0000004c;
`

const CriarTask: React.FC = () => {

    const { inputTask, setInputTask, painelTask, setPainelTask, AdicionarTask } = useTaskContext();

    return (
        <DivEstilo>
            <button onClick={() => setPainelTask(!painelTask)} className="addTaskButton">+</button>

            {painelTask &&
                <>
                    <DivContainer>
                        <h2>Coloque o titulo</h2>
                        <input type="text" value={inputTask} onChange={(e) => setInputTask(e.target.value)} />
                        <button onClick={() => AdicionarTask({ id: Date.now(), titulo: inputTask, subTasks: [] })}>Criar</button>
                    </DivContainer>

                    <DivBackground />
                </>
            }


        </DivEstilo>
    )
}

export default CriarTask;