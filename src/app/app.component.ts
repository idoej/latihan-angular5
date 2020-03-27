import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tugas-angular5';

  constructor(private authService: AuthService, private route: Router) {}

  logout() {
    this.authService.logout();
    this.route.navigate(['/']);
  }

  authenticated(): boolean {
    return this.authService.authenticated();
  }
}
