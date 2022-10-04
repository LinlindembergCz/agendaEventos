import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.scss']
})
export class ConteudoComponent implements OnInit {


  conteudos:any[]=[]; 
  rascunhos: any[]=[];
  publicados: any[]=[]

  dialogTitle: string;
  seachValue: string;

  constructor(private router: Router,
    private http: RequestPromiseService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
    )
  {}

  ngOnInit(): void {
    this.loadConteudos();
  }

  loadConteudos(): void {
    this.http.get<any[]>(environment.services.api,"ConteudoSebraeLab").
      then(x => {  
                  console.log(x)
                  this.conteudos = x;
                  this.publicados = x.filter( f=>f.status !="Rascunho");
                  this.rascunhos =x.filter( f=>f.status =="Rascunho");                 
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
      accept: () => {   this.http.delete(environment.services.api,`ConteudoSebraeLab/${id}`,null).then
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
                      this.http.patch(environment.services.api,`ConteudoSebraeLab/Desativar/${id}`,null).then
                      ( ()=>{ 
                              this.loadConteudos(); 
                              this.messageService.add({severity:'info', summary:'Confirmação', detail:'Conteúdo inativado com sucesso!'});
                            })  
                  }
      });    
  }

  activeConteudo(id: string)
  {
    this.http.patch(environment.services.api,`ConteudoSebraeLab/Ativar/${id}`,null).finally
    ( ()=>{ this.loadConteudos(); })   
  }

  applyFilter(tipopublicacao: string )
  {
    this.publicados = this.conteudos.filter( f=>f.status !="Rascunho" && f.tipopublicacao==tipopublicacao);
    this.rascunhos = this.conteudos.filter( f=>f.status =="Rascunho"  && f.tipopublicacao==tipopublicacao);
  } 

  search( value: string )
  {
    if ( value ==='')
       this.loadConteudos()
    else
    this.http.get<any[]>(environment.services.api,`ConteudoSebraeLab/Pesquisar?search=${value}`).
      then(x => {  
                  console.log(x)
                  this.conteudos = x;
                  this.publicados = x.filter( f=>f.status !="Rascunho");
                  this.rascunhos =x.filter( f=>f.status =="Rascunho");                 
                });
  }



}
