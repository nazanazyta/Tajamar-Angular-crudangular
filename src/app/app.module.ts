import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProvider } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { DepartamentoService } from './services/departamento.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { InsertarComponent } from './components/insertar/insertar.component';
import { ModificarComponent } from './components/modificar/modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DepartamentosComponent,
    InsertarComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , routing
    , HttpClientModule
  ],
  providers: [
    appRoutingProvider
    , DepartamentoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
