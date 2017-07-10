import {Directive, ElementRef, HostBinding, HostListener, Renderer} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  private backgroundColor = 'white' ;

  @HostListener('mouseenter') mouseover(){
    this.backgroundColor = 'green' ;
  }
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = 'white' ;
  }
  @HostBinding('style.backgroundColor') get setColer(){
    return this.backgroundColor ;
  }

/*private elementRef: ElementRef ;

constructor(elementRef: ElementRef) {
  this.elementRef = elementRef ;
}*/

constructor(private elementRef: ElementRef , private renderer: Renderer) {
  // this.elementRef.nativeElement.style.backgroundColor = 'green' ;
// this.renderer.setElementStyle(this.elementRef.nativeElement , 'backgroundColor' , 'green');
}

}
