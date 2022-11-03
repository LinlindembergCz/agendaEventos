import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from 'src/app/@bootstrap/services/application-state.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  isMobile: boolean= false;

  constructor(private applicationStateService: ApplicationStateService) { }

  ngOnInit(): void {

     this.isMobile = this.applicationStateService.device().isMobile()
  }

}
