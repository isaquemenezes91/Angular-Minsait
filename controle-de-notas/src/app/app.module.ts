import { NgModule,Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


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
import { BarraDeMenuComponent } from './component/barra-de-menu/barra-de-menu.component';
import { GuiaComponent } from './pages/guia/guia.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AtualizarComponent } from './pages/atualizar/atualizar.component';
import { MetricasComponent } from './pages/metricas/metricas.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';

import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MostrarTodosAlunosComponent,
    AdicionarComponent,
    RemoverComponent,
    BarraDeMenuComponent,
    GuiaComponent,
    AtualizarComponent,
    MetricasComponent,
    
    
    
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
    MatTabsModule,
    MatAutocompleteModule,
    HttpClientModule,
    DialogModule,
    MatDialogModule,
    ButtonModule,
    MatExpansionModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
