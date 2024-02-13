import { Component, OnInit } from '@angular/core';
//@ts-ignore
import AOS from 'aos';
import {ModalService} from "../modal/modal.service";

@Component({
  selector: 'app-gamification',
  templateUrl: './gamification.component.html',
  styleUrls: ['./gamification.component.css']
})
export class GamificationComponent implements OnInit {

  constructor(private  modalService: ModalService) { }

  ngOnInit(): void {
    AOS.init();
    this.abrirModal();
  }
  abrirModal(){
    this.modalService.abrirModal();
  }
}
