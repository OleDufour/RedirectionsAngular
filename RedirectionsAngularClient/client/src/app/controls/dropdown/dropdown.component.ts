import { Component, OnInit, Input } from '@angular/core';
import { EnumDomain } from '../../const/domain';
import {SourceTypes} from '../../const/EnumSourceTypeTargetType';


@Component({
  selector: 'ctrl-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() collectionName: string;
  @Input() label :string;

  keys = Object.keys;
  values = null;

  constructor() { }

  ngOnInit() {

    switch (this.collectionName) {
      case 'EnumDomain': {
        this.values = EnumDomain;
      }

    }


    console.log('****', this.values);
    console.log('**** SourceTypes', SourceTypes());
    



  }

}
