import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-saints',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  constructor() {
    $('.sub-container').css('margin-top', 0);
    $('app-top-bar').css('background', 'rgba(103, 116, 125, 1)');
    $('app-top-bar').css('height', '64px');
  }

  ngOnInit() {
  }

}
