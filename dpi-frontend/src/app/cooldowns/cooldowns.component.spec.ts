import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooldownsComponent } from './cooldowns.component';

describe('CooldownsComponent', () => {
  let component: CooldownsComponent;
  let fixture: ComponentFixture<CooldownsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooldownsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooldownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
