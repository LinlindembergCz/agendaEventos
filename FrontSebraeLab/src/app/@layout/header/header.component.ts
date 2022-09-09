import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserContextService } from 'src/app/@bootstrap/services/user-context.service';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';
import {User  } from '../../@core/models/struct/user.model';
import {notification } from '../../@core/models/struct/notification.model';
import { ApplicationStateService } from 'src/app/@bootstrap/services/application-state.service';
import { MenuDataService } from '../@services/menu-data.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FileService } from 'src/app/@modules/user/services/file.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  semfoto ="assets/photos/semfoto.jpg";

  user: User;
  isMobile: boolean = false;

  picture: any = this.semfoto;

  loadImage: boolean = false;

  private fileUrl: string = "";

  constructor(
    private state: ApplicationStateService,
    private router: Router,
    private userContext: UserContextService,
    public menu: MenuDataService,
    private fileService: FileService,
    private _sanitizer: DomSanitizer,
  ) {
    this.user = this.userContext.user$.getValue();
  }

  ngOnInit() {
   this.state.isSmResolution().subscribe(x => {
    this.isMobile = this.state.device().isMobile();
   })
   this.download();


   this.items = [
    {  label: 'Home',


        items: [{
                label: 'New', 
                icon: 'pi pi-fw pi-plus',
                items: [
                    {label: 'Project'},
                    {label: 'Other'},
                ]
            },
            
            {label: 'Quit'}
        ]
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
            {label: 'Delete', icon: 'pi pi-fw pi-trash'},
            {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
        ]
    }
];


  }

  showHome() {
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
    this.router.navigate(['noticias']);
  }

  showEBook()
  {
    this.router.navigate(['ebook']);
  }

  showEditais()
  {
    this.router.navigate(['editais']);
  }

  showOutros()
  {
    this.router.navigate(['outros']);
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

  openAbout() {
    window.open("http://fecomercio-rs.org.br/","_blank");
  }


  download(extention : string = ".jpg") {
   
    if (!this.loadImage && this.userContext.user$.value && this.picture == this.semfoto)
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
    }
  }

  private downloadFile(data: HttpResponse<Blob>) {
      const downloadedFile = new Blob([data.body], { type: data.body.type });
      const urlToBlob = window.URL.createObjectURL(downloadedFile);
      this.picture =  this._sanitizer.bypassSecurityTrustResourceUrl(urlToBlob);
  }
}
