import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RestapiService {

  constructor(public http: HttpClient) { }

  getProducts() {
    return this.http.get<any[]>('../assets/products.json')
  }
}
