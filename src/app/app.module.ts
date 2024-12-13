import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArtistasModule } from './components/artistas.module';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';

import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), ArtistasModule, RouterModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}


