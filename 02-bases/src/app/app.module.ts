import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroesModule } from './heroes/heroe.module';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
