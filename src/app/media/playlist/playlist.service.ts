import {Injectable, Output} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Track} from '../../browse/browse-music/track';

@Injectable()
export class PlaylistService {

  private playlistAddTrack;
  private playlistDeleteTrack;

  playlistAddTrack$;
  playlistDeleteTrack$;

  constructor() {

  this.playlistAddTrack = new Subject<Track>();
  this.playlistDeleteTrack = new Subject<Track>();

  this.playlistAddTrack$ = this.playlistAddTrack.asObservable();
  this.playlistDeleteTrack$ = this.playlistDeleteTrack.asObservable();
  }

  addTrack(track: Track) {
    console.log('ASD');
    this.playlistAddTrack.next(track);
    console.log(track.fileName);
  }
  removeTrack(source: Track) {
    this.playlistDeleteTrack.next(source);
  }
}
