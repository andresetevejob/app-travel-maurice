import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
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
    
  },
  {
    path: 'services/registration',
    component: RegistrationComponent,
    canActivate:[AuthGuard]
    
  },
  {
    path: 'services/signin',
    component: LoginComponent,
    canActivate:[AuthGuard]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebSiteRoutingModule { }
