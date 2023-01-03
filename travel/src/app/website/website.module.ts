import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchDestinationComponent } from './search-destination/search-destination.component';
import { ServicesComponent } from './services/services.component';
import { WebSiteRoutingModule } from './website-routing.module';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { SharedModule } from '../shared/shared.module';
import { DatePickerSearchComponent } from '../shared/components/date-picker-search/date-picker-search.component';
import { TravelBookingComponent } from './travel-booking/travel-booking.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    SearchDestinationComponent,
    ServicesComponent,
    TicketBookingComponent,
    HotelBookingComponent,
    TravelBookingComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    WebSiteRoutingModule,
    SharedModule,
    DatePickerSearchComponent,
    ReactiveFormsModule
  ]
})
export class WebsiteModule { }
