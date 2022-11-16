import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { IAluno } from 'src/app/models/IAluno';
import { Nota } from 'src/app/models/INota';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-mostrar-todos-alunos',
  templateUrl: './mostrar-todos-alunos.component.html',
  styleUrls: ['./mostrar-todos-alunos.component.scss']
})
export class MostrarTodosAlunosComponent implements OnInit {

  constructor(private alunoService: AlunoService,public dialog: MatDialog)
  {}  
  alunos:IAluno[] = [];
  notas:Nota[] = [];
  panelOpenState = false;
  enum:any;
  ngOnInit(): void {
    
    
  }

  mostrarTodosAlunos(){
    this.alunoService.mostrarTodosAlunos().subscribe(res => {
      console.log(res);
      this.alunos = Object.values(res);
  })

  }
  disciplina(e : number){
    switch(e){
      case 0 : 
        return "Portugues";
      case 1 : 
        return "Matemática";
      case 2 : 
        return "Biologia";
      case 3 : 
        return "EducaçãoFísica";
      case 4 : 
        return "Filosofia";
      case 5 : 
        return "Física";
      case 6 : 
        return "Geografia";
      case 7 : 
        return "História";
      case 8 : 
        return "Ingles";
      case 9 : 
        return "Química";
      case 10 : 
        return "Sociologia";
      default:
        return "Disciplina";
    }
  }
}



