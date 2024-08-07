import { Component } from '@angular/core';
import { Router } from '@angular/router'; //we import router to loginpage so that it can navigate us to other paths
import { FormsModule } from '@angular/forms'; //we import forms module
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule ], //also import this form module here, i had to import commonmodule for ngif to work 
  //on the html template
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //the obj to store users as a array
  public users = [
    {email: "kip@ng.com", password:"kip"},
    {email: "jane@ng.com", password:"jane"},
    {email: "sam@ng.com", password: "sam"}
  ];

  //The property must be given an initial value, otherwise it won't work at all (about ngmodel variable)
  public errorMessage: string = ''; //i have to initialize this otherwise i get error
  constructor(private router: Router) {} //and in the constructor initialize router so I can navigate to other pages

  //my function to process the loginform so my form reference and ngSubmit directive shd match
  login(form: any) {
    const { email, password } = form.value;
    const user = this.users.find(user => user.email === email && user.password === password);

    if (user) {
      this.router.navigate(['/account']);
    } else {
      this.errorMessage = 'Invalid email or password';
    }

  }
}
