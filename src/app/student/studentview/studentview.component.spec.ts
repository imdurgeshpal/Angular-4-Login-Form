import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentviewComponent } from './studentview.component';

describe('StudentviewComponent', () => {
  let component: StudentviewComponent;
  let fixture: ComponentFixture<StudentviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
