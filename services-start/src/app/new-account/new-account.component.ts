import { Component, EventEmitter, Output } from '@angular/core';
import { LoggerService } from '../logger.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(private loggerOfStatus: LoggerService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus,
    });

    this.loggerOfStatus.ChangeStatuslog(accountStatus);
  }
}
