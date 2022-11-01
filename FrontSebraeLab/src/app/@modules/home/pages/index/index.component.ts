import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from 'src/app/@bootstrap/services/application-state.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  dispositivo: string='desktop';

  constructor(private applicationStateService: ApplicationStateService) { }

  ngOnInit(): void {

    if (this.applicationStateService.device().isMobile())
    this.dispositivo = 'Mobile'
  }

}
