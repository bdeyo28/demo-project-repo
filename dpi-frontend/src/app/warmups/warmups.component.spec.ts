import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmupsComponent } from './warmups.component';

describe('WarmupsComponent', () => {
  let component: WarmupsComponent;
  let fixture: ComponentFixture<WarmupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarmupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarmupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
