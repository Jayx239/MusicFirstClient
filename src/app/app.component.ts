import { Component } from '@angular/core';
import {Track} from './browse/browse-music/track';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Music First';
  playlist: [Track];
}
