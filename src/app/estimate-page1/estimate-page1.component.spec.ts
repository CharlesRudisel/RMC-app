import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatePage1Component } from './estimate-page1.component';

describe('EstimatePage1Component', () => {
  let component: EstimatePage1Component;
  let fixture: ComponentFixture<EstimatePage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatePage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatePage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
