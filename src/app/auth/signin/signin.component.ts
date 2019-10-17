import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LbCallService } from 'src/app/lb-call.service';
import { Router } from '@angular/router';


// also u can create using FormControl & FormGroup

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  formGrp: FormGroup;

  constructor(private fb: FormBuilder, private serv: LbCallService,private router: Router) {

   }

  ngOnInit() {
    this.formGrp = this.fb.group({
      'email': ['', [Validators.required, Validators.email] ],
      'password': ['',  Validators.required ]
    })
  }


  onSubmission() {
  //  console.log(this.formGrp.value);
   this.serv.addIdevUsers(this.formGrp.value)
   .subscribe((res)=>{
    this.formGrp.reset();
    this.router.navigate(['/login']);
    console.log(res);
  }) 


  }
}
