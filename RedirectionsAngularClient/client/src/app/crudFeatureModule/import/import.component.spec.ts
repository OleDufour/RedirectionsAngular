import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportComponent } from './import.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ImportComponent', () => {
  let component: ImportComponent;
  let fixture: ComponentFixture<ImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ ImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should creatte', () => {
    expect(component).toBeTruthy();
  });
});
