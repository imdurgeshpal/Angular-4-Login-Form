import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminserviceComponent } from './adminservice.component';

describe('AdminserviceComponent', () => {
  let component: AdminserviceComponent;
  let fixture: ComponentFixture<AdminserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
