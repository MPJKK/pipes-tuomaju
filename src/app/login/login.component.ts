import {Component, OnInit} from '@angular/core';
import {MediaService} from '../services/media.service';
import {User} from '../models/user';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  userLogin = new User('', '', '');

  constructor(private mediaService: MediaService) {
  }

  login(user) {
    this.mediaService.login(user);
  }

  ngOnInit() {
    if (localStorage.getItem('loggedToken') !== null) {
      this.mediaService.getUserData(localStorage.getItem('loggedToken')).
          subscribe(response => {
            console.log(response);
            this.mediaService.router.navigate(['front']);
          }, (error: HttpErrorResponse) => {
            console.log(error);
          });
    }
  }

}
