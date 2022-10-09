import { Component, OnInit,  AfterViewInit} from '@angular/core';

import{ Eventolab } from '../../../../@core/models/eventolab.model';
import {ConfirmationService, MessageService} from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestPromiseService } from '../../../../@shared/services/request-promise.service';
import { environment } from '../../../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { Publicacao } from '../../../../@core/models/publicacao.model';
import {TiposPublicacao} from '../../../../@core/enums/tiposPublicacao';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FileService } from '../../../../@modules/user/services/file.service';

@Component({
  selector: 'app-publicacao-edit',
  templateUrl: './publicacao-edit.component.html',
  styleUrls: ['./publicacao-edit.component.scss']
})
export class PublicacaoEditComponent implements OnInit, AfterViewInit {

  tiposPublicacao : typeof TiposPublicacao = TiposPublicacao;
  tipoPublicacao: any;   
  conteudo:  Publicacao = new Publicacao(); 
  picture: any;

  constructor(private messageService: MessageService,
    private http :RequestPromiseService,
    private router: Router,
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private fileService: FileService,
    private confirmationService: ConfirmationService

    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.http.get<Publicacao>(environment.services.api,
        `${environment.routes.conteudoSebraeLab.root}/${params['id']}`).
        then( e=> {
          console.log(e)
          this.conteudo = e;           
          this.download(e.id );
          this.tipoPublicacao= { name: e.tipopublicacao }
       });
      });      
  }

  ngAfterViewInit()
  {  
    window.scrollTo(0, 0);
  }

  save(id: string)
  {       
     //Convert o array em string
     this.conteudo.tipopublicacao = this.tipoPublicacao.name; 
     this.http.put<Publicacao>(environment.services.api,`${environment.routes.conteudoSebraeLab.root}/${id}`, this.conteudo).then
     ( ()=>{ this.router.navigate(['/conteudo']); })       

  }

  ShowPreview(id: string)
  {       
    this.router.navigate([`/visualizarpublicacao`], { queryParams: { id: id} } ); 
  }

  ShowPublished(published: any)
  {       
    this.router.navigate([`/visualizarpublicacao`], { queryParams: { data: JSON.stringify(published)} } ); 
  }
  
  
  download(id:string , extention : string = ".png") 
  {    
    this.fileService.downloadSecurity(id + extention).add(()=>{ 
      this.picture = this.fileService.bypassSecurityTrustResourceUrl;})   
  }

 

}
