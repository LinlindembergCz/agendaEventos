import { Component, OnInit,  AfterViewInit} from '@angular/core';

import{ Eventolab } from '../../../../@core/models/eventolab.model';
import {MessageService} from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestPromiseService } from '../../../../@shared/services/request-promise.service';
import { environment } from '../../../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpEventType, HttpHeaderResponse, HttpResponse } from '@angular/common/http';
import { FileService } from 'src/app/@modules/user/services/file.service';


interface TipoEvento {
  code: string,
  name: string}

@Component({
  selector: 'app-evento-edit',
  templateUrl: './evento-edit.component.html',
  styleUrls: ['./evento-edit.component.scss']
})
export class EventoEditComponent implements OnInit, AfterViewInit {


  indexComponent:number=0;
  evento: Eventolab;
  picture: any ="";
  private fileUrl: string = "";
  public progress: number;

  tiposEnvento:TipoEvento[]=[];

  constructor(private messageService: MessageService,
    private http :RequestPromiseService,
    private router: Router,
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private fileService: FileService,
    ) { }

  ngOnInit(): void {

    this.evento = new Eventolab();

    this.route.queryParams.subscribe(params => {


      this.http.get<Eventolab>(environment.services.api,
        `EventoSebraeLab/${params['id']}`).
        then( e=> {
          console.log(e);
          this.evento = e;
        });
      });

    
    this.tiposEnvento =   [{name: 'Palestra', code: '1'},
                           {name: 'Workshop', code: '2'},
                           {name: 'Curso', code: '3'},
                           {name: 'Evento Fechado', code: '4'},
                           {name: 'Outros', code: '5'}] 
  }

  ngAfterViewInit()
  {  

  }

  adicionarDia()
  {
    this.evento.dias.push({
      data: null,
      horainicio: '00:00',
      horafim: '00:00',
      option:''});

    this.indexComponent++;   
  }

  removerDia()
  {
    this.evento.dias.pop();   
  }

  salvar(id: string)
  {       
     this.evento.dias.forEach( d=> d.option = JSON.stringify(d.option) );

     let tipos = this.evento.tipoevento;
     this.evento.tipoevento = JSON.stringify(tipos);

     this.http.put<Eventolab>(environment.services.api,`EventoSebraeLab?id${id}`, this.evento).finally
     ( 
      ()=>{ this.router.navigate(['/agenda']); })

  }

  download(extention : string = ".jpg") {
    this.fileUrl = this.evento.titulo+extention;
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
