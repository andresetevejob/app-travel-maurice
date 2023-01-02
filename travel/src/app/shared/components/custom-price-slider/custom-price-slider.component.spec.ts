import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPriceSliderComponent } from './custom-price-slider.component';

describe('CustomPriceSliderComponent', () => {
  let component: CustomPriceSliderComponent;
  let fixture: ComponentFixture<CustomPriceSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPriceSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPriceSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
