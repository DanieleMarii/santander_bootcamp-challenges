import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http"
import { Book } from "./model/book";
import { Http } from "@angular/http";

@Injectable()

export class BooksService
{
    private url = "https://localhost:44382/api/bookstore";
    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'aplication/json'})
    }
    constructor(private http: HttpClient) { }
    getBook() {
        return this.http.get(this.url)
    }
}