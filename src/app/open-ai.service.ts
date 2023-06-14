import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Chats } from 'src/Model/chats';
@Injectable({
  providedIn: 'root'
})
export class OpenAiService {
  DeleteMessage(id: any) {
    return this.http.delete(`https://localhost:7251/api/ChatGPT/Delete/${id}`,{
      responseType: 'text' //Api url
  })
  }
  AddChat(ChatRow: Chats) {
    return this.http.post(`https://localhost:7251/api/ChatGPT/AddChat`,{
      "id": 0,
      "userId": ChatRow.UserId,
      "question": ChatRow.Question,
      "answer": ChatRow.Answer
    },
    {
      responseType: 'text' //Api url
  })
  }
  GetChatbyUserId(userId: any): Observable<Chats> {
    return this.http.get(`https://localhost:7251/api/ChatGPT/GetChatListByUserId/${userId}`)
  }
  GetQuestionList() {
    return this.http.get('https://localhost:7251/api/ChatGPT/GetAllQuestions')
  }

  constructor(private http: HttpClient) {}
  // httpclient using for calling apis
    getData(input: string): Observable < any > {
        return this.http.get('https://localhost:7251/api/ChatGPT?input=' + input, {
            responseType: 'text' //Api url
        });
    }
}
