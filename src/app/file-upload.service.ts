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

  downloadPDF(filename) {
    return this.http.get('http://localhost:3000/api/FILE/files/' + filename, {responseType: 'blob'})
  }

  showFileNames() {
    return this.http.get('http://localhost:3000/api/Files');
  }

  importFile(filename) {
    return this.http.get('http://localhost:3000/api/FILE/import/' + filename)
  }

}
