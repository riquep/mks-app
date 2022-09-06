import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import messages from './data/messages.json';
import { Message, Messages } from './models/message';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private api: ApiService, private activatedRoute: ActivatedRoute){}
  title = 'Kehilah Shalom';
}
