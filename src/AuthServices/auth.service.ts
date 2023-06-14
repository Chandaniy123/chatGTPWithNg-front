import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/Model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Login(email: string, password: string) {
    return this.http.post('https://localhost:7251/api/ChatGPT/Login',{
      "email": email,
      "password": password
    },{
      responseType:'json'
    })
  }
  
  PostUser(user: User) {
    return this.http.post('https://localhost:7251/api/ChatGPT/PostUser', {
      "id": 0,
      "fullName": user.fullname,
      "email": user.email,
      "password": user.password
    },
      {
        responseType: 'text'
      })
  }

  constructor(private http: HttpClient) { }
}
