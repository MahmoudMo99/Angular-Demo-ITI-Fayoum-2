import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-with-api',
  imports: [ReactiveFormsModule],
  templateUrl: './login-with-api.html',
  styleUrl: './login-with-api.css',
})
export class LoginWithAPI {
  loginForm!: FormGroup;

  private authService = inject(Auth);
  private router = inject(Router);

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('emilys', [Validators.required]),
      password: new FormControl('emilyspass', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.authService.Login(this.loginForm.getRawValue()).subscribe({
      next: () => {
        this.router.navigate(['/posts']);
      },
      error: () => {},
    });
  }
}
