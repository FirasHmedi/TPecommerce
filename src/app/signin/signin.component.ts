import { Component, OnInit } from '@angular/core';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService : AuthService,private router : Router) { }

  ngOnInit() {
  }

  signIn(){
    this.authService.setAuth(true);
    this.router.navigate(['/home']);
  }

}
