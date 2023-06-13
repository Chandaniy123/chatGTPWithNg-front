import { Component } from '@angular/core';
import { OpenAiService } from '../open-ai.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {
  inputText: string = ''
  output: string = ''
  showOutput: boolean = false;
  isLoading: boolean = false;
  isMessageCopy: boolean = false;
  constructor(private openAi : OpenAiService){}
  Submit() {
    this.isLoading = true;
    this.openAi.getData(this.inputText).subscribe((res) => {
      this.output = res
      // console.log(res);
      this.showOutput = true;
      this.isLoading = false;
    })
  }

  copyMessage() {
    this.isMessageCopy=true
    navigator.clipboard.writeText(this.output).then().catch(e => console.log(e));
  }
}
