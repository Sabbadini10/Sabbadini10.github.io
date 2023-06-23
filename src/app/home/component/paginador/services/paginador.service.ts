import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaginadorService {


  constructor(private http: HttpClient) {}

    BASEURL = "https://coding-challenge-api.aerolab.co/products";
    BASEURLREDEEM = "https://private-anon-7a37600fad-aerolabchallenge.apiary-mock.com/redeem";
  // DEV TOKEN: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc4YTk2OWFlNDM0ODAwMjBmYjI1ZTEiLCJpYXQiOjE2ODU2MjkyODl9.VNDu-cpdPQsLMcmKYzMkh2Ndts9E0EZZ-HycUA6sR3k'
  // PROD TOKEN: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc4YTk2OWFlNDM0ODAwMjBmYjI1ZTEiLCJpYXQiOjE2ODU2MjkyODl9.VNDu-cpdPQsLMcmKYzMkh2Ndts9E0EZZ-HycUA6sR3k'

  TOKEN =
 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc4YTk2OWFlNDM0ODAwMjBmYjI1ZTEiLCJpYXQiOjE2ODU2MjkyODl9.VNDu-cpdPQsLMcmKYzMkh2Ndts9E0EZZ-HycUA6sR3k';

 HEADERS = new HttpHeaders({
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${this.TOKEN}`
  });


  getList(pages: number = 0){
    return this.http.get(`${this.BASEURL}`, {
      params: {
        'offset': pages,
        'limit': 16
      }
    })
  }

  getData(){
    return this.http.get(this.BASEURL,{ headers: this.HEADERS })
    }

  getDataRedeem(){
    return this.http.post(this.BASEURLREDEEM,{ headers: this.HEADERS })
    }
}
