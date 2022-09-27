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
    this.http.get<any[]>(environment.services.api,"Bloqueio").
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

  save()
  {       
     //Convert o array em string
     this.evento.dias.forEach( d=> d.option = JSON.stringify(d.option) );
     this.evento.tipoevento = this.tipoEvento.name;    

     this.http.post<Eventolab>(environment.services.api,'EventoSebraeLab', this.evento).finally
     ( 
      ()=>{ this.router.navigate(['/agenda']); })     

  }

}
