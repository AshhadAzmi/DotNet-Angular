import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  model: any = {};
  loggedIn = false;

  /**
   *
   */
  constructor(public accountService: AccountService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        // Error handling already handled by catchError
        console.error('An error occurred:', error);
      },
    });
  }

  logout() {
    this.accountService.logout();
  }
}
