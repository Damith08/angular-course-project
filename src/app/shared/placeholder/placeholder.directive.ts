import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholder]',
})
export class PlaceholderDirective {
  ViewContainerRef: any;
  constructor(private viewContainerRef: ViewContainerRef) {}
}
