import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  formRegister!: FormGroup;

  constructor() {
    this.formRegister = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9+_.-]+@gmail\.com$'),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get emailControl() {
    return this.formRegister.get('email');
  }

  get passwordControl() {
    return this.formRegister.get('password');
  }

  onSubmit() {
    if (this.formRegister.invalid) return;
    console.log(this.formRegister.value);
  }
}
