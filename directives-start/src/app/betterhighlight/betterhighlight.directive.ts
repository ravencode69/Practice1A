import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit {

  constructor(private eleRef: ElementRef, private render:Renderer2) { }
  ngOnInit()
  { 
    this.render.setStyle(this.eleRef.nativeElement,'background-color','lightblue');
  }

}
