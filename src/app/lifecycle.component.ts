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
  Input
} from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <p>
   <ng-content></ng-content>
    </p>
    <hr>
    <p>{{bindable}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit , OnChanges , DoCheck , AfterContentInit ,
  AfterContentChecked , AfterViewInit ,  AfterViewChecked , OnDestroy {
 @Input() bindable = 1000 ;

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

  }

  ngAfterContentChecked(): void {
    this.log('AfterContentChecked') ;

  }

  ngAfterViewInit(): void {
    this.log('AfterViewInit') ;

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
