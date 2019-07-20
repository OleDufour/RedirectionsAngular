import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";
import apiUrl from '../../modelSharedModule/const/apiUrl';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  dtp: any;// test

  constructor(private httpClient: HttpClient) { }

  public upload(file: any):Observable<any>  {


    const formData: FormData = new FormData();
    const tmpUrl = `${apiUrl}Import`;  // +"File/Post"
    formData.append("File", file, file.name);

 return   this.httpClient.post(tmpUrl, formData);
     
 
      }
}