/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialDesignModule } from '../material-design/';
import { WebStorageModule, LocalStorageService } from 'angular2-localstorage';

import { AppToolbarComponent } from './app-toolbar.component';

describe('AppToolbarComponent', () => {
  let component: AppToolbarComponent;
  let fixture: ComponentFixture<AppToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialDesignModule],
      declarations: [AppToolbarComponent],
      providers: [
        LocalStorageService,
        WebStorageModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
