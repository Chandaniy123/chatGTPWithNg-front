import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;
@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit  {
  ngOnInit(): void {
    particlesJS.load('loader', '..\..\assets\particles.json', null);
  }

}
