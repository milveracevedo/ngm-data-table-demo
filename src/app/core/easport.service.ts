import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EasportService {

  private URL: string;
  constructor(private http: HttpClient) {
    this.URL = 'https://api.github.com/search/repositories?q=query&page=1&per_page=5';
  }

  getItems() {
    return this.http.get(`${this.URL}`);
  }
}