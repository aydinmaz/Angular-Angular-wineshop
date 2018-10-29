import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecompComponent } from './homecomp.component';

describe('HomecompComponent', () => {
  let component: HomecompComponent;
  let fixture: ComponentFixture<HomecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
