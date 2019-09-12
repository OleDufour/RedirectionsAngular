import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishComponent } from './publish.component';
 
import {TabsComponent} from '../../controlsSharedModule/tabs/tabs.component'
import {TabComponent} from '../../controlsSharedModule/tabs/tab.component'
 

describe('PublishComponent', () => {
  let component: PublishComponent;
  let fixture: ComponentFixture<PublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishComponent,TabsComponent,TabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
