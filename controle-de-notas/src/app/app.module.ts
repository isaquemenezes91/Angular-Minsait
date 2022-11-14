import { NgModule,Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { BarraDePesquisaComponent } from './components/barra-de-pesquisa/barra-de-pesquisa.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MostrarTodosAlunosComponent } from './pages/mostrar-todos-alunos/mostrar-todos-alunos.component';
import { AdicionarComponent } from './pages/adicionar/adicionar.component';
import { RemoverComponent } from './pages/remover/remover.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{MatSliderModule} from '@angular/material/slider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    BarraDePesquisaComponent,
    HomePageComponent,
    MostrarTodosAlunosComponent,
    AdicionarComponent,
    RemoverComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
