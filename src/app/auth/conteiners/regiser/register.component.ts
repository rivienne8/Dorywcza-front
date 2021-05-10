import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {MustMatch} from './much-controll';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = this.formBuilder.group({
    username: ['', [Validators.minLength(2)]],
    password: ['', [Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    passwordRepeat: ['', Validators.required],
    phoneNumber: ['', [Validators.pattern('[- +()0-9]+')]]
    },
    {
      // check whether our password and confirm password match
      validator: MustMatch('password', 'passwordRepeat')
    });



  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }


  get form() { return this.registerForm.controls; }

  register() {
    this.authService.register(
      {
        username: this.form.username.value,
        password: this.form.password.value,
        passwordRepeat: this.form.passwordRepead.value,
        phoneNumber: this.form.phoneNumber.value
      }
    )
      .subscribe(success => {
        if (success) {
          this.router.navigate(['/auth/login']);
        }
      });
  }
  get userName(): AbstractControl | null {
    return this.registerForm.get('userName');
  }

  get passwordRepeat(): AbstractControl | null {
    return this.registerForm.get('passwordRepeat');
  }

  get password(): AbstractControl | null {
    return this.registerForm.get('password');
  }

  get phoneNumber(): AbstractControl | null {
    return this.registerForm.get('phoneNumber');
  }


}

