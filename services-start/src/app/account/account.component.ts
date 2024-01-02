import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggerService } from '../logger.service';
import { AccountDataService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{
  //   id: number;
  //   newStatus: string;
  // }>();

  constructor(
    private logit: LoggerService,
    private accService: AccountDataService
  ) {}

  onSetTo(status: string) {
    // this.statusChanged.emit({ id: this.id, newStatus: status });
    this.accService.updateStatus(this.id, status);
    this.logit.ChangeStatuslog(status);
  }
}
