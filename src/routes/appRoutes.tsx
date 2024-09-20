import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TaskProvider } from "../context/createContext";
import React from "react";
import Inicio from "../pages/Inicio";
import NaoEncontrada from "../pages/NaoEncontrada";
import Cabecalho from "../components/Cabecalho";

const AppRoutes: React.FC = () => (
    <BrowserRouter>
        <TaskProvider>
            <Cabecalho />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="*" element={<NaoEncontrada />} />
            </Routes>
        </TaskProvider>
    </BrowserRouter>
)

export default AppRoutes