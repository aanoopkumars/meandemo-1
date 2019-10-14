import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LbCallService {
  userArray = [];
  userChangeFound = new Subject();
  constructor(private http: HttpClient) { }

  getuser(ID) {
    return this.http.get(`http://localhost:3000/api/CBNUsers/${ID}`);
  }

  gettingUsers() {
     this.http.get<[]>('http://localhost:3000/api/Users')
     .subscribe((data) => {
      
      this.userArray = data;
    // console.log('from Service');
    // console.log(this.userArray);
     this.userChangeFound.next([...this.userArray])
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
}
