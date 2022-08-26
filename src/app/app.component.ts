import { Component } from '@angular/core';
import messages from './data/messages.json';
import { Message, Messages } from './models/message';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private api: ApiService){}
  title = 'Kehilah Shalom';
  
  public messages!: Message[];
  
  ngOnInit(){
    this.api.getMessages()
    .subscribe(
      res => {this.messages = res; console.log(this.messages);}
      
    )
    
  }
}
