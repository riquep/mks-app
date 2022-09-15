import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faBackward, faForward, faPlay } from '@fortawesome/pro-thin-svg-icons';

import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SliderModule,
    ButtonModule,
    MatSliderModule,
    ButtonModule,
  ],
  exports: [PlayerComponent],
})
export class PlayerModule {
  constructor(libraryFA: FaIconLibrary) {
    libraryFA.addIcons(faPlay, faForward, faBackward);
  }
}
