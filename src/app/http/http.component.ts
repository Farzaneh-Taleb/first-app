import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import {Response} from "@angular/http";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit{
  ngOnInit() {
this.httpService.getData()
  .subscribe(
    (data: Response ) => console.log(data));
  }

  constructor(private httpService: HttpService) { }

}
