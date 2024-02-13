import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  public cambio : boolean = true;
  ngOnInit(): void {

  }
  // @ts-ignore
  check(){
    if(this.router.url.indexOf("home") != -1){
      return false;
    }else{
      return true;
    }
  }
}
