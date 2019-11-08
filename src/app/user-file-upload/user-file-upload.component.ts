import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileUploadService } from '../file-upload.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-file-upload',
  templateUrl: './user-file-upload.component.html',
  styleUrls: ['./user-file-upload.component.css']
})
export class UserFileUploadComponent implements OnInit, OnDestroy {
  
  Filelist = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  constructor(private http: HttpClient, private fileService: FileUploadService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };

    this.http.get<{files: []}>('http://localhost:3000/api/FILE/files')
    .subscribe((fileData) => {
      this.Filelist = fileData.files;
      this.dtTrigger.next();
    })
  }

  downloadFile(fileName: string) {
      this.fileService.downloadPDF(fileName)
        .subscribe((fileData) => {
           const fileURL = URL.createObjectURL(fileData);
           window.open(fileURL);

        })
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
