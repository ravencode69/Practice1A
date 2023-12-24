import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive(
{
    selector:'[basichighlight]'
})

export class basichighlightDirective implements OnInit {

  constructor(private elementRef:ElementRef)
  {

  }
  ngOnInit()
  {
   this.elementRef.nativeElement.style.backgroundColor='gold';
  }


}