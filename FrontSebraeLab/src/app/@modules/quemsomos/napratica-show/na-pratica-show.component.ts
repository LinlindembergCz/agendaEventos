import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location  } from '@angular/common';


@Component({
  selector: 'app-na-pratica-show',
  templateUrl: './na-pratica-show.component.html',
  styleUrls: ['./na-pratica-show.component.scss']
})
export class NaPraticaShowComponent implements AfterViewInit, OnInit {

  @Input() isMobile: boolean = false;
  
  selectedLetra: string = 'L';

  constructor( private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {   
   
 


  }

  ngAfterViewInit()
  {

    this.route.fragment.forEach(banner=>{
      if (banner =="bannersLEARN") this.selectLetra("L");
      if (banner =="bannersATTEND") this.selectLetra("A");
      if (banner =="bannersBUSINESS") this.selectLetra("B");


      //this.location.path() + '#'+ banner; 
    })


  }

  selectLetra(letra: string)
  {
    this.selectedLetra = letra;

    if (!this.isMobile)
    window.scrollTo(0, 3300);
    else
    window.scrollTo(0, 3300);
  }



}
