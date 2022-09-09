import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventBooking } from '../components/reserve-submit/model/EventBooking-model';
@Component({
  selector: 'app-meuevento',
  templateUrl: './meuevento.component.html',
  styleUrls: ['./meuevento.component.scss']
})
export class MeuEventoComponent implements AfterViewInit , OnInit  {

   optionsCheck: string[]=[];
  
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {   
      
  }

  ngAfterViewInit()
  {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


}
