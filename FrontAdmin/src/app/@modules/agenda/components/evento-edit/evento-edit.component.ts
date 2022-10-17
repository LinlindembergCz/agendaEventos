import { Component, OnInit,  AfterViewInit} from '@angular/core';

import{ Eventolab } from '../../../../@core/models/eventolab.model';
import {MessageService} from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestPromiseService } from '../../../../@shared/services/request-promise.service';
import { environment } from '../../../../../environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { HttpEventType, HttpHeaderResponse, HttpResponse } from '@angular/common/http';
import { FileService } from '../../../../@shared/services/file.service';


@Component({
  selector: 'app-evento-edit',
  templateUrl: './evento-edit.component.html',
  styleUrls: ['./evento-edit.component.scss']
})
export class EventoEditComponent implements OnInit, AfterViewInit {


  indexComponent:number=0;
  evento: Eventolab;

  diasBloqueados: Date[]=[new Date()];
  
  picture: SafeResourceUrl;

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
    this.http.get<any[]>(environment.services.api,environment.routes.eventoSebraeLab.diasBloqueados).
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

    this.http.put<any>(environment.services.api,`${environment.routes.eventoSebraeLab.root}/${id}`, 
        this.evento).then( () =>
        {
            this.router.navigate(['/agenda']);            
            this.messageService.add({severity:'success', 
                                     summary:'Atualização', 
                                     detail:'O evento foi atualizado com sucesso!'}); 
        }).catch( (e) =>{         
              this.messageService.add({severity:'warn', 
              summary:'Atenção!', 
              detail:e.error.text}); 
        });
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
    this.fileService.downloadSecurity('eventos', id + extention).add(()=>{ 
      this.picture = this.fileService.bypassSecurityTrustResourceUrl;})
    
  }



}
