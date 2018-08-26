import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../account/login/login.component';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  currentUser: User;
  logged: boolean;

  constructor(private authService: AuthService, private router: Router, private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getLogged().subscribe(
      data => {
        this.logged = data;
      }
    );
  }

  logOut() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    localStorage.removeItem('currentUser');
    this.accountService.isLogged();
    this.router.navigate(['/login']);
    // this.authService.logOut().subscribe(data => {
    // },
    // error => {
    // });
  }



}
