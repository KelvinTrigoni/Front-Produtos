import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { routers } from './app.routing';
import { HomeComponent } from './views/home/home.component';
import { AppComponent } from './app.component';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { ToastComponent } from './views/toast/toast.component';
import { ListagemComponent } from './views/listagem/listagem.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ToastComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    routers,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient,ToastComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
