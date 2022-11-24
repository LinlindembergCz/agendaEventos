import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Eventolab } from '../../../@core/models/eventolab.model';
import { RequestPromiseService } from '../../../@shared/services/request-promise.service';
import { environment } from '../../../../environments/environment';
import { FileService } from '../../../@modules/user/services/file.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpEventType } from '@angular/common/http';
import {Meses} from '../../../@core/enums/ListaMeses';
import { ApplicationStateService } from '../../../@bootstrap/services/application-state.service';

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
  picture: any;

  isDesktop: boolean = false;
  isMobile: boolean = false;
  isTablet: boolean = false;

  private fileUrl: string = "";

  constructor(
    private http: RequestPromiseService,
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
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
                                          `${environment.routes.eventoSebraeLab.root}/${params['id']}`).then( e=> {  
                                            this.evento = {...e};

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

                                            this.download(e.id);
                                          
                                          });
                                        }
                                    });
  }

  ngAfterViewInit()
  {
    window.scrollTo(0, 0);
  }

  
  download(id : string , extention : string = ".png") {    
    this.fileUrl = id + extention;
    this.fileService.download('eventos',this.fileUrl).subscribe( (event) => 
      {
        if (event.type === HttpEventType.Response)
        { 
          const downloadedFile = new Blob([event.body], { type: event.body.type });
          const urlToBlob = window.URL.createObjectURL(downloadedFile);    
          this.picture = this._sanitizer.bypassSecurityTrustResourceUrl(urlToBlob);
        }
      }, (erro)=>{ if (extention==".png") this.download(id,".jpg") }
    );    
  }

  getMonthDescription(data:any)
  { 
    return Meses[new Date(data).getMonth()]
  }



  shareFacebook() {
    console.log('shareFacebook')
    let uri = window.location.href.toString();
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(uri)+"&src=sdkpreparse","_blank")
  }

  shareTwitter(titulo:string )  {
    let uri = window.location.href;
    window.open("http://twitter.com/share?text="+titulo+"&url=" + encodeURIComponent(uri), "_blank")
  }

  shareWhats(titulo:string) {
    let uri = window.location.href;
    window.open("https://wa.me/?text="+encodeURIComponent(uri), "_blank")
  }

  shareTelegram( titulo:string )
  {
    let uri = window.location.href;
    window.open(`https://telegram.me/share/url?url=${encodeURIComponent(uri)}&text=${titulo}` , "_blank")
  }

  shareLinkIn()
  {
    let uri = window.location.href;
    window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(uri), "_blank")
  }  

  shareMail()  {
    let uri = window.location.href;
    window.open("mailto:?subject=Representa+ - Veja este Projeto&body=Veja este projeto no Representa+: " + encodeURIComponent(uri), "_blank")
  }

  canPublish(): boolean
  {
   
    return  (this.evento.status=='Rascunho') && (this.evento.publicaosite)
  }
}
