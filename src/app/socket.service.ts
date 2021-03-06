import { Injectable } from '@angular/core';
 import { Socket } from 'ngx-socket-io';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SocketService {

   constructor(private socket: Socket) { }


  getMessage() {
    return this.socket
    .fromEvent("import")
    .pipe(map(data => data));
    
    }
}
