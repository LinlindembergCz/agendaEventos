import { Component, OnInit,  AfterViewInit} from '@angular/core';

import{ Eventolab } from '../../../../@core/models/eventolab.model';
import {MessageService} from 'primeng/api';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';


interface TipoEvento {
  code: string,
  name: string   
}

@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.scss']
})
export class EventoCreateComponent implements OnInit, AfterViewInit {

  indexComponent:number=0;
  evento: Eventolab;

  tiposEnvento:TipoEvento[]=[];

  constructor(private messageService: MessageService,
    private http :RequestPromiseService) { }

  ngOnInit(): void {

    this.evento = new Eventolab();
    
    this.tiposEnvento =   [{name: 'Palestra', code: '1'},
                           {name: 'Workshop', code: '2'},
                           {name: 'Curso', code: '3'},
                           {name: 'Evento Fechado', code: '4'},
                           {name: 'Outros', code: '5'}] 
  }

  ngAfterViewInit()
  {  

  }

  adicionarDia()
  {
    this.evento.dias.push({
      id:'0',
      name:`data${this.indexComponent}`,
      data: null,
      horaInicio: '00:00',
      horaFim: '00:00',
      option:''});

    this.indexComponent++;
    console.log(this.evento.dias)
  }

  removerDia()
  {
    this.evento.dias.pop();   
  }

  salvar()
  {
      console.log(this.evento)

      this.messageService.add({severity:'warn', 
      summary:'Service Message', 
      detail:'Via MessageService'});
  }

}
