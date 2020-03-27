import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loginError = false;

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  async login() {
    const success = await this.authService.login(this.username, this.password);
    if (success) {
      this.route.navigate(['/product']);
    } else {
      this.loginError = true;
    }
  }

}
