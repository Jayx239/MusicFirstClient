import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {MediaService} from '../../media/media.service';
import {Track} from './track';
import {Token} from '../../auth/token';
import {AudioContainer} from '../../media/audio/audio-container';
import {PlaylistService} from '../../media/playlist/playlist.service';

@Component({
  selector: 'app-browse-music',
  templateUrl: './browse-music.component.html',
  styleUrls: ['./browse-music.component.css'],
  providers: [AuthService, MediaService, PlaylistService]
})
export class BrowseMusicComponent implements OnInit {
  tracks: [Track];
  token: Token;
  audioContainer: AudioContainer;

  constructor(private authService: AuthService, mediaService: MediaService, private playlistService: PlaylistService) {
    mediaService.getAudio(['dummy_id'], authService.getToken()).subscribe((data: [Track]) => {
      this.tracks = data;
    });
    this.token = authService.getToken();
    this.audioContainer = {
      controls: 'controls'
    };
  }

  addTrackToPlaylist(track: Track) {
    console.log(track.artist);
    this.playlistService.addTrack(track);
  }


  ngOnInit() {
  }

}
