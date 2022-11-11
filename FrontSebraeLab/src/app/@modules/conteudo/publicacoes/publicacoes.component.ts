import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApplicationStateService } from '../../../@bootstrap/services/application-state.service';
import { RequestPromiseService } from '../../../@shared/services/request-promise.service';
import { environment } from '../../../../environments/environment';
import { FileService } from '../../user/services/file.service';


class Image{
  name: string ;
  summary: string ;
  image: string;
}

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.scss']
})
export class PublicacoesComponent implements OnInit {

  imgs: Image[] = [];
  seachValue: string;
  conteudos: any[]=[{id: '',titulo:'',image:''}];
  publicacoes: any[]=[{id: '',titulo:'',image:''}];
  tipoConteudo: string;

  dialogNewsletter:boolean = false;

  isMobile:boolean;

  constructor(
    private http: RequestPromiseService,
    private _sanitizer: DomSanitizer,
    private fileService: FileService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private applicationStateService: ApplicationStateService
  ) { }
  
  ngOnInit(): void { 
    const tipos: any[] = ['Noticia','Ebook','Edital','Outro'];
    this.route.queryParams.subscribe(params => {
          this.tipoConteudo=params['tipo'];                     
          this.loadConteudos(String(tipos.indexOf(this.tipoConteudo)));           
      }); 
      
      this.isMobile = this.applicationStateService.device().isMobile()
  }

  loadConteudos(tipo: string) 
  { 
    this.http.get<any[]>(environment.services.api,`${environment.routes.conteudoSebraeLab.pesquisarPorTipo}/${tipo}`).
    then((x: any) => 
        { 
            this.conteudos = x;    
            this.publicacoes = x;  
            this.downloadImage( this.conteudos )            
        });                
  }

  downloadImage(conteudos: any )
  {
    this.conteudos.forEach( c=>
      { 
          this.fileService.download('conteudos',c.id + '.png').
          subscribe( 
                      (event) => 
                      {
                          if (event.type === HttpEventType.Response)
                          { 
                              const downloadedFile = new Blob([event.body], { type: event.body.type });
                              const urlToBlob = window.URL.createObjectURL(downloadedFile);    
                              c.image = this._sanitizer.bypassSecurityTrustResourceUrl(urlToBlob);
                          }
                      }
                    );                   
      });
  }

  
  search( value: string )
  {
    if ( value ==='')
       this.loadConteudos(this.tipoConteudo)
    else
       this.http.get<any[]>(environment.services.api,`${environment.routes.conteudoSebraeLab.search}${value}`).
       then(x => {                    
                  this.conteudos = x; 
                  this.publicacoes = x;                   
                  this.downloadImage( this.conteudos )
                 });
  }

  applyFilter(tipopublicacao: string )
  {
      this.publicacoes = this.conteudos.filter( f=>f.tipopublicacao==tipopublicacao);
  } 

  showDialogNewsLetter()
  {
    this.dialogNewsletter = true;
  }

  hideDialogNewsletter()
  {
    this.dialogNewsletter = false;

  }

  registerNewsletter()
  {

  }

  saveNewsletter(inscricao: any){

    this.http.post(environment.services.api,environment.routes.newsletter.root,
      inscricao ).then( () =>
    {       
      this.dialogNewsletter = false;
        this.messageService.add(
          {severity:'success', 
           summary:'Cadastro', 
           detail:'Inscrição realizada com sucesso!'}); 
    }).catch( (e) =>{         
        this.messageService.add({severity:'warn', 
        summary:'Erro', 
        detail:e.error.text}); 
    });

  }

}
