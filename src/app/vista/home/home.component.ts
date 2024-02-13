import { Component, OnInit } from '@angular/core';
//@ts-ignore
import AOS from 'aos';
// @ts-ignore
import * as $ from 'jquery';
import {OwlOptions, SlidesOutputData} from "ngx-owl-carousel-o";
import {Slider} from "./Slider";
import {transition} from "@angular/animations";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public slider: Slider [] = [];

  customOptions:  OwlOptions={
  loop: false,
   autoplay: false,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
   dots: true,
  dotsEach: true,
  navSpeed: 900,
   navText:['<i class="fas fa-arrow-left mx-4  color"></i>','<i class="fas fa-arrow-right  color"></i>'],
  responsive:{
  0:{
  items:1,
    autoplay: true,
    loop: true
  },
    400:{
    items:1
    },
    700:{
    items:1
    },
    1000:{
    items: 1
    },
    1400:{
    items:1
    },
    1900:{
    items:1
    },
    2150: {
    autoplay: false,
      loop: false
    }
  },
  nav: true
 }

  customOptions1:  OwlOptions={
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    dotsEach: true,
    navSpeed: 1100,
    responsive:{
      0:{
        items:1
      },
      400:{
        items:1
      },
      700:{
        items:1
      },
      1000:{
        items: 1
      },
      1400:{
        items:1
      },
      1900:{
        items:1
      },
      2150: {
        autoplay: false,
        loop: false
      }
    },
  }
  customOption:  OwlOptions={
    loop: true,
    center:true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    dotsEach: false,
    navSpeed: 700,
    navText:[''],
    responsive:{
      0:{
        items:1.2
      },
      400:{
        items:1.4
      },
      700:{
        items:2.5
      },
      1000:{
        items: 2.5
      },
      1400:{
        items:2.5
      },
      1900:{
        items:2.5
      }
    }
  }
  constructor() { }
  ngOnInit(): void {
    AOS.init();
  }
  slideTranslade(data: SlidesOutputData, init: boolean = false) {
    if (init) {
      let thisObject = this;
      setTimeout(() => {
        thisObject.slideStyle(data);
      }, 2000);
    } else {
      this.slideStyle(data);
    }
  }
  private slideStyle(data: SlidesOutputData) {
    let slide = data.slides?.filter(x => x.center == true);
    if (slide && slide.length > 0) {
      let number = slide[0].id;
      $(".card-vacante").removeClass("pe-4").removeClass("slider-grande").removeClass("margin").removeClass('f');
      $(".card-" + number).addClass("slider-grande").addClass("margin").addClass("f");
    }
  }
}
