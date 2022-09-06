import { Component, Input, OnInit } from '@angular/core';
import { Messages } from 'src/app/models/message';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {
  
  @Input()
  public messages!: Messages;

  constructor() { }

  ngOnInit(): void {
  }

}
