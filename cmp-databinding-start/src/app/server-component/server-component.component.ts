import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrl: './server-component.component.css'
})
export class ServerComponentComponent {
@Input('srvelement') element:{type:string; name:string; content:string};
@Input() name:string;
constructor()
{
}
}
