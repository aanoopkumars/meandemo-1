import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LbCallService } from 'src/app/lb-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
   this.serv.loginIdevUser(this.formGrp.value)
   .subscribe((res)=>{
    this.formGrp.reset();
    this.router.navigate(['/']);
    console.log(res);
  }) 


  }

}
