import { Component } from '@angular/core';
import { Router } from '@angular/router'; //we import router to loginpage so that it can navigate us to other paths
import { FormsModule } from '@angular/forms'; //we import forms module
import { CommonModule } from '@angular/common';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { stringify } from 'querystring';

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

const BACKEND_URL = 'http://localhost:8888';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],//also import this form module here, i had to import commonmodule for ngif to work 
  //on the html template
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username= '';
  password='';
  public errorMessage: string = '';
 
  constructor(private router: Router, private httpClient: HttpClient) {} //and in the constructor initialize router so I can navigate to other pages
// submit(form: any){
  submit(){
  let user={username: this.username, pwd: this.password};
  // const {username, password } = form.value;
  // const user = {username, password};

  this.httpClient.post(BACKEND_URL + '/login', user, httpOptions)
      .subscribe((data: any) => {
          alert("posting: " + JSON.stringify(user));
          alert("postRes: " + JSON.stringify(data));
          if (data.ok) {
            alert("correct");
            sessionStorage.setItem('userid', data.userid.toString());
            sessionStorage.setItem('userlogin', data.ok.toString());
            sessionStorage.setItem('username', data.username.toString());
            sessionStorage.setItem('birthdate', data.birthdate);
            sessionStorage.setItem('age', data.age.toString());
            sessionStorage.setItem('email', data.email.toString());

            // Navigate to the account page
            this.router.navigateByUrl("/account");
          } else {
            // alert("Wrong details");
            this.errorMessage = 'Incorrect values';
          }
        },
        // error => {
        //   console.error('Error logging in', error);
        //   this.errorMessage = 'An error occurred. Please try again later.';
        // }
      );
    }
}
