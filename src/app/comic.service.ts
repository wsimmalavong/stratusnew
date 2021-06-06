import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Comic } from "./comic/comic.model";
@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor(private http: HttpClient) {}

  get(){
    const url = `/weather`;
    return this.http.get<Comic>(url);
  }
}
