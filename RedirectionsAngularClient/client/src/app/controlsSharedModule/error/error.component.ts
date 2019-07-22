import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { ErrorShowService } from '../../services/error-show.service'

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
  ,animations: [
    trigger('openClose', [
      // ...
      state('open', style({        
        opacity: 1,
        
        color:'white'
     
      })),
      state('closed', style({      
        opacity: 1,
         
        color:'white'
      
      })),
      transition('* => *', [
        style({backgroundColor: 'green'}),
        animate('7s ease-out',   style({opacity: 0}))
      
      ]) 
    ]),
  ],
})



export class ErrorComponent implements OnInit, OnDestroy {

  errorMessage: string
  isOpen = false;
  
  constructor(private errorShowService: ErrorShowService) {
    errorShowService.errorMessageRaised$.subscribe(err => {
      console.log('ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR')
      this.errorMessage = err + new Date().getMilliseconds();
      this.isOpen =this.isOpen?false: true;
//alert(this.errorMessage)
    });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
