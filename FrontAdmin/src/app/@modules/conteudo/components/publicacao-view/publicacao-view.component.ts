import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicacao } from '../../../../@core/models/publicacao.model';
import { RequestPromiseService } from '../../../../../app/@shared/services/request-promise.service';
import { environment } from '../../../../../environments/environment';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpEventType } from '@angular/common/http';
import { FileService } from 'src/app/@modules/user/services/file.service';



@Component({
  selector: 'app-publicacao-view',
  templateUrl: './publicacao-view.component.html',
  styleUrls: ['./publicacao-view.component.scss']
})
export class PublicacaoViewComponent implements OnInit , AfterViewInit
{
  publicacao: Publicacao=new Publicacao();
  picture: any;

  constructor(
    private http: RequestPromiseService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private _sanitizer: DomSanitizer,
    private fileService: FileService,
  ) { }

  ngOnInit(): void 
  {
     this.route.queryParams.subscribe(params => {
                                       if (params['id'])
                                       {
                                          this.http.get<Publicacao>(environment.services.api,
                                                                 `${environment.routes.conteudoSebraeLab.root}/${params['id']}`).then( e=> {  
                                            this.publicacao = e 
                                            this.download(this.publicacao.id );
                                          });
                                       }
                                       else
                                       if (params['data'])
                                       {
                                           this.publicacao = JSON.parse(params['data'])
                                           this.download(this.publicacao.id );
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
                          this.http.patch<any>(environment.services.api,
                            `${environment.routes.conteudoSebraeLab.publicar}/${id}`).then
                          ( (r)=>{   
                                  this.messageService.add({severity:'info', 
                                  summary:'Confirmação', 
                                  detail:'O conteúdo foi publicado com sucesso!'});
                                  this.router.navigate([`/conteudo`], { queryParams: { id: id} } );
                                })  
                        }
          }); 


  }

  navigate(link:string)
  {
    window.location.href = link;
  }

  download(id:string , extention : string = ".png") 
  {    
    this.fileService.downloadSecurity('conteudos',id + extention).add(()=>{ 
      this.picture = this.fileService.bypassSecurityTrustResourceUrl;})      
  }
}
