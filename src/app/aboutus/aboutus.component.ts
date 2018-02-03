import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  lat = 17.659920;
  lng = 	75.906387;
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor() { }

  ngOnInit() {
  }


  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
}
