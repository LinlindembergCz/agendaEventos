import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RequestPromiseService } from '../../@shared/services/request-promise.service';
import { environment } from '../../../environments/environment';
import { FileService } from '../../@shared/services/file.service';



@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.scss']
})
export class ConteudoComponent implements OnInit, AfterViewInit{

  conteudos:any[]=[]; 
  rascunhos: any[]=[{id: '',titulo:'',picture:''}];
  publicados: any[]=[{id: '',titulo:'',picture:''}]

  dialogTitle: string;
  seachValue: string;

  picture: any;

  constructor(private router: Router,
    private http: RequestPromiseService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private fileServicePublicados: FileService,
    private fileServiceRascunho: FileService,
    )
  {}

  ngAfterViewInit(): void {
    this.loadConteudos();
  }

  ngOnInit(): void {
    
  }

  loadConteudos(): void {
    this.http.get<any[]>(environment.services.api,
                         environment.routes.conteudoSebraeLab.root).
      then(  x => {  
                    this.fillConteudos(x);
                  });
  }

  fillConteudos( _conteudos: any[])
  {
    this.conteudos = _conteudos;

    this.publicados = _conteudos.filter( f=>f.status =="Publicado");    

     this.publicados.forEach(p=>{               

    this.fileServicePublicados.downloadSecurity('conteudos',p.id , '.png').add(()=>{

      p.picture = this.fileServicePublicados.bypassSecurityTrustResourceUrl;})                 
    });

    this.rascunhos = _conteudos.filter( f=>f.status =="Rascunho");

     this.rascunhos.forEach( r=>{ 
       this.fileServiceRascunho.downloadSecurity('conteudos',r.id , '.png').add(()=>
       { 
          r.picture = this.fileServiceRascunho.bypassSecurityTrustResourceUrl;                   
       })      
    });
  }

  ShowNovoConteudo()
  {
    this.router.navigate(['/novopublicacao'])
  }

  showEditConteudo(id: string)
  {
    this.router.navigate([`/alterarpublicacao`], { queryParams: { id: id} } ) 
  }

  removeConteudo(id: string)
  {
      this.confirmationService.confirm({
      header: "Excluir permanentemente?",
      message: 'Essa ação não poderá ser desfeita, e ele será removido de nosso sistema.<p></p>Tem certeza que deseja <b>excluir permanentemente</b> esse conteúdo?',
      accept: () => {   this.http.delete(environment.services.api,`${environment.routes.conteudoSebraeLab.root}${id}`,null).then
                        ( ()=>{ 
                                this.loadConteudos(); 
                                this.messageService.add({severity:'info', summary:'Confirmação', detail:'Conteúdo excluido com sucesso!'});
                              })}
      });      
  }

  inactiveConteudo(id: string)
  {
      this.confirmationService.confirm({
      header: "Desativar conteúdo?",
      message: 'As publicações desativadas não ficam disponíveis no site. Os conteúdos que forem desativados estarão salvos na área de “Rascunhos”. <p></p> Tem certeza que deseja <b>desativar</b> esse conteúdo?',
      accept: () => {          
                      this.http.patch(environment.services.api,
                                   `${environment.routes.conteudoSebraeLab.desativar}/${id}`,null).then
                      ( ()=>{ 
                              this.loadConteudos(); 
                              this.messageService.add({severity:'info', summary:'Confirmação', detail:'Conteúdo inativado com sucesso!'});
                            })  
                  }
      });    
  }

  activeConteudo(id: string)
  {
    this.http.patch(environment.services.api,
                   `${environment.routes.conteudoSebraeLab.ativar}/${id}`,null).finally
    ( ()=>{ this.loadConteudos(); })   
  }

  applyFilter(tipopublicacao: string )
  {
    this.publicados = this.conteudos.filter( f=>f.status !="Rascunho" &&
                                             f.tipopublicacao==tipopublicacao);
   
    this.rascunhos = this.conteudos.filter( f=>f.status =="Rascunho"  && 
                                            f.tipopublicacao==tipopublicacao);
  } 

  search( value: string )
  {
    if ( value ==='')
       this.loadConteudos()
    else
    this.http.get<any[]>(environment.services.api,
                      `${environment.routes.conteudoSebraeLab.search}${value}`).
      then(x => { 
                 this.fillConteudos( x );                
                });
  }





}
