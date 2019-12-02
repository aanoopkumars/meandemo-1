import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './auth/login/login.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { FileUpoaderComponent } from './file-upoader/file-upoader.component';
import { FileUploadService } from './file-upload.service';
import { FileUploader2Component } from './file-uploader2/file-uploader2.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserFileUploadComponent } from './user-file-upload/user-file-upload.component';
import { FileImportComponent } from './file-import/file-import.component';

 import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io'
 const config: SocketIoConfig = { url: 'http://localhost:3000/', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    SigninComponent,
    HomeComponent,
    FileUpoaderComponent,
    FileSelectDirective,
    FileDropDirective,
    FileUploader2Component,
    UserManagementComponent,
    UserFileUploadComponent,
    FileImportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// SocketIoModule.forRoot(config)