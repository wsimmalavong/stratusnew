import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor(private http: HttpClient) { }
  get(){
    const url = `https://xkcd.com/info.0.json`;
    return this.http.get<any[]>(url);
  }
}
