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
export class HomeComponent implements OnInit, OnDestroy {

  title = 'sampleApp';
  mode = '';
  userN = '';
  userE = '';
  userR = '';
  userA = '';
  userI ;
  usersArr = [];
  subSub: Subscription
  constructor(private lbService: LbCallService, private rtr: Router) {
    this.subSub = this.lbService.subscribeTouserChanges().subscribe((usrs: user[]) => {
      this.usersArr = usrs;
   //  console.log('Inside subscription');
     // console.log(this.usersArr);
    })
  }

  ngOnInit() {
  //  console.log('on init')
   this.lbService.gettingUsers()
   .subscribe((rs) => {

   },(err)=> {
     if(err.status==401){
       alert('Please login!')
       this.rtr.navigate(['/login']);
     }
     
   })

  }

  regUsers(frm: NgForm) {
    this.mode = 'reg';
    // this.lbService.gettingUsers().subscribe((res)=> {
    //   console.log(res);
    // });

  //  console.log(frm.value);
    this.lbService.addUser(frm.value)
    frm.reset();
  }

  updateUser(frm: NgForm) {
    this.lbService.editUser(frm.value, this.userI);
    this.mode = 'reg';
    frm.reset();
  }

  deleteUser(ID) {
    if(!confirm('Are you sure want to delete this user?'))return false;
    this.lbService.DeleteUser(ID);
  }

  editUser(ID) {
    this.mode = 'edit'
   this.lbService.getuser(ID).subscribe((editres: user) =>{
     this.userN = editres.userName;
     this.userE = editres.mailID;
     this.userR = editres.role;
     this.userA = editres.aplicationName;
     this.userI = editres.id;
   })
  }

  ngOnDestroy() {
    this.subSub.unsubscribe();
  }

}
