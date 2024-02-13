import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
//@ts-ignore
import AOS from "aos";
@Component({
  selector: 'app-socios-comerciales',
  templateUrl: './socios-comerciales.component.html',
  styleUrls: ['./socios-comerciales.component.css']
})
export class SociosComercialesComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    AOS.init();
    this.title.setTitle('Socios comerciales');
  }

}
