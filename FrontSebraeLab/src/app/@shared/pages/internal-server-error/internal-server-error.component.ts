import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-server-error',
  templateUrl: './internal-server-error.component.html',
  styleUrls: ['./internal-server-error.component.scss'],
})
export class InternalServerErrorComponent implements OnInit {

  @Input() codeErro: string='';
  @Input() textErro: string='';

  constructor() { }

  ngOnInit() {
  }

}
