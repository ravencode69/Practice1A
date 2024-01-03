import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserHandler } from '../userhandler.service';
import { CtrClass } from '../countchange.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  @Input() users: string[];
  constructor(private userserv: UserHandler, private ctrserv: CtrClass) {}

  onSetToActive(i: number) {
    this.userserv.onSetToActive(i);
    this.ctrserv.incrAOper();
  }
}
