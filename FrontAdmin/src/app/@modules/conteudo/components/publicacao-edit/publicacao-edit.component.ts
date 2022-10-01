import { Component, OnInit,  AfterViewInit} from '@angular/core';

import{ Eventolab } from '../../../../@core/models/eventolab.model';
import {ConfirmationService, MessageService} from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestPromiseService } from '../../../../@shared/services/request-promise.service';
import { environment } from '../../../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { Publicacao } from 'src/app/@core/models/publicacao.model';
import {TiposPublicacao} from '../../../../@core/enums/tiposPublicacao';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FileService } from 'src/app/@modules/user/services/file.service';

@Component({
  selector: 'app-publicacao-edit',
  templateUrl: './publicacao-edit.component.html',
  styleUrls: ['./publicacao-edit.component.scss']
})
export class PublicacaoEditComponent implements OnInit, AfterViewInit {

  tiposPublicacao : typeof TiposPublicacao = TiposPublicacao;
  tipoPublicacao: any;  
 
  conteudo:  Publicacao = new Publicacao(); 
  text: string='<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';

  picture: any ="";
  private fileUrl: string = "";
  public progress: number;

  constructor(private messageService: MessageService,
    private http :RequestPromiseService,
    private router: Router,
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private fileService: FileService,
    private confirmationService: ConfirmationService

    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.http.get<Publicacao>(environment.services.api,
        `ConteudoSebraeLab/${params['id']}`).
        then( e=> {
          console.log(e)
          this.conteudo = e;            
          this.tipoPublicacao= { name: e.tipopublicacao }
       });
      });      
  }

  ngAfterViewInit()
  {  

  }

  save(id: string)
  {       
    console.log( this.tipoPublicacao )
     //Convert o array em string
     this.conteudo.tipopublicacao = this.tipoPublicacao.name; 

     this.http.put<Publicacao>(environment.services.api,`ConteudoSebraeLab/${id}`, this.conteudo).then
     ( ()=>{ this.router.navigate(['/conteudo']); }) 
        

  }



  publish(id: string)
  {       
    this.router.navigate([`/visualizarpublicacao`], { queryParams: { id: id} } );
 

    /*
    console.log( id )
    this.confirmationService.confirm({
      header: "Publicar conteúdo?",
      message: 'O conteúdo da publicação ficarão disponíveis no site. <p></p> Tem certeza que deseja <b>publicar</b> esse conteúdo?',
      accept: () => {          
                       this.http.patch<any>(environment.services.api,`ConteudoSebraeLab/Publicar/${id}`).then
                      ( (r)=>{   
                              this.messageService.add({severity:'info', summary:'Confirmação', detail:'O conteúdo foi publicado com sucesso!'});
                            })  
                  }
      }); */
  }
  
  
  download(extention : string = ".jpg") {
    this.fileUrl = this.conteudo.titulo+extention;
    this.fileService.download(this.fileUrl).subscribe( (event) => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round((100 * event.loaded) / event.total);
      else if (event.type === HttpEventType.Response)
      {
        this.downloadFile(event);
      }
    }, (erro)=>{ if (extention==".jpg") this.download(".png") }
    );
  }

  private downloadFile(data: HttpResponse<Blob>) {
      const downloadedFile = new Blob([data.body], { type: data.body.type });
      const urlToBlob = window.URL.createObjectURL(downloadedFile);
      this.picture =  this._sanitizer.bypassSecurityTrustResourceUrl(urlToBlob);
  }

 

}
