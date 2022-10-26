import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecosistema-show',
  templateUrl: './ecosistema-show.component.html',
  styleUrls: ['./ecosistema-show.component.scss']
})        
export class EcosistemaShowComponent implements OnInit {

  @Input() topFrameMain: any ='4514px';
  @Input() topFrameTitle: any= '4514px';
  @Input() topFrameText: any ='4605px';
  @Input() topframeSociedade: any= '4607px';
  @Input() topFrameEmpreendedores: any ='4716px';
  @Input() topFrameAmbientes: any= '4682px';
  @Input() topFrameInstituicoes: any ='4682px';
  @Input() topFrameColaboradores: any= '4607px';
  @Input() topFrameGoverno: any ='4750px'; 

  ngOnInit(): void {   
  }


}
