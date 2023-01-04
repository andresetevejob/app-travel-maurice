import { Component } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { cityCode } from 'src/app/shared/services/city-code/city-code';
import { CityCodeService } from 'src/app/shared/services/city-code/city-code.service';
import { Fly, FlySearchRequest } from 'src/app/shared/services/travel/fly-entities';
import { TravelRequestSearch } from 'src/app/shared/services/travel/travel-search-request';
import { TravelService } from 'src/app/shared/services/travel/travel.service';
import { dateToString } from 'src/app/shared/utils/date';

@Component({
  selector: 'app-travel-booking',
  templateUrl: './travel-booking.component.html',
  styleUrls: ['./travel-booking.component.css']
})
export class TravelBookingComponent {
  cityCodes!: cityCode[] | null;
  dest!:string;
  dept!:string;
  priceMin:number = 0;
  priceMax:number=5000;
  fromDate:string;
  toDate:string;
  travels!:Fly[]

  constructor(private cityCodeService: CityCodeService,private travelService:TravelService) { 
    this.fromDate =  dateToString(new Date())+"T00:00:00.000Z";
    this.toDate =  dateToString(new Date())+"T23:59:59.000Z";
  }
  getPriceMin(minPrice:any){
    this.priceMin = minPrice;
  }
  getMaxPrice(maxPrice:any){
    this.priceMax = maxPrice;
  }
  getFromDate(fromDate:NgbDate){
    this.fromDate = dateToString(fromDate)+"T00:00:00.000Z";
  }
  getToDate(toDate:NgbDate){
    this.toDate = dateToString(toDate)+"T23:59:59.000Z";
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
  search(dep:string,dest:string){
    const travelSearchRequest:FlySearchRequest={
      dept:dep,
      dest:dest,
      dateDept:this.fromDate,
      dateRet:this.toDate,
      priceMin:this.priceMin,
      priceMax:this.priceMax
    }
    console.log(travelSearchRequest);
    this.travelService.search(travelSearchRequest).subscribe(res => {
      console.log(res);
      this.travels  = res;
    },
    error => {
      console.log(error);
    })
  }
}
