import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserInfoResponse } from '../../models/response';
import { user } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  protected readonly API_URL = `${environment.serverUrl}`;
  constructor(private http: HttpClient) { }

  send(userLogin:user): Observable<UserInfoResponse> {
    return this.http.post<UserInfoResponse>(`${this.API_URL}/auth/signin`,userLogin,{ withCredentials: true });
  }
}
