import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isUserLogedIn : boolean = false
  constructor(private router : Router){
    if(localStorage.getItem('userId') == null){
      this.isUserLogedIn = false
      this.router.navigate(['login'])
    }
  }
  ngOnInit(): void {
    this.ChangeNavBaar()
  }

  ChangeNavBaar(){
    if(localStorage.getItem('userId') != null){
      this.isUserLogedIn = true
    }
    else{
      this.isUserLogedIn = false
    }
  }

  
  Logout() {
    localStorage.clear()
    this.isUserLogedIn = false
    this.router.navigate(['login'])
  }
}
