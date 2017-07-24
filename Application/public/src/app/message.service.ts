import { Injectable } from '@angular/core';

import { Http } from "@angular/http";
import "rxjs/Rx";

import { Message } from "./message";

@Injectable()
export class MessageService {

  constructor(public _http: Http) { }

  create(message: Message){
    console.log(message, "this is create method within MessageService");
    return this._http.post("/messages", message).map(data => data.json()).toPromise();
   }

   find(){
     console.log()
     return this._http.get('/messages').map(data => data.json()).toPromise();
   }
}
