import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  codeSample = "import beatitud\n" +
    "        beatitud.getSaint().then((str) => {\n" +
    "        console.log(str);\n" +
    "        }, (err) => {\n" +
    "        console.log(err);\n" +
    "        });\n" +
    "        //#=> St. Marguerite Bourgeoys (1620-1700)"

  constructor() {
    $('.sub-container').css('margin-top', '-100px');
    $('app-top-bar').css('background', 'rgba(0, 0, 0, 0)');
    $('app-top-bar').animate({height: 100}, 200);
  }

  ngOnInit() {
    $('.home').scroll(function (event) {
      var scroll = $('.home').scrollTop();
      var opacity = 1
      var height = 64
      var screenHeight = window.innerHeight
      if (scroll < screenHeight) {
        opacity = scroll / screenHeight
        height = 100 - scroll / screenHeight * 36
      }
      $('app-top-bar').css('background', 'rgba(103, 116, 125, ' + opacity + ')');
      $('app-top-bar').css('height', height + 'px');
      $('.sub-container').css('margin-top', '-' + height + 'px');
    });
  }

}
