import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {email: ' ', password: ' '}; //user variables

  //"inject the auth service", "inject the router for home navigation"
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {}

  registerUser(){
    //passes the registeruserData when clicking submit
    this._auth.registerUser(this.registerUserData)
    //subscribe to the observable to either get response or error
    .subscribe(
      res => {
        console.log(res), //200
        //sets an item with the key token, and stores in the local storage
        localStorage.setItem('token', res.token)
        //takes user to home
        this._router.navigate([''])

      },
      err => console.log(err) //401
    )
  }
} 
