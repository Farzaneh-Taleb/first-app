import { Component } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
stringInterPolation = 'This is a String InterPloation';
numberInterPolation = 2 ;


  onTest() {
    return true ;
  }

  onClicked2(value: string) {
    alert(value);
  }

}
