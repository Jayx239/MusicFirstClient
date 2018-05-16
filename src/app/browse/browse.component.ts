import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
  providers: [AuthService]
})
export class BrowseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
