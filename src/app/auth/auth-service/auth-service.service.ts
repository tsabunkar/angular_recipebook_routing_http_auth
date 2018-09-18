import { Injectable } from '@angular/core';
import * as firebase from 'firebase'

@Injectable()
export class AuthService {

  constructor() { }

  singup(email: string, password: string) {
    console.log('calling from auth service');
    let promiseObj = firebase.auth().createUserWithEmailAndPassword(email, password);//this will create a 
    //new user with email and password in firebase db
    promiseObj.catch(
      err => console.log(err)
    )

  }
}
