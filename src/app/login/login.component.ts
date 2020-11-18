import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: FormGroup
  //records user data

  data = {email: ' ', password: ' '}; //user variables
  
  //inject auth service and router 
  constructor(private builder: FormBuilder,private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.loginUser = new FormGroup(
      {
        //user fields
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      })
  }

  handleSubmit() {
    
    //calls the auth service for the user data
    this.data = this.loginUser.value;
    this._auth.registerUser(this.data)
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
