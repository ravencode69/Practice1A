import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';
import { AccountDataService } from '../accounts.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  //preferring a dependency injector, because it is more flexible and easier to test and
  //maintain than the alternative of creating the service instance directly.
  constructor(
    private loggerOfStatus: LoggerService,
    private accService: AccountDataService
  ) {}
  //above is a typescript shortcut for adding an accessor in front of the argument to
  //instantly create a property with same name and store the incoming value in it.

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accService.addAccount(accountName, accountStatus); //using service to add new account
    // this.loggerOfStatus.ChangeStatuslog(accountStatus);
  }
}
