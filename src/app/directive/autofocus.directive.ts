import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appAutofocus]',
  standalone: true
})
export class AutofocusDirective {
  @Input() formControlName!: string;
  private subscription: Subscription | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2, private control: NgControl) { }
  ngOnInit() {
    this.subscription = this.control.statusChanges?.subscribe(status => {
      if (status === 'INVALID' && this.control.touched) {
        this.scrollToElement(this.el.nativeElement);
      }
    });
  }
  private scrollToElement(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    this.renderer.selectRootElement(element).focus();
  }
  private blinkCursor(element: HTMLElement) {
    this.renderer.addClass(element, 'blink-cursor');
    setTimeout(() => {
      this.renderer.removeClass(element, 'blink-cursor');
    }, 2000); // Remove class after 2 seconds to stop blinking
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
