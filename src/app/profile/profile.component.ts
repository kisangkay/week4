import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


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


  constructor(private httpClient:HttpClient) {
    this.username = sessionStorage.getItem('username');
    this.userid = Number(sessionStorage.getItem('userid'));
    this.birthdate = sessionStorage.getItem('birthdate');
    this.age = Number(sessionStorage.getItem('age'));
  }
  editprof(){ //new vals to go to backend
    let userobj= {
      'userid': this.userid,
      'username': this.username,
      'birthdate': this.birthdate,
      'age': this.age
    }
    
    this.httpClient.post<any>(BACKEND_URL + '/profile', userobj, httpOptions)
    .subscribe((m: any) =>{alert(JSON.stringify(m));});
  
  }


}
