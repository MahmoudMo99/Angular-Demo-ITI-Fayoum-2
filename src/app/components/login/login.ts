import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(form.value.email);
    console.log(form.value.password);
  }
}
