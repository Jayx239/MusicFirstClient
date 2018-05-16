import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {MediaService} from '../../media/media.service';

@Component({
  selector: 'app-browse-music',
  templateUrl: './browse-music.component.html',
  styleUrls: ['./browse-music.component.css'],
  providers: [AuthService, MediaService]
})
export class BrowseMusicComponent implements OnInit {
  tracks;
  constructor(private authService: AuthService, mediaService: MediaService) {
    this.tracks = mediaService.getAudio(['dummy_id'], authService.getToken());
  }


  ngOnInit() {
  }

}
