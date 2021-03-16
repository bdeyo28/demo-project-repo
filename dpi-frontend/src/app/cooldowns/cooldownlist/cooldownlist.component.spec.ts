import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooldownlistComponent } from './cooldownlist.component';

describe('CooldownlistComponent', () => {
  let component: CooldownlistComponent;
  let fixture: ComponentFixture<CooldownlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooldownlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooldownlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
