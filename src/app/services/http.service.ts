import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  signup(user: User): Observable<User>{
    return this.http.post<User>('http://localhost:9090/auth/signup', user);
  }

  login(user: User): Observable<string> {
    return this.http.post<string>('http://localhost:9090/auth/login', user);
  }

  getUser(token: string): Observable<User> {

    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': `Bearer ${token}`
      })
    };

    return this.http.get<User>('http://localhost:9090/user', httpOptions);
  }
}
