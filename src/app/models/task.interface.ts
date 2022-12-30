//? Enum de nivel de urgencia de tareas
export enum LEVELS{
    "INFO",
    "URGENT",
    "BLOCKING"
}

//? Interface de tareas
export interface ITask{
    title:string;
    description:string;
    completed:boolean;
    level:LEVELS;
}