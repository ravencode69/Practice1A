import { Component, OnInit } from '@angular/core';
import { UserHandler } from './userhandler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  //injecting user service

  constructor(private userserv: UserHandler) {}
  ngOnInit(): void {
    this.activeUsers = this.userserv.activeUsers;
    this.inactiveUsers = this.userserv.inactiveUsers;
  }
}
