import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-na-pratica-show',
  templateUrl: './na-pratica-show.component.html',
  styleUrls: ['./na-pratica-show.component.scss']
})
export class NaPraticaShowComponent implements OnInit {

  @Input() isMobile: boolean = false;
  
  selectedLetra: string = 'L';

  constructor(
  ) { }

  ngOnInit(): void {   
 
  }

  selectLetra(letra: string)
  {
    this.selectedLetra = letra;
  }



}
