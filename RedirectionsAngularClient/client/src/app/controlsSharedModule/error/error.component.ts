import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ErrorShowService } from '../../services/error-show.service'

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})



export class ErrorComponent implements OnInit, OnDestroy {
 
  errorMessage: string

  constructor(private errorShowService: ErrorShowService) {
    errorShowService.errorMessageRaised$.subscribe(err => {
      this.errorMessage = err+new Date().getMilliseconds();

    })
    //this.errorMessage = " errrrrrr ";

  }

  ngOnInit() {
  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
