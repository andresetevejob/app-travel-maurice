import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  protected readonly API_URL = `${environment.serverUrl}`;
  constructor(private http: HttpClient) { }

  search(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/hotels`);
  }

}
