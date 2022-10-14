import { Component, OnInit,  AfterViewInit} from '@angular/core';

import{ Eventolab } from '../../../../@core/models/eventolab.model';
import {MessageService} from 'primeng/api';

import { Router } from '@angular/router';
import { RequestPromiseService } from '../../../../@shared/services/request-promise.service';
import { environment } from '../../../../../environments/environment';
import {Publicacao} from '../../../../@core/models/publicacao.model';

import {TiposPublicacao} from '../../../../@core/enums/tiposPublicacao';
         TiposPublicacao
@Component({
  selector: 'app-publicacao-create',
  templateUrl: './publicacao-create.component.html',
  styleUrls: ['./publicacao-create.component.scss']
})
export class PublicacaoCreateComponent implements OnInit, AfterViewInit {  

  conteudo: Publicacao = new Publicacao(); 

  tiposPublicacao : typeof TiposPublicacao = TiposPublicacao;
  tipoPublicacao: any={ name: "Selecionar" }  

  constructor(private messageService: MessageService,
    private http :RequestPromiseService,
    private router: Router
    ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit()
  {  
    window.scrollTo(0, 0);
  } 

  save()
  {       
     //Convert o array em string
     this.conteudo.tipopublicacao = this.tipoPublicacao.name; 

     this.http.post<any>(environment.services.api,
                         environment.routes.conteudoSebraeLab.root
      , this.conteudo).then
     ( ()=>{ 
      this.router.navigate(['/conteudo']); 

      this.messageService.add({severity:'success', 
      summary:'Cadastro', 
      detail:'O conteúdo foi cadstrado com sucesso!'});
    
    
    })     

  }



}
