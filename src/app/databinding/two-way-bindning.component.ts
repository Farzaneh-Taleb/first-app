import { Component } from '@angular/core';

@Component({
  selector: 'fa-two-way-bindning',
  template: `
  <input type="text" [(ngModel)]="person.name" />
  <input type="text" [(ngModel)]="person.name" />
  `,

})
export class TwoWayBindningComponent {

person = {
  name : 'max' ,
  age : 27
};
}
