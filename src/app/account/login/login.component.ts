import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { Response} from '@angular/http';
import { NavigationComponent } from '../../navigation/navigation.component';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router,
    private accountService: AccountService) {
   }

  ngOnInit() {
    this.errorMessage = '';
  }

  login() {
    this.authService.logIn(this.user).subscribe((response: any) => {
      const user = response.principal;
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      this.accountService.isLogged();
      this.router.navigate(['/addNote']);
    }, err => {
    this.errorMessage = 'error :  Username or password is incorrect';
    });
  }

}
