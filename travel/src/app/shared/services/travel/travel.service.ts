import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fly, FlySearchRequest } from './fly-entities';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  protected readonly API_URL = `${environment.serverUrl}`;
  constructor(private http: HttpClient) { }

  search(flySearchRequest:FlySearchRequest): Observable<Fly[]> {
    var queryString = Object.keys(flySearchRequest).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent((flySearchRequest as any)[key])
    }).join('&');
    return this.http.get<Fly[]>(`${this.API_URL}/fly/search?${queryString}`);
  }
}
