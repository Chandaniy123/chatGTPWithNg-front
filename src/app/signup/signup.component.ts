import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/AuthServices/auth.service';
import { User } from 'src/Model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  user: User
  constructor(private auth: AuthService, private router: Router) {
    this.user = new User();
  }
  Submit() {
    this.auth.PostUser(this.user).subscribe(res => {
      console.log(res);
      this.router.navigate(['/'])
    })
  }
}
