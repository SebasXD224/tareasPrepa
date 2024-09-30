import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Etapa2Dimension3Component } from './etapa2-dimension3/etapa2-dimension3.component';
import { EvidenciaE2Component } from './evidencia-e2/evidencia-e2.component';

@NgModule({
  declarations: [
    AppComponent,
    Etapa2Dimension3Component,
    EvidenciaE2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
