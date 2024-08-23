import React, { useEffect } from "react";
import styled from "styled-components";
import Cabecalho from "../../components/Cabecalho";
import InputFilter from "../../components/InputFilter";
import CriarTask from "../../components/CriarTask";
import Task from "../../components/Task";
import { useTaskContext } from "../../context/createContext";
import CriarSubTask from "../../components/CriarSubTask";

const HeaderCabecalho = styled.header`
    
`
const MainContainer = styled.main`
    
`
const DivTaskCreateFilter = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1em;
    gap: 1.5em;
`
const SectionTasks = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    padding: 2em 3em;
`

const Inicio: React.FC = () => {

    const { LoadArray } = useTaskContext();

    useEffect(() => {
        LoadArray();
    }, [])

    return (
        <>

            <HeaderCabecalho>
                <Cabecalho />
            </HeaderCabecalho>

            <MainContainer>

                <DivTaskCreateFilter>
                    <InputFilter />
                    <CriarTask />
                </DivTaskCreateFilter>

                <SectionTasks>
                    <Task />
                    <CriarSubTask />
                </SectionTasks>

            </MainContainer>
        </>
    )
}

export default Inicio;