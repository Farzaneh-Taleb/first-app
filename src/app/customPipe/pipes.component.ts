import { Component } from '@angular/core';
import {DoublePipe} from './double.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  pipes: [DoublePipe]
})
export class PipesComponent  {

  myValue = 'lowercase';
  myDate = new Date(2016, 5, 24);
  constructor() { }

}
