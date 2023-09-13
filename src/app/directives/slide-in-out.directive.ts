import { Directive, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { slideInOutAnimation } from 'src/assets/animations/slide-in-out.animation';

@Directive({
  selector: '[appSlideInOut]'
})
export class SlideInOutDirective implements OnInit, OnDestroy {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'slide-in-enter');
  }

  ngOnDestroy() {
    this.renderer.removeClass(this.el.nativeElement, 'slide-in-enter');
  }
}
