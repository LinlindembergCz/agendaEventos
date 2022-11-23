import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Eventolab } from '../../../../@core/models/eventolab.model';
import { RequestPromiseService } from '../../../../@shared/services/request-promise.service';
import { environment } from '../../../../../environments/environment';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SafeResourceUrl } from '@angular/platform-browser';

import { Meses } from '../../../../@core/enums/ListaMeses';
import { FileService } from '../../../..//@shared/services/file.service';
import { ApplicationStateService } from '../../../../@bootstrap/services/application-state.service';

class EventolabModel {
  id: string;
  titulo: string ;
  subtitulo: string;
  descricaoevento: string;
  numeroparticipantes: number;
  tipoevento: string;
  linksparainscricao: string;
  nomecompleto:string;
  email: string;
  instituicao: string;
  contato:string;
  status:string;
  publicaosite:boolean;

  horainicial?: string ;
  horafinal?: string;
  datainicial?: string;
  datafinal?: string;
  data? : string;

  qtdDias?:number;
  
}

@Component({
  selector: 'app-evento-view',
  templateUrl: './evento-view.component.html',
  styleUrls: ['./evento-view.component.scss']
})
export class EventoViewComponent implements OnInit , AfterViewInit
{
  evento: EventolabModel=new EventolabModel();
  picture: SafeResourceUrl;

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
                                          this.http.get<Eventolab>(environment.services.api,
                                          `${environment.routes.eventoSebraeLab.root}/${params['id']}`).then( e=> 
                                            {                                              
                                                this.evento = {...e};
                                                this.fillDataHoraInicialFinal( e );
                                                this.download(this.evento.id);                                          
                                            });
                                        }
                                        else
                                        if (params['data'])
                                        {
                                           this.evento = JSON.parse(params['data'])                         
                                           this.fillDataHoraInicialFinal( this.evento );                                          
                                           this.download(this.evento.id);                                          
                                        }
                                    });
  }

  fillDataHoraInicialFinal( e: any)
  {
      let startEvent: any = e.dias[0];//primeiro evento
      let endEvent: any = e.dias[e.dias.length - 1];//ultimo evnto               
      let startDay : string = startEvent?.data;//data inicial
      let endDay: string = endEvent?.data;//data final  

      this.evento.horainicial= startEvent?.horainicio;
      this.evento.horafinal= endEvent?.horafim;
      this.evento.data = startDay;
      this.evento.datainicial=  startDay?.substring(8,10); //primeiro dia
      this.evento.datafinal= endDay?.substring(8,10); //ultimo dia
      this.evento.qtdDias = e.dias.length;
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
      this.fileService.downloadSecurity('eventos',id , extention).add(()=>{ this.picture = this.fileService.bypassSecurityTrustResourceUrl;})
  }

  getMonthDescription(data:any)
  { 
    return Meses[new Date(data).getMonth()]
  }


  canPublish(): boolean
  {
   
    return  (this.evento.status=='Rascunho') && (this.evento.publicaosite)
  }


}
