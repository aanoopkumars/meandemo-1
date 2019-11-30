import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable()
export class FileUploadService {

  constructor(private http: HttpClient) { }
  private fileUploadIndicator = new Subject();

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'Blob',
    })
  };

  uploadFile(formData) {
      const url = 'http://localhost:3000/yo';
      return this.http.post(url, formData)
      .pipe(
        tap((res)=> {
           this.fileUploadIndicator.next(res);   
        })
      );
  }

  uploadIndicator() {
    return this.fileUploadIndicator.asObservable();
  }

  downloadPDF(filename) {
    return this.http.get('http://localhost:3000/api/FILE/files/' + filename, {observe: 'response', responseType: 'blob'})
  }

  showFileNames() {
    return this.http.get('http://localhost:3000/api/Files');
  }

  importFile(filename) {
    return this.http.get('http://localhost:3000/api/FILE/import/' + filename)
  }

}
