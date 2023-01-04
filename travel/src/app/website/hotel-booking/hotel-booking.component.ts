import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { cityCode } from 'src/app/shared/services/city-code/city-code';
import { CityCodeService } from 'src/app/shared/services/city-code/city-code.service';
import { Hotel, HotelSearchRequest } from 'src/app/shared/services/hotel/hotel-search-request';
import { HotelService } from 'src/app/shared/services/hotel/hotel.service';
import { dateToString } from 'src/app/shared/utils/date';


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
  hotels!:Hotel[]
  constructor(private cityCodeService: CityCodeService,private hotelService:HotelService) { 
    this.fromDate =  dateToString(new Date());
    this.toDate =  dateToString(new Date());
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
    this.fromDate = dateToString(fromDate);
  }
  getToDate(toDate:NgbDate){
    this.toDate = dateToString(toDate);
  }

  search(guest:string,cityCode:string){
    const hotelSearchRequest:HotelSearchRequest={
      cityCode: cityCode,
      guests: Number(guest),
      dateIn:this.fromDate,
      dateOut:this.toDate,
      priceMin:this.priceMin,
      priceMax:this.priceMax
    }
    this.hotelService.search(hotelSearchRequest).subscribe(res => {
      console.log(res);
      this.hotels  = res;
    },
    error => {
      console.log(error);
    })
  }
}
