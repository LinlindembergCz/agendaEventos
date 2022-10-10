import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';
import { environment } from 'src/environments/environment';

import { Publicacao } from '../../../@core/models/publicacao.model';
import { FileService } from '../../user/services/file.service';


class Image{
  name: string ;
  summary: string ;
  image: string;
}

@Component({
  selector: 'app-conteudo-show',
  templateUrl: './conteudo-show.component.html',
  styleUrls: ['./conteudo-show.component.scss']
})
export class ConteudoShowComponent implements OnInit {

  imgs: Image[] = [];

  publicacoes: any[]=[{id: '',titulo:'',image:''}];

  constructor(
    private http: RequestPromiseService,
    private route: Router,
    private _sanitizer: DomSanitizer,
    private fileService: FileService,
  ) { }
  
  ngOnInit(): void { 
    this.loadConteudos();  
  }


  loadConteudos() 
  { 
    this.http.get<any[]>(environment.services.api,environment.routes.conteudoSebraeLab.root).
    then((x: any) => 
    { 
        this.publicacoes= x;        
        this.publicacoes.forEach( c=>{ 
          this.fileService.download(c.id + '.png').subscribe( (event) => 
            {
              console.log(event)
              if (event.type === HttpEventType.Response)
              { 
                const downloadedFile = new Blob([event.body], { type: event.body.type });
                const urlToBlob = window.URL.createObjectURL(downloadedFile);    
                c.image = this._sanitizer.bypassSecurityTrustResourceUrl(urlToBlob);
              }
            }
          );                   
      });
    });                
  }


}
