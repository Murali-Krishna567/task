import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EntryComponent } from './entry/entry.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddPostComponent } from './add-post/add-post.component';
import {FileUploadModule} from 'primeng/fileupload';

@NgModule({
declarations:   [ AppComponent, EntryComponent, AddPostComponent],
imports:        [ BrowserModule,AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,FileUploadModule],
providers:      [],
bootstrap:      [AppComponent],
schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
