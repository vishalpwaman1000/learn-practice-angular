import { Directive, ElementRef, Host, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    console.log("Mouse Entered");
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log("Mouse Left");
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }


}
