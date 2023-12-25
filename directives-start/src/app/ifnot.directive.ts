import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfnot]',
})
export class IfnotDirective {
  @Input() set appIfnot(condition: boolean) {
    if (condition === false) {
      this.vRef.createEmbeddedView(this.tempRef);
    } else {
      this.vRef.clear();
    }
  }

  constructor(
    private tempRef: TemplateRef<any>,
    private vRef: ViewContainerRef
  ) {}
}
