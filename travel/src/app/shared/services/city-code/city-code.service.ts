import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { cityCode } from './city-code';

@Injectable({
  providedIn: 'root'
})
export class CityCodeService {

  protected readonly API_URL = `${environment.serverUrl}`;
  constructor(private http: HttpClient) { }

  findAll(): Observable<cityCode[]> {
    return this.http.get<cityCode[]>(`${this.API_URL}/cityCode/findAll`);
                    //.pipe(map((res:HttpResponse<cityCode[]>)=>res));
  }

}
