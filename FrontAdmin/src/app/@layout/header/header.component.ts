import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserContextService } from '../../@bootstrap/services/user-context.service';
import {User  } from '../../@core/models/struct/user.model';
import { ApplicationStateService } from '../../@bootstrap/services/application-state.service';
import { MenuDataService } from '../@services/menu-data.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FileService } from '../../@shared/services/file.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuItem } from 'primeng/api';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';

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
    private http: RequestPromiseService,
  ) {
    this.user = this.userContext.user$.getValue();
  }

  ngOnInit() {
   this.state.isSmResolution().subscribe(x => {
    this.isMobile = this.state.device().isMobile();
   })

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
    this.router.navigate(['index']);
  }

  
  showConteudo() {
    this.router.navigate(['conteudo']);
  }

  showAgenda() {
    this.router.navigate(['agenda']);
  }
    
  logOut() {
    this.http.SetUser(new User(''));
    this.router.navigate(['/user/login']);

  }
  Logout() {
    this.userContext.logout();
    this.router.navigate(['']);
  }

  isLoged()
  {
    return this.userContext.user$.value !=null;
  }

  GetUsername()
  {
    if (this.userContext.user$)
    {
      return this.userContext.user$["_value"].login;
    } else return null;
  }

}
