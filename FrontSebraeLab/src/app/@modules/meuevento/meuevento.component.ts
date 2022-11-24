import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationStateService } from '../../@bootstrap/services/application-state.service';
@Component({
  selector: 'app-meuevento',
  templateUrl: './meuevento.component.html',
  styleUrls: ['./meuevento.component.scss']
})
export class MeuEventoComponent implements AfterViewInit , OnInit  {

   optionsCheck: string[]=[];
  
   selectedPeriodos: any[]=[];

  @Input() isMobile:boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private applicationStateService: ApplicationStateService
  ) { }

  ngOnInit(): void {   
    this.isMobile = this.applicationStateService.device().isMobile()||
    this.applicationStateService.device().isTablet();
  }

  ngAfterViewInit()
  {
    if (!this.isMobile)
    window.scrollTo(0, 540);
    else
    window.scrollTo(0, 550);
  }

  selectDate(periodos: any[]): void {

    this.selectedPeriodos = periodos
    //console.log(this.selectedPeriodos)
  }


}
