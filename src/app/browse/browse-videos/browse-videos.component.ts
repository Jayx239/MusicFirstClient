import { Component, OnInit } from '@angular/core';
import {MediaService} from '../../media/media.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-browse-videos',
  templateUrl: './browse-videos.component.html',
  styleUrls: ['./browse-videos.component.css'],
  providers: [MediaService, AuthService]
})
export class BrowseVideosComponent implements OnInit {
  videos;

  constructor(private mediaService: MediaService, private authService: AuthService) { }

  ngOnInit() {
    this.loadVideos();
  }

  loadVideos() {
    this.videos = this.mediaService.getVideos(['312123'], this.authService.getToken());
    /*
    const video = {
      videoContainer: {
        width: 768,
        height: 400,
        autoPlay: false,
        controls: 'control'
      },
      sources: [{
        name: 'Toaster.mp4',
        type: 'video/mp4'
      }]
    };
    this.videos.push(video);
    */
  }

}
