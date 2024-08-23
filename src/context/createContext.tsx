import React, { createContext, useContext, useState } from "react";
import { ContextInterface } from "./contextInterface";

export const taskContext = createContext<ContextInterface | undefined>(undefined);
taskContext.displayName = "taskContext"

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [tasks, setTasks] = useState<ContextInterface["tasks"]>([]);
    const [inputPesquisa, setInputPesquisa] = useState<ContextInterface["inputPesquisa"]>('');
    const [inputTask, setInputTask] = useState<ContextInterface["inputTask"]>('');
    const [inputSubTask, setInputSubTask] = useState<ContextInterface["inputSubTask"]>('');
    const [painelTask, setPainelTask] = useState<ContextInterface["painelTask"]>(false);
    const [painelSubTask, setPainelSubTask] = useState<ContextInterface["painelSubTask"]>(false);
    const [taskSelected, setTaskSelected] = useState<ContextInterface["taskSelected"]>(0);

    const LoadArray = () => {
        const storageArray = localStorage.getItem('tasks');
        if (storageArray) {
            setTasks(JSON.parse(storageArray));
        }
    }

    const GetTaskId = (taskId: number) => {
        const correctId = tasks.find(task => task.id === taskId);
        if (correctId) {
            setTaskSelected(correctId.id);
        }
    }

    const AdicionarTask = (novaTask: Parameters<ContextInterface['AdicionarTask']>[0]) => {
        const updateTasks = ([...tasks, novaTask]);
        setTasks(updateTasks);
        setPainelTask(!painelTask);
        setInputTask('');
        localStorage.setItem('tasks', JSON.stringify(updateTasks));
    }

    const DeletarTask = (id: number) => {
        const updateTasks = tasks.filter(task => task.id != id);
        setTasks(updateTasks);
        localStorage.setItem('tasks', JSON.stringify(updateTasks));
    }

    const DeletarSubTask = (taskid: number, subTaskId: number) => {
        const updateTasks = tasks.map(task => {
            if (task.id === taskid) {
                return {
                    ...task,
                    subTasks: task.subTasks.filter(subTask => subTask.id != subTaskId)
                };
            }
            return task;
        });
        setTasks(updateTasks);
        localStorage.setItem('tasks', JSON.stringify(updateTasks));
    }

    const AdicionarSubTask = (novaSubTask: { id: number; titulo: string; corSubTask: number; }) => {
        const criarSubTask = tasks.map((task) => {
            if (task.id === taskSelected) {
                return { ...task, subTasks: [...task.subTasks, novaSubTask] };
            }
            return task;
        });
        setTasks(criarSubTask);
        setPainelSubTask(!painelSubTask);
        setInputSubTask('');
        localStorage.setItem('tasks', JSON.stringify(criarSubTask));
    };

    const AbrirPainelTask = () => {
        setPainelTask(!painelTask);
    }

    const AbrirPainelSubTask = () => {
        setPainelSubTask(!painelSubTask);
    }

    const PesquisarTarefas = () => {
        if (inputPesquisa) {

            const taskFiltrada = tasks.filter(task =>
                task.titulo.toLowerCase().includes(inputPesquisa.toLowerCase()) ||
                task.subTasks.some(subTask =>
                    subTask.titulo.toLowerCase().includes(inputPesquisa.toLowerCase()))
            );
            return taskFiltrada;

        } else {
            return tasks;
        }
    }

    const AlterarCorSubTask = (taskId: number, subTaskId: number) => {
        const updateTasks = tasks.map(task => {
            if (task.id == taskId) {
                return {
                    ...task,
                    subTasks: task.subTasks.map(subTask => {

                        if (subTask.id == subTaskId) {
                            if (subTask.corSubTask == 1) {
                                subTask.corSubTask = 2;
                            }
                            else if (subTask.corSubTask == 2) {
                                subTask.corSubTask = 3;
                            }
                            else if (subTask.corSubTask == 3) {
                                subTask.corSubTask = 1;
                            }
                        }
                        return subTask
                    })
                };
            }
            return task;
        }
        );

        setTasks(updateTasks);
        localStorage.setItem('tasks', JSON.stringify(updateTasks));
    }




    return (
        <taskContext.Provider value={{
            tasks,
            setTasks,
            inputPesquisa,
            setInputPesquisa,
            inputTask,
            setInputTask,
            inputSubTask,
            setInputSubTask,
            painelTask,
            setPainelTask,
            painelSubTask,
            setPainelSubTask,
            AdicionarTask,
            DeletarTask,
            DeletarSubTask,
            AdicionarSubTask,
            AbrirPainelTask,
            AbrirPainelSubTask,
            taskSelected,
            setTaskSelected,
            GetTaskId,
            PesquisarTarefas,
            LoadArray,
            AlterarCorSubTask,
        }}>
            {children}
        </taskContext.Provider>
    )
}

export const useTaskContext = (): ContextInterface => {
    const context = useContext(taskContext);
    if (!context) {
        throw new Error('context error')
    }
    return context;
}