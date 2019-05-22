import { Injectable } from '@angular/core';
import { EnumDomain } from '../../const/EnumDomain';
import { EnumSourceType  } from '../../const/EnumSourceTypeTargetType';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor() { 

  }

  public getEnumDomain(){
    return new EnumDomain().GetArray();
  }
  public getEnumSourceType(){
    return new EnumSourceType().GetArray();
  }
}
