import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message, Messages } from 'src/app/models/message';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  public messages!: Messages;
  @ViewChild(PlayerComponent)
  public playerComponent!: PlayerComponent;
  
  ngOnInit(){
    this.activatedRoute.params.subscribe((res) => {
      this.messages = this.activatedRoute.snapshot.data['messages'];
    })    
   
  } 
  
  public openMessage(message: Message){
    this.playerComponent.openFile(message, 1)
    
  }

}
