import { Component, OnInit } from '@angular/core';
import {UserApiService} from '../../services/user-api.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private userApiService: UserApiService) {
  }

  user: User;
  ngOnInit(): void {
    this.userApiService.getUser().subscribe(
      data => {
        this.user = data;
        localStorage.setItem('user', data);
      }
    );
  }
  login(event): void {
    console.log(this.loginForm.value);
    this.userApiService.login(this.loginForm).subscribe(
      res => {
        console.log(res);
      }
    );
  }
  register(): void {
    console.log('registreren!');
  }
}

export interface User {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
}
