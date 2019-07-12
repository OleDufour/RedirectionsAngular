import { Component, OnInit, HostListener, Input } from '@angular/core';
import { DragDropDirective } from './../drag-drop.directive'
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @Input() url: string;

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }


  file: any = null;

  files: any = [];

  addFile(event) {
    alert(this.url);

    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)

      this.file = element;
    }
  }
  deleteAttachment(index) {
    // this.files.splice(index, 1);
    this.file = null;
  }


  upload() {
    this.uploadService.upload(this.file);
  }


}
