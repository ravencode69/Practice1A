import { Component, EventEmitter, Output } from '@angular/core';
import { LoggerService } from '../logger.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  //preferring a dependency injector, because it is more flexible and easier to test and
  //maintain than the alternative of creating the service instance directly.
  constructor(private loggerOfStatus: LoggerService) {}
  //above is a typescript shortcut for adding an accessor in front of the argument to
  //instantly create a property with same name and store the incoming value in it.

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus,
    });

    this.loggerOfStatus.ChangeStatuslog(accountStatus);
  }
}
