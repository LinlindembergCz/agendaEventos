import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationStateService } from '../../../../@bootstrap/services/application-state.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {


  isMobile: boolean = false;

  constructor(private router: Router,
    private applicationStateService: ApplicationStateService,
    ) { }

  ngOnInit(): void {
    this.isMobile = (this.applicationStateService.device().isMobile() ||
                     this.applicationStateService.device().isTablet());

 }

  
  showAgenda() {
    this.router.navigate(['agenda']);
  }

  showConteudo() {
    this.router.navigate(['conteudo']);
  }

}
