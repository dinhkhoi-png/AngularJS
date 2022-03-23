import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
   //show hide div variables
   userlogin = true;
   userregister = false;
   //Buttons clicks functionalities 
   user_register()
   {
     this.userlogin = false;
     this.userregister = true;
   }
   user_login()
   {
     this.userlogin = true;
     this.userregister = false;
   }
  ngOnInit(): void {
  }

}
