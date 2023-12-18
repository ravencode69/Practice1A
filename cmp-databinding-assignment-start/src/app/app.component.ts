import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  catchNum=[];

  catcher(num:number)
  {
    this.catchNum.push(num);
    console.log("we caught");
    console.log(this.catchNum);
  }
 
}
