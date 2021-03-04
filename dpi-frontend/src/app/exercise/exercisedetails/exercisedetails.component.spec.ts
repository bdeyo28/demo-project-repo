import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisedetailsComponent } from './exercisedetails.component';

describe('ExercisedetailsComponent', () => {
  let component: ExercisedetailsComponent;
  let fixture: ComponentFixture<ExercisedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
