import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

const BACKEND_URL = 'http://localhost:8888';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent {
  username:any;
  email:any;
  password:any;
  userid:any;
  birthdate:any;
  age:any;


  constructor(private router: Router ,private httpClient:HttpClient) {
    this.username = sessionStorage.getItem('username'); 

    //so these component properties are bound to the
    //html page using ngmodel, and any changes made are automatically updated due to 2way binding.
    this.userid = Number(sessionStorage.getItem('userid'));
    this.email = sessionStorage.getItem('email');
    this.birthdate = sessionStorage.getItem('birthdate');
    this.age = Number(sessionStorage.getItem('age'));
  }
  editprof(){ 
    //first of all I'll update the values in sessionstorage before they go into the backend storage as strings
    sessionStorage.setItem('userid', this.userid);
    sessionStorage.setItem('email', this.email);
    sessionStorage.setItem('birthdate', this.birthdate);
    sessionStorage.setItem('age', this.age);

    
    //new vals to go to backend
    //when use clicks on button, this function runs
    let userobj= { //fnct creates a new object with the updated values
      //when this object is received by the server, it will access it using re.body.username (in the module export function)

      'userid': this.userid,
      'username': this.username,
      'email': this.email,
      'birthdate': this.birthdate,
      'age': this.age
    }
    
    this.httpClient.post<any>(BACKEND_URL + '/profile', userobj, httpOptions) 
    //then func sends this post request to server URL WITH PORT DEFINED in BACKEND_URL using HttpClient
    //so on server side, profile.js receives the data and updates the data file...
    .subscribe((themessagethatbackendreturns: any) =>{alert(JSON.stringify(themessagethatbackendreturns));});
    //handles post response, and prints the returned message from server which is "operation complete"
  
  }
  ngOnInit() {
    if (!sessionStorage.getItem('userid')) {
      this.router.navigateByUrl("/login");
      alert("Please login first");
    }
  }

}
