import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name:'testName', content:'just a test'},];

  onserverAdder(serverData:{sname:string;scontent:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.sname,
      content:serverData.scontent
    })
  }
 onblueprintAdder(blueprintData:{bname:string;bcontent:string}){
  this.serverElements.push({
    type:'blueprint',
    name:blueprintData.bname,
    content:blueprintData.bcontent
  })
 }
}
