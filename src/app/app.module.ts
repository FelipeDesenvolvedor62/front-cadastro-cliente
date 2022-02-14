import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/header/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { CadClienteComponent } from './components/body/cliente/cad-cliente/cad-cliente.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, CadClienteComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, MegaMenuModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
