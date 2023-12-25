import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]',
})
export class BetterhighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() newColor: string = 'lightblue';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  // HostBinding is just another way of accessing the DOM (and manipulating it).
  // It's an indirect way if you want to call it like that.
  // Renderer gives you methods you can use to manipulate the DOM but you will
  //actually rarely use it directly. HostBinding uses the renderer behind the scenes
  // but is closer to the core idea of Angular: Declarative updating.

  constructor(private eleRef: ElementRef, private render: Renderer2) {}
  ngOnInit() {
    //   this.render.setStyle(this.eleRef.nativeElement,'background-color','lightblue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter', ['$event']) mouseover(eventData: Event) {
    //this.render.setStyle(this.eleRef.nativeElement,'background-color','lightblue');
    this.backgroundColor = this.newColor;
  }

  @HostListener('mouseleave', ['$event']) mouseaway(event2: Event) {
    // this.render.setStyle(this.eleRef.nativeElement,'background-color','transparent')
    this.backgroundColor = this.defaultColor;
  }
}
