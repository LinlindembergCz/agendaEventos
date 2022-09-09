import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ggm-t-page-error',
  templateUrl: './page-error.component.html',
  styleUrls: ['./page-error.component.scss']
})
export class PageErrorComponent implements OnInit {

@Input() errorCode: string = "404";
@Input() errorMessage: string = "Página não encontrada...";
@Input() linkHome: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
