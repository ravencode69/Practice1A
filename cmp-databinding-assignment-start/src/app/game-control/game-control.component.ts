import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  num:number=0;
  @Output() Enum= new EventEmitter<number>();
  intervalId:any;
  numberEmitter()
  {
    this.intervalId=setInterval(()=>{ this.Enum.emit(this.num);
    this.num++;
    },1000);
   
  }
  
  public stopInterval()
  {
    clearInterval(this.intervalId);
    this.num=0;
  }
}
