import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-entenda-sebraelab-show',
  templateUrl: './entenda-sebraelab-show.component.html',
  styleUrls: ['./entenda-sebraelab-show.component.scss']
})
export class EntendaSebraelabShowComponent implements OnInit {

  @Input() isMobile: boolean = false;

  constructor(
  ) { }

  ngOnInit(): void {   
 
  }



}
