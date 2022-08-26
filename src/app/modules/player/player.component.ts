import { Component, OnInit } from '@angular/core';
import { AudioService } from "../../services/audio.service";
import { StreamState } from "../../models/stream-state";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})

export class PlayerComponent implements OnInit {
  
  public files: Array<any> = [];
  public state!: StreamState;
  public currentFile: any = {};

  constructor(private audioService: AudioService) {
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });
   }

  ngOnInit(): void {
  }
  
  playStream(url: string) {
    this.audioService.playStream(url).subscribe(events => {
      // listening for fun here
    });
  }
  
  openFile(file: any, index: any) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
  }
  
  pause() {
    this.audioService.pause();
  }
  
  play() {
    this.audioService.play();
  }
  
  stop() {
    this.audioService.stop();
  }
  
  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }
  
  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }
  
  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }
  
  onSliderChangeEnd(change: any) {
    this.audioService.seekTo(change.value);
  }

}
