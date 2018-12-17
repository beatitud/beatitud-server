import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  constructor() {
    $('.sub-container').css('margin-top', 0);
    $('app-top-bar').css('background', 'rgba(103, 116, 125, 1)');
    $('app-top-bar').animate({height: 64}, 200);
  }

  ngOnInit() {
  }

}
