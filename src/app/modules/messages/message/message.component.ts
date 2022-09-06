import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from 'src/app/models/message';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  
  @Input()
  public message!: Message;
  
  @Output()
  public currentMessage: EventEmitter<Message> = new EventEmitter;

  constructor(private audioService: AudioService) { }

  ngOnInit(): void {
  }
  
  public openMessage(message: Message){
    this.currentMessage.emit(message);
  }


}
