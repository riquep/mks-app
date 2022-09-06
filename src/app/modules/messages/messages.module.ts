import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessageComponent } from './message/message.component';

import {ButtonModule} from 'primeng/button';
import { MessagesListComponent } from './messages-list/messages-list.component';


@NgModule({
  declarations: [
    MessageComponent,
    MessagesListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MessagesRoutingModule,
    ButtonModule
  ],
  exports:[
    MessageComponent,
    MessagesListComponent
  ]
})
export class MessagesModule { }
