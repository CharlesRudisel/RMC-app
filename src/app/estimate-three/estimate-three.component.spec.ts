import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateThreeComponent } from './estimate-three.component';

describe('EstimateThreeComponent', () => {
  let component: EstimateThreeComponent;
  let fixture: ComponentFixture<EstimateThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimateThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
