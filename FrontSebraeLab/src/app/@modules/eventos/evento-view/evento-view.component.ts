import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Eventolab } from '../../../@core/models/eventolab.model';
import { RequestPromiseService } from '../../../@shared/services/request-promise.service';
import { environment } from '../../../../environments/environment';
import { FileService } from '../../../@modules/user/services/file.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpEventType } from '@angular/common/http';
import {Meses} from '../../../@core/enums/ListaMeses';



@Component({
  selector: 'app-evento-view',
  templateUrl: './evento-view.component.html',
  styleUrls: ['./evento-view.component.scss']
})
export class EventoViewComponent implements OnInit , AfterViewInit
{
  evento: Eventolab=new Eventolab();
  picture: any;
  private fileUrl: string = "";

  constructor(
    private http: RequestPromiseService,
    private route: ActivatedRoute,
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
}
