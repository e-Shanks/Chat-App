import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  ErrorMsg: string | undefined

  constructor(private UsersService: UsersService, private Router: Router) { }

  ngOnInit(): void {
  }

  async SignIn(sUserLogin: string, sUserPassword: string){
    if(sUserLogin && sUserPassword){
      this.UsersService.LoggedUserData = await this.UsersService.SignInUser(sUserLogin, sUserPassword)
      
      if(this.UsersService.LoggedUserData){
        this.UsersService.isAuth = true
        this.Router.navigate(['/GroupsChat'])
      } else {
        this.ErrorMsg = "Login or password incorrect."
      }
    } else {
      this.ErrorMsg = "You must fill all the fields."
    }
  }
}
