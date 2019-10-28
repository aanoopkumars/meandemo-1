import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';


@Injectable()
export class FileUploadService {

  constructor(private http: HttpClient) { }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'Blob',
    })
  };

  downloadPDF(filename, filetype): any {
    return this.http.get('http://127.0.0.1:3000/api/file/' + filename, this.httpOptions);
  }

  showFileNames() {
    return this.http.get('http://localhost:3000/api/Files');
  }

}
