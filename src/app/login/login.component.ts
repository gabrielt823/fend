import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //records user data
  loginUserData = {email: ' ', password: ' '}
  
  //inject auth service and router 
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    //calls the auth service for the user data
    this._auth.loginUser(this.loginUserData)
    //subscribes to either the login or error. 
      .subscribe(
        res => {
          console.log(res), //200
          localStorage.setItem('token', res.token)
          //takes user to home
          this._router.navigate(['/events'])
        },
        err => console.log(err), //401
      )
  }
}
