import { Component, OnInit } from '@angular/core';
import { UserService } from "../../service/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login:boolean=false
  user:string=''

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    let isLogin = localStorage.getItem('user')
    if(isLogin){
        this.login = true
        this.user = isLogin
    }
  }

  logOut(){
    this.userService.logOut()
  }



}
