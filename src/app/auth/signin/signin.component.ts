import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// also u can create using FormControl & FormGroup

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  formGrp: FormGroup;

  constructor(private fb: FormBuilder) {

   }

  ngOnInit() {
    this.formGrp = this.fb.group({
      'email': ['', [Validators.required, Validators.email] ],
      'password': ['',  Validators.required ]
    })
  }


  onSubmission() {
    console.log(this.formGrp.valid);
  }
}
