import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterserviceComponent } from './centerservice.component';

describe('CenterserviceComponent', () => {
  let component: CenterserviceComponent;
  let fixture: ComponentFixture<CenterserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
