import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  itens: any[] = []; 

  constructor() { }

  ngOnInit(): void {
    this.itens = [
        { name: "PROJETO A"},
        { name: "PROJETO B"},
        { name: "PROJETO C"},
        { name: "PROJETO D"},
        { name: "PROJETO E"},
        { name: "PROJETO F"},
        { name: "PROJETO G"},
        { name: "PROJETO H"},
    ]
  }

}
