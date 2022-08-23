import { Component } from '@angular/core';
import messages from './data/messages.json';
import { Messages } from './models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kehilah Shalom';
  
  public messages: Messages = messages.data;
}
