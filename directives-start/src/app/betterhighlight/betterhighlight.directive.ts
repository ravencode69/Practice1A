import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit {

  constructor(private eleRef: ElementRef, private render:Renderer2) { }
  ngOnInit()
  { 
 //   this.render.setStyle(this.eleRef.nativeElement,'background-color','lightblue');
  }
  
  @HostListener('mouseenter',['$event']) mouseover(eventData:Event){
  this.render.setStyle(this.eleRef.nativeElement,'background-color','lightblue');
  }

  @HostListener('mouseleave',['$event']) mouseaway(event2:Event){
    this.render.setStyle(this.eleRef.nativeElement,'background-color','transparent')
  }
}
