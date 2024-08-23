import React from "react";
import styled from "styled-components";

const DivEstilo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    background-color: #ffdb3d;
    border-bottom: 1px solid black;
`

const Cabecalho: React.FC = () => {
    return (
        <DivEstilo>
            <h1>KernList</h1>
        </DivEstilo>
    )
}

export default Cabecalho;