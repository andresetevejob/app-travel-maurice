import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { cityCode } from 'src/app/shared/services/city-code/city-code';
import { CityCodeService } from 'src/app/shared/services/city-code/city-code.service';


@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css']
})
export class HotelBookingComponent implements OnInit{
  cityCodes!: cityCode[] | null;
  priceMin:number = 0;
  priceMax:number=5000;
  fromDate:string;
  toDate:string;
  constructor(private cityCodeService: CityCodeService) { 
    let d = new Date();
    d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    this.fromDate =  d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    this.toDate =   d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  }

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
  getPriceMin(minPrice:any){
    this.priceMin = minPrice;
  }
  getMaxPrice(maxPrice:any){
    this.priceMax = maxPrice;
  }

  getFromDate(fromDate:NgbDate){
    console.log(fromDate);
    this.fromDate = fromDate.year+"-"+fromDate.month+"-"+fromDate.day;
  }
  getToDate(toDate:NgbDate){
    console.log(toDate);
    this.toDate = toDate.year+"-"+toDate.month+"-"+toDate.day;
  }

  search(){
    console.log(this.priceMin);
    console.log(this.priceMax);
    console.log(this.fromDate);
    console.log(this.toDate);

  }
}
