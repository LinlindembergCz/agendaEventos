import { Component, OnInit,  AfterViewInit} from '@angular/core';

import{ Eventolab } from '../../../../@core/models/eventolab.model';
import {MessageService} from 'primeng/api';

import { Router } from '@angular/router';
import { RequestPromiseService } from '../../../../@shared/services/request-promise.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-publicacao-create',
  templateUrl: './publicacao-create.component.html',
  styleUrls: ['./publicacao-create.component.scss']
})
export class PublicacaoCreateComponent implements OnInit, AfterViewInit {

  tipoPublicacao: any;
  conteudo: any={ titulo:"",
                  subtitulo:"",
                  legenda:"",
                  descricao:"",
                  personalizadodesativado: false, 
                  status:"Rascunho", 
                  tipopublicacao:"" }; 

  tiposPublicacao: any[]=[{name:" "}, {name:"Noticia"},{name:"Ebook"},{name:"Edital"},{name:"Outro"}];

  text1: string = '';
    
  text2: string; 


  
  constructor(private messageService: MessageService,
    private http :RequestPromiseService,
    private router: Router
    ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit()
  {  

  } 


  salvarEvento()
  {       
     //Convert o array em string
     this.conteudo.tipopublicacao = this.tipoPublicacao.name; 

     this.http.post<any>(environment.services.api,'ConteudoSebraeLab', this.conteudo).finally
     ( ()=>{ this.router.navigate(['/conteudo']); })     

  }

}
