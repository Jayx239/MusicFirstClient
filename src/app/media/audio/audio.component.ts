import {Component, Input, OnInit} from '@angular/core';
import {AudioContainer} from './audio-container';
import {MediaSource} from '../media-source';
import {AuthService} from '../../auth/auth.service';
import {Token} from '../../auth/token';
import {Track} from '../../browse/browse-music/track';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  @Input() audioContainer: AudioContainer;
  @Input() sources: [Track];
  path = 'http://localhost:3000/media/audio';
  @Input() token: Token;

  constructor() {

  /*constructor(private authService: AuthService) {
    this.token = authService.getToken();
    this.audioContainer = [];
    this.audioContainer.controls = 'controls';
    this.sources = [];
    this.sources.push({
      name: 'Meek Mill - Ooh Kill Em [Official Video].mp3',
      type: 'audio/mpeg'
    });*/
  }

  ngOnInit() {
  }

  turnControlsOn() {
    this.audioContainer.controls = 'controls';
  }
  turnControlsOff() {
    this.audioContainer.controls = '';
  }
}
