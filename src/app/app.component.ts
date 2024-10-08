import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent,AccountComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'week4tut';

  constructor(private router: Router) {}
  ngOnInit() {
    if (!sessionStorage.getItem('userid')) {
      this.router.navigateByUrl("/login");
      alert("Please login first");
    }
  }

  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl("/login");
  }
}


