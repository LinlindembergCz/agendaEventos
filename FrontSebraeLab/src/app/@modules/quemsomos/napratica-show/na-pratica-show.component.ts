import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-na-pratica-show',
  templateUrl: './na-pratica-show.component.html',
  styleUrls: ['./na-pratica-show.component.scss']
})
export class NaPraticaShowComponent implements OnInit {

  @Input() isMobile: boolean = false;
  
  selectedLetra: string = 'L';

  constructor( private route: ActivatedRoute
  ) { }

  ngOnInit(): void {   
   
    this.route.fragment.forEach(banner=>{
      if (banner =="bannersLEARN") this.selectLetra("L");
      if (banner =="bannersATTEND") this.selectLetra("A");
      if (banner =="bannersBUSINESS") this.selectLetra("B");
    })


  }

  selectLetra(letra: string)
  {
    this.selectedLetra = letra;
  }



}
