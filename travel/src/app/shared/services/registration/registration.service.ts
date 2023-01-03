import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { response } from '../../models/response';
import { SignUpRequest } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  protected readonly API_URL = `${environment.serverUrl}`;
  constructor(private http: HttpClient) { }

  send(signUpRequest:SignUpRequest): Observable<response> {
   
    return this.http.post<response>(`${this.API_URL}/auth/signup`,signUpRequest);
  }
}
