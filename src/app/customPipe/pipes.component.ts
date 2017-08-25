import { Component } from '@angular/core';
import {DoublePipe} from './double.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],

})
export class PipesComponent  {

  myValue = 'lowercase';
  myDate = new Date(2016, 5, 24);
  values = [ 'milk' , 'bread' , 'Beans'];
  asyncValue = new Promise((resolve ,  reject) => {
    setTimeout(() => resolve('Data is here!') , 2000) ;
  })
  constructor() { }

}
