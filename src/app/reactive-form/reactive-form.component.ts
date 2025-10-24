import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormControl, FormControlName, ReactiveFormsModule } from "@angular/forms";


@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  loginUser() {
    console.log(this.loginForm.value);
  }
}
