import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-user-file-upload',
  templateUrl: './user-file-upload.component.html',
  styleUrls: ['./user-file-upload.component.css']
})
export class UserFileUploadComponent implements OnInit {
  Filelist = [];
  constructor(private http: HttpClient, private fileService: FileUploadService) { }

  ngOnInit() {
    this.http.get<{files: []}>('http://localhost:3000/api/FILE/files')
    .subscribe((fileData) => {
      this.Filelist = fileData.files;
    })
  }

  downloadFile(fileName: string) {
      this.fileService.downloadPDF(fileName)
        .subscribe((fileData) => {
           const fileURL = URL.createObjectURL(fileData);
           window.open(fileURL);

        })
  }

}
