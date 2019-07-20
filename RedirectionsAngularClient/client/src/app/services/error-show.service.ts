import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
 
@Injectable(
 { providedIn: 'root' }
)
export class ErrorShowService {

  // Observable string sources
  private errorMessageSource = new Subject<string>();

  // Observable string streams
  errorMessageRaised$ = this.errorMessageSource.asObservable();

  passError(mission: string) {
    this.errorMessageSource.next(mission);
  }


  constructor() {

  }
}
