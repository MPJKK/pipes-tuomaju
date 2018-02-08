import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Login} from '../models/login';

@Injectable()
export class MediaService {

  apiUrl = 'http://media.mw.metropolia.fi/wbma';
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';
  loggedAs = '';
  logged: boolean;

  constructor(private http: HttpClient, public router: Router) {
  }

  getAllMedia() {
    return this.http.get(this.apiUrl + '/media');
  }

  getSomeMedia(n) {
    return this.http.get(this.apiUrl + '/media?limit=' + n);
  }

  newUser(user) {
    return this.http.post(this.apiUrl + '/users', user);
  }

  login(user) {
    return this.http.post<Login>(this.apiUrl + '/login', user).
        subscribe(response => {
          console.log(response);
          if (typeof (Storage) !== 'undefined') {
            localStorage.setItem('loggedToken', response.token);
          }
          this.logged = true;
          console.log(localStorage.getItem('loggedToken'));

          this.router.navigate(['front']);
        }, (error: HttpErrorResponse) => {
          this.router.navigate(['login']);
        });
  }

  getUserData(token) {
    const options = {
      headers: new HttpHeaders().set('x-access-token', token),
    };
    return this.http.get(this.apiUrl + '/users/user', options);
  }

  uploadFile(form, token) {

    const options = {
      headers: new HttpHeaders().set('x-access-token', token),
    };

    return this.http.post(this.apiUrl + '/media', form, options);

  }

}
