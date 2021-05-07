import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    username: [''],
    password: ['']
  });

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }


  get form() { return this.loginForm.controls; }

  login() {
    this.authService.login(
      {
        username: this.form.username.value,
        password: this.form.password.value
      }
    )
      .subscribe(success => {
        if (success) {
          this.router.navigate(['/customers']);
        }
      });
  }

}
