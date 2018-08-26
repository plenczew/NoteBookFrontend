import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { User } from '../model/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  logged: boolean;
  private loggedObs = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

   createAccount(user: User) {
      return this.http.post(AppComponent.API_URL + '/account/register', user);
   }

   isLogged() {
    if (localStorage.getItem('currentUser')) {
      this.logged = true;
      this.loggedObs.next(this.logged);
    } else {
      this.logged = false;
      this.loggedObs.next(this.logged);
    }
   }

   getLogged() {
     return this.loggedObs.asObservable();
   }
}
