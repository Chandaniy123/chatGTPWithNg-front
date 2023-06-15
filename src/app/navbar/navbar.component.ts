import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/AuthServices/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isUserLogedIn : boolean = false
  constructor(private router : Router, private authService : AuthService){
    if(localStorage.getItem('userId') == null){
      this.isUserLogedIn = false
      this.router.navigate(['login'])
    }
    else{
      this.ChangeNavBaar()  
    }
  }
  ngOnInit(): void {
    if (this.authService.subsVar==undefined) {    

      this.authService.subsVar = this.authService.    

      invokeLoginComponentFunction.subscribe(() => {    

        console.log("call 1");
        this.ChangeNavBaar()  

      });    

    }    
    
  }

  ChangeNavBaar(){
    console.log(localStorage.getItem('userId'));
    
    if(localStorage.getItem('userId') != null){
      console.log("call if");
      
      this.isUserLogedIn = true
    }
    else{
      console.log("else");
      
      this.isUserLogedIn = false
    }
  }

  
  Logout() {
    localStorage.clear()
    this.isUserLogedIn = false
    this.router.navigate(['login'])
  }
}
