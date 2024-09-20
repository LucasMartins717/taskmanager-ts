import React from "react";
import styled from "styled-components";
import { useTaskContext } from "../../context/createContext";


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
    background-color: #77a593;
    border-radius: 0.4em;
    border: 1px solid black;
    z-index: 99;

    h2{
        font-size: 2em;
        color: #000000;
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
        margin-bottom: 0.3em;
    }
`
const DivBackgroundColor = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 110vh;
    background-color: #0000004c;
`


const CriarSubTask: React.FC = () => {

    const { painelSubTask, setPainelSubTask, inputSubTask, setInputSubTask, AdicionarSubTask, } = useTaskContext();

    return (
        painelSubTask &&
        <>
            <DivContainer>
                <h2>Escreva a subtask</h2>
                <input 
                type="text" 
                value={inputSubTask} 
                onChange={(e) => setInputSubTask(e.target.value)} 
                onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        AdicionarSubTask({ id: Date.now(), titulo: inputSubTask, corSubTask: 1})
                    }
                }}/>
                <button onClick={() => AdicionarSubTask({ id: Date.now(), titulo: inputSubTask, corSubTask: 1})}>Criar</button>
            </DivContainer>
        <DivBackgroundColor onClick={() => setPainelSubTask(!painelSubTask)}/>
        </>
    )
}

export default CriarSubTask;