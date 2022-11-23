import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicacao } from '../../../../@core/models/publicacao.model';
import { RequestPromiseService } from '../../../../@shared/services/request-promise.service';
import { environment } from '../../../../../environments/environment';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FileService } from '../../../../@shared/services/file.service';
import { ApplicationStateService } from '../../../../@bootstrap/services/application-state.service';

@Component({
  selector: 'app-publicacao-view',
  templateUrl: './publicacao-view.component.html',
  styleUrls: ['./publicacao-view.component.scss']
})
export class PublicacaoViewComponent implements OnInit , AfterViewInit
{
  publicacao: Publicacao=new Publicacao();
  picture: any;

  isDesktop: boolean = false;
  isMobile: boolean = false;
  isTablet: boolean = false;

  constructor(
    private http: RequestPromiseService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private fileService: FileService,
    private applicationStateService: ApplicationStateService,
  ) { }

  ngOnInit(): void 
  {


    this.isDesktop = this.applicationStateService.device().isDesktop();
    this.isMobile =  this.applicationStateService.device().isMobile();
    this.isTablet = this.applicationStateService.device().isTablet();


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
    this.fileService.downloadSecurity('conteudos',id , extention).add(()=>{ 
      this.picture = this.fileService.bypassSecurityTrustResourceUrl;})      
  }

  redirect(url:string)
  {
    this.router.navigateByUrl(url);

  }
}
