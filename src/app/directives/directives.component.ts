import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  private switch = true ;
  private items = [1 , 2 , 3 , 4 , 5] ;
  private value = 10 ;
  onSwitch() {
    this.switch = !this.switch ;
  }
  constructor() { }

  ngOnInit() {
  }

}
