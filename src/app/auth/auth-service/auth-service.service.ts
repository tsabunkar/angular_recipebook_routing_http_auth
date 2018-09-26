import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  currentTokenValue: string;

  constructor(private router : Router) { }

  singup(email: string, password: string) {
    console.log('calling from auth service for signup method');
    let promiseObj = firebase.auth().createUserWithEmailAndPassword(email, password);//this will create a 
    //new user with email and password in firebase db
    promiseObj.catch(
      err => console.log(err)
    )

  }

  signin(email: string, password: string) {
    console.log('calling from auth service for signin method');
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        resp => {
          console.log(resp);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.currentTokenValue = token
            )
            this.router.navigate(['/']); //redirecting the user form signin to home page i.e- 
            //from 'http://localhost:4200/signin'  to -> 'http://localhost:4200'
        }
      )
      .catch(err => console.log(err))
  }

  getToken() {
    // return firebase.auth().currentUser.getIdToken()

    //THis will give us the token asynchronously (which simply 
    //means if the token is expried then this firebase sdk will reach out to backend firebase and get us
    //the new token value asynchronously)

    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.currentTokenValue = token
      )
    return this.currentTokenValue

  }

  isUserAuthenticated() {
    return this.currentTokenValue != null; //if token has value (it is not null) then user is authenticated
  }

  logOut() {
    firebase.auth().signOut();
    this.currentTokenValue = null;
  }
}
