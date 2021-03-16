import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmuplistComponent } from './warmuplist.component';

describe('WarmuplistComponent', () => {
  let component: WarmuplistComponent;
  let fixture: ComponentFixture<WarmuplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarmuplistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarmuplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
