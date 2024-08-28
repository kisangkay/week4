import { Component } from '@angular/core';
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

  // if (!sessionStorage) {
  //   this.router.navigateByUrl("/login");
  //   alert("PLease login first");
  // }

  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl("/login");
  }
}
