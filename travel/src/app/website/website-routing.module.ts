import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { ServicesComponent } from './services/services.component';
import { TravelBookingComponent } from './travel-booking/travel-booking.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

  },
  {
    path: 'services',
    component: ServicesComponent,
    
  },
  {
    path: 'services/hotel-booking',
    component: HotelBookingComponent,
    
  },
  {
    path: 'services/travel-booking',
    component: TravelBookingComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebSiteRoutingModule { }
