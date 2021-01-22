import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateTwoComponent } from './estimate-two.component';

describe('EstimateTwoComponent', () => {
  let component: EstimateTwoComponent;
  let fixture: ComponentFixture<EstimateTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimateTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
