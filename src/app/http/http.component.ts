import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit{
  ngOnInit() {
this.httpService.getData()
  .subscribe(
    (data: any) => console.log(data));
  }

  constructor(private httpService: HttpService) { }

}
