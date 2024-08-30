import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  username:any;
  email:any;
  password:any;
  userid:any;
  birthdate:any;
  age:any;

  constructor(private router: Router ,private httpClient: HttpClient) {
    this.username = sessionStorage.getItem('username')!;
    this.email = sessionStorage.getItem('email');
    this.userid = Number(sessionStorage.getItem('userid'));
    this.birthdate = sessionStorage.getItem('birthdate')!;
    this.age = Number(sessionStorage.getItem('age'));
  }
  ngOnInit() {
    if (!sessionStorage.getItem('userid')) {
      this.router.navigateByUrl("/login");
      alert("Please login first");
    }
  }

}