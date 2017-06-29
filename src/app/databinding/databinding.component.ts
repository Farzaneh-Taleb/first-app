import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
stringInterPolation = 'This is a String InterPloation';
numberInterPolation = 2 ;

  constructor() { }

  ngOnInit() {
  }
  onTest() {
    return true ;
  }

  onClicked2(value: string) {
    alert(value);
  }

}
