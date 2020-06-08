import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { GruposService } from './services/grupos.service';

// Componentes
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AddGroupComponent } from './components/add-group/add-group.component';
import { InfoGroupComponent } from './components/info-group/info-group.component';
import { HeaderComponent } from './components/share/header/header.component';
import { FooterComponent } from './components/share/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddGroupComponent,
    InfoGroupComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GruposService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
