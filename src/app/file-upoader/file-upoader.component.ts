import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upoader',
  templateUrl: './file-upoader.component.html',
  styleUrls: ['./file-upoader.component.css']
})
export class FileUpoaderComponent implements OnInit {

  constructor(private uploadService: FileUploadService) { }

  private files = [];
  private url = 'http://localhost:3000/api/upload';
  private uploader: FileUploader;

  ngOnInit() {
    this.uploader = new FileUploader({url: this.url});
  }

}
