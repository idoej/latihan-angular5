import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from '../helper';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookie: CookieService) { }

  async login(username: string, password: string) {
    const data = await this.http.get<any>(BASE_URL + '/users?username=' + username).toPromise();
    const success = data.length === 1 && data[0].password === password;
    if (success) {
      this.cookie.set('token', 'msdio@)&(*$!(@*HSDAH');
      this.cookie.set('user_id', data[0].id);
    }
    return success;
  }

  authenticated(): boolean {
    return this.cookie.check('token');
  }

  logout() {
    this.cookie.delete('token');
    this.cookie.delete('user_id');
  }
}
