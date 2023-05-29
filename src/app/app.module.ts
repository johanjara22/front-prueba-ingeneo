import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogisticaTerrestreComponent } from './components/logistica-terrestre/logistica-terrestre.component';
import { LogisticaMaritimaComponent } from './components/logistica-maritima/logistica-maritima.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PlanEntregaComponent } from './components/plan-entrega/plan-entrega.component';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LogisticaTerrestreComponent,
    LogisticaMaritimaComponent,
    LoginComponent,
    RegisterComponent,
    PlanEntregaComponent,
    HomeComponent,
    WelcomeComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
