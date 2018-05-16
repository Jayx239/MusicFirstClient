import { Component, OnInit } from '@angular/core';
import {AudioContainer} from './audio-container';
import {MediaSource} from '../media-source';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css'],
  providers: [AuthService]
})
export class AudioComponent implements OnInit {

  audioContainer;
  sources;
  path = 'http://localhost:3000/media/audio';
  token;

  constructor(private authService: AuthService) {
    this.token = authService.getToken();
    this.audioContainer = [];
    this.sources = [];
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
