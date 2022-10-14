import { Component, OnInit,  AfterViewInit} from '@angular/core';

import{ Eventolab } from '../../../../@core/models/eventolab.model';
import {MessageService} from 'primeng/api';

import { Router } from '@angular/router';
import { RequestPromiseService } from '../../../../@shared/services/request-promise.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.scss']
})
export class EventoCreateComponent implements OnInit, AfterViewInit {

  //indexComponent:number=0;
  evento: Eventolab; 

  diasBloqueados: Date[]=[new Date()];

  tiposEvento:any[]=[];
  tipoEvento:any= {name: "Palestra", code: "0"};

  constructor(private messageService: MessageService,
    private http :RequestPromiseService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.evento = new Eventolab();
    
    this.http.get<any>("../../../assets/data", "tipoEventos.json").
    then(x => { this.tiposEvento = x; });     
    
    this.loadDiasBloqueados();
    

  }

  ngAfterViewInit()
  {  

  }

  
  loadDiasBloqueados()
  {
    this.http.get<any[]>(environment.services.api,environment.routes.eventoSebraeLab.diasBloqueados).
    then(x=>{
      this.diasBloqueados = []
      x.forEach(d=> {this.diasBloqueados.push(new Date(d.data))})
      });
  }

  addDia()
  {
    this.evento.dias.push({data: null, horainicio: '00:00', horafim: '00:00',  option:''});
  }

  removeDia()
  {
    this.evento.dias.pop();   
  }

  verifyAvailability(data: string, horainicio: string, horafim:string ):Promise<boolean>
  {
    let url = environment.routes.eventoSebraeLab.alocacao+
    `?Data=${new Date(data).toISOString().slice(0, 10)}
    &horainicio=${horainicio}
    &horafinal=${horafim}`;

    return this.http.get( environment.services.api, url);
  }

  async save()
  {       
      //Convert o array em string
      this.evento.dias.forEach( d=> d.option = JSON.stringify(d.option) );
      this.evento.tipoevento = this.tipoEvento.name;     

      this.http.post<Eventolab>(environment.services.api,environment.routes.eventoSebraeLab.root, this.evento).
      then( () =>
      {
          this.router.navigate(['/agenda']);            
          this.messageService.add({severity:'success', 
                                    summary:'Cadastro', 
                                    detail:'O evento foi cadastrado com sucesso!'}); 
      }).catch( (e) =>{         
            this.messageService.add({severity:'warn', 
            summary:'Erro', 
            detail:e.error.text}); 
      });

  }

}
