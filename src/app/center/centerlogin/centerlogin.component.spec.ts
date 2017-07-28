import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterloginComponent } from './centerlogin.component';

describe('CenterloginComponent', () => {
  let component: CenterloginComponent;
  let fixture: ComponentFixture<CenterloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
