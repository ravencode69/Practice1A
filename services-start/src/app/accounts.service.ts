import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class AccountDataService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];
  constructor(private logger: LoggerService) {}
  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.logger.ChangeStatuslog(status);
  }
  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.logger.ChangeStatuslog(status);
  }
}
