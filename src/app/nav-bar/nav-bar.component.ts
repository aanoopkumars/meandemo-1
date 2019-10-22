import { Component, OnInit } from '@angular/core';
import { LbCallService } from '../lb-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private angService: LbCallService, private routr: Router) { }
  isUserAuthenticated: boolean = false;
  ngOnInit() {
   this.angService.getUserAuth()
   .subscribe((auth)=> {
     this.isUserAuthenticated = auth;
     
   })
  }

  userLogout() {
    this.angService.logoutIdevUser()
    .subscribe((data) => {
      this.routr.navigate(['/login']);
    })
  }

}
