import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { Hotel, HotelSearchRequest } from './hotel-search-request';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  protected readonly API_URL = `${environment.serverUrl}`;
  constructor(private http: HttpClient) { }

  search(hotelSearchRequest:HotelSearchRequest): Observable<Hotel[]> {
    var queryString = Object.keys(hotelSearchRequest).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent((hotelSearchRequest as any)[key])
    }).join('&');
    return this.http.get<Hotel[]>(`${this.API_URL}/hotel/search?${queryString}`,{ withCredentials: true });
  }

}
