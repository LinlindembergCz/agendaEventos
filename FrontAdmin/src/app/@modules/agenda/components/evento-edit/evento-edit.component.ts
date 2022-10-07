import { Component, OnInit,  AfterViewInit} from '@angular/core';

import{ Eventolab } from '../../../../@core/models/eventolab.model';
import {MessageService} from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestPromiseService } from '../../../../@shared/services/request-promise.service';
import { environment } from '../../../../../environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { HttpEventType, HttpHeaderResponse, HttpResponse } from '@angular/common/http';
import { FileService } from '../../../../@modules/user/services/file.service';


@Component({
  selector: 'app-evento-edit',
  templateUrl: './evento-edit.component.html',
  styleUrls: ['./evento-edit.component.scss']
})
export class EventoEditComponent implements OnInit, AfterViewInit {


  indexComponent:number=0;
  evento: Eventolab;

  diasBloqueados: Date[]=[new Date()];
  
  picture: any;
  private fileUrl: string = "";


  tiposEvento:any[]=[];
  tipoEvento:any={};

  constructor(private messageService: MessageService,
    private http :RequestPromiseService,
    private router: Router,
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private fileService: FileService,
    ) { }

  ngOnInit(): void {

    this.evento = new Eventolab();

    this.loadDiasBloqueados();

    this.route.queryParams.subscribe(params => {

      this.http.get<Eventolab>(environment.services.api,
        `EventoSebraeLab/${params['id']}`).
        then( e=> {          
          e.dias.forEach( d=>{ 
            //Ajuste para o componete Calendar reconhecer o tipo
            d.data = new Date(String(d.data));
            //Convert o string em Array
            d.option = JSON.parse(d.option);
          })

          this.evento = e;

          this.download(this.evento.id); 

          this.http.get<any>("../../../assets/data", "tipoEventos.json").
           then(x => { this.tiposEvento = x;        
            this.tipoEvento = this.tiposEvento.find(x=>x.name== e.tipoevento) 
          });  
          
          
       });
      });

    
      
  }

  ngAfterViewInit()
  {  

  }

  loadDiasBloqueados()
  {
    this.http.get<any[]>(environment.services.api,"EventoSebraeLab/DiasBloqueados").
    then(x=>{
      this.diasBloqueados = []
      x.forEach(d=> {this.diasBloqueados.push(new Date(d.data))})
      });
  }

  addDia()
  {
    this.evento.dias.push({ data: null, horainicio: '00:00', horafim: '00:00', option:''}); 
  }

  removeDia()
  {
    this.evento.dias.pop();   
  }

  save(id: string)
  {       
    //Convert o array em string
    this.evento.dias.forEach( d=> d.option = JSON.stringify(d.option ));
    this.evento.tipoevento = this.tipoEvento.name;    

    this.http.put<Eventolab>(environment.services.api,`EventoSebraeLab/${id}`, 
    this.evento).finally ( ()=>{ this.router.navigate(['/agenda']); }) 

  }

  showPreview(id: string)
  {       
    this.router.navigate([`/visualizarevento`], { queryParams: { id: id} } ); 
  }

  showPublished(published: any)
  {       
    this.router.navigate([`/visualizarevento`], { queryParams: { data: JSON.stringify(published)} } ); 
  }

  download(id: string , extention : string = ".png") {
    
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
