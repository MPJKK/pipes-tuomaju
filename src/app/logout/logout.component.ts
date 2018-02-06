import { Component, OnInit } from '@angular/core';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    if (localStorage.getItem('loggedToken') !== null) {
      localStorage.setItem('loggedToken', null);
    }

    this.mediaService.router.navigate(['login']);
  }

}
