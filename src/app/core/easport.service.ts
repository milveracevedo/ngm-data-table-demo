import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EasportService {

  private URL: string;
  constructor(private http: HttpClient) {
    this.URL = 'https://www.easports.com/fifa/ultimate-team/api/fut/item';
  }

  getItems() {
    return this.http.get(`${this.URL}`);
  }
}