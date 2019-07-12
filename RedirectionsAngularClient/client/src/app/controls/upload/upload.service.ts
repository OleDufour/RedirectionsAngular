import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from "@angular/common/http";
import apiUrl from '../../const/apiUrl';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  dtp: any;// test

  constructor(private httpClient: HttpClient) { }

  public upload(file: any) {
    

    const formData: FormData = new FormData();
    const tmpUrl=`${apiUrl}Import`;  // +"File/Post"
    formData.append("File", file, file.name);

    this.httpClient.post(tmpUrl, formData )
      .subscribe((response) => {
        console.log('response', response)
      },
        (error) => {
          console.log('error in fileupload', error)
        })
  }
}