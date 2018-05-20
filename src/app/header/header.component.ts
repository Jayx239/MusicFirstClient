import {Component, Input, OnInit} from '@angular/core';
import { AppComponent } from '../app.component';
import {Track} from '../browse/browse-music/track';
import {Token} from '../auth/token';
import {AudioContainer} from '../media/audio/audio-container';
import {AuthService} from '../auth/auth.service';
import {PlaylistService} from '../media/playlist/playlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService, PlaylistService]
})
export class HeaderComponent implements OnInit {
  title: string;
  tracks:  Track[] = [];
  token: Token;
  audioContainer: AudioContainer;
  /*playlist: PlaylistComponent;*/

  constructor(private authProvider: AuthService, private playlistService: PlaylistService) {
    this.audioContainer = {
      controls: 'controls'
    };
    this.token = authProvider.getToken();
  }

  ngOnInit() {
  }

}
