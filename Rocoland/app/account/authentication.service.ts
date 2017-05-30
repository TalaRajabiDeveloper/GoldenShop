import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {LoginViewModel} from './login';

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) { }

  login(username: string, password: string) {
    let model: LoginViewModel;
    model = new LoginViewModel();
    model.Email = username;
    model.Password = password;
    model.RememberMe = false;

    let apiUrl = 'api/account/login/';
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post(apiUrl, JSON.stringify(model), { headers: headers })
      .map((response: Response) => {
              // login successful if there's a jwt token in the response
              let user = response.json();
              if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
              }
            });
  
  }

  loggedIn() {
    let islogged: Boolean = false;
    if (localStorage.getItem('currentUser'))
      islogged = true;

    return islogged;
  }

  getUserName() {
    let userName: string;
    let currentUser: any;

    currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (this.loggedIn())
      userName = currentUser.dbUser.Email;
    else
      userName = "";

    return userName;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}