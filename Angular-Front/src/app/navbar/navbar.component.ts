import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model: any = {};

  constructor(
    public authService: AuthService,
    private alertifyService: AlertifyService,
    private router: Router
    ) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertifyService.success('Login Successfully');
    }, error => {
      this.alertifyService.error(error);
    }, ()=>{
      this.router.navigate(['/members']);
    });
  }
  loggedIn() {
    // const token = localStorage.getItem('token');
    // // if (token) return true; else return false
    // return !!token;
    return this.authService.loggedIn();
  }
  logout() {
    localStorage.removeItem('token');
    this.alertifyService.message('logged out');
    this.router.navigate(['/home']);
  }
}
