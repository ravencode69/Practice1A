import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit-component',
  templateUrl: './cockpit-component.component.html',
  styleUrl: './cockpit-component.component.css'
})
export class CockpitComponentComponent {
  newServerName = '';
  newServerContent = '';
@Output() serverCreated=new EventEmitter<{sname:string; scontent:string}>();
@Output() blueprintCreated=new EventEmitter<{bname:string;bcontent:string}>();
  onAddServer() {
   this.serverCreated.emit({sname:this.newServerName, scontent:this.newServerContent});
  }

  onAddBlueprint() {
   this.blueprintCreated.emit({bname:this.newServerName,bcontent:this.newServerContent});
  }
  
}
