import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverCard]',
})
export class HoverCard {
  constructor(private el: ElementRef) {}

  // Renderer2;

  // mouse enter
  @HostListener('mouseenter') onMouseEnter() {
    // console.log(this.el.nativeElement);
    this.el.nativeElement.style.background = 'lightblue';
  }

  // mouse leave
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.background = '';
  }
}
