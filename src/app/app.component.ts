import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSplashScreen : boolean = true
  title = 'ChatGPTAngular-front';
  constructor(){
    setTimeout(() => {
      this.showSplashScreen = false
    }, 3000);
  }
}
