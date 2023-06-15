import { Component, OnInit } from '@angular/core';
import { OpenAiService } from '../open-ai.service';
import { Chats } from 'src/Model/chats';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit  {
  inputText: string = ''
  output: string = ''
  showOutput: boolean = false;
  isLoading: boolean = false;
  isMessageCopy: boolean = false;
  Questions : any
  Chat : any
  userId : number = 0
  ChatRow : Chats
  constructor(private openAi : OpenAiService){
    this.ChatRow = new Chats();
  }//constructor called service layer
  ngOnInit(): void {
    this.GetListOfQuestions()
    this.userId = localStorage.getItem("userId") as unknown as number;
    this.GetChatByUserId(this.userId)
  }
  Submit(input : any) {// calling submit function
   // console.log(input);
    
    this.isLoading = true;
    this.openAi.getData(input).subscribe((res) => {
      this.output = res
      // console.log(res);
      this.ChatRow.id = 0;
      this.ChatRow.UserId = this.userId;
      this.ChatRow.Question = input;
      this.ChatRow.Answer = res;
      this.openAi.AddChat(this.ChatRow).subscribe(res => {
        console.log(res);
        this.GetChatByUserId(this.userId)
      })
      input = ''
      this.inputText = ''
      this.showOutput = true;
      this.isLoading = false;
    })
  }

  copyMessage(text:any) { // create copy message function for copy text and message 
    this.isMessageCopy=true
    navigator.clipboard.writeText(text).then(() => {
      this.isMessageCopy=true
      setTimeout(() => {
        this.isMessageCopy=false
      }, 2000)
    }).catch(e => console.log(e));
  }

  DeleteMessage(id : any){
    this.openAi.DeleteMessage(id).subscribe(res => {
      console.log(res);
      this.GetChatByUserId(1)
    })
  }

  GetListOfQuestions(){
    this.openAi.GetQuestionList().subscribe(questionRes => {
      // console.log(questionRes);
      
      this.Questions = questionRes
      // console.log(this.Questions);
      
      
    })
  }

  GetChatByUserId(userId : any){
    this.openAi.GetChatbyUserId(userId).subscribe((chatList) => {
      this.Chat = chatList
      // console.log(this.Chat);
      
    })
  }
}
