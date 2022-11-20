import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserContextService } from '../../@bootstrap/services/user-context.service';
import {User  } from '../../@core/models/struct/user.model';
import { ApplicationStateService } from '../../@bootstrap/services/application-state.service';
import { MenuDataService } from '../@services/menu-data.service';
import {  HttpResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {


  semfoto ="assets/photos/semfoto.jpg";

  user: User;
  isMobile: boolean = false;

  picture: any = this.semfoto;

  loadImage: boolean = false;

  private fileUrl: string = "";

  itemsMenu:  MenuItem[]=  [ 
                      {label: '',items: [{label:'Home',command: () => {this.showHome();}}]},
    
                      {label: '________________________',
                              items: [{label:'Notícias',command: () => {this.showNoticias();}},
                                      {label:'EBook',command: () => {this.showEBook();}},
                                      {label:'Editais',command: () => {this.showEditais();}},
                                      {label:'Outros',command: () => {this.showOutros();}}]},

                      {label: '________________________',
                       items: [{label:'Eventos',command: () => {this.showEventos();}}]
                      },

                      { label: '________________________',
                        items: [{label: 'Quem Somos',command: () => {this.showQuemSomos();}}]
                      },

                      { label: '________________________',
                        items: [{label: 'Contato',command: () => {this.showContato();}}]
                      }                     
                   ];

  constructor(
    private state: ApplicationStateService,
    private router: Router,
    private userContext: UserContextService,
    public menu: MenuDataService,
    private _sanitizer: DomSanitizer,

  ) {
    this.user = this.userContext.user$.getValue();
  }

  ngOnInit() {
   this.state.isSmResolution().subscribe(x => {
    this.isMobile = this.state.device().isMobile();
   })
   this.download(); 


  }

  public showHome() {
    this.router.navigate(['']);
  }

  showQuemSomos()
  {
    this.router.navigate(['quemsomos']);
  }

  showEventos()
  {
    this.router.navigate(['eventos']);
  }

  showContato()
  {
    this.router.navigate(['contato']);
  }

  showMeuEvento()
  {
    this.router.navigate(['meuevento']);
  }

  showNoticias()
  {
    this.router.navigate(['publicacoes'], { queryParams: { tipo: 'Noticia'} });
  }

  showEBook()
  {
    this.router.navigate(['publicacoes'], { queryParams: { tipo: 'Ebook'} });
  }

  showEditais()
  {
    this.router.navigate(['publicacoes'], { queryParams: { tipo: 'Edital'} });
  }

  showOutros()
  {
    this.router.navigate(['publicacoes'], { queryParams: { tipo: 'Outro'} });
  }
  
  Login() {
    this.router.navigate(['/user/login']);

  }
  Logout() {
    this.userContext.logout();
    this.router.navigate(['']);
  }

  isLoged()
  {
    this.download();
    return this.userContext.user$.value !=null;
  }

  GetUsername()
  {
    if (this.userContext.user$)
    {
      return this.userContext.user$["_value"].login;
    } else return null;
  }




  download(extention : string = ".jpg") {
   
   /* if (!this.loadImage && this.userContext.user$.value && this.picture == this.semfoto)
    {
      this.loadImage = true;
      this.fileUrl = this.userContext.user$.value.userName+extention;

      this.fileService.download(this.fileUrl).subscribe((event) => {
        if (event.type === HttpEventType.Response)
        {
          this.downloadFile(event);
        }
      }, (erro)=>{ if (extention==".jpg") this.download(".png") }
      );
    }*/
  }

  private downloadFile(data: HttpResponse<Blob>) {
      const downloadedFile = new Blob([data.body], { type: data.body.type });
      const urlToBlob = window.URL.createObjectURL(downloadedFile);
      this.picture =  this._sanitizer.bypassSecurityTrustResourceUrl(urlToBlob);
  }
}
