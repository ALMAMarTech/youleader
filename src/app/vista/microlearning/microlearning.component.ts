import { Component, OnInit } from '@angular/core';
//@ts-ignore
import AOS from 'aos';

@Component({
  selector: 'app-microlearning',
  templateUrl: './microlearning.component.html',
  styleUrls: ['./microlearning.component.css']
})
export class MicrolearningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  AOS.init();
  }

}
