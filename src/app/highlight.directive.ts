import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() defaultColor = 'green' ;
  // @Input('highlightColor') highlightColor = 'white' ;
  @Input() highlightColor = 'white' ;
  // private backgroundColor /*= this.defaultColor */;
  private backgroundColor: string ;

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor ;
  }
  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.backgroundColor ;
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
