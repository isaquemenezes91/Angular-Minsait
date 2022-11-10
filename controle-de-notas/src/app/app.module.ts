import { NgModule,Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { BarraDePesquisaComponent } from './barra-de-pesquisa/barra-de-pesquisa.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MostrarTodosAlunosComponent } from './mostrar-todos-alunos/mostrar-todos-alunos.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { RemoverComponent } from './remover/remover.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{MatSliderModule} from '@angular/material/slider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
