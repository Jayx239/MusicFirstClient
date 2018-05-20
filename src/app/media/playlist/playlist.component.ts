import {Component, OnDestroy, OnInit, Output} from '@angular/core';
import {Track} from '../../browse/browse-music/track';
import {PlaylistService} from './playlist.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  providers: [PlaylistService]
})
export class PlaylistComponent implements OnInit, OnDestroy {
  tracks: Track[] = [];
  subscription: Subscription;
  constructor(private playlistService: PlaylistService) {
  }

  ngOnInit() {
    this.subscription = this.playlistService.playlistAddTrack$.subscribe(
      track => {
        console.log('hit');
        this.tracks.push(track);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
