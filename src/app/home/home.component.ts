import { Component, OnInit , OnDestroy} from '@angular/core';

import { LbCallService } from '../lb-call.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { user } from '../models/userModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  constructor() {
   
  }

  ngOnInit() {
 

  }



 

}
