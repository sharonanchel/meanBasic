import { Injectable } from '@angular/core';
import {User} from "./user";

import {Http} from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class UserService {
  currentUser: User = null;
  constructor(public _http: Http) {

  }

  registerUser(user: User){
    console.log(user, "user registerUser method");
    var promise =  this._http.post("/register", user).map(data => data.json()).toPromise();
    promise.then((data) => {
      this.currentUser = data.user;
    })
    return promise;
  }

  find(userId){
    console.log("This is within userservice", userId);
    return this._http.get(`/users/${userId}`).map(data => data.json()).toPromise();
  }
}
