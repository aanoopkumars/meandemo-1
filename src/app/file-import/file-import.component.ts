import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SocketService } from '../socket.service';


// import { UserFileUploadComponent } from '../user-file-upload/user-file-upload.component'

@Component({
  selector: 'app-file-import',
  templateUrl: './file-import.component.html',
  styleUrls: ['./file-import.component.css']
})
export class FileImportComponent implements OnInit, OnDestroy {
  Filelist = [];
  selectionList = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger1 = new Subject();
  NoImport = true;
  importStatus = false;
  importResultArray = [];
 
  
  constructor(private fileService: FileUploadService, private http: HttpClient,
    private socketServices: SocketService) {
    this.socketServices.getMessage().subscribe( (data) => {
    //  console.log('message from server----');
    //  console.log(data);

    this.importResultArray.push(data);
  })
  
   }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };

 

    this.http.get<{files: []}>('http://localhost:3000/api/FILE/files')
    .subscribe((fileData) => {
      this.Filelist = fileData.files;
      this.dtTrigger1.next();
    })
  }


  importFile() {
  //  console.log(this.selectionList);
  this.NoImport = false;
  this.importStatus = false;
  this.importResultArray = [];

  setTimeout(()=> {
    this.fileService.importFile(this.selectionList[0])
   .subscribe((data) => {
      console.log(' from import subscription');
      this.importStatus = true;
   })
  } , 2000)
   
   
  }

  ngOnDestroy(): void {
    this.dtTrigger1.unsubscribe();
  }

  addtoList(evnt) {
   let selectionStats = evnt.target.checked;
   let valIndx = this.selectionList.indexOf('evnt.target.value');
   let valStats = valIndx == -1;
  // console.log(evnt.target.value);
    if(selectionStats && valStats){
      this.selectionList.push(evnt.target.value)
    }
    else{
      this.selectionList.splice(valIndx,1);
    }

  //  console.log(this.selectionList);
   if(this.selectionList.length > 1){
     alert('please select a single file for import!');
     evnt.target.checked = false;
     this.selectionList.splice(valIndx,1);
   }
  }

  removeModal() {
   // console.log('In')
    this.NoImport = true;
  }



}
