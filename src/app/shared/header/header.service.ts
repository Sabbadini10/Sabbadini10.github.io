import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient) {}
    
    BASEURL = "https://coding-challenge-api.aerolab.co/user/me";

  // DEV TOKEN: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc4YTk2OWFlNDM0ODAwMjBmYjI1ZTEiLCJpYXQiOjE2ODU2MjkyODl9.VNDu-cpdPQsLMcmKYzMkh2Ndts9E0EZZ-HycUA6sR3k'
  // PROD TOKEN: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc4YTk2OWFlNDM0ODAwMjBmYjI1ZTEiLCJpYXQiOjE2ODU2MjkyODl9.VNDu-cpdPQsLMcmKYzMkh2Ndts9E0EZZ-HycUA6sR3k'
  
  TOKEN =
 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc4YTk2OWFlNDM0ODAwMjBmYjI1ZTEiLCJpYXQiOjE2ODU2MjkyODl9.VNDu-cpdPQsLMcmKYzMkh2Ndts9E0EZZ-HycUA6sR3k';
  
 HEADERS = new HttpHeaders({
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${this.TOKEN}`
  });



  getData(){
    return this.http.get(this.BASEURL,{ headers: this.HEADERS })
    }
  }