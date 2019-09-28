import { Component, OnInit, HostListener, Input } from '@angular/core';

import { DragDropDirective } from './../drag-drop.directive'
import { UploadService } from '../upload.service';
import { ErrorShowService } from '../../../services/error-show.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @Input() url: string;
  errorMessage: string;

  constructor(private uploadService: UploadService, private errorShowService: ErrorShowService) { }

  ngOnInit() {
  }


  file: any = null;

  files: any = [];

  addFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name);
      this.file = element;
    }
  }
  deleteAttachment(index) {
    // this.files.splice(index, 1);
    this.file = null;
  }


  upload() {
    var t = this.uploadService.upload(this.file).subscribe((response) => {
      console.log('response', response);
      return response;
    },
      (error) => {
        console.log('error in fileupload', error.statusText);
        this.errorShowService.passError(error.name);       
        return error;
      })
  }


}
