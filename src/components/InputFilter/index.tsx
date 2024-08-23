import React from "react";
import styled from "styled-components";
import { useTaskContext } from "../../context/createContext";

const DivEstilo = styled.div`
    input{
        border: 1px solid black;
        border-radius: 0.2em;
        font-size: 1.8em;
        padding-left: 0.2em;
    }
`

const InputFilter: React.FC = () => {

    const {inputPesquisa, setInputPesquisa} = useTaskContext();

    return(
        <DivEstilo>
            <input type="text" value={inputPesquisa} onChange={(e) => {setInputPesquisa(e.target.value)}}/>
        </DivEstilo>        
    )
}

export default InputFilter;