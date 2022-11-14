import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MostrarTodosAlunosComponent } from './pages/mostrar-todos-alunos/mostrar-todos-alunos.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'todososalunos', component:  MostrarTodosAlunosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
