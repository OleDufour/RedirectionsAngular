import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { LogModel } from 'src/app/modelSharedModule/interfaces/logModel';
 
@Injectable(
 { providedIn: 'root' }
)
export class LanguageService {

  // Observable string sources
  private errorMessageSource = new Subject<LogModel>();

  // Observable string streams
  errorMessageRaised$ = this.errorMessageSource.asObservable();

  passError(logData: LogModel) {    
    this.errorMessageSource.next(logData);
  }

  constructor() {

  }
}
