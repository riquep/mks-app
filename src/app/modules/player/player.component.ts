import { Component, Input, OnInit } from '@angular/core';
import { AudioService } from '../../services/audio.service';
import { StreamState } from '../../models/stream-state';
import { Message, Messages } from 'src/app/models/message';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @Input()
  public files!: Messages;
  public state!: StreamState;
  @Input()
  public currentFile: any = {};

  constructor(private audioService: AudioService) {
    this.audioService.getState().subscribe((state) => {
      this.state = state;
    });
  }

  ngOnInit(): void {}

  playStream(url: string) {
    this.audioService.playStream(url).subscribe((events) => {
      // listening for fun here
    });
  }

  openFile(file: Message, index: any) {
    this.currentFile = { index, file };
    console.log(this.currentFile.file);

    this.audioService.stop();
    this.playStream(file.file_url);
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
