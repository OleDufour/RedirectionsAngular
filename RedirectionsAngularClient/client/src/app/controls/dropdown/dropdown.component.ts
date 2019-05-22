import { Component, OnInit, Input } from '@angular/core';
import { EnumDomain } from '../../const/EnumDomain';
import { EnumSourceType  } from '../../const/EnumSourceTypeTargetType';
 


@Component({
  selector: 'ctrl-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() collectionName: string;
  @Input() label: string;
 

  public idsValues: { id: number; name: string }[] = [];
  constructor() { }

  ngOnInit() {
    console.log('test');
    switch (this.collectionName) {
      case 'EnumDomain': {
        var ed = new EnumDomain();
        this.idsValues = ed.GetArray();
        break;
      }
      case 'SourceType': {
        var st = new EnumSourceType();
        this.idsValues=st.GetArray();
        break;
      }
      case 'TargetType': {
        var st = new EnumSourceType();
        this.idsValues=st.GetArray();
        break;
      }

    }
  }

}
