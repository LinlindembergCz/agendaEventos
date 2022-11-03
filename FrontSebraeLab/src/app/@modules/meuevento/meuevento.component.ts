import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationStateService } from 'src/app/@bootstrap/services/application-state.service';
import { EventBooking } from '../components/reserve-submit/model/EventBooking-model';
@Component({
  selector: 'app-meuevento',
  templateUrl: './meuevento.component.html',
  styleUrls: ['./meuevento.component.scss']
})
export class MeuEventoComponent implements AfterViewInit , OnInit  {

   optionsCheck: string[]=[];
  
   selectedPeriodos: any[]=[];

   isMobile:boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private applicationStateService: ApplicationStateService
  ) { }

  ngOnInit(): void {   
    this.isMobile = this.applicationStateService.device().isMobile()
  }

  ngAfterViewInit()
  {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  selectDate(periodos: any[]): void {

    this.selectedPeriodos = periodos
    //console.log(this.selectedPeriodos)
  }


}
