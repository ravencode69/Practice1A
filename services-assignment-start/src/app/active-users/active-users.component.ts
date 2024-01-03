import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserHandler } from '../userhandler.service';
import { CtrClass } from '../countchange.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  @Input() users: string[];
  constructor(private userserv: UserHandler, private ctrch: CtrClass) {}
  onSetToInactive(id: number) {
    this.userserv.onSetToInactive(id);
    this.ctrch.incrIOper();
  }
}
