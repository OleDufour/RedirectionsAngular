import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { LogModel } from 'src/app/modelSharedModule/interfaces/logModel';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

import { ErrorShowService } from '../../services/error-show.service'

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
  , animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
        color: 'white'
      })),
      state('closed', style({
        opacity: 1,
        color: 'white'
      })),
      transition(':enter', [
        style({ display: 'none' }),
      ]),
      transition('* => *', [       
        style({ backgroundColor: 'red', display: 'block'   }),
        animate(7000, keyframes(
          [
            style({ backgroundColor: 'red', display: 'block' })
          ]))
        ,
        animate("1s", style({ opacity: 0 })),
        style({ backgroundColor: 'red'  }),
      ])
    ]),
  ],
})



export class ErrorComponent implements OnInit, OnDestroy {

  errorMessage: string
  isOpen = false;

  constructor(private errorShowService: ErrorShowService) {
    errorShowService.errorMessageRaised$.subscribe(err => {
      console.log('err.message', err.message);
      this.errorMessage = err.message + new Date().getMilliseconds();
      this.isOpen = this.isOpen ? false : true;
      //alert(this.errorMessage)   
    });
  }

  ngOnInit() {

  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
