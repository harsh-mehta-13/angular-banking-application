import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Data.Service/user.service/user.service';
import { Iuser } from 'src/app/Data.Service/user.service/user.data';
import { IloginUsers } from 'src/app/Data.Service/login.service/login.users';
import { UserLoginService } from 'src/app/Data.Service/login.service/user.login.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  _fullname: string = ""
  _accountno: number = Date.now()
  _initialBalance: number = 0
  _accountType: string = ""
  _email: string = ""
  _password: string = ""
  _loginObj:IloginUsers = {
    userName: "",
    password: ""
  }
  _userObj: Iuser = {
    name: "",
    email: "",
    type: "",
    phoneNo: 0,
    balance: 0
  }
  constructor(private userService : UserService, private loginService: UserLoginService) { }

  ngOnInit(): void {
  }

  submitForm(e: any) {
    e.preventDefault()
    this._userObj = {
      name: this._fullname,
      balance : this._initialBalance,
      type : this._accountType,
      email : this._email,
      phoneNo: 9999999999
    }
    this._loginObj = {
      userName: this._email,
      password: this._password
    }
    this._fullname = ""
    this._initialBalance = 0
    this._accountType = ""
    this._email = ""
    this._password = ""
    this._accountno = Date.now()
    this.userService.createUser(this._userObj)

    this.loginService.addUser(this._loginObj);

  }
  
}
