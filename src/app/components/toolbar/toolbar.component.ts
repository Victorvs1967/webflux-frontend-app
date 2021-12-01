import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { HttpService } from 'src/app/services/http.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  token?: string

  user: User = new User('pass', 'Vasya', 'Pupkin', '555-33-22', 'pupkin@mail.me');
  user01: User = new User('mymy', 'My', 'User', '555-33-22', 'my@mail.me');

  constructor(private httpService: HttpService, private tokenService: TokenStorageService) { }

  ngOnInit(): void {
  } 

  registerPupkin() {
    this.httpService.signup(this.user01).subscribe(data => console.log(data));
  }

  loginPupkin() {
    this.httpService.login(this.user01).subscribe(data => this.tokenService.saveToken(data));
  }

  getUser() {
    this.httpService.getUser(this.tokenService.getToken() || '').subscribe(data => console.log(data));
  }

}
