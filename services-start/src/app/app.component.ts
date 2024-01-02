import { Component, OnInit } from '@angular/core';
import { AccountDataService } from './accounts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountDataService],
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];
  constructor(private accservice: AccountDataService) {}
  // onAccountAdded(newAccount: { name: string; status: string }) {
  //   this.accservice.addAccount(newAccount);
  // }

  // onStatusChanged(updateInfo: { id: number; newStatus: string }) {
  //   this.accservice.updateStatus(updateInfo.id,updateInfo.newStatus);
  // }
  ngOnInit(): void {
    this.accounts = this.accservice.accounts;
    console.log(this.accounts);
  }
}
