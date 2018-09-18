import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth-service/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  @ViewChild('FormElement') singupForm: NgForm;


  onSignUp() {
    console.log(this.singupForm);
    const email = this.singupForm.value.email;
    const password = this.singupForm.value.password;
    console.log(email, password);
    this.authService.singup(email, password);
  }
}
