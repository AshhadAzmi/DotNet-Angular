import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  registerMode = false;
  users: any;

  /**
   *
   */
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getUsers() {
    this.http.get<any>('https://localhost:5001/api/users')
      .subscribe({
        next: (response: any) => {
          // Handle successful response
          this.users = response;
        },
        error: (error: any) => {
          // Error handling already handled by catchError
          console.error('An error occurred:', error);
        },
        complete: () => {
          console.log('Request has completed!');
        }
      });
  }

  cancelRegisterMode(event: boolean) {
      this.registerMode = event;
  }

}
