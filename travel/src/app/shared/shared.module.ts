import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerSearchComponent } from './components/date-picker-search/date-picker-search.component';
import { CustomPriceSliderComponent } from './components/custom-price-slider/custom-price-slider.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';



@NgModule({
  declarations: [
    CustomPriceSliderComponent
  ],
  exports: [CustomPriceSliderComponent],
  imports: [
    CommonModule,
    NgxSliderModule,
    DatePickerSearchComponent
  ]
})
export class SharedModule { }
