import { Component, OnInit } from '@angular/core';
//@ts-ignore
import AOS from 'aos';
import {OwlOptions} from "ngx-owl-carousel-o";
//@ts-ignore
import * as $ from 'jquery';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    $(document).ready(function (){
      /*Panel 1*/
      setTimeout(function (){
        $('#CP').fadeIn(1500);
        // @ts-ignore
        document.getElementById('CP').classList.add('cajita-rellena');
        // @ts-ignore
        document.getElementById('texto').classList.add('text-white');
      },5000);
        /*Salida panel 1*/
      setTimeout(function (){
        $('#master-1').fadeOut(1800);
        // @ts-ignore
        document.getElementById('master-2').classList.remove('d-none');
        // @ts-ignore
        document.getElementById('master-1').classList.add('d-none');
      },5000);
      /*Entrada panel 2*/
      setTimeout(function (){
        $('#CG').fadeIn(1500);
        // @ts-ignore
        document.getElementById('CG').classList.add('cajita-rellena');
        // @ts-ignore
        document.getElementById('texto1').classList.add('text-white');
        // @ts-ignore
        document.getElementById('CP').classList.remove('cajita-rellena');
        // @ts-ignore
        document.getElementById('texto').classList.remove('text-white');
        // @ts-ignore
        document.getElementById('master-4').classList.remove('d-none');
        // @ts-ignore
        document.getElementById('master-2').classList.add('d-none');
      },10000);
      /*Entrada panel 3*/
      setTimeout(function (){
        $('#CI').fadeIn(1500);
        // @ts-ignore
        document.getElementById('CI').classList.add('cajita-rellena');
        // @ts-ignore
        document.getElementById('texto2').classList.add('text-white');
        // @ts-ignore
        document.getElementById('CP').classList.remove('cajita-rellena');
        // @ts-ignore
        document.getElementById('texto').classList.remove('text-white');
        // @ts-ignore
        document.getElementById('CG').classList.remove('cajita-rellena');
        // @ts-ignore
        document.getElementById('texto1').classList.remove('text-white');
        // @ts-ignore
        document.getElementById('master-3').classList.remove('d-none');
        // @ts-ignore
        document.getElementById('master-2').classList.add('d-none');
// @ts-ignore
        document.getElementById('master-4').classList.add('d-none');

      },15000);
    })
    $(document).ready(function (){
      /*Panel 1*/
      setTimeout(function (){
        $('#CP1').fadeIn(1500);
        // @ts-ignore
        document.getElementById('CP1').classList.add('cajita-rellena');
        // @ts-ignore
        document.getElementById('texto111').classList.add('text-white');
      },5000);
      /*Salida panel 1*/
      setTimeout(function (){
        $('#master-1').fadeOut(1800);
        // @ts-ignore
        document.getElementById('master-2').classList.remove('d-none');
        // @ts-ignore
        document.getElementById('master-1').classList.add('d-none');
      },5000);
      /*Entrada panel 2*/
      setTimeout(function (){
        $('#CG1').fadeIn(1500);
        // @ts-ignore
        document.getElementById('CG1').classList.add('cajita-rellena');
        // @ts-ignore
        document.getElementById('texto11').classList.add('text-white');
        // @ts-ignore
        document.getElementById('CP1').classList.remove('cajita-rellena');
        // @ts-ignore
        document.getElementById('texto111').classList.remove('text-white');
        // @ts-ignore
        document.getElementById('master-4').classList.remove('d-none');
        // @ts-ignore
        document.getElementById('master-2').classList.add('d-none');
      },10000);
      /*Entrada panel 3*/
      setTimeout(function (){
        $('#CI1').fadeIn(1500);
        // @ts-ignore
        document.getElementById('CI1').classList.add('cajita-rellena');
        // @ts-ignore
        document.getElementById('texto21').classList.add('text-white');
        // @ts-ignore
        document.getElementById('CP1').classList.remove('cajita-rellena');
        // @ts-ignore
        document.getElementById('texto111').classList.remove('text-white');
        // @ts-ignore
        document.getElementById('CG1').classList.remove('cajita-rellena');
        // @ts-ignore
        document.getElementById('texto11').classList.remove('text-white');
        // @ts-ignore
        document.getElementById('master-3').classList.remove('d-none');
        // @ts-ignore
        document.getElementById('master-2').classList.add('d-none');
// @ts-ignore
        document.getElementById('master-4').classList.add('d-none');

      },15000);
    })
  }
  customOption1:  OwlOptions={
    loop: true,
    center:true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    dotsEach: false,
    navSpeed: 1100,
    responsive:{
      0:{
        items:1.1
      },
      400:{
        items:1
      },
      700:{
        items:1.4
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
  customOptions:  OwlOptions={
    loop: true,
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
        autoplay: true
      },
      400:{
        items:1,
        autoplay: true,
        dots: false
      },
      700:{
        items:1,
        dots: false
      },
      1000:{
        items: 1
      },
      1400:{
        items:1
      },
      1900:{
        items:1
      }
    },
    nav: true
  }
  customOption:  OwlOptions={
    loop: true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    dotsEach: true,
    navSpeed: 1100,
    responsive:{
      0:{
        items:1,
        autoplay: true
      },
      400:{
        items:1,
        autoplay: true,
      },
      700:{
        items:1,
        dots: false
      },
      1000:{
        items: 1
      },
      1400:{
        items:1
      },
      1900:{
        items:1
      }
    },
  }
  verPersonal(){
    // @ts-ignore
    document.getElementById('master-2').classList.remove("d-none");
    // @ts-ignore
    document.getElementById('CP').classList.add("cajita-rellena");
    // @ts-ignore
    document.getElementById('texto').classList.add("text-white");
    // @ts-ignore
    document.getElementById('CP').classList.remove("cajita");
    // @ts-ignore
    document.getElementById('CI').classList.remove("cajita-rellena");
    // @ts-ignore
    document.getElementById('texto1').classList.remove("text-white");
    // @ts-ignore
    document.getElementById('texto2').classList.remove("text-white");
    // @ts-ignore
    document.getElementById('CI').classList.add("cajita");
    // @ts-ignore
    document.getElementById('CG').classList.remove("cajita-rellena");
    // @ts-ignore
    document.getElementById('CG').classList.add("cajita");
    // @ts-ignore
    document.getElementById('master-1').classList.add("d-none");
    // @ts-ignore
    document.getElementById('master-3').classList.add("d-none");
    // @ts-ignore
    document.getElementById('master-4').classList.add("d-none");
  }
  verInterpersonal(){
    // @ts-ignore
    document.getElementById('master-3').classList.remove("d-none");
    // @ts-ignore
    document.getElementById('CP').classList.remove("cajita-rellena");
    // @ts-ignore
    document.getElementById('texto2').classList.add("text-white");
    // @ts-ignore
    document.getElementById('texto').classList.remove("text-white");
    // @ts-ignore
    document.getElementById('texto1').classList.remove("text-white");

    // @ts-ignore
    document.getElementById('CP').classList.add("cajita");
    // @ts-ignore
    document.getElementById('CI').classList.add("cajita-rellena");
    // @ts-ignore
    document.getElementById('CI').classList.remove("cajita");
    // @ts-ignore
    document.getElementById('CG').classList.remove("cajita-rellena");
    // @ts-ignore
    document.getElementById('CG').classList.add("cajita");
    // @ts-ignore
    document.getElementById('master-1').classList.add("d-none");
    // @ts-ignore
    document.getElementById('master-2').classList.add("d-none");
    // @ts-ignore
    document.getElementById('master-4').classList.add("d-none");
  }
  verGerencial(){
    // @ts-ignore
    document.getElementById('master-4').classList.remove("d-none");
    // @ts-ignore
    document.getElementById('CI').classList.remove("cajita-rellena");
    // @ts-ignore
    document.getElementById('CI').classList.add("cajita");
    // @ts-ignore
    document.getElementById('texto1').classList.add("text-white");
    // @ts-ignore
    document.getElementById('texto2').classList.remove("text-white");
    // @ts-ignore
    document.getElementById('texto').classList.remove("text-white");

    // @ts-ignore
    document.getElementById('CG').classList.add("cajita-rellena");
    // @ts-ignore
    document.getElementById('CG').classList.remove("cajita");
    // @ts-ignore
    document.getElementById('CP').classList.remove("cajita-rellena");
    // @ts-ignore
    document.getElementById('CP').classList.add("cajita");
    // @ts-ignore
    document.getElementById('master-1').classList.add("d-none");
    // @ts-ignore
    document.getElementById('master-2').classList.add("d-none");
    // @ts-ignore
    document.getElementById('master-3').classList.add("d-none");
  }

  vermaster(){
    //@ts-ignore
    document.getElementById('master-1').style.display = "block";
    //@ts-ignore
    document.getElementById('master-1').classList.remove('d-none');
    // @ts-ignore
    document.getElementById('CP').classList.remove("cajita-rellena");
    // @ts-ignore
    document.getElementById('texto').classList.remove("text-white");
    // @ts-ignore
    document.getElementById('CP').classList.add("cajita");
    // @ts-ignore
    document.getElementById('CI').classList.remove("cajita-rellena");
    // @ts-ignore
    document.getElementById('texto1').classList.remove("text-white");
    // @ts-ignore
    document.getElementById('texto2').classList.remove("text-white");
    // @ts-ignore
    document.getElementById('CI').classList.add("cajita");
    // @ts-ignore
    document.getElementById('CG').classList.remove("cajita-rellena");
    // @ts-ignore
    document.getElementById('CG').classList.add("cajita");
    // @ts-ignore
    document.getElementById('master-2').classList.add("d-none");
    // @ts-ignore
    document.getElementById('master-3').classList.add("d-none");
    // @ts-ignore
    document.getElementById('master-4').classList.add("d-none");

  }

  verPersonal1(){
    // @ts-ignore
    document.getElementById('master-2').classList.remove("d-none");
    // @ts-ignore
    document.getElementById('CP1').classList.add("cajita-rellena");
    // @ts-ignore
    document.getElementById('texto111').classList.add("text-white");
    // @ts-ignore
    document.getElementById('CP1').classList.remove("cajita");
    // @ts-ignore
    document.getElementById('CI1').classList.remove("cajita-rellena");
    // @ts-ignore
    document.getElementById('texto11').classList.remove("text-white");
    // @ts-ignore
    document.getElementById('texto21').classList.remove("text-white");
    // @ts-ignore
    document.getElementById('CI1').classList.add("cajita");
    // @ts-ignore
    document.getElementById('CG1').classList.remove("cajita-rellena");
    // @ts-ignore
    document.getElementById('CG1').classList.add("cajita");
    // @ts-ignore
    document.getElementById('master-1').classList.add("d-none");
    // @ts-ignore
    document.getElementById('master-3').classList.add("d-none");
    // @ts-ignore
    document.getElementById('master-4').classList.add("d-none");
  }
  verInterpersonal1(){
    // @ts-ignore
    document.getElementById('master-3').classList.remove("d-none");
    // @ts-ignore
    document.getElementById('CP1').classList.remove("cajita-rellena");
    // @ts-ignore
    document.getElementById('texto21').classList.add("text-white");
    // @ts-ignore
    document.getElementById('texto11').classList.remove("text-white");
    // @ts-ignore
    document.getElementById('texto111').classList.remove("text-white");

    // @ts-ignore
    document.getElementById('CP1').classList.add("cajita");
    // @ts-ignore
    document.getElementById('CI1').classList.add("cajita-rellena");
    // @ts-ignore
    document.getElementById('CI1').classList.remove("cajita");
    // @ts-ignore
    document.getElementById('CG1').classList.remove("cajita-rellena");
    // @ts-ignore
    document.getElementById('CG1').classList.add("cajita");
    // @ts-ignore
    document.getElementById('master-1').classList.add("d-none");
    // @ts-ignore
    document.getElementById('master-2').classList.add("d-none");
    // @ts-ignore
    document.getElementById('master-4').classList.add("d-none");
  }
  verGerencial1(){
    // @ts-ignore
    document.getElementById('master-4').classList.remove("d-none");
    // @ts-ignore
    document.getElementById('CI1').classList.remove("cajita-rellena");
    // @ts-ignore
    document.getElementById('CI1').classList.add("cajita");
    // @ts-ignore
    document.getElementById('texto11').classList.add("text-white");
    // @ts-ignore
    document.getElementById('texto21').classList.remove("text-white");
    // @ts-ignore
    document.getElementById('texto111').classList.remove("text-white");

    // @ts-ignore
    document.getElementById('CG1').classList.add("cajita-rellena");
    // @ts-ignore
    document.getElementById('CG1').classList.remove("cajita");
    // @ts-ignore
    document.getElementById('CP1').classList.remove("cajita-rellena");
    // @ts-ignore
    document.getElementById('CP1').classList.add("cajita");
    // @ts-ignore
    document.getElementById('master-1').classList.add("d-none");
    // @ts-ignore
    document.getElementById('master-2').classList.add("d-none");
    // @ts-ignore
    document.getElementById('master-3').classList.add("d-none");
  }
  vermaster1(){
    //@ts-ignore
    document.getElementById('master-1').style.display = "block";
    //@ts-ignore
    document.getElementById('master-1').classList.remove('d-none');
    // @ts-ignore
    document.getElementById('CP1').classList.remove("cajita-rellena");
    // @ts-ignore
    document.getElementById('texto111').classList.remove("text-white");
    // @ts-ignore
    document.getElementById('CP1').classList.add("cajita");
    // @ts-ignore
    document.getElementById('CI1').classList.remove("cajita-rellena");
    // @ts-ignore
    document.getElementById('texto11').classList.remove("text-white");
    // @ts-ignore
    document.getElementById('texto21').classList.remove("text-white");
    // @ts-ignore
    document.getElementById('CI1').classList.add("cajita");
    // @ts-ignore
    document.getElementById('CG1').classList.remove("cajita-rellena");
    // @ts-ignore
    document.getElementById('CG1').classList.add("cajita");
    // @ts-ignore
    document.getElementById('master-2').classList.add("d-none");
    // @ts-ignore
    document.getElementById('master-3').classList.add("d-none");
    // @ts-ignore
    document.getElementById('master-4').classList.add("d-none");

  }




  audio(){
    const audio = new Audio('assets/audio/1.mp3');
    audio.play();
  }
  audio1(){
    const audio = new Audio('assets/audio/2.mp3');
    audio.play();
  }
}
