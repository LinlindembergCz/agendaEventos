import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Eventolab } from '../../../../@core/models/eventolab.model';
import { RequestPromiseService } from '../../../../@shared/services/request-promise.service';
import { environment } from '../../../../../environments/environment';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SafeResourceUrl } from '@angular/platform-browser';

import { Meses } from '../../../../@core/enums/ListaMeses';
import { FileService } from 'src/app/@shared/services/file.service';


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
                                            this.download(this.evento.id);                                          
                                          });
                                        }
                                        else
                                        if (params['data'])
                                        {
                                           this.evento = JSON.parse(params['data'])
                                           this.download(this.evento.id);                                          
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
  
  download(id : string , extention : string = ".png") 
  {    
      this.fileService.downloadSecurity('eventos',id + extention).add(()=>{ this.picture = this.fileService.bypassSecurityTrustResourceUrl;})
  }

  getMonthDescription(data:any)
  { 
    return Meses[new Date(data).getMonth()]
  }
}
