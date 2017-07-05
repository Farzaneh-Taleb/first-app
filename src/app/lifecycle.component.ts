import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input, ViewChild, ContentChild
} from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <p>
   <ng-content></ng-content>
    </p>
    <hr>
    <p #boundParagraph>{{bindable}}</p>
  <p>{{boundParagraph.textContent}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit , OnChanges , DoCheck , AfterContentInit ,
  AfterContentChecked , AfterViewInit ,  AfterViewChecked , OnDestroy {
 @Input() bindable = 1000 ;

 @ViewChild('boundParagraph')
 boundParagraph: HTMLElement  ;

 @ContentChild('boundContent')
 boundContent: HTMLElement ;

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.log('OnChanges') ;
  }

  ngDoCheck(): void {
    this.log('DoCheck') ;

  }

  ngAfterContentInit(): void {
    this.log('AfterContentInit') ;
console.log(this.boundContent) ;
  }

  ngAfterContentChecked(): void {
    this.log('AfterContentChecked') ;
    console.log(this.boundParagraph) ;

  }

  ngAfterViewInit() {
    this.log('AfterViewInit') ;
    console.log(this.boundParagraph) ;
  }

  ngAfterViewChecked(): void {
    this.log('AfterViewChecked') ;

  }

  ngOnDestroy(): void {
    this.log('OnDestroy') ;

  }

  private log(hook: string) {
    console.log(hook) ;
  }


}
