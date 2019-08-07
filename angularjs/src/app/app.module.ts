import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceModule } from './services/service.module';
import { HeaderComponent } from './views/header/header.component';
import { BodyComponent } from './views/body/body.component';
import { FooterComponent } from './views/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { GaugeComponent } from './components/gauge/gauge.component';
import { CompasComponent } from './components/compas/compas.component';
import { HistoriqueComponent } from './components/historique/historique.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    GaugeComponent,
    CompasComponent,
    HistoriqueComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
