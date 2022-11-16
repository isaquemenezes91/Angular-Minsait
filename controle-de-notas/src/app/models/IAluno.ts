import {Nota} from "./INota";

export interface IAluno{
    id: number,
    nome: string,
    notas:[Nota];
}