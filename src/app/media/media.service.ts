import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {Track} from '../browse/browse-music/track';
import {Token} from '../auth/token';

@Injectable()
export class MediaService {

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getAudio(audioIds: string[], token: Token) {
    return this.http.get<[Track]>('http://localhost:8080/media/audioByArtist?artist=Meek');
    /*'track.'
      = {
      audioContainer: {
        controls: 'controls'
      },
      sources: [{
            name: 'Meek Mill - Ooh Kill Em [Official Video].mp3',
            type: 'audio/mp3'
      }]
    };
    tracks.push(track);
    return tracks;*/
  }
  /* method to get all videos for a given input */
  getVideos(videoIds: string[], token: string) {
    /* const options this.getTokenHeader(); */
    /* return this.httpClient.post('localhost:3000/media/video', audioId, options);*/
    /* TODO: Update backend to store info about media */
    const videos = [];
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
    videos.push(video);
    return videos;
  }
  getimage(imageId: string) { }

  getTokenHeader() {
    const options = {
      headers: new HttpHeaders().set('x-access-token', this.authService.getToken().tokenString)
    };
    return options;
  }

  /* TODO: update inputs */
  uploadAudio(audioFile: string) { }
  uploadVideo(videoFile: string) { }
  uploadImage(imageFile: string) { }
}
