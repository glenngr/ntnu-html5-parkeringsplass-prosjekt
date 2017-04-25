/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialDesignModule } from '../material-design';

import { HelpAboutComponent } from './help-about.component';
import { HelpAboutModule } from './index';

describe('HelpAboutComponent', () => {
  let component: HelpAboutComponent;
  let fixture: ComponentFixture<HelpAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialDesignModule, HelpAboutModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
