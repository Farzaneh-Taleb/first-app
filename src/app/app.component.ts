import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <h1>Root Component</h1>
  <fa-databinding></fa-databinding>
  <fa-lifecycle *ngIf="!delete" [bindable]="boundValue">
    <p #boundContent>{{test}}</p>
  </fa-lifecycle>
  <button (click)="delete = true">Click to delete</button>
  <button (click)="test = 'changed value'">Click to change Content</button>
  <button (click)="boundValue = 2000">Click to change Binding</button>
    <!--<div id="fa-other"></div>-->
  <app-directives></app-directives>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <si-cmp-a></si-cmp-a>
    <si-cmp-b></si-cmp-b>
    
  
    
    
  `

})
export class AppComponent {
  title = 'app works!';
  delete = false ;
  test = 'Starting Value' ;
  boundValue = 1000 ;
}
