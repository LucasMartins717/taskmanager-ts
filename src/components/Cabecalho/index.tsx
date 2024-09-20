import React from "react";
import styled from "styled-components";

const HeaderEstilo = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    background-color: #77a593;
    border-bottom: 1px solid black;

    h1{
        margin-bottom: 0.1em;
    }
`

const Cabecalho: React.FC = () => {
    return (
        <HeaderEstilo>
            <h1>TaskManager</h1>
        </HeaderEstilo>
    )
}

export default Cabecalho;