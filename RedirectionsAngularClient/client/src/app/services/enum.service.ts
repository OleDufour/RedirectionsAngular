import { Injectable } from '@angular/core';
import { EnumDomain } from '../const/EnumDomain';
import { EnumSourceType, EnumTargetType } from '../const/EnumSourceTypeTargetType';
import { EnumRedirectionType } from '../const/EnumRedirectionType';

@Injectable({
  providedIn: 'root'
})
export class EnumService {

  constructor() {

  }

  public getEnumDomain() {
    return new EnumDomain().GetArray();
  }
  public getEnumSourceType() {
    return new EnumSourceType().GetArray();
  }

  public getEnumTargetType() {
    return new EnumTargetType().GetArray();
  }

  public getRedirectionTypes() {
    return new EnumRedirectionType().GetArray();
  }

}
