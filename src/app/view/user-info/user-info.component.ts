import {Component, Input, OnInit} from '@angular/core';
import {IUserInfo} from "./user-info.model";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() user:IUserInfo | undefined;

  saveUser() {
    console.log(this.user?.name)
    console.log(this.user?.age)
  }

}
