import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faMenorah } from '@fortawesome/pro-thin-svg-icons';

import { MessagesModule } from './modules/messages/messages.module';
import { PlayerModule } from './modules/player/player.module';
import { HomePageComponent } from './modules/home-page/home-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MessagesModule,
    PlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(libraryFA: FaIconLibrary){
    libraryFA.addIcons(
      faMenorah
    )
  }
}
