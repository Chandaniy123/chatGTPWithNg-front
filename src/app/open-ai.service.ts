import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  constructor(private http: HttpClient) {}
    getData(input: string): Observable < any > {
        return this.http.get('https://localhost:7251/api/ChatGPT?input=' + input, {
            responseType: 'text'
        });
    }
}
