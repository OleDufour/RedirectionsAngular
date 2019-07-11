import { Component, OnInit, HostListener } from '@angular/core';
import { DragDropDirective } from './../drag-drop.directive'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  file: any =null;

  files: any = [];

  uploadFile(event) {
    alert('');

    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)

      this.file =element; 
    }
  }
  deleteAttachment(index) {
    this.files.splice(index, 1);
    this.file=null;
  }



}
