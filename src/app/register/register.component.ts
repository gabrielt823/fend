import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //add form group
  registerUser: FormGroup
  //eAdded boolean value to confirm event addition

  data = {email: ' ', password: ' '}; //user variables

  constructor (private _registerUrl: AuthService, private router: Router) { }

  

  ngOnInit(): void {
    //
    this.registerUser = new FormGroup(
      {
        //user fields
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      })
  }

  handleSubmit(){
    console.log(this.registerUser.value);

    this.data = this.registerUser.value;
    this._registerUrl.registerUser(this.data)
    .subscribe(
      res => {
        console.log(res), //200
        //sets an item with the key token, and stores in the local storage
        localStorage.setItem('token', res.token)
        //takes user to home
        this.router.navigate(['events'])

      },
      err => console.log(err) //401
    )

  }


}


