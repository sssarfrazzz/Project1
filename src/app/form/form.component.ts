import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  email1 = new FormControl('', [Validators.required, Validators.email]);


  getErrorMessage() {
    return this.email1.hasError('required') ? 'You must enter a value' :
        this.email1.hasError('email') ? 'Not a valid email' :
            '';
  }
}
