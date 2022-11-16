import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {AlunoDTO} from "../models/AlunoDTO";
import { IAluno } from '../models/IAluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  alunos:IAluno[] = []
  constructor( private httpClient:HttpClient) { }

  mostrarTodosAlunos():Observable<AlunoDTO>{
    return this.httpClient.get<AlunoDTO>(`${environment.apiUrl}/aluno`);
  }
}
