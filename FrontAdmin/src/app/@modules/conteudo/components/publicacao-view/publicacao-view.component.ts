import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicacao } from '../../../../@core/models/publicacao.model';
import { RequestPromiseService } from '../../../../../app/@shared/services/request-promise.service';
import { environment } from '../../../../../environments/environment';
import { ConfirmationService, MessageService } from 'primeng/api';



@Component({
  selector: 'app-publicacao-view',
  templateUrl: './publicacao-view.component.html',
  styleUrls: ['./publicacao-view.component.scss']
})
export class PublicacaoViewComponent implements OnInit , AfterViewInit
{
  publicacao: Publicacao=new Publicacao();

  constructor(
    private http: RequestPromiseService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void 
  {
     this.route.queryParams.subscribe(params => {
                                       if (params['id'])
                                       {
                                          this.http.get<Publicacao>(environment.services.api,
                                          `ConteudoSebraeLab/${params['id']}`).then( e=> {  this.publicacao = e });
                                       }
                                       else
                                       if (params['data'])
                                       {
                                           this.publicacao = JSON.parse(params['data'])
                                       } 
                                      });
  }

  ngAfterViewInit()
  {
    window.scrollTo(0, 0);
  }
  

  publish(id: string ){
        this.confirmationService.confirm({
          header: "Publicar conteúdo?",
          message: 'O conteúdo da publicação ficarão disponíveis no site. <p></p> Tem certeza que deseja <b>publicar</b> esse conteúdo?',
          accept: () => {          
                          this.http.patch<any>(environment.services.api,`ConteudoSebraeLab/Publicar/${id}`).then
                          ( (r)=>{   
                                  this.messageService.add({severity:'info', 
                                  summary:'Confirmação', 
                                  detail:'O conteúdo foi publicado com sucesso!'});
                                  this.router.navigate([`/conteudo`], { queryParams: { id: id} } );
                                })  
                        }
          }); 


  }

  save(id: string) 
  {
    this.confirmationService.confirm({
      header: "Atualizar conteúdo?",
      message: 'Tem certeza que deseja <b>Atualizar</b> esse conteúdo ?',
      accept: () => {          
                      this.http.put<Publicacao>(environment.services.api,`ConteudoSebraeLab/${id}`, this.publicacao).then
                      ( (r)=>{   
                              this.messageService.add({severity:'info', 
                              summary:'Confirmação', 
                              detail:'O conteúdo atualizado com sucesso!'});
                              this.router.navigate([`/conteudo`], { queryParams: { id: id} } );
                            })  
                    }
      });

  }

  navigate(link:string)
  {
    window.location.href = link;
  }
}
