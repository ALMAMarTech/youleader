import { Component, OnInit } from '@angular/core';
//@ts-ignore
import AOS from 'aos';
import {OwlOptions, SlidesOutputData} from "ngx-owl-carousel-o";
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
  customOptions:  OwlOptions={
    loop: true,
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
        items:1
      },
      400:{
        items:1.3
      },
      700:{
        items:1.8
      },
      1000:{
        items: 2.8
      },
      1400:{
        items:3
      },
      1900:{
        items:3
      }
    }
  }
  customOption:  OwlOptions={
    loop: false,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    dotsEach: false,
    navSpeed: 900,
    navText:['<i class="fas fa-arrow-left mx-4  color"></i>','<i class="fas fa-arrow-right  color"></i>'],
    responsive:{
      0:{
        items:1,
        dots:false,
        loop: true,
        autoplay:true,
        nav: false
      },
      400:{
        items:1,
        dots: true,
        autoplay: true,
        loop: true,
        nav:false
      },
      700:{
        items:1,
        dots: true,
        autoplay: true
      },
      1000:{
        items: 1,
        dots: true
      },
      1400:{
        items:1,
        dots:true
      },
      1900:{
        items:1,
        dots:true
      }
    },
    nav: true
  }
  public slider: any = [
    "assets/img/slider/mexico.png",
    "assets/img/slider/peru.png",
    "assets/img/slider/españa.png",
    "assets/img/slider/brasil.png",
    "assets/img/slider/turquia.png",
    "assets/img/slider/mas.png"
  ];
}
