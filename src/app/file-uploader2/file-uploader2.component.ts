import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-uploader2',
  templateUrl: './file-uploader2.component.html',
  styleUrls: ['./file-uploader2.component.css']
})
export class FileUploader2Component implements OnInit {
  form2: FormGroup
  // @ViewChild('fileInput', { read: ElementRef, static: true }) private fileInput: ElementRef;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.form2 = this.formBuilder.group({
      filename: null
    });
  }

  onFileSelect(event: Event) {
    console.log('change detected');
    console.log((<HTMLInputElement>event.target).files[0])
    const file = (<HTMLInputElement>event.target).files[0];
    this.form2.patchValue({filename: file});
  }

  checkFile() {
   
    if(this.form2.invalid){
      alert('Please select a csv file');
      return false;
    }else{
      console.log(this.form2.get('filename').value);
      
     const formData = new FormData();
      formData.append('fileLoaded', this.form2.get('filename').value);

      const url = 'http://localhost:3000/yo';
      this.http.post(url, formData)
    .subscribe(
    (data: any) => {
      console.log(data);
    }
  );
  
    }

    
    
  }

}
