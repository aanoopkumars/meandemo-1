import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LbCallService {
  userArray = [];
  userChangeFound = new Subject();
  userAuthenticated = new Subject<boolean>();
  constructor(private http: HttpClient) { }

  getUserAuth() {
    return this.userAuthenticated.asObservable();
  }

  

  getuser(ID) {
    return this.http.get(`http://localhost:3000/api/CBNUsers/${ID}`);
  }

  gettingUsers() {
     this.http.get<[]>('http://localhost:3000/api/Users')
     .subscribe((data) => {
      this.userAuthenticated.next(true);
      this.userArray = data;
     this.userChangeFound.next([...this.userArray])
     },(err)=> {
       alert('Sorry, U are not authenticated. Please login again');

     })
     

    }

  subscribeTouserChanges() {
      return this.userChangeFound.asObservable();
    }

  addUser(user) {
      const usr = {
        "mailID": user.email,
        "aplicationName": user.appName,
        "role": user.role,
        "userName": user.userName
    }
      return this.http.post('http://localhost:3000/api/Users', usr).subscribe((res)=> {
      //  console.log('User Added');
        this.gettingUsers();
        });   

    }

  editUser(user, id) {
    const usr = {
      "mailID": user.email,
      "aplicationName": user.appName,
      "role": user.role,
      "userName": user.userName
  }
    return this.http.patch(`http://localhost:3000/api/CBNUsers/${id}`, usr).subscribe((res)=> {
      this.gettingUsers();
      }); 
  }  

  DeleteUser(id) {
   this.http.delete(`http://localhost:3000/api/CBNUsers/${id}`)
   .subscribe((delRes) => {
      this.gettingUsers();
   })
  }



  // for IdevUsers

   addIdevUsers(iuser){
    // console.log(iuser);
    return this.http.post('http://localhost:3000/api/Idev_user/signup',iuser)

   }
  
   loginIdevUser(iuser){
    // console.log(iuser);
    return this.http.post('http://localhost:3000/api/Idev_user/login',iuser)

   }

   logoutIdevUser() {
    return this.http.get('http://localhost:3000/api/Idev_user/logout')
    .pipe(
      map((res)=>{
        this.userAuthenticated.next(false);
      })
    )
  }
}
