import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {MediaService} from "../media.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers: [MediaService, AuthService]
})
export class VideoComponent implements OnInit {

  videoContainer;
  sources;
  path = 'http://localhost:3000/media/video';
  token;
  constructor(private mediaService: MediaService, private authService: AuthService) {

    this.videoContainer = [];
    this.videoContainer.width = 600;
    this.videoContainer.height = 400;
    this.videoContainer.autoPlay = false;
    this.videoContainer.controls = 'controls';
    this.token = authService.getToken();
    this.sources = [];
    this.sources.push({
      name: 'WTF - $300 Toaster.mp4',
      type: 'video/mp4'
    });
  }

  ngOnInit() {
  }

  turnControlsOn() {
    this.videoContainer.controls = 'controls';
  }
  turnControlsOff() {
    this.videoContainer.controls = '';
  }

}
