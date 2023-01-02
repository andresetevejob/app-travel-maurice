import { Component } from '@angular/core';
import { cityCode } from 'src/app/shared/services/city-code/city-code';
import { CityCodeService } from 'src/app/shared/services/city-code/city-code.service';

@Component({
  selector: 'app-travel-booking',
  templateUrl: './travel-booking.component.html',
  styleUrls: ['./travel-booking.component.css']
})
export class TravelBookingComponent {
  cityCodes!: cityCode[] | null;
  constructor(private cityCodeService: CityCodeService) { }

  ngOnInit(): void {
    this.cityCodeService.findAll() .subscribe(
      res => {
        console.log(res);
        this.cityCodes = res;
        console.log(this.cityCodes);
      },
      error => {
        console.log(error);
      });
  }
}
