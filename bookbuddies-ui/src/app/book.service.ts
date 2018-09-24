import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(){
    const url = 'http://localhost:8080/books';
    return this.http.get(url);
  }
}
