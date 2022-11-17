import { Component,Input,OnInit, } from '@angular/core';

@Component({
    selector: 'app-funcionamento-show',
    templateUrl: './funcionamento-show.component.html',
    styleUrls: ['./funcionamento-show.component.scss']
  })
export class FuncionamentoShow implements OnInit  {
    
  @Input() isMobile:boolean;
  
    overlays: any[];
    ngOnInit() {

    }

}