import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from "ng2-currency-mask";

import { routers } from './app.routing';
import { HomeComponent } from './views/home/home.component';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ToastComponent } from './components/toast/toast.component';
import { ListagemComponent } from './views/listagem/listagem.component';
import { FormularioComponent } from './views/formulario/formulario.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'left',
  allowNegative: false,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ToastComponent,
    ListagemComponent,
    FormularioComponent,
    NotFoundComponent
  ],
  imports: [
    routers,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  providers: [
    HttpClient,
    ToastComponent,
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
