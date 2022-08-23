import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessageComponent } from './message/message.component';

import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MessagesRoutingModule,
    ButtonModule
  ],
  exports:[
    MessageComponent
  ]
})
export class MessagesModule { }
