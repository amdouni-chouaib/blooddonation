import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    

    const loginData = this.loginForm.value;

    this.authService.login(loginData).subscribe(
      (response) => {
        // Handle a successful login response, e.g., store user data or token.
        console.log('Login successful', response);
      },
      (error) => {
        // Handle login error, e.g., display an error message to the user.
        console.error('Login error', error);
      }
    );
  }
}