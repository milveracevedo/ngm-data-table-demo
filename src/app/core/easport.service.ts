import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from './api-response';

@Injectable({
  providedIn: 'root'
})
export class EasportService {

  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'https://api.github.com/search/repositories?q=angular&page=1&per_page=10';
  }

  getItems(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.URL}`);
  }
}