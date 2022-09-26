import { Component, OnInit,  AfterViewInit} from '@angular/core';

import{ Eventolab } from '../../../../@core/models/eventolab.model';
import {MessageService} from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestPromiseService } from '../../../../@shared/services/request-promise.service';
import { environment } from '../../../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-publicacao-edit',
  templateUrl: './publicacao-edit.component.html',
  styleUrls: ['./publicacao-edit.component.scss']
})
export class PublicacaoEditComponent implements OnInit, AfterViewInit {


  tipoPublicacao: any;  
  tiposPublicacao: any[]=[{name:" "}, {name:"Noticia"},{name:"Ebook"},{name:"Edital"},{name:"Outro"}];

 
  conteudo: any;
  picture: any ="";
  private fileUrl: string = "";
  public progress: number;

  tiposEvento:any[]=[];
  tipoEvento:any={};

  constructor(private messageService: MessageService,
    private http :RequestPromiseService,
    private router: Router,
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer,

    ) { }

  ngOnInit(): void {

    this.conteudo = {}

    this.route.queryParams.subscribe(params => {


      this.http.get<any>(environment.services.api,
        `ConteudoSebraeLab/${params['id']}`).
        then( e=> {
          console.log(e)
          this.conteudo = e;

             
       });
      });

    
      
  }

  ngAfterViewInit()
  {  

  }



  salvarEvento()
  {       
     //Convert o array em string
     this.conteudo.tipopublicacao = this.tipoPublicacao.name; 

     this.http.put<any>(environment.services.api,'ConteudoSebraeLab', this.conteudo).finally
     ( ()=>{ this.router.navigate(['/conteudo']); })     

  }

 

}
