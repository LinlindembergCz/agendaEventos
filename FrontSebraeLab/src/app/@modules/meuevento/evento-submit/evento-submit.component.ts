import {AfterViewInit, Component,OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PrimeIcons} from 'primeng/api';


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
    tipoEvento: string;
    nomeEvento: string;
    numeroParticipantes: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute
      ) { }
    
    ngOnInit() {
        this.events = [
            {status: '1'},
            {status: '2'},
            {status: '3'},
        ];

        this.tiposEnvento = [
            
            {name: 'Workshop', code: '1'},
            {name: 'Curso', code: '2'},
            {name: 'Evento Fechado', code: '3'},
            {name: 'Outros', code: '4'},
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

    }

}