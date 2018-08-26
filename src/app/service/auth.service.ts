import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams, HttpResponse } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import { User } from '../model/user.model';
import { AppComponent } from '../app.component';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers = new HttpHeaders();

  constructor(private http: HttpClient, private router: Router) {
  }

  public logIn(user: User) {
    this.headers = this.headers.set('Accept', 'application/json');
    const base64Credential: string = btoa(user.username + ':' + user.password);
    this.headers = this.headers.set('Authorization', 'Basic ' + base64Credential);

    return this.http.get<any>(AppComponent.API_URL + '/account/login', {headers: this.headers});
  }

  public logOut() {
    return this.http.post(AppComponent.API_URL + 'logout', {});
  }

  getHeaders() {
    return this.headers;
  }

}
