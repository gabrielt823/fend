import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  //makes an http post request to backend 
  private _registerUrl = "http://localhost:3000/api/register"
  private _loginUrl = "http://localhost:3000/api/login"

  constructor(private http: HttpClient, private _router: Router) { }
  
  //returns the response the api sends when available
  registerUser(user) {
    //registers user in mongo, and returns details of user as response
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    //logs user in mongo, and returns details of user as response
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token') 
    //double negate localstorage to return boolean statement for auth guard
  }

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }
}

