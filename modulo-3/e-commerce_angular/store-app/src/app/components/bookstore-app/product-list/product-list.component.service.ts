import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/Book';
import { Observable } from 'rxjs';
import { BookList } from './model/Book-List';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private url = 'https://api.itbook.store/1.0/new';

  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getBook(): Observable<BookList> {
    return this.http.get<BookList>(this.url);
  }
}