import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecosistema-show',
  templateUrl: './ecosistema-show.component.html',
  styleUrls: ['./ecosistema-show.component.scss']
})        
export class EcosistemaShowComponent implements OnInit {

  @Input() isMobile: boolean = false;
  
  @Input() topFrameMain: any ='4514px';
  @Input() topFrameTitle: any= '4514px';
  @Input() topFrameText: any ='4605px';
  @Input() topframeSociedade: any= '4607px';
  @Input() topFrameEmpreendedores: any ='4716px';
  @Input() topFrameAmbientes: any= '4682px';
  @Input() topFrameInstituicoes: any ='4682px';
  @Input() topFrameColaboradores: any= '4607px';
  @Input() topFrameGoverno: any ='4750px'; 

  @Input() leftFrameMain: any ='0px;';
  @Input() leftFrameTitle: any= '593px';
  @Input() leftFrameText: any ='428px';
  @Input() leftframeSociedade: any= '160px';
  @Input() leftFrameEmpreendedores: any ='160px';
  @Input() leftFrameAmbientes: any= '459px';
  @Input() leftFrameInstituicoes: any ='742px';
  @Input() leftFrameColaboradores: any= '1024px';
  @Input() leftFrameGoverno: any ='1024px';

  ngOnInit(): void {   

    if (!this.isMobile)
    {
       this.topFrameMain ='4514px';
       this.topFrameTitle= '4514px';
       this.topFrameText ='4605px';
       this.topframeSociedade= '4607px';
       this.topFrameEmpreendedores ='4716px';
       this.topFrameAmbientes= '4682px';
       this.topFrameInstituicoes ='4682px';
       this.topFrameColaboradores= '4607px';
       this.topFrameGoverno ='4750px';     
    
       this.leftFrameMain='0px;';
       this.leftFrameTitle= '593px';
       this.leftFrameText ='428px';
       this.leftframeSociedade= '160px';
       this.leftFrameEmpreendedores ='160px';
       this.leftFrameAmbientes= '459px';
       this.leftFrameInstituicoes ='742px';
       this.leftFrameColaboradores= '1024px';
       this.leftFrameGoverno ='1024px';
    }
    
  }


}
