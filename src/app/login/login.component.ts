import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/AuthServices/auth.service';
import { User } from 'src/Model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email : string = ''
  password : string = ''
  isLoading : boolean = false
  userId : any
  user : User
  constructor(private auth: AuthService, private router: Router) {
    this.user = new User()
  }
  Submit(){
    this.isLoading = true
    this.auth.Login(this.email,this.password).subscribe(res => {
      // console.log(res);
      this.user = res
      // console.log(this.user.id);
      this.userId = this.user.id?.toString()
      localStorage.setItem('userId', this.userId)
      this.router.navigate(['/'])
    })
    this.isLoading = false
  }
}
