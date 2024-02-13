import { Component, OnInit } from '@angular/core';
//@ts-ignore
import AOS from 'aos';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  AOS.init();
  }

}
