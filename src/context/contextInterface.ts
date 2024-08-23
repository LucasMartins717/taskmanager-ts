export interface ContextInterface {

    tasks: { id: number; titulo: string; subTasks: { id: number; titulo: string; corSubTask: number; }[] }[];
    setTasks: (tasks: { id: number; titulo: string; subTasks: { id: number; titulo: string; corSubTask: number; }[] }[]) => void;

    inputPesquisa: string;
    setInputPesquisa: (inputPesquisa: string) => void;

    inputTask: string;
    setInputTask: (inputTask: string) => void;

    inputSubTask: string;
    setInputSubTask: (inputSubTask: string) => void;

    painelTask: boolean;
    setPainelTask: (painelTask: boolean) => void;

    painelSubTask: boolean;
    setPainelSubTask: (painelSubTask: boolean) => void;

    taskSelected: number;
    setTaskSelected: (taskSelected: number) => void;

    LoadArray: () => void;
    GetTaskId: (taskId: number) => void;
    AdicionarTask: (novaTask: { id: number; titulo: string; subTasks: { id: number; titulo: string; corSubTask: number; }[] }) => void;
    DeletarTask: (id: number) => void;
    DeletarSubTask: (taskId: number, subTaskId: number) => void;
    AdicionarSubTask: (novaSubTask: { id: number; titulo: string; corSubTask: number; }) => void;
    AbrirPainelTask: () => void;
    AbrirPainelSubTask: (task: number) => void;
    PesquisarTarefas: () => { id: number; titulo: string; subTasks: { id: number; titulo: string; corSubTask: number; }[] }[];
    AlterarCorSubTask: (taskId: number, subTaskId: number) => void;
}

