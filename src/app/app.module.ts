import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { HeaderComponent } from './components/header/header.component';
import { MyAsideComponent } from './components/my-aside/my-aside.component';
import { MySectionComponent } from './components/my-section/my-section.component';
import { CaracteristicasComponent } from './components/caracteristicas/caracteristicas.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    HeaderComponent,
    MyAsideComponent,
    MySectionComponent,
    CaracteristicasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
