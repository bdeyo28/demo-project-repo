import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntensitylistComponent } from './intensitylist.component';

describe('IntensitylistComponent', () => {
  let component: IntensitylistComponent;
  let fixture: ComponentFixture<IntensitylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntensitylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntensitylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
