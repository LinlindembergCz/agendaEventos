import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Publicacao } from '../../../@core/models/publicacao.model';
import { RequestPromiseService } from '../../../../app/@shared/services/request-promise.service';
import { environment } from '../../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpEventType } from '@angular/common/http';
import { FileService } from '../../../@modules/user/services/file.service';



@Component({
  selector: 'app-publicacao-view',
  templateUrl: './publicacao-view.component.html',
  styleUrls: ['./publicacao-view.component.scss']
})
export class PublicacaoViewComponent implements OnInit , AfterViewInit
{
  publicacao: Publicacao=new Publicacao();
  picture: any ="";
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
                                          this.http.get<Publicacao>(environment.services.api,
                                          `ConteudoSebraeLab/${params['id']}`).then( e=> {  
                                            this.publicacao = e 
                                            this.download(this.publicacao.id );
                                          });
                                       }                                       
                                      });
  }

  ngAfterViewInit()
  {
    window.scrollTo(0, 0);
  }

  navigate(link:string)
  {
    window.location.href = link;
  }

  download(id:string , extention : string = ".png") 
  {
    
    this.fileUrl = id + extention;
    this.fileService.download(this.fileUrl).subscribe( (event) => 
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
}
