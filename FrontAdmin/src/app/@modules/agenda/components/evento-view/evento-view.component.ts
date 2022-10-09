import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Eventolab } from '../../../../@core/models/eventolab.model';
import { RequestPromiseService } from '../../../../@shared/services/request-promise.service';
import { environment } from '../../../../../environments/environment';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FileService } from 'src/app/@modules/user/services/file.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpEventType } from '@angular/common/http';



@Component({
  selector: 'app-evento-view',
  templateUrl: './evento-view.component.html',
  styleUrls: ['./evento-view.component.scss']
})
export class EventoViewComponent implements OnInit , AfterViewInit
{
  evento: Eventolab=new Eventolab();
  picture: SafeResourceUrl;

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
                                          this.http.get<Eventolab>(environment.services.api,
                                          `${environment.routes.eventoSebraeLab.root}/${params['id']}`).then( e=> {  
                                            this.evento = e 

                                            this.download(e.id);
                                          
                                          });
                                        }
                                        else
                                        if (params['data'])
                                        {
                                           this.evento = JSON.parse(params['data'])
                                        }
                                    });
  }

  ngAfterViewInit()
  {
    window.scrollTo(0, 0);
  }
  

  publish(id: string ){
        this.confirmationService.confirm({
          header: "Publicar evento?",
          message: 'O evento ficará disponível no site. <p></p> Tem certeza que deseja <b>publicar</b> esse evento?',
          accept: () => {          
                          this.http.patch<any>(environment.services.api,`${environment.routes.eventoSebraeLab.publicar}/${id}`).then
                          ( (r)=>{   
                                  this.messageService.add({severity:'info', 
                                  summary:'Confirmação', 
                                  detail:'O evento foi publicado com sucesso!'});
                                  this.router.navigate([`/agenda`], { queryParams: { id: id} } );
                                })  
                        }
          }); 


  }

  save(id: string) 
  {
    this.confirmationService.confirm({
      header: "Atualizar evento?",
      message: 'Tem certeza que deseja <b>Atualizar</b> esse evento ?',
      accept: () => {          
                      this.http.put<Eventolab>(environment.services.api,`${environment.routes.conteudoSebraeLab.root}/${id}`, this.evento).then
                      ( (r)=>{   
                              this.messageService.add({severity:'info', 
                              summary:'Confirmação', 
                              detail:'O evento atualizado com sucesso!'});
                              this.router.navigate([`/agenda`], { queryParams: { id: id} } );
                            })  
                    }
      });

  }

  
  download(id : string , extention : string = ".png") 
  {    
      this.fileService.downloadSecurity(id + extention).add(()=>{ this.picture = this.fileService.bypassSecurityTrustResourceUrl;})
  }
}
