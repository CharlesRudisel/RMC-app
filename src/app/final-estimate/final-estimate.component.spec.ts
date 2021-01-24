import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalEstimateComponent } from './final-estimate.component';

describe('FinalEstimateComponent', () => {
  let component: FinalEstimateComponent;
  let fixture: ComponentFixture<FinalEstimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalEstimateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
