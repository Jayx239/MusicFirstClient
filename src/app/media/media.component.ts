import { Component, OnInit } from '@angular/core';
import {MediaService} from './media.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
  providers: [AuthService, MediaService]
})
export class MediaComponent implements OnInit {

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
  }

}
