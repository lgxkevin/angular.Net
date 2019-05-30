import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in');
    }, error => {
      console.log(error);
    });
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    // if (token) return true; else return false
    return !!token;
  }
  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }
}
