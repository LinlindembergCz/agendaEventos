import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from 'src/app/@bootstrap/services/application-state.service';

@Component({
  selector: 'app-quemsomos',
  templateUrl: './quemsomos.component.html',
  styleUrls: ['./quemsomos.component.scss']
})
export class QuemSomosComponent implements OnInit {

  isMobile:boolean;

  constructor(private applicationStateService: ApplicationStateService) { }

  ngOnInit(): void {

    this.isMobile = this.applicationStateService.device().isMobile()

  }

}
