import {AfterViewInit, Component,Input,OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RequestPromiseService } from '../../../@shared/services/request-promise.service';


interface TipoEvento {
    code: string,
    name: string   
}

@Component({
    selector: 'app-evento-submit',
    templateUrl: './evento-submit.component.html',
    styleUrls: ['./evento-submit.component.scss']
  })
export class EventoSubmit implements AfterViewInit, OnInit  {

    loadAllTabs:boolean = false;
    activeIndex:number=0;

    events: any[];
    tiposEnvento:TipoEvento[];
    optionDate: string;
    tipoEvento: any;
    nomeEvento: string;
    numeroParticipantes: string;
    descricao: string;
    linkinscricao: string;
    nomecompleto:string;
    email:string;
    instituicao: string;
    contato: string;

    @Input() periodos: any[]=[];
 

    constructor(
        private http: RequestPromiseService,
        private router: Router,
        private route: ActivatedRoute
      ) { }
    
    ngOnInit() {
        this.tiposEnvento = [
            {name: 'Palestra', code: '1'},
            {name: 'Workshop', code: '2'},
            {name: 'Curso', code: '3'},
            {name: 'Evento Fechado', code: '4'},
            {name: 'Outros', code: '5'},
        ]
    }

    ngAfterViewInit()
    {
       this.loadAllTabs = false

       this.route.queryParams.subscribe(
        params =>{  if (params['nomeevento'])
                    {
                        this.nomeEvento =params['nomeevento'];
                    }
                    if (params['numeroparticipantes'])
                    {
                        this.numeroParticipantes =params['numeroparticipantes'];
                    }
                  })
    }
    
    onTabOpen(e:any)
    {
        this.activeIndex= e.index;
    }

    nextTab(index:number)
    {
       this.activeIndex= index;
    }

    priorTab(index:number)
    {
       this.activeIndex = index-1;
    }

    send()
    {
       let DiasEvento: string = '';

       this.periodos.forEach( p=>{  
          DiasEvento = DiasEvento +` ${p.data} de ${p.horaInicio} a ${p.horaFim} %0D%0A`; 

       })

       var _body = 
`Tipo de evento: ${this.tipoEvento.name} %0D%0A
Titulo do Evento: ${this.nomeEvento}%0D%0A
Vagas: ${this.numeroParticipantes} %0D%0A
Link inscrição: ${this.linkinscricao} %0D%0A
Nome : ${this.nomecompleto} %0D%0A
Email: ${this.email} %0D%0A
Instituição: ${this.instituicao} %0D%0A
Descrição: ${this.descricao} %0D%0A %0D%0A
Período: %0D%0A 
${DiasEvento}
`;

    window.open(`mailto:?subject=${"Reservar: "+this.nomeEvento}&body=${_body}&to=sebraeLab@es.sebrae.com.br`, "_blank")

    }



}