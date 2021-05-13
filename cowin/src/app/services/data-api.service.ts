import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }


  getVaccinationSessionsByPin(pin, date, callback) {
    const VACCINE_PIN_API = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`;
    this.http.get(VACCINE_PIN_API).subscribe(response => {
      callback(response);
    }, error => {
      console.log('Error Occurred: ', error);
    })
  }
}
